import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import moment from 'moment';
import { Users, Responsibles } from '../../models'
import dispatchEmail from '../../helpers/send-email'

const response = (user) => {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user,
  };

  let token = jwt.encode(payload, process.env.JWT_SECRET);
  delete user.password;

  return {
    token,
    user,
  };
};

class AuthApiController {
  static async createAccount(req, res) {
    if (!req.body.cpf) {
      return res.status(422).json({
        message: 'O campo CPF é obrigatorio.',
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    let user = await Users
      .query()
      .where({ cpf: req.body.cpf })
      .first();

    if (user) {
      return res.status(400).json({
        message: 'CPF já cadastrado.',
      });
    }

    user = await Users.query()
      .insert({
        cpf: req.body.cpf,
        type_id: req.body.type,
        password,
      });

    let responsible = await Responsibles.query()
      .select('*')
      .first()
      .where('cpf', req.body.cpf)

    if (!responsible) {
      await Responsibles.query()
        .insert({
          cpf: req.body.cpf,
          name: req.body.name,
          sex: req.body.sex,
          email: req.body.email,
          phone: req.body.phone,
          occupation: req.body.occupation,
          marital_status: req.body.marital_status,
          date_birth: moment(req.body.date_birth, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        });
    }

    return res.status(200).responseComposer(user);
  }

  static async login(req, res) {
    let user = await Users.query()
      .select(
        'users.id',
        'users.cpf',
        'users.type_id',
        'users.password',
        'responsibles.image',
        'responsibles.name',
      )
      .join('responsibles', 'responsibles.cpf', 'users.cpf')
      .where('users.cpf', req.body.cpf)
      .first()
    if (!user) {
      return res.status(401).json({
        message: 'Usuário não consta em nossa base',
      });
    }
    const matches = await bcrypt.compare(req.body.password, user.password);

    if (matches) {
      return res.status(200).json(response(user));
    }

    return res.status(401).json({
      message: 'Senha inválida',
    });
  }

  static async sendEmail(req, res) {
    let info = await Responsibles.query()
      .select('*')
      .first()
      .where('cpf', req.query.cpf)

    if (!info) {
      return res.status(404).json({
        message: 'Nenhum usuário cadastrado com este CPF.',
      });
    }
    const cod_retrieve = Math.random().toString().substring(12);
    await dispatchEmail(info.email, cod_retrieve)

    await Users.query()
      .patch({ password_retrieve_cod: Number(cod_retrieve) })
      .where('cpf', '=', req.query.cpf)

    return res.status(200).responseComposer({ message: "Codigo enviado com sucesso!" });
  }

  static async validateCode(req, res) {
    let info = await Users.query()
      .select('*')
      .first()
      .where('password_retrieve_cod', req.query.code)

    if (!info) {
      return res.status(404).json({
        message: 'Nenhum usuário cadastrado com este codigo de recuperação.',
      });
    }

    if (req.query.code != info.password_retrieve_cod) {
      return res.status(403).json({
        message: 'Codigo de recuperação invalido.',
      });
    }

    await Users.query()
      .patch({ password_retrieve_cod: null })
      .where('id', info.id)

    return res.status(200).responseComposer({ message: "Codigo validado com sucesso!", info });
  }

  static async passwordRetrieve(req, res) {
    let info = await Users.query()
      .select('*')
      .first()
      .where('id', req.body.user_id)

    if (!info) {
      return res.status(404).json({
        message: 'Nenhum usuário encontrado.',
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    await Users.query()
      .patch({ password })
      .where('id', req.body.user_id)

    return res.status(200).responseComposer({ message: "Senha alterada com sucesso!" });
  }


}

export default AuthApiController;

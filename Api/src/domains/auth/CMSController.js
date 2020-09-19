import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import moment from 'moment';
import Users from '../../models/Users';

const response = (user, politicalTerm) => {
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
    politicalTerm,
  };
};

class AuthCMSController {
  static async createAccount(req, res) {
    if (!req.body.email) {
      return res.status(422).json({
        message: 'O campo e-mail é obrigatorio.',
      });
    }

    const senha = await bcrypt.hash(req.body.senha, 10);

    let user = await Users
      .query()
      .where({ email: req.body.email })
      .first();

    if (user) {
      return res.status(422).json({
        message: 'E-mail já cadastrado.',
      });
    }

    user = await Users.query()
      .insert({
        nome: req.body.nome,
        email: req.body.email,
        senha,
        cnpj: req.body.cnpj,
      });

    return res.status(200).responseComposer({ user });
  }

  static login(req, res) {
    return Users.query()
      .where({ email: req.body.email })
      .first()
      .eager('[roles.permissions,permissions]')
      .then(async (user) => {
        if (!user) {
          return res.status(401).json({
            message: 'Usuário não consta em nossa base',
          });
        }
        const matches = await bcrypt.compare(req.body.password, user.senha);

        if (matches) {
          return res.status(200).json(response(user));
        }

        return res.status(401).json({
          message: 'Senha inválida',
        });
      });
  }
}

export default AuthCMSController;

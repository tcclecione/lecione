exports.seed = async function (knex, Promise) {
  return knex('responsibles').insert([
    {
      id: 1,
      name: 'Antonio',
      cpf: '80148368042',
      sex: 'M',
      email: 'antonio@gmail.com',
      phone: '16993233407',
      occupation: 'Engenheiro',
      marital_status: 'casado',
      date_birth: '1987-04-05'
    }
  ]);
};

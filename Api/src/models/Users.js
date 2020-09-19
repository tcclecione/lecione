const bcrypt = require('bcrypt');
const { pick } = require('ramda');
const Model = require('./Model');
// const Role = require('./Role');
// const Permissions = require('./Permissions');

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  // static relationMappings = {
  // roles: {
  //   relation: Model.ManyToManyRelation,
  //   modelClass: Role,
  //   join: {
  //     from: 'users.id',
  //     through: {
  //       from: 'user_role.user_id',
  //       to: 'user_role.role_id'
  //     },
  //     to: 'roles.id'
  //   }
  // },
  // permissions: {
  //   relation: Model.ManyToManyRelation,
  //   modelClass: Permissions,
  //   join: {
  //     from: 'users.id',
  //     through: {
  //       from: 'permission_user.user_id',
  //       to: 'permission_user.permission_id'
  //     },
  //     to: 'permissions.id'
  //   }
  // }
  // }

  // static clear = pick(['nome', 'email', 'senha']);

  // async $beforeInsert() {
  //   if (this.senha) {
  //     this.senha = await bcrypt.hash(this.senha, 10);
  //   }
  // }
}

module.exports = Users;

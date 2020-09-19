import { Permission } from '../models';

async function getPermissions(user) {
  const permissions = await Permission.query()
    .select('display_name')
    .distinct('display_name')
    .join('permission_role', 'permission_role.permission_id', 'permissions.id')
    .join('role_user', 'role_user.role_id', 'permission_role.role_id')
    .where('role_user.user_id', user.id);

  return permissions.map(permission => permission.display_name);
}

export default getPermissions;

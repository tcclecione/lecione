export default function permission(fn) {
  return (req, res, next) => {
    let control_permission = [];
    let control_roles = [];
    let control;
    if (req.user !== null) {
      if (req.user.permissions.length) {
        control_permission = req.user.permissions.map(item =>
          (item.name),
        );
      }

      if (req.user.roles.length) {
        control_roles = req.user.roles[0].permissions.map(item =>
          (item.name),
        );
      }
      if (control_roles || control_permission) {
        control = control_permission.concat(control_roles);
        if (control.includes(fn)) {
          return next();
        } else {
          return res.status(401).json({
            message: 'Metodo não autorizado',
          });
        }
      } else {
        return res.status(401).json({
          message: 'Metodo não autorizado',
        });
      }
    }
  };
}

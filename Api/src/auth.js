import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import Users from './models/Users';

const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const strategyHandler = model => (payload, done) => {
  const { id } = payload.sub;

  Users.query()
    .where('id', id)
    .first()
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      return done(err);
    });
};

const userStrategy = new Strategy(params, strategyHandler(Users));
const adminStrategy = new Strategy(params, strategyHandler(Users));

passport.use('api-jwt', adminStrategy);
passport.use('cms-jwt', userStrategy);

export const lockForApi = (options = {}) => passport.authenticate('api-jwt', {
  session: false,
  failWithError: true,
  ...options,
});

export const lockForCms = (options = {}) => passport.authenticate('cms-jwt', {
  session: false,
  failWithError: true,
  ...options,
});

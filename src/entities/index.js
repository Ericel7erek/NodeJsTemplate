import userRoutes from './user/adapters/http';
import bookRoutes from './book/adapters/http';
// import userSockets from './user/adapters/socket';
// import authRoutes from './auth/adapters/http';

export const Routes = (app) => {
  userRoutes(app, '/user');
  bookRoutes(app, '/book');
  //  authRoutes(app);

}

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
}
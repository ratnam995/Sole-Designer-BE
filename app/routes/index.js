const userRoutes = require('./user-routes');
const loginRoutes = require('./login-routes');
const saveCanvasRoutes = require('./saveCanvas-routes');
const fetchCanvasRoutes = require('./fetchCanvas-routes');

module.exports = function(app, db) {
    loginRoutes(app, db);
    userRoutes(app, db);
    saveCanvasRoutes(app, db);
    fetchCanvasRoutes(app, db);
    // sessionRoutes(app, db);
    // Other route groups could go here, in the future
  };
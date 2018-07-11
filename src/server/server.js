

const app = require('../app');

// const isProd = process.env.NODE_ENV === "production";
// if (!isProd) {
//   const webpack = require("webpack");
//   const config = require("../../webpack.config.js");
//   const compiler = webpack(config);

//   app.use(require("webpack-dev-middleware")(compiler, {
//     hot: true
//   }));
//   app.use(require("webpack-hot-middleware")(compiler));
//   console.log("Middleware enabled");
// }

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

if (module.hot) {
  module.hot.accept();
  // module.hot.accept(['../app'], () => {
  //   server.removeListener('request', currentApp);
  //   server.on('request', app);
  //   currentApp = app;
  // });
}
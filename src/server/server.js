import app from '../app';

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

let currentApp = app;

if (module.hot) {
  module.hot.accept(['../app'], () => {
    app.removeListener('request', currentApp);
    app.on('request', app);
    currentApp = app;
  });
}
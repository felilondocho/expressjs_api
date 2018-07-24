import app from '../app';

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
const app = require('./app');
app.on('start' , () => {
  app.listen(process.env.PORT || 3000);
})
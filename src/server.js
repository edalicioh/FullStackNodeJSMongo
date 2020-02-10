const app = require('./app');
app.on('start' , () => {
  app.listen(process.env.APP_PORT 3000, () =>  console.log("Servidor iniciado"));
})
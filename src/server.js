const app = require('./app');
app.on('start' , () => {
  app.listen(3000, () =>  console.log("Servidor iniciado"));
})
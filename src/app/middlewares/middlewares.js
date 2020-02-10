exports.csrfTokenError = (err , req , res , next) => {
  if(err && err.code === 'EBADCSRFTOKEN') return res.render('pages/404/index' , {title:'Erro 404'});
}
exports.csrfMiddleware = (req , res, next ) => {
  res.locals.csrfToken = req.csrfToken();
  next()
}
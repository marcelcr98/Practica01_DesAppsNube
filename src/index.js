const app = require ('./config/server');
require('./app/routes/articulos.js')(app);

//Server

app.listen(app.get('port'), () =>{
    console.log('OK',app.get('port'));
});
const app = require ('./config/server');
require('./app/routes/login.js')(app);

//Server

app.listen(app.post('port'), () =>{
    console.log('OK',app.post('port'));
});
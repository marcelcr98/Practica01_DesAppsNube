const dbConnection = require('../../config/dbConnection');
module.exports = app => {

    const connection = dbConnection();

    app.post('/auth', (req, res) =>{
        var username = req.body.username;
        var password = req.body.password;
        if (username && password) {
            connection.query('SELECT * FROM cuentas WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                if (res.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/routes/articulos');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    });

}
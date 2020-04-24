const dbConnection = require('../../config/dbConnection');
module.exports = app => {

    const connection = dbConnection();

    app.get('/' , (req, res) => {
        mysqlConnection.query('SELECT * FROM articulos', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
        } );

    app.post('/articulos',(req,res) =>{

        const{descripcion,precio,stock} = req.body;
        connection.query('INSERT INTO ARTICULOS SET?',{
            descripcion:descripcion,
            precio:precio,
            stock, stock

        }, (err, result) =>{
            res.redirect('/');
            console.log(req.body)
        });
    });

    app.get('/update/:id',(req,res) =>{

        res.rendirect('/actualizar');
    });

//Router to DELETE a learner's detail
app.delete('/delete/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM articulos WHERE id = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
    res.send('Learner Record deleted successfully.');
    else
    console.log(err);
    })
    });
}
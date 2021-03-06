const dbConnection = require('../../config/dbConnection');
module.exports = app => {

    const connection = dbConnection();

    app.get('/', (req, res) => {

        connection.query('SELECT  * FROM ARTICULOS', (err, result) =>{

            console.log(result);

            res.render('articulos',{
                articulos: result
            });
        });
    });

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

    app.delete('/delete/:id', (req, res) => {
        connection.query('DELETE FROM articulos WHERE id = ?', [req.params.id], (err, result) =>{
        if (!err)
        res.send('Learner Record deleted successfully.');
        else
        console.log(err);
        })
        });
}
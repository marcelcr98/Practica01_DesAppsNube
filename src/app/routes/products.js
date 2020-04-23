const dbConnection = require('../../config/dbConnection');
module.exports = app => {

    const connection = dbConnection();

    app.get('/', (req, res) => {

        connection.query('SELECT  * FROM PRODUCTOS', (err, result) =>{

            console.log(result);

            res.render('products',{
                products: result
            });
        });
    });

    app.post('/products',(req,res) =>{

        const{nombre,precio,catalogo,stock} = req.body;
        connection.query('INSERT INTO PRODUCTOS SET?',{
            nombre:nombre,
            precio:precio,
            idcat: catalogo,
            stock, stock

        }, (err, result) =>{
            res.redirect('/');
            console.log(req.body)
        });
    });

    app.get('/update/:id',(req,res) =>{

        res.rendirect('/actualizar');
    });
}
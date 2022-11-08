const { Router } = require('express');
const router = Router();
/// importo router de express

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const {Diet} = require('../db')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes',(req,res)=>{
    const name = req.query.name;
    res.send(name)
    
})




module.exports = router;

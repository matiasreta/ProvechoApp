const { Router } = require('express');
const router = Router();
/// importo router de express

const routeRecipes = require('./controller-routes/routeRecipes');
const routeDiets = require('./controller-routes/routeDiets')

/// importo las rutas

router.use('/',routeRecipes);
router.use('/',routeDiets)





module.exports = router;

const { Router } = require('express');
const router = Router();

const routeRecipes = require('./controller-routes/routeRecipes');
const routeDiets = require('./controller-routes/routeDiets')

router.use('/recipes',routeRecipes);
router.use('/diets',routeDiets)


module.exports = router;

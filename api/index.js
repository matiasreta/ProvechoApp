
/////////////////////////////////////////
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                     (|  º_º  |)
//                      0\     /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Diet } = require('./src/db.js');

const dietList = [
  {name:'dairy free'}, 
  {name:'gluten free'}, 
  {name:'ketogenic'},
  {name:'lacto ovo vegetarian'},
  {name:'fodmap friendly'},
  {name:'paleolithic'},
  {name:'pescatarian'},
  {name:'primal'},
  {name:'vegan'},
  {name:'whole 30'}];


// Syncing all the models at once.
conn.sync({ force: true}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}).then(() => {
  Diet.bulkCreate(dietList);
});



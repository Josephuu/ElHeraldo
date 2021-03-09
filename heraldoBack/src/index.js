require('dotenv').config();
const app = require('./app');
require("./database");

app.listen(app.get('port'), () => {
    console.log('App listening on port ', app.get('port'));
});
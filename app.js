var express = require('express');
var app = express();
var mongoose    = require('mongoose');

// app.get('views')할 경우 실질적인 폴더의 위치 반환
app.set('views', __dirname + '/views');

// ejs 엔진을 이용하여 html 렌더링
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// [CONFIGURE APP TO USE bodyParser]
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



/***
 * 
 *      mongoDB 연결
 * 
 */
// mongodb 서버 연결
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function(){
//     console.log('Connected to mongod server')
// });

// mongoose.connect('mongodb://localhost/mongodb_test')

// 모델 정의
// var Book = require('./models/book');

var path = require('path');
app.use('/scripts', express.static(path.join(__dirname, '/node_modules/semantic-ui-calendar/dist')));


var server = app.listen(8080, function(){
 console.log("Express server has started on http://127.0.0.1:8080")
});

var router = require('./routes/main')(app)
app.use(express.static('public'));
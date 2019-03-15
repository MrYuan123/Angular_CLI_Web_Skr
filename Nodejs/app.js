var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tableRouter = require('./routes/routeCatalog');

//=============================================
var accountRouter = require('./routes/accountRoute');
var deviceRouter = require('./routes/deviceRoute');
var stattusRouter = require('./routes/statusRoute');
//=============================================

// ============================================ mongoDB
var mongoose = require('./config/mongoose.js');
var db = mongoose();
// ============================================

var mutter = require('mutter');


const cors = require('cors'); //<-- required installing 'cors' (npm i cors --save)

var app = express();
app.use(cors()); //<-- That`s it, no more code needed!

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/table', tableRouter);

//================================
app.use('/account',accountRouter);
app.use('/device',deviceRouter);
app.use('/status',stattusRouter);
//================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ===================================
// app.use(mutter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

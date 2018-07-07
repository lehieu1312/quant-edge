// Khai báo các module và khởi tạo các modules cần thiết khi tạo server nodejs
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/appdemo')));
app.use('/', express.static(path.join(__dirname, 'dist/appdemo')));

// Import router api
var apiServer = require('./server/api');
app.use('/api', apiServer);

// Chuyển sang trang 404 khi có lỗi
app.use(function(req, res, next) {
    next(createError(404));
});

// Hàm xử lý lỗi
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(err.status);
});

var debug = require('debug')('mean-angular6:server');
var http = require('http');

// Khai báo cổng sử dụng của ứng dụng
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
// Khởi tạo server
var server = http.createServer(app);
// Server lắng nghe cổng kết nối
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Định dạng cổng kết nối
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
// Hàm xử lý lỗi khi server có lỗi khi sử dụng cổng
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // Xử lý lỗi khi server lắng nghe cổng
    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Hàm được gọi khi server lắng nghe cổng kết nối
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Running server on port: ' + port);
    debug('Listening on ' + bind);
}
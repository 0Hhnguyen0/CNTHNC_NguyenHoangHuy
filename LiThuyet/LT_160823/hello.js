
// TẠO MỘT MODULE HTTP
const http = require('http');

//CMD node hello.js
http.createServer((input,output) => {

    // PHẢN HỒI 200 == OK, DỮ LIỆU == PLAIN TEXT
    output.writeHead(200,{
        'Content-Type':'text/plain'
    });

    // GHI DỮ LIỆU BODY TRANG
    output.write("Hello world.\n");

    // ĐÁNH DẤU OUTPUT KẾT THÚC
    output.end();

}).listen(1337);

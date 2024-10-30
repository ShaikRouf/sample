var http= require('http');
http.createServer((req,res)=>{
    res.write("good morning");
    res.end()
}).listen(5000,"127.0.0.1",()=>{
    console.log(" server run on http://127.0.0.1:5000")
})
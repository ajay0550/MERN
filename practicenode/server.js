import http from "http" ;

const server = http.createServer((req,res)=>{
    if(req.method == 'GET' && req.url == '/'){
        res.end("HEllo");
        return;
    }
    else if(req.method == 'GET' && req.url == '/login'){
        res.end("login");
        return;
    }
    else if(req.method == 'GET' && req.url == '/signup'){
        res.end("signup");
        return;
    }
    res.statusCode = 404;    
    res.end("not found");

});


server.listen(3000, ()=>{
    console.log("Server  Started");
});
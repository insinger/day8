var exp=require("express");
var app=exp()

var people={}

function register_get_handler(req,resp) {
	if (people[req.query.email]) {
		resp.status(400);
		resp.json(JSON.stringify({regid:"seen it before"}))
		}
	else {
		people[req.query.email]=req.query.name;
		resp.status(200);
		resp.json(JSON.stringify({regid:Math.floor(Math.random()*500)+1}));
		}
	console.log("people=",people);
}

app.get("/register",register_get_handler);
app.use("/libraries",exp.static(__dirname+"/bower_components"));
app.use(exp.static(__dirname+"/public"));
app.listen(3000,()=>console.log("ready"));


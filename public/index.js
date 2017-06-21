(function () {
	var RegApp=angular.module("RegApp",[])
	var RegCtrl=function ($http) {
		var regCtrl=this;
		regCtrl.name="";
		regCtrl.email="";
		regCtrl.regId="";
		regCtrl.reset=function() {
			regCtrl.name="";
			regCtrl.email="";
			regCtrl.regId="";
		}
		regCtrl.submit=function() {
			console.log("in submit()");
			regCtrl.email=regCtrl.email.toLowerCase();
			console.log("name=%s",regCtrl.name);
			console.log("email=%s",regCtrl.email);
			var p=$http.get("http://localhost:3000/register",{params:{name:regCtrl.name,email:regCtrl.email}});
			p.then(function (result) {
				regCtrl.regId=JSON.parse(result.data).regid;
			},function (err) {
				regCtrl.regId="INVALID - ALREADY REGISTERED";
				}
			);
		};
	};
	RegCtrl.$inject=["$http"];
	RegApp.controller("RegCtrl",RegCtrl);
})();

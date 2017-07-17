function change(){
	var str=document.getElementById("option");
	var pass=document.getElementById("password");
	if(str.checked==true){
 		pass.type="text";
	}else{
		pass.type="password";
	}
 };

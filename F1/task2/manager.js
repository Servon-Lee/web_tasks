var students = new Array();
var storage = window.localStorage;

function  student(name, num, major, phone) {
  this.name  = name;
  this.num = num;
  this.major = major;
	this.phone = phone;
}

function addinfo() {
	//得到去掉首尾空格的值
  var name = $('#name').val().trim();
  var num =  $('#num').val().trim();
  var major = $('#major').val().trim();
  var phone =  $('#phone').val().trim();
	var stu = {"name":name, "num":num, "major":major, "phone":phone};
	students.push(stu);
	localStorage.setItem("student",JSON.stringify(stu));
	alert("增加成功！");
}

function getStudent(num){
	for (var i = 0; i < students.length; i++) {
		stu = JSON.parse(localStorage.getItem("student"));
		if(stu.num == num){
			return JSON.stringify(stu);
		}else{
			return null;
		}
	}
}

function delinfo(){
	var num = $('#num').val().trim();
	var stu = getStudent(num);
	if(stu != null){
		students.splice(students.indexOf(stu), 1);
		alert("删除成功！");
	}else{
		alert("此人不存在，删除失败！");
	}
}

function modifyinfo(){
	var num = $('#num').val().trim();
	var stu = getStudent(num);
	if(stu == null){
		alert("此人不存在，修改失败！");
	}else{
		var name = $('#name').val().trim();
	  var major = $('#major').val().trim();
	  var phone =  $('#phone').val().trim();
		stu.name = name;
		stu.major = major;
		stu.phone = phone;
	}
}

function queryinfo(){
	var num = $('#num').val().trim();
	var stu = getStudent(num);
	if(stu == null){
		alert("此人不存在，查询失败！");
	}else{
		alert(
			"姓名："+num.name+
			"学号："+num.num+
			"专业："+num.major+
			"电话号码："+num.phone
		);
	}
}

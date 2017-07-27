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
	var stu = new student(name, num, major, phone);
  students.push(stu);
	storage.setItem('stuArr', JSON.stringify(students));
	alert("增加成功！");
}

function getStudent(num){
	var stus = JSON.parse(storage.getItem('stuArr'));
	for (var i = 0; i < stus.length; i++) {
		if(stus[i].num == num){
			return stus[i];
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
		storage.setItem('stuArr', JSON.stringify(students));
		alert("删除成功！");
	}else{
		alert("此人不存在，删除失败！");
	}
}

function modifyinfo(){
	var num = $('#num').val().trim();
	var stu = getStudent(num);
	if(stu != null){
		var name = $('#name').val().trim();
	  var major = $('#major').val().trim();
	  var phone =  $('#phone').val().trim();
		stu.name = name;
		stu.major = major;
		stu.phone = phone;
		students.push(stu);
		storage.setItem('stuArr', JSON.stringify(students));
		alert("修改成功！");
	}else{
		alert("此人不存在，修改失败！");
	}
}

function queryinfo(){
	var num = $('#num').val().trim();
	var stu = getStudent(num);
	if(stu != null){
		alert(
			"姓名："+stu.name+'\n'+
			"学号："+stu.num+'\n'+
			"专业："+stu.major+'\n'+
			"电话号码："+stu.phone+'\n'
		);
	}else{
		alert("此人不存在，查询失败！");
	}
}

function queryAll(){
  var stus = JSON.parse(storage.getItem('stuArr'));
	for (var i = 0; i < stus.length; i++){
    if(stus[i] == null){
      alert('没有学生信息！');
    }else{
      var mytable = document.getElementById('studentstable');
      var mytr = document.createElement('tr');
      var mytd1 = document.createElement('td');
      var mytd2 = document.createElement('td');
      var mytd3 = document.createElement('td');
      var mytd4 = document.createElement('td');
      var mytbody = document.createElement('tbody');
      mytd1.innerHTML = stus[i].name;
      mytd2.innerHTML = stus[i].num;
      mytd3.innerHTML = stus[i].major;
      mytd4.innerHTML = stus[i].phone;
      mytr.appendChild(mytd1);
      mytr.appendChild(mytd2);
      mytr.appendChild(mytd3);
      mytr.appendChild(mytd4);
      mytbody.appendChild(mytr);
      mytable.appendChild(mytbody);
    }

  }
}

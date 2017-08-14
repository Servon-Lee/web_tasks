var i;
var timer;
var slideNum;

$(window).resize(function(){
   $(".slide").height($(".slide").width()*0.56);
});

$(function(){
  slideNum = $(".slide .ig").size();  //获取轮播图片数量

  for(i=0; i<slideNum; i++){
      $(".slide .ig:eq("+i+")").attr("data-slide-imgId",i);
  }

  $(window).resize(function(){
     $('.igs').height($('.igs').width()*0.56);
  });

  $('.ig').eq(0).fadeIn().siblings().fadeOut();
  //每隔3s自动轮播
  ShowTime();
  //鼠标移入tab时跳转到该图片，移出tab时恢复正常
  $('.tab').hover(function(){
    //找到鼠标移入的tab的索引
    i = $(this).index();
    Show();
    //为了让用户仔细（有充足的时间）看图片内容，此时停止轮播
    clearTimeout(timer);
  }, function(){
    //鼠标移出后轮播继续
    ShowTime();
  });

  //当点击前后翻页时
  $('.btn1').click(function(){
    pre();
  });

  $('.btn2').click(function(){
    back();
  });

  $(document).on("pagecreate","#igs",function(){
    $('.ig').on("swipeleft",function(){
      i++;
      ShowTime();
    });
  });

  $(document).on("pagecreate","#igs",function(){
    $('.ig').on("swiperight",function(){
      i--;
      ShowTime();
    });
  });

  if(touch){
      touch();
      Show();
  }

});

function pre(){
  clearTimeout(timer);
  if(i==0){
    i = $('.ig').size();
  }
  i--;
  Show();
  ShowTime();
}

function back(){
  clearTimeout(timer);
  if(i==$('.ig').size()-1){
    i = -1;
  }
  i++;
  Show();
  ShowTime();
}

//tab跟随图片变换颜色
function Show(){
  $('.ig').eq(i).fadeIn().siblings().fadeOut();
  $('.tab').eq(i).addClass('bg').siblings().removeClass('bg');
};

//需反复调用，封装成函数
function ShowTime(){
  timer = setTimeout(function(){
    i++;
    if(i==$('.ig').size()){
      i=0;
    }
    Show();
  }, 3000);
};

//触摸滑动模块
function k_touch() {
    var start = 0, end = 0, content = document.getElementById("slide");
    content.addEventListener("touchstart", touchStart, false);
    content.addEventListener("touchmove", touchMove, false);
    content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        end = (start - touch.pageX);
    }

    function touchEnd(event) {
        if (end < -100) {
            pre();
            end=0;
        }else if(end > 100){
            back();
            end=0;
        }
    }
}

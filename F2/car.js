var i = 0;
var timer;

$(function(){
  $('.ig').eq(0).fadeIn().siblings().fadeOut();
  //每隔5s自动轮播
  ShowTime();
  //鼠标移入tab时跳转到该图片，移出tab时恢复正常
  $('.tab').hover(function(){
    //找到鼠标移入的tab的索引
    i = $(this).index();
    Show();
    //为了让用户仔细（有充足的时间）看图片内容，此时停止轮播
    clearInterval(timer);
  }, function(){
    //鼠标移入后轮播继续
    ShowTime();
  });

  //当点击前后翻页时
  $('.btn1').click(function(){
    clearInterval(timer);
    if(i==0){
      i = $('.ig').size();
    }
    i--;
    Show();
    ShowTime();
  });

  $('.btn2').click(function(){
    clearInterval(timer);
    if(i==$('.ig').size()-1){
      i = -1;
    }
    i++;
    Show();
    ShowTime();
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

});

//tab跟随图片变换颜色
function Show(){
  $('.ig').eq(i).fadeIn().siblings().fadeOut();
  $('.tab').eq(i).addClass('bg').siblings().removeClass('bg');
};

//需反复调用，封装成函数
function ShowTime(){
  timer = setInterval(function(){
    i++;
    if(i==$('.ig').size()){
      i=0;
    }
    Show();
  }, 3000);
};

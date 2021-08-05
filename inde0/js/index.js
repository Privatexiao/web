// JavaScript Document
$(".dropdown-toggle").on("mouseover",function(){
	$(this).dropdown("toggle")
});
$("#myMenu").on("mouseout",function(){
	$(this).dropdown("toggle")
});
/*轮播图*/
$(function () {
   $(window).on("resize",function(){
      var clientW=$(window).width();
      var isShowBigImage=clientW>=800;
      var $allItems = $("#lb-carousel .item");
      $allItems.each(function(index,item){
          var src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
          var imgUrl='url(" '+ src +' ")';
          $(item).css({
              backgroundImage:imgUrl
          });
          if(!isShowBigImage){
              var $img="<img src='"+ src +" '>";
                  $(item).empty().append($img);
          }
          else{
              $(item).empty();
          }
      });
  })
    $(window).trigger("resize")//使用trigger可以一开始进来就调用resize方法
})

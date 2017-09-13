/**
 * Created by Administrator on 2017/4/7.
 */
$(document).ready(function () {
    pl();
    var imdata={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}
    $(window).scroll(function () {
        if (scor()){
            $.each(imdata.data,function (index ,value) {
                var conc=$("<div>").addClass("contc").appendTo($(".conation"));
                var box=$("<div>").addClass("box").appendTo(conc);
                var img=$("<img>").attr("src","image/"+$(value).attr("src")).appendTo(box);
            })
            pl();//当页面滚动时调用瀑布流的布局函数
        }
    })
    window.onresize = function () {
        pl();
    }
})
//想下滚动加载实现的条件
function scor() {
    var box=$(".contc");
    var viewheight = $(window).scrollTop();
    var winHeight = $(window).height();
    var imgHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    if (viewheight+winHeight>imgHeight)
    {
        return true;
    }
    else {
       return false;
    }
}
//实现瀑布流的函数
function pl() {
    var conWidth=$(".contc").eq(0).width();
    var num=parseInt($(".conation").width()/conWidth);
    var conarry=[];
    $(".contc").each(function (index ,value) {
        var conheight=$(".contc").eq(index).height();
        if (index<num){
            conarry[index]=conheight;
            $(value).css({
                position: "absolute",
                top: 0,
                left: index * conWidth,
            })
        }
        else {
            var conminheight=Math.min.apply(null,conarry);
            var conminindex=$.inArray(conminheight,conarry);
            $(value).css({
                position:"absolute",
                top:conminheight,
                left:$(".contc").eq(conminindex).position().left,
            });
            conarry[conminindex]+= $(".contc").eq(index).height();
        }
    })
}

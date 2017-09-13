/**
 * Created by Administrator on 2017/4/7.
 */
$(document).ready(function () {
    $(window).on("load",function () {
        //当页面没有滚动时调用瀑布流的函数
        pl();
        //实现滚动加载图片的效果
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
    })
})
//想下滚动加载实现的条件
function scor() {
    var viewheight=$(window).scrollTop();
    if (viewheight>140){
        return true;
    }
    else {
       return false;
    }
}
//实现瀑布流的函数
function pl() {
    var conwidth=$(".contc").eq(0).width();
    var num=parseInt($(".conation").width()/conwidth);
    var conarry=[];
    $(".contc").each(function (index ,value) {
        var conheight=$(".contc").eq(index).height();
        if (index<num){
            conarry[index]=conheight;
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

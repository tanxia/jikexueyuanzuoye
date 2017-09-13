/**
 * Created by Administrator on 2017/3/28.
 */

$(document).ready(function() {
//构造函数模式可以传递初始化参数，实现创建多个相似对象，并且可以将实例标识为一个一种特定类型。这是第一个构造函数。
   //父类
    function shecom(classna1, classna2, cssna) {
        var me = this;
        me.classna1 = $(classna1);
        me.classna2 = $(classna2);
        me.cssna = cssna;
        this.show = function() {

            me.classna1.on("mouseover", function() {
                me.classna2.addClass(me.cssna);
            })
            me.classna1.on("mouseout", function() {
                me.classna2.removeClass(me.cssna);
            })
        }
    }
//子类
    function shecomt(classna3, cssna2) {
        //用子类去继承父类
        shecom.call(this, ".she2", ".hea1", "sameone");
        var me = this;
        me.cssna2 = cssna2;
        me.classna3 = $(classna3);
        this.show1 = function() {

            me.classna1.on("mouseover", function() {

                me.classna3.addClass(me.cssna2);
            })
            me.classna1.on("mouseout", function() {

                me.classna3.removeClass(me.cssna2)
            })
        }
    }
//实例化多个构造函数
    var shecom1 = new shecom(".she", ".hea3", "sameone");
    shecom1.show();
    var shecom2 = new shecom(".she1", ".hea2", "sameone");
    shecom2.show();
    var shecom3 = new shecomt(".a", "sametwo");
    shecom3.show1();
    shecom3.show();
    var shecom4 = new shecom(".nav-1", ".nav-1", "nav-1c");
    shecom4.show();
    var shecom5 = new shecom(".n-2", ".n-2", "span4c");
    shecom5.show();
    var shecom6 = new shecom(".n-3", ".n-3", "span4c");
    shecom6.show();
    var shecom7 = new shecom(".n-4", ".n-4", "span4c");
    shecom7.show();
    var shecom8 = new shecom(".n-5", ".n-5", "span4c");
    shecom8.show();
//下面是构造函数和原型函数的结合使用，.原型模式可以共享实例中的方法和属性。
    function spanShow(aname, next) {

        var my = this;
        my.aname = $(aname);
        my.next = next;
        my.arr = new Array(".content-1", ".content-2", ".content-3", ".content-4", ".content-5");
        my.arr1 = new Array(".nav-1", ".n-2", ".n-3", ".n-4", ".n-5");
        this.arrad = function (){
            my.aname.on("click", function() {
                my.arr.forEach(function(item, index, arry) {
                    if (my.next == index) {
                        $(item).addClass("sameone");
                    } else {
                        $(item).removeClass("sameone");
                    }
                })
                my.arr1.forEach(function(item, index, arry) {
                    if (my.next == index) {
                        $(item).addClass("hou");
                    } else {
                        $(item).removeClass("hou");
                    }
                })
            })
        }
    }
    spanShow.prototype.stratSpan = function() {
           arr = new Array(".content-1", ".content-2", ".content-3", ".content-4", ".content-5");
        arr1 = new Array(".nav-1", ".n-2", ".n-3", ".n-4", ".n-5");
 arr.forEach(function(item, index, arry) {
                    if ( index==0) {
                        $(item).addClass("sameone");
                    } else {
                        $(item).removeClass("sameone");
                    }
                });
                arr1.forEach(function(item, index, arry) {
                    if ( index==0) {
                        $(item).addClass("hou");
                    } else {
                        $(item).removeClass("hou");
                    }
                })

    };
    var span1 = new spanShow(".nav-1", 0);
    span1.arrad();
    span1.stratSpan();
    var span2 = new spanShow(".n-2", 1);
    span2.arrad();
    var span3 = new spanShow(".n-3", 2);
    span3.arrad();
    var span4 = new spanShow(".n-4", 3);
    span4.arrad();
    var span5 = new spanShow(".n-5", 4);
    span5.arrad();

   //以下代码没用设计模式
    $(window).scroll(function() {
        var scorllheight = $(window).scrollTop();
        if (scorllheight > 100) {
            $(".head-w").addClass("head-wc1");
        } else {
            $(".head-w").removeClass("head-wc1");
        }
    })
    $(".top").on("mouseover", function() {
        $(".top-1").addClass("top-2c");
        $(".top-2").addClass("top-1c");
        $(".top").addClass("top-b");
    })
    $(".top").on("mouseout", function() {
        $(".top-1").removeClass("top-2c");
        $(".top-2").removeClass("top-1c");
        $(".top").removeClass("top-b");
    })
    $(window).scroll(function() {
        var scrollHieght = $(window).scrollTop();
        if (scrollHieght > 100) {
            $(".top").stop().fadeIn();
        } else {
            $(".top").stop().fadeOut();
        }
    })
    $(".top").on("click", function() {
        $("body,html").animate({ scrollTop: 0 }, 300);
    })
    $(".fristone").on("click", function() {
        $(".fristone").toggleClass("tran");
        $(".blank").toggle(0);
    })
    $(".change-skin").on("click", function() {
        $(".h-skin").addClass("head-wc1");
    })
    $(".bg").on("click", function() {
        $(".h-skin").removeClass("head-wc1");
    })
    $(".u-c img").hover(function() {
        var i = $(this).attr("data-skin");
        $(".wrap-to img").attr("src", "img/" + i + '.jpg');
    }, function() {
        $(".wrap-to img").attr("src", "img/" + key + '.jpg');
    })
    var key;
    $(".u-c img").click(function() {
        key = $(this).attr("data-skin");
        $(".bagd img").attr("src", "img/" + key + "s.jpg");
        $(".wrap-to img").attr("src", "img/" + key + ".jpg");
        var begin = localStorage.setItem("begin", key)
    })
    var st = localStorage.getItem("begin");
    $(".bagd img").attr("src", "img/" + st + "s.jpg");
})
//问题1：我在使用构造函数的时候构造函数和原型独立存在，封装性还是不够好。老师能帮我解决下吗？
//问题2：工厂模式我在视频中看的是用原型去定义一个接口，我在网上看到的是声明一个函数在里面使用对象去return。到底哪种能好？
/*
    function person(name, age, job) {
                var o = new Object();
                o.name = name;
                o.age = age;
                o.job = job;
                o.sayname = function() {
                    alert(this.name);
                }
                return o;
            }
            var person1 = person('小明', '22', '前端工程师');
            var person2 = person('小花', '20', '前端工程师');
            alert(person1 instanceof Object);//true
            alert(person1 instanceof person);//false
            */
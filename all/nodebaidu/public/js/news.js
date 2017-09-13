$(document).ready(function() {
    refreshNews('娱乐');
    $('nav a').click(function(e) {
        var type = $(this).text();
        refreshNews(type);
    })
});
function refreshNews(type){
   var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        data:{'newstype':type},
        datatype: 'json',
        success: function(data) {
            $.each(data, function(index, item) {
                var $lists = $('article ul');
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $a = $('<a></a>').appendTo($newsimg);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($a);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newssrc = $('<span></span>').addClass('newssrc').html(item.newstype).appendTo($p);
                var bodyWith = $('body').width();
                $('.newsimg a img').width(bodyWith / 4);
                $('.newsimg a img').height($('.newscontent').height());
                $('.newscontent').width(bodyWith / 2);
            })
        }
    });
}
$(document).ready(function() {
   refreshNews();
    //在数据库中插入新闻
    $('.newsubmit').click(function(e) {
        e.preventDefault();
        if ($('.newstitle').val() === '' || $('.newsimg').val() === '' || $('.newssrc').val() === '' || $('.newstime').val() === '') {
            if ($('.newstime').val() === '') {
                $('.newstime').parent().addClass('has-error');
            } else {
                $('.newstime').parent().removeClass('has-error');
            }
            if ($('.newsimg').val() === '') {
                $('.newsimg').parent().addClass('has-error');
            } else {
                $('.newsimg').parent().removeClass('has-error');
            }
            if ($('.newstitle').val() === '') {
                $('.newstitle').parent().addClass('has-error');
            } else {
                $('.newstitle').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('.newstitle').val(),
                newsimg: $('.newsimg').val(),

                newstime: $('.newstime').val(),
                newstype: $('.newstype').val()
            };
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    refreshNews();
                }
            })
        }
    })
    //在数据库中修改新闻
    var updateId = null;
    var $newsTable = $('.newstable tbody')
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(4).html();
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                var $updateid = data[0].newsid;
                $('.unewstype').val(data[0].newstype);
                $('.unewstitle').val(data[0].newstitle);
                $('.unewsimg').val(data[0].newsimg);
                var utime = data[0].newstime.split(' ')[0];
                $('.unewstime').val(utime);
                // $('#updateModal').modal('hide');
                refreshNews();
            }
        })
    });

    $('#conupdate').click(function(e) {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data: {
                newstime: $('.unewstime').val(),
                newstype: $('.unewstype').val(),
                newstitle: $('.unewstitle').val(),
                newsimg: $('.unewsimg').val(),
                newsid: updateId
            },
            success: function(data) {
                console.log(data);
                $('#updateModal').modal('hide');
                refreshNews();
            }
        })
    });
    //在数据库中删除新闻
    var $newsTable = $('.newstable tbody')
    var deleteId = null;
    $newsTable.on('click', '.btn2', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
    });
    $('#conDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
    });
    //动态的增加后台新闻函数   
   function refreshNews() {
        var $newsTable = $('.newstable tbody');
       $newsTable.empty();
        $.ajax({
            url:'/admin/getnews',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                   
var $tdid = $('<td></td>').html(item.newsid);
                    var $tdtitle = $('<td></td>').html(item.newstitle);
                    var $tdtime = $('<td></td>').html(item.newstime);
                    var $tdimg = $('<td></td>').html(item.newsimg);
                    var $tdtype = $('<td></td>').html(item.newstype);
                    var $tr = $('<tr></tr>');
                    var $trl = $('<td></td>');
                    var $btn1 = $('<button></button>').addClass('btn-xs btn-primary btn1').html('编辑');
                    var $btn2 = $('<button></button>').addClass('btn-xs btn-danger btn2').html('删除');
                    $trl.append($btn1, $btn2);
                    $tr.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $trl);
                    $newsTable.append($tr);
                     var newstab=$('tbody tr').first();
                })
    
            }
        })

    }

})

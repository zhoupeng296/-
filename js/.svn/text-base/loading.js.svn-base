$(function () {
    // 二维码移入效果

    $('#main .sweep').hover(function(){
        $('#main .sweep .sweepImg1').stop(true).animate({'left':'20px'},function(){
            $('#main .sweep .sweepImg2').stop(true).fadeIn(500)
        })
    },function(){
        $('#main .sweep .sweepImg2').stop(true).fadeOut(500)
        $('#main .sweep .sweepImg1').stop(true).animate({'left':'100px'})
    })



    // table切换
    $('#main .logIn ul li').on('mouseover', function () {
        //alert(111)
        $('#main .logIn .sweep div').eq($(this).index()).addClass('displayBlock').siblings().removeClass('displayBlock')
        $(this).addClass('active').siblings().removeClass('active')
        // $('#main .logIn .sweep div').eq($(this).index()).addClass('displayBlock').siblings().removeClass('displayBlock')
    })



    
    





})
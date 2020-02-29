$(function(){
    // 头部搜索框旁边购物车移入效果
    $('#nav .shoppingCar .fr').hover(function(){
        // alert(111)
        $(this).css({'color':'white','background':'#ff6700'})
    },function(){
        // alert(222)
        $(this).css({'color':'black','background':''})
    })

    // 二级列表
    $('#nav .left li').on('mouseover',function(){
        $('#nav .li2 div').eq($(this).index()).addClass('active');
        
    }).on('mouseout',function(){
        $('#nav .li2 div').removeClass('active')
    })

    // 新书table切换
    $('#newBook .bookNav>li').mouseover(function(){
        // alert(111)
        $(this).addClass('newBookactive').siblings().removeClass('newBookactive')
        $('.bookTable .shoopBook').eq($(this).index()).addClass('shoopBookactive').siblings().removeClass('shoopBookactive')
    })







    // 手风琴
    $('#newBook .right>ul>li').mouseover(function(){
        // alert(11)
        $(this).find('.change1').hide().next().show()
        $(this).siblings().find('.change1').show().next().hide()
    })


    // $('#newBook .right dt').on('click',function(){
    //     $(this).nextUntil('dt').slideToggle();
    //     $(this).siblings('dt').nextUntil('dt').slideUp();
    //     //$(this).find('span').addClass('displayNone').siblings('span').removeClass('displayNone')
    // })


    $('#clothing .clothingTitle li').on('mouseover',function(){
        // alert(111)
        $(this).addClass('newBookactive').siblings().removeClass('newBookactive')
        $('#clothing .clothingRight ul').eq($(this).index()).addClass('shoopBookactive').siblings().removeClass('shoopBookactive')
    })

    $('#stoop .clothingTitle li').on('mouseover',function(){
        // alert(111)
        $(this).addClass('newBookactive').siblings().removeClass('newBookactive')
        $('#stoop .clothingRight ul').eq($(this).index()).addClass('shoopBookactive').siblings().removeClass('shoopBookactive')
    })

    $('#children .clothingTitle li').on('mouseover',function(){
        // alert(111)
        $(this).addClass('newBookactive').siblings().removeClass('newBookactive')
        $('#children .clothingRight ul').eq($(this).index()).addClass('shoopBookactive').siblings().removeClass('shoopBookactive')
    })
 

    // console.log($('#goodShoop .switcher').se)
    $('#goodShoop .aaa .a123').on('click',function(){
        // alert(111)
        $(this).addClass('liactive').siblings().removeClass('liactive')
        $('#goodShoop .switcher').stop(true).animate({'left':'-1300px'},1000)
    })
    $('#goodShoop .aaa .a456').on('click',function(){
        // alert(111)
        $(this).addClass('liactive').siblings().removeClass('liactive')
        $('#goodShoop .switcher').stop(true).animate({'left':'0'},1000)
    })


    // 返回顶部
    $(window).scroll(function(){
        var goto=$(window).scrollTop();
            // console.log(goto)
            if(goto > 1000){
                $('#goToTop').slideDown();
            }else{
                $('#goToTop').slideUp();
            }
        $('#goToTop').on('click',function(){
            $('html').stop(true).animate({'scrollTop':'0'},1000)
        })
    })
    
    // 分享框
    $('#share').hover(function(){
        $('#share .img4').stop(true).animate({'left':'2px'},1000)
    },function(){
        $('#share .img4').stop(true).animate({'left':'102px'},1000)
    })

    // 楼层

    var bgcolor=['#93d56f','#f55727','#bc9ded','#ff7495','#c3ec52'];

    $(window).scroll(function(){
        var tiao=$(window).scrollTop();
            if( tiao > 1000 &&  tiao < 4200){
                $('#floor').slideDown();
            }else{
                $('#floor').slideUp();
            }
            $('#floor li').hover(function(){
                var col=bgcolor[$(this).index()];
                $(this).css('backgroundColor',col);
                $(this).find('p').stop(true).slideDown();
                // alert(111)
            },function(){
                $(this).css('backgroundColor','');
                $('#floor p').stop(true).slideUp();
            })
            // 点击跳转
            $('#floor li').on('click',function(){
                var top1 = $(".a123").eq($(this).index()).offset().top;
                $("html,body").stop(true).animate({"scrollTop":top1-50+"px"},500);
            
            })
    })

    // 滑动搜索框
    $(window).scroll(function(){
        var sBox=$(window).scrollTop();
        if( sBox > 1000 ){
            $('#searchBox').slideDown();
        }else{
            $('#searchBox').slideUp()
        }
    })





})






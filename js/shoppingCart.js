$(function(){

    update();
    // 猜你喜欢
    $('#fond .bottom>div').hover(
        function(){
            $(this).css({'backgroundColor':'#f2f2f2'});
        },function(){
            $(this).css({'backgroundColor':'#fff'});
        }
    )

    // 加号
    $('#all .bottom .joinMenu button:first-of-type').click(function(){
        // console.log(111);
        // 输入框输入值
        var num=parseInt($(this).next().val());
        // 总价
        var money=$(this).parent().next().html();3
        // 单价
        var price=$(this).parent().prev().html();
        // console.log(money)
        num++;
        money=num*price;
        $(this).next().val(num);
        $(this).parent().next().html(money.toFixed(2))
        update();

    })
    // 减号
    $('#all .bottom .joinMenu button:last-of-type').click(function(){
        var num= parseInt($(this).prev().val());
        var money=$(this).parent().prev().html();
        var price=$(this).parent().prev().html();
        if(num<=1){
            num=1
        }else{
            num--;
        }
        money=num*price;
        $(this).prev().val(num);
        $(this).parent().next().html(money.toFixed(2));
        update();
    })

    // input输入
    $('#all .bottom .joinMenu .num').blur(function(){
        // console.log($(this).val());
        // 获取当前输入值
         // 获取单价
        var price= parseInt( $(this).parent().prev().html());
        var money=$(this).parent().next().html()
        var num=$(this).val();
        if(isNaN(num)||num==''){
            alert('输入错误')

        }else{
            if(num<=0){
                // alert('输入错误')
                $('#all .num').val(1)
                
            }
            if(price<0){
                price=0
                $(this).parent().next().html((num*price).toFixed(2))
            }
            num=parseInt(num);
            money=num*price;
            $(this).parent().next().html(money)
            // 计算总价并赋值
            update();
        }

    })
    // 全选反选
    $('.checkAll').click(function(){
        // alert(111)
        var aaa=$(this).prop('checked');
        // console.log(aaa);
        $('.checkAll,.checks').prop('checked',aaa) 
        update();

    })

    //当有未选中时取消全选
    $('.checks').click(function(){
        var flag=true;
        $('.checks').each(function(){
            var aaa=$(this).prop('checked')
            // console.log(aaa);
            if(!aaa){
                flag=false;
                console.log(flag);
            }
        })
        $('.checkAll').prop('checked',flag) 
        update();

    })


    // 删除
    $('.del').click(function(){
        $(this).closest('.joinMenu').detach()
        update();

    })

    // 删除选中
    $('#all .delAll').click(function(){
        // console.log(111);
        $('.checks').each(function(){
            var del=$(this).prop('checked');
            if(del){
                $(this).parents('.joinMenu').detach()
            }
            console.log(del);
        })
        update();
        
    })

function update(){
        var num = 0;
        var allMoney = 0;
        $(".joinMenu").each(function(){
            var check = $(this).find(".checks").prop("checked");
            if (check) {
                num += parseInt($(this).find(".num").val());
                allMoney += parseFloat($(this).find(".prices").html())
            }
        })
        $(".goodsNum").html(num);
        $(".allMoney").html(allMoney.toFixed(2));
    }



})
$(function(){

    /* Header */
    var introH=$('#intro').innerHeight()

        header=$('#header')
        nav_button=$('#nav_button')
        header_mogo=$('#header_mogo')

        headerH=$(header).innerHeight()
        scrollOffset=$(window).scrollTop()

        CheckScroll(scrollOffset)




    /*Window scroll*/
    $(window).on("scroll",function(){

        scrollOffset=$(this).scrollTop()

        CheckScroll(scrollOffset)


    })

    function CheckScroll(scrollOffset){

        if (scrollOffset >= introH-headerH) {
            header.addClass("fixed")
        } else header.removeClass("fixed")

    }


    /*Smoth scroll*/
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        var $this=$(this)
            blokID=$(this).data("scroll"),
            blockOffset=$(blokID).position().top
            headerW=$(header).width();



        if (headerW<=650 ){
            blockOffset-=47;
        }

        $(".header_nav a").removeClass('active');
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffset

        },500,function(){

            CheckScroll(scrollOffset)
            $(nav_button).removeClass('active');
            $(header_nav).removeClass('active');
            $("#header_nav a").removeClass('active');

        })

    })

    /*Burger Menu header*/
    $(nav_button).on('click',function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $(header_nav).toggleClass('active');

    });





    /*Acordion*/
    $('[data-collapse]').on('click',function(event){
        event.preventDefault();

        var blockID=$(this).data('collapse')

        $(blockID).slideToggle(300);

    })



    /*slider*/
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });






})

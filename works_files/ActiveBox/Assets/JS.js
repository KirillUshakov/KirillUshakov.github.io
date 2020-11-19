$(function(){

    let header=$("#header");

    header.addClass("fixed")
        let headerFixedH = header.innerHeight();
    header.removeClass("fixed")

    let 	intro=$("#intro");
 		 	introH = intro.innerHeight();
    		scrollTop = $(window).scrollTop();
    		MainNav = document.querySelector('.header_nav');
    		BurgerBtn = document.querySelector('.nav_button');

    check_scroll(introH,scrollTop);

    console.log(BurgerBtn);
    console.log(MainNav);

    /*Burger-menu*/
    BurgerBtn.addEventListener('click', function(){
    	MainNav.classList.toggle('active');
    })

    /*EVENT SCROLL*/
    $(window).on("scroll load resize",function(){
        introH = intro.innerHeight();
        scrollTop = $(this).scrollTop();

        check_scroll(introH,scrollTop);
    })

    /*CHECK SCROLL*/
    function check_scroll(introH,scrollTop){
        if (scrollTop>introH-headerFixedH){
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    /*SMOOTH SCROLL*/
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        let blockID = $(this).data("scroll");
        let blockOffset = $(blockID).offset().top;

        console.log(blockOffset);

        

        $("html, body").animate({
            scrollTop: blockOffset

        },500,function(){})
    })



    /*SLIDER*/

    $("#reviews_innerSLIDER").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true
    });












});

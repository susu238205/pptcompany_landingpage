$(document).ready(function(){

    // Start Back to Top

    $

    // End Back to Top
    

    // Start Nav Bar
        $(window).scroll(function(){

            let getscrolltop = $(this).scrollTop();
            console.log(getscrolltop);

            if(getscrolltop >= 160){
                $('.navbar').addClass("navmenus");
            }else{
                $('.navbar').removeClass("navmenus");
            }

        });


        $(".navbuttons").click(function(){
            $(this).toggleClass('crossxs');
        });
    // End Nav Bar

    // Start Property Section


        $(".propertylists").click(function(){
            // $(this).addClass("activeitems");
            $(this).addClass("activeitems").siblings().removeClass('activeitems');

            // const filtervalue = $(this).attr('data-filter');
            const filtervalue = $(this).data('filter');

            // console.log(filtervalue);

            if(filtervalue === "all"){
                $(".filters").show("slide",500);
            }else{
                // = Method 1
                // $(".filters").hide();
                // $('.filters').filter('.'+filtervalue).show();


                // = Method 2
                $('.filters').not('.'+filtervalue).hide('slide',500);
                $('.filters').filter('.'+filtervalue).show('slide',500);
            }
        });


    // End Property Section


    // Start Adv Section
        $(window).scroll(function(){
            let getscrolltop = $(this).scrollTop();

            // console.log(getscrolltop);

            if(getscrolltop >= 1200){
                $('.advimages').addClass("fromlefts");
                $('.advtexts').addClass("fromrights");
            }else{
                $('.advimages').removeClass("fromlefts");
                $('.advtexts').removeClass("fromrights");
            }
        })
    // End Adv Section


    // Start Services Section


    // End Services Section


    // Start Client Section


    // End Client Section

    // Start Customers Section



    // End Customers Section


    // Start Quotation Section



    // End Quotation Section


    // Start Furniture Section


    // End Furniture Section


    // Start Contact Section


    // End Contact Section

    // Start Footer Section
    const getyear = document .getElementById("getyear");
    const getfullyear = new Date() .getfullyear();
    getyear.textContent = getfullyear;

    // End Footer Section
});


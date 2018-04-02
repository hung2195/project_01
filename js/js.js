$(document).ready(function()
{
	$('.nav-bar .toggle').click(function(event) {
		$('.nav-bar .main-menu').slideToggle("400");
	});
	$('.main-menu li>i').click(function(event) {
		// $(this).prev().slideToggle("400");
		$(this).parent().find(".sub-menu").slideToggle("400");
		$(this).toggleClass('active');
	});

     $('#project').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});
     $('#owl-news').owlCarousel({
		    loop:true,
		    autoplay:true,
		    margin:0,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		});
          $('#owl-img').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:2
		        },
		        1000:{
		            items:4
		        }
		    }
		});
          $('#owl-doitac').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})
           $('#project .owl-nav').appendTo('.nav-control');
           $('#owl-news .owl-nav').appendTo('.nav-control2');
           $('#owl-img .owl-nav').appendTo('.nav-control3');
           // $(this).addClass("disable")
           // $('#owl-doitac .owl-nav').appendTo('.nav-control4');
});
 	$(window).load(function() {
        $('#slider').nivoSlider();
    });


   

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }    
    if ($(window).scrollTop() >= 300) {
        $('.goto-top').slideDown();
    } else {
        $('.goto-top').slideUp();
    }    
});
$('.goto-top').click(function() {
    $("html, body").animate({ scrollTop: '0' }, 600);
});

$(document).ready(function() {
    
    if ($(window).width() > 767) {    
        setTimeout(function(){
            $("#ddlProgramInterested").select2({
                minimumResultsForSearch: Infinity
            }),        
            $("#ddlProgram").select2({
                minimumResultsForSearch: Infinity
            });          
        }, 5000); 
    }
    
    $("#txtCity").click(function(){
        var x = $("#ui-id-1").position();
        alert("Top position: " + x.top + " Left position: " + x.left);
    });    
    
      $(".cu-btn").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top -150
        }, 900, function(){
          window.location.hash = hash;
          });
        } // End if
      });    

    $('.partner-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.apply-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.rankings-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.feature-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });    

    function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
    }

    if (/iP(hone|od|ad)/.test(navigator.platform)) {    
        ver = iOSversion();

        if (ver[0] < 14) {                                    

            $('img').each(function () {
                if($(this).hasClass('ptrans')){
                    $(this).attr('src', $(this).attr('src').replace(/.webp/g, '.png'));
                }
                else if($(this).hasClass('jpdiv')){
                    $(this).attr('src', $(this).attr('src').replace(/.webp/g, '.jpg'));
                } 
                else {}
            });

            $('div').each(function () {
                if($(this).hasClass('jpdiv')){
                    $(this).attr('style', $(this).attr('style').replace(/.webp/g, '.jpg'));
                }
            })        
        }
    }
});


$('.locationcontainer').hover(function() {
    $(this).animate({
        height: 'auto'
    }, 213);
    $('.locationtext').fadeIn(700);
},function() {
    $('.locationtext').fadeOut(500);
    $(this).delay(200).animate({
        height: 'auto'
    }, 213);
});


window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $('#home').css({'height': vph + 'px'});
}

$(function() {
    $('#pagelinks').find('a').on('click', function(e) {
        e.preventDefault();
        $.scrollTo($(this).attr('href'), {
            axis : 'y',
            duration : 500,
             offset: -80
        });
        return false;
    });

    $('#pagelinks > li:nth-child(3) > a').on('click', function(e) {
        e.preventDefault();
        $.scrollTo($(this).attr('href'), {
            axis : 'y',
            duration : 500,
             offset: 0
        });
        return false;
    });

    $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()); 

    if($.browser.chrome){
        $('#home, #about').each(function() {
            if (!isMobile.any()) {
                $(this).parallax('50%', -1, true);
            } else {
                $(this).css('background-attachment', 'fixed');
            }
        });

    } else {
        $('#home').each(function() {
            $(this).parallax('50%', -0.3, false);
        }); 

        $('#about').each(function() {
            $(this).parallax('50%', 0.3, false);
        });

        $('#about').css({
            backgroundAttachment: 'fixed'
        });  
    }

    resizeDiv();
});


Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
Galleria.run('#galleria', {
    picasa: 'useralbum:108497817430727434872/Deis3D',
    height: 650,
    responsive: true,
    imageCrop: false,
    extend: function() {
        var gallery = this;
        this.attachKeyboard({
            left: this.prev,
            right: this.next,
            13: function() {
                this.play(3000);
            }
        });
    }
});


$("#noahimg, #noahover")
.mouseenter(function() {
    $("#noahover").toggleClass('hover');
    $("#noahimg").css("transition", "opacity 0.4s");
    $("#noahimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#noahover").toggleClass('hover');   
    $("#noahimg").css("opacity", 0.8);  
});

$("#samirimg, #samirhover")
.mouseenter(function() {
    $("#samirhover").toggleClass('hover');
    $("#samirimg").css("transition", "opacity 0.4s");
    $("#samirimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#samirhover").toggleClass('hover');
    $("#samirimg").css("opacity", 0.8);  
});

$("#lukaimg, #lukahover")
.mouseenter(function() {
    $("#lukahover").toggleClass('hover');
    $("#lukaimg").css("transition", "opacity 0.4s");
    $("#lukaimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#lukahover").toggleClass('hover');   
    $("#lukaimg").css("opacity", 0.8);  
});

$("#joeimg, #joehover")
.mouseenter(function() {
    $("#joehover").toggleClass('hover');
    $("#joeimg").css("transition", "opacity 0.4s");
    $("#joeimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#joehover").toggleClass('hover');   
    $("#joeimg").css("opacity", 0.8);  
});

$("#emilyimg, #emilyhover")
.mouseenter(function() {
    $("#emilyhover").toggleClass('hover');
    $("#emilyimg").css("transition", "opacity 0.4s");
    $("#emilyimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#emilyhover").toggleClass('hover');   
    $("#emilyimg").css("opacity", 0.8);  
});

$("#primg, #prhover")
.mouseenter(function() {
    $("#prhover").toggleClass('hover');
    $("#primg").css("transition", "opacity 0.4s");
    $("#primg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#prhover").toggleClass('hover');   
    $("#primg").css("opacity", 0.8);  
});

$("#benimg, #benhover")
.mouseenter(function() {
    $("#benhover").toggleClass('hover');
    $("#benimg").css("transition", "opacity 0.4s");
    $("#benimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#benhover").toggleClass('hover');   
    $("#benimg").css("opacity", 0.8);  
});

$("#gabeimg, #gabehover")
.mouseenter(function() {
    $("#gabehover").toggleClass('hover');
    $("#gabeimg").css("transition", "opacity 0.4s");
    $("#gabeimg").css("opacity", 0.5);
})
.mouseleave(function() {
    $("#gabehover").toggleClass('hover');   
    $("#gabeimg").css("opacity", 0.8);  
});
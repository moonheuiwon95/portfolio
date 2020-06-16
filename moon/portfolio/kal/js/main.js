Splitting();

let mainVisual = new Swiper('#mainVisual', {
    speed: 1000,
    effect: 'fade',
    loop: true,
    pagination: {
        el: '#mainVisual .pagination .bullets',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
    // navigator: {
    //     prevEl:"mainVisual .prev",
    //     nextEl:"mainVisual .next"
    // }
});

mainVisual.on('slideChange', function() {
    let idx = mainVisual.realIndex;
    if (idx === 0) {
        time01.restart();
    } else if (idx === 1) {
        time02.restart();
    } else if (idx === 2) {
        time03.restart();
    }
});

let gnb = $('#gnb .list > li');

let header = $('#header');
let btnStop = $('#mainVisual .btnStop');
let btnPlay = $('#mainVisual .btnPlay');

btnStop.on('click', function() {
    mainVisual.autoplay.stop();
    btnPlay.style.display = 'block';
    btnStop.style.display = 'none';
});
btnPlay.on('click', function() {
    mainVisual.autoplay.start();
    btnStop.style.display = 'block';
    btnPlay.style.display = 'none';
});

gnb.on('mouseenter', function() {
    header.addClass('open');
});
gnb.on('mouseleave', function() {
    header.removeClass('open');
});

let time01 = gsap.timeline({});
time01
    .from('#mainVisual .visual01 .txtBox .sub', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: Power1.easeOut
        // easeIn, easeOut , easeInOut
        // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
    })
    .from(
        '#mainVisual .visual01 .txtBox .main .char',
        {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: Power2.easeOut
            // easeIn, easeOut , easeInOut
            // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
        },
        0.5
    );
let time02 = gsap.timeline({ paused: true });
time02
    .from('#mainVisual .visual02 .txtBox .sub', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: Power1.easeOut
        // easeIn, easeOut , easeInOut
        // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
    })
    .from(
        '#mainVisual .visual02 .txtBox .main .char',
        {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: Power2.easeOut
            // easeIn, easeOut , easeInOut
            // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
        },
        0.5
    );
let time03 = gsap.timeline({ paused: true });
time03
    .from('#mainVisual .visual03 .txtBox .sub', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: Power1.easeOut
        // easeIn, easeOut , easeInOut
        // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
    })
    .from(
        '#mainVisual .visual03 .txtBox .main .char',
        {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: Power2.easeOut
            // easeIn, easeOut , easeInOut
            // Power1~4 :  속도감 다름 ,Elastic ,Back, Bounce ,Linear.easeNone
        },
        0.5
    );

$(window).on('scroll', function() {
    let st = $(window).scrollTop();
    if (st > 0) {
        header.addClass('expanded');
    } else {
        header.removeClass('expanded');
    }
    if (st > 300) {
        btnTop.addClass('show');
    } else {
        btnTop.removeClass('show');
    }
});

let btnTop = $('.btnTop');
btnTop.on('click', function() {
    gsap.to('html,body', {
        scrollTop: 0,
        duration: 1,
        ease: Power4.easeOut
    });
});

$('#popup .btnClose').on('click', function() {
    gsap.to('#popup', {
        y: -1500,
        ease: 'back.in',
        duration: 1,
        onComplete: function() {
            $('.popupWrap').remove();
            $('body').removeClass('bodyHidden');
        }
    }); //fadeOut() 또는 hide() 사용가능;

    return false;
});
$('#popup .btnOneday').on('click', function() {
    gsap.to('#popup', {
        y: -1500,
        ease: 'back.in',
        duration: 1,
        onComplete: function() {
            $('.popupWrap').remove();
            $('body').removeClass('bodyHidden');
        }
    }); //hide();
    Cookies.set('oneday', 'one', { expires: 1 });
    return false;
});
let oneday = Cookies.get('oneday');
// console.log(Cookies.get('oneday'));
if (oneday === 'one') {
    $('.popupWrap').remove();
    $('body').removeClass('bodyHidden');
} else {
    gsap.from('#popup', {
        y: -1500,
        ease: 'back.out',
        duration: 1,
        delay: 1
    });
}
let drawLine;
let aboutPosY;
if ($('#about').length > 0) {
    aboutPosY = $('#about').offset().top;
}

console.log('TCL: aboutPosY', aboutPosY);
gsap.registerPlugin(DrawSVGPlugin);
gsap.set('.drawLine', {
    drawSVG: '0%',
    ease: 'none'
});
$(window).on('scroll', function() {
    let st = $(this).scrollTop();
    if (st > aboutPosY - 300) {
        if (!$('#about').hasClass('draw')) {
            gsap.to('.drawLine', {
                drawSVG: '100%',
                ease: 'none',
                duration: 1
            });
            $('#about').addClass('draw');
        }
    }
});

// subVisual 공통
gsap.registerPlugin(CSSRulePlugin);
let subVisualAfter = CSSRulePlugin.getRule('#subVisual .subTitleEn:after');
let subVisualTL = gsap.timeline();

subVisualTL
    .from('#subVisual', {
        duration: 1.2,
        scale: 1.2,
        ease: 'power2.out'
    })
    .from('#subVisual .subTitleKr .char', {
        duration: 1,
        y: -20,
        stagger: 0.05,
        ease: 'power2.out',
        opacity: 0
    })
    .from('#subVisual .subTitleEn .char', {
        duration: 1,
        y: 50,
        stagger: 0.05,
        ease: 'power2.out',
        opacity: 0
    })
    .from('#subVisual .subTxt', {
        duration: 1.2,
        y: -200,
        ease: 'power2.out',
        opacity: 0
    })
    .from(subVisualAfter, {
        duration: 1,
        cssRule: { opacity: 0 }
    });

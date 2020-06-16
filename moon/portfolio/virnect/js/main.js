Splitting(); 

AOS.init();

var time01 = gsap.timeline({});
time01.from("#mainVisual .title .t01",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#mainVisual .title img",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})

.from("#mainVisual .title .t02",{
    duration:0.5,
    y:100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#mainVisual .title strong",{
   duration:0.5,
   y:100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#mainVisual .title .skill",{
   duration:0.5,
    y:100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})

var time02 = gsap.timeline({});
time02.from("#remotemainVisual .txtBox .main",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#remotemainVisual .txtBox .slash",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#remotemainVisual .txtBox .txt",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})
.from("#remotemainVisual .txtBox button",{
    duration:0.8,
    y:-100,
    // transformX와 같은의미
    opacity:0,
    ease:Power2.easeOut,
    // easeIn,easeOut,easeInOut
    // power1~4,Elastic,back,bounce,Linear.easeNone
})





// 끝나기 3초전에 실행하기


var btnTop =$(".top");
btnTop.on("click",function(){
    gsap.to("html,body",{scrollTop:0,duration:1,ease:Power4.easeOut});
});

new Swiper("#ar .swiper-container",{
    loop:true,
    navigation: {
        nextEl: '#ar .prev',
        prevEl: '#ar .next',
    },
    on: {
        slideChangeTransitionEnd:function() {
            $(".number .num").text("0"+(this.realIndex+1))
        }
    }    
})

new Swiper("#use .swiper-container",{
    navigation: {
        nextEl: '#use .next',
        prevEl: '#use .prev',
    },
    on: {
        slideChangeTransitionEnd:function() {
            $(".pag .num01").text("0"+(this.realIndex+1))
        }
    }    
})
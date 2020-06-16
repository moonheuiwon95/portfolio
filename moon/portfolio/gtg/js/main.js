$("#gnb .gnbList > li").on("mouseenter",function(){
    $("#gnb").addClass("on");
    $("#header").addClass("on");
    $("#gnb .depth02").stop().slideDown(200);
});
$("#gnb .gnbList > li").on("mouseleave",function(){
    $("#gnb").removeClass("on");
    $("#header").removeClass("on");
    $("#gnb .depth02").stop().slideUp(50);
});

let mainVisual = new Swiper("#mainVisual",{
    effect:"fade",
    fadeEffect: {
        crossFade:true
    },
    loop:true,
    speed:1000,
    autoplay: {
        delay:5000,
    },
    pagination: {
        el:"#mainVisual .pagination .bullets",
        clickable:true
    }
})
$("#mainVisual .btnStop").on("click",function(){
    mainVisual.autoplay.stop();
    $(this).hide();
    $(this).parent().find(".btnPlay").show();
})
$("#mainVisual .btnPlay").on("click",function(){
    mainVisual.autoplay.start();
    $(this).hide();
    $(this).parent().find(".btnStop").show();
})

let txtSlider = new Swiper("#media .mainBox .txtSlider",{
    effect: "fade",
    loop:true,
    speed:1000,
    autoplay: {
        delay:5000,
    },
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    },
    pagination: {
        el:"#media .pagination .bullets",
        clickable:true
    }
});
let imgSlider = new Swiper("#media .mainBox .imgSlider",{
    effect: "fade",
    loop:true,
    speed:1000,
    autoplay: {
        delay:5000,
    },
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    },
    pagination: {
        el:"#media .pagination .bullets",
        clickable:true
    }
});
let listSlider = new Swiper("#media .listBox .mask",{
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    speed:1000,
    autoplay: {
        delay:5000,
    },
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    },
    pagination: {
        el:"#media .pagination .bullets",
        clickable:true
    }
});

gsap.to("#mainVisual .cover div",{
    scaleX:0,
    // delay:0.5,
    duration:0.8,
    ease:"power4.out",
    // stagger:{
        // each:0.15
    // },
    onComplete:function() {
        $("#mainVisual .cover").remove();
    }
})
$("#header .btnAll").on ("click",function(){
    // $("#sitemap").addClass("on");
    // sitemap.timeScale(1);
    sitemap.restart();
});
$("#sitemap .btnClose").on ("click",function(){
    // $("#sitemap").removeClass("on");
    // sitemap.timeScale(3);
    sitemap.reverse();
});

let before = CSSRulePlugin.getRule("#sitemap .gnbList > li:before");
let sitemap = gsap.timeline({paused:true});
sitemap.to("#sitemap",{
    autoAlpha:1,
    duration:0.25,
    ease:"power4"
})
.from("#sitemap .gnbList > li",{
    autoAlpha:0,
    duration:1,
    ease:"power4",
    // stagger:{
    //     each:0.05,
    // }
})
.to(before,{
    duration:1,
    width:"100%",
    ease:"power4",
},"-=1");

new fullpage("#main", {
    onLeave:function(origin,destination,direction){
        let pageIdx = destination.index;
        if(pageIdx===1 || pageIdx===3 || pageIdx===4){
            $("#header").addClass("color");
        } else {
            $("#header").removeClass("color");
        }
    }
})

$(".faqList li").on("click",function(){
    $(this).find("dd").stop().slideToggle(200);
    $(this).siblings().find("dd").stop().slideUp(200);
})
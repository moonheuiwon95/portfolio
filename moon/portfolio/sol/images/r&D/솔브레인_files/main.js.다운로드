var mainVisual = new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction:false,
    },
    pagination: {
        el: "#mainVisual .pagination .bullets",
        //type: 'bullets',
        clickable:true,
    },
    navigation: {
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext"
    }
});

var partners = new Swiper("#partners .mask",{
    speed:1000,
    loop:true,
    slidesPerView:"auto",
    spaceBetween:50,
    navigation: {
        prevEl:"#partners .btnPrev",
        nextEl:"#partners .btnNext"
    }
});

var gnb = $("#gnb > .list > li");
var header = $("#header");

var btnStop = $("#mainVisual .btnStop");
var btnPlay = $("#mainVisual .btnPlay");

var btnLanguage = $("#header .utilMenu .language > a");
btnLanguage.on("click",function(){
    $(this).next().stop().slideToggle(400);
    return false;
});

btnStop.on("click",function(){
    mainVisual.autoplay.stop();
    btnPlay.style.display="block";
    btnStop.style.display="none";
});

btnPlay.on("click",function(){
    mainVisual.autoplay.start();
    btnStop.style.display="block";
    btnPlay.style.display="none";
});


gnb.on("mouseenter",function(){
    header.addClass("on");
});
gnb.on("mouseleave",function(){
    header.removeClass("on");
});

$("#header .btnAll").on("click",function(){
    $("#header #gnbAll").slideToggle();
    $(this).toggleClass("on");
    return false;
});


var btnTop = $(".btnTop");
btnTop.on("click",function(){
    gsap.to("html,body",{scrollTop:0,duration:1,ease:Power4.easeOut});
});

// 메뉴바를 열고닫을 때 쓴다.
var lnb = $("#lnb .listBox > a");
lnb.on("click",function(e) {
    e.preventDefault();
    $(this).next().stop().slideToggle();
});

var tab = $(".tabList > li");
tab.on("click",function(e){
    e.preventDefault();
    var targetContents = $(this).parent().data("tab-contents");
    $(targetContents).children("li").eq($(this).index()).addClass("on");
    $(targetContents).children("li").eq($(this).index()).siblings().removeClass("on");
    $(this).siblings().removeClass("on")
    $(this).addClass("on");
});


$(window).on("scroll",function(){
    var st = $(window).scrollTop();
    if(st>0) {
        header.addClass("scroll");
    } else{
        header.removeClass("scroll");
    }
});
//jQuery: dom (Document Object Model의 약자)
//jQuery javas

let businessPosY = document.querySelector("#business").offsetTop;

window.addEventListener("scroll",function(){
    let st = this.scrollY;
    if(st>1200){
        businessTL.resume();
    }
});


new fullpage("#main",{
    navigation: true,
    navigationTooltips: ["","","","","",""],
    showActiveTooltip: true,
    onLeave: function(section, destination) {
        let idx = destination.index;
        if (idx===0){
            mainTL.restart();
        } else if (idx===1) {
            businessTL.restart();
        } else if (idx===2) {
            rndTL.restart();
        } else if (idx===3) {
            visionTL.restart();
        } else if (idx===4) {
            socialTL.restart();
        }
    }
});
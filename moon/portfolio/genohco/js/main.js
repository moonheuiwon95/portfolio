// $("#gnb .gnbList > li").on("mouseenter",function(){
//     $(this).find(".depth02").show();
//     gsap.killTweensOf($(this).find(".depth02 > li"));        
//     $(this).find(".depth02 > li").removeAttr("style");
//     gsap.to( $(this).find(".depth02 > li") ,{
//         opacity:1,
//         ease:"power3",
//         delay:0.3,
//         stagger: {
//             each:0.1
//         }
//     });
// });
// $("#gnb .gnbList > li").on("mouseleave",function(){
//     gsap.killTweensOf($(this).find(".depth02 > li"));    
//     $(this).find(".depth02 > li").removeAttr("style");
//     $(this).find(".depth02").hide();
// });

$(window).on("resize",function(){
    let w = $(window).width()+17;
    if(w<1220){
        $("body").addClass("mobile");
        $("body").removeClass("pc");
    } else {
        $("body").removeClass("mobile");
        $("body").addClass("pc");
        $(".btnAll").removeClass("on");
        $("#gnb").removeClass("on");
    }
});
$(window).trigger("resize");


$(".btnAll").on("click",function() {
    if($("body").hasClass("mobile")){
        $("#gnb").toggleClass("on");
        $(this).toggleClass("on");
    }
})
let mainVisual = new Swiper("#mainVisual .mask",{
    effect:"fade",
    speed:300,
    autoplay: {
        delay:5000,
        disableOnInteraction:false,
    },
    on: {
        slideChange: function () {
            $("#mainVisual .pagination li").removeClass("on");
            $("#mainVisual .pagination li").eq(this.realIndex).addClass("on");
        },
    },
});
$("#mainVisual .pagination li").on("mouseenter",function() {
    mainVisual.slideTo($(this).index());
})

let partner = new Swiper("#mainContents .partner .mask",{
    speed:500,
    slidesPerView:5,
    slidesPerColumn:2,
    loop:true,
    autoplay: {
        delay:2000,
        disableOnInteraction:false,
    },
});
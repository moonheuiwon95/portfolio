new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    navigation: {
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    autoplay: {
        delay:3000,
    }
});
var gnb = document.querySelectorAll("#gnb .list > li");
var header= document.querySelector("#header");
for(var i=0;i<4;i++){
    var item = gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("open");
    });
    item.addEventListener("mouseleave",function(){
        header.classList.remove("open");
    });
}

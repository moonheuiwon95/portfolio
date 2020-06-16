Splitting();

var mainVisual = new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    autoplay: {
        delay: 5000,
        disableOnInteraction:false,
    },
    navigation:{
        prevEl:"#mainVisual .btnp",
        nextEl:"#mainVisual .btnn",
    }
});
console.log(window);
var header = document.querySelector("#header")
var h = window.innerHeight;
//console.log(h);
window.addEventListener("resize",function(){
    h = window.innerHeight;
});
window.addEventListener("scroll",function(){
    //console.log(scrollY);
    var st = this.scrollY;
    if(st > h) {
        header.classList.add("on")
    } else {
        header.classList.remove("on")
    }
});
mainVisual.on("slideChange",function(){
    console.log("바꼈다!");
    console.log(mainVisual.realIndex);
    var idx = mainVisual.realIndex;
    var activeIdx = mainVisual.realIndex;
    if(idx===0){
        time01.restart();
    } else if(idx===1){
        time02.restart();
    } else if(idx===2){
        time03.restart();
    }
});
var time01 = gsap.timeline({});
time01.from("#mainVisual .visual01 .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut
    // 옵션 easeIn, easeOut, easeInOut
    // power1~4, Elastic, Back, Bounce, Linear.easeNone
})
.from("#mainVisual .visual01 .txtBox .main .char",{
    duration:2,
    y:-200,
    opacity:0,
    stagger:0.05,
    ease:Bounce.easeOut
},0.5);
// },"-=5"); 끝나기 5초(몇초)전에 끝남.
var time02 = gsap.timeline({paused:true});
time02.from("#mainVisual .visual02 .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut
})
.from("#mainVisual .visual02 .txtBox .main .char",{
    duration:2,
    y:-200,
    opacity:0,
    stagger:0.05,
    ease:Bounce.easeOut
},0.5);
var time03 = gsap.timeline({paused:true});
time03.from("#mainVisual .visual03. .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut
})
.from("#mainVisual .visual03 .txtBox .main .char",{
    duration:2,
    y:-200,
    opacity:0,
    stagger:0.05,
    ease:Bounce.easeOut
},0.5);

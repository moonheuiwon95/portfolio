$(document).ready(function(){
    var typed = new Typed ('#typingTxt', {
        stringsElement: "#dummyTxt",
        typeSpeed: 200,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
    });
});
let clearID;
let sound = new Howl ({
    // src:["../sound/한동근 - 보통 같으면.mp3"],
    src:["../sound/시청 앞 지하철 역에서 - 곽진언.mp3"],
    autoplay: true,
    loop: true,
});
$(".btnPause").on("click",function() {
    sound.pause();
    $(".btnPause").hide();
    $(".btnPlay").show();
    clearInterval(clearID);
    return false;
});

function addZero(num) {
    if(num<10) {
        return "0"+num;
    } else {
        return num;
    }
}
$(".btnPlay").on("click",function() {
    sound.play();
    $(".btnPause").show();
    $(".btnPlay").hide();
    clearID = setInterval(() =>{
        // console.log("seek===",sound.seek());
        let soundPosition = sound.seek();
        let min = addZero(Math.floor(soundPosition/60));
        let sec = addZero(Math.floor(soundPosition)%60);
        let totalMin = addZero(Math.floor(duration/60));
        let totalSec = duration%60;
        let txtDuration = totalMin+":"+totalSec+"/"+min+":"+sec;
        $(".txtDuration").text(txtDuration);
    },50)
    return false;
});
sound.play();

sound.on("end",function(){
    clearInterval(clearID);
});
sound.on("load",function(){
    duration = Math.round(sound._duration);
    // duration = Math.round(sound._duration);
    // console.log(duration);
    // clearID = setInterval(() =>{
    //     duration--;
    //     let min = Math.floor(duration/60);
    //     let sec = duration%60;
    //     let txtDuration = min+":"+sec;
    //     console.log(txtDuration);
    //     $(".txtDuration").text(txtDuration);
    // },1000)
});
sound.on("play",function(){
    console.log("play!");
});
//sound.play();
let moveCloud = function(mc) {
    gsap.set(mc,{left:"-50%",scale:Math.random()*0.07+0.05,top:Math.random()*50+10});
    gsap.to(mc,{duration:Math.random()*90+10,left:"100%",onComplete:()=> {
        moveCloud(mc)
    }})
}
$(".cloudBox span").each(function(i,el) {
    moveCloud($(this));
});


$(document).ready(function(){
    let posX = 0;
    let posY=0;
    let imgNum = 1;
    $(window).on("mousewheel",function(e){
        let wheel = e.originalEvent.deltaY;
        if(wheel>0){
            posX+=Math.random()*30+20;
            posY+=Math.random()*10+10;
            gsap.set($(".human02"),{
                scaleX:1,

            })    
        } else {
            posX-=Math.random()*10+10;
            posY-=Math.random()*10+10;
            gsap.set($(".human02"),{
                scaleX:-1
            })    
        }
        console.log("TCL: posX", posX)
        gsap.to($(".human02"),{
            x:posX,
            y:posY,
        })
    });
    setInterval(function(){
            imgNum++;
            if(imgNum>7) {
                imgNum = 1;
            }
        let imgSrc = `../images/main/human02/Te_${imgNum}.png`;
        $(".human02 img").attr({"src":imgSrc});
    },100)
})

let mainTL = gsap.timeline({repeat : 999});
mainTL
    .from("#subPageMyInfo .imgBox .txt .designTxt span", {
        duration : 0.5,
        scale : 1.1,
        opacity : 0.2,
        stagger : {
            each : 0.8,        
        }
    });
    



//  첫번째 페이지 여자애 내려오는 부분
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#girl", {
  duration: 15, 
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: false,
    alignOrigin: [0.5, 0.5]
  }
});

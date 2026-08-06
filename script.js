const startDate = new Date("2026-08-02T00:00:00");


// الرسالة التي ستظهر لحلا

const message = `
حلا ❤️

منذ اللحظة التي دخلتِ فيها حياتي أصبح لكل شيء معنى أجمل.

ضحكتكِ تجعل أيامي أفضل،
وجودكِ يجعل قلبي أكثر سعادة،
وأنتِ أجمل قصة أتمنى أن تستمر للأبد.

أعدكِ أن أبقى بجانبك،
وأصنع معكِ أجمل الذكريات.

أحبك يا حلا ❤️❤️❤️
`;


let index = 0;


// كتابة الرسالة حرف حرف

function typeWriter(){

if(index < message.length){

document.getElementById("typing").innerHTML += 
message.charAt(index);

index++;

setTimeout(typeWriter,70);

}

}




function openLove(){

document.getElementById("love")
.scrollIntoView({
behavior:"smooth"
});


let music=document.getElementById("music");

music.play();

typeWriter();

}





// العداد

function updateCounter(){

const now = new Date();

const diff = now - startDate;


document.getElementById("days").innerHTML =
Math.floor(diff/(1000*60*60*24));



document.getElementById("hours").innerHTML =
Math.floor(diff/(1000*60*60)%24);



document.getElementById("minutes").innerHTML =
Math.floor(diff/(1000*60)%60);



document.getElementById("seconds").innerHTML =
Math.floor(diff/1000%60);

}


setInterval(updateCounter,1000);

updateCounter();





// قلوب متساقطة

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";


heart.innerHTML=[
"❤️",
"💕",
"💖",
"💗",
"💘"
][Math.floor(Math.random()*5)];



heart.style.left=Math.random()*100+"vw";


heart.style.fontSize=
(20+Math.random()*40)+"px";



heart.style.animationDuration=
(4+Math.random()*6)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},10000);

}



setInterval(createHeart,300);






// زر المفاجأة

function showLove(){

document.getElementById("secret").innerHTML =
"حلا ❤️ أنتِ أجمل شيء حصل لي في هذه الحياة 💖";


for(let i=0;i<30;i++){

createHeart();

}

}
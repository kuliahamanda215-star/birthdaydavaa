/* ==========================================
   BIRTHDAY WEBSITE
   JS FINAL - BAGIAN 1
========================================== */

// ======================
// ELEMENT
// ======================

const pages = document.querySelectorAll(".page");

const loading = document.getElementById("loading");

const startBtn = document.getElementById("startBtn");

const letterBtn = document.getElementById("letterBtn");

const closePopup = document.getElementById("closePopup");

const popup = document.getElementById("popup");

const music = document.getElementById("music");

const days = document.getElementById("days");

const hours = document.getElementById("hours");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

let unlocked = false;


// ======================
// LOADING
// ======================

window.addEventListener("load", () => {

    createStars();

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

            showPage("opening");

        },800);

    },1800);

});


// ======================
// SHOW PAGE
// ======================

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList
        .add("active");

}


// ======================
// START BUTTON
// ======================

startBtn.addEventListener("click",()=>{

    showPage("countdownPage");

});


// ======================
// POPUP
// ======================

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});


// ======================
// COUNTDOWN
// ======================

const targetDate = new Date("2026-07-03T00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        unlocked = true;

        days.textContent="00";
        hours.textContent="00";
        minutes.textContent="00";
        seconds.textContent="00";

        return;

    }

    const d = Math.floor(distance/(1000*60*60*24));

    const h = Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );

    const m = Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const s = Math.floor(
        (distance%(1000*60))
        /1000
    );

    days.textContent = String(d).padStart(2,"0");
    hours.textContent = String(h).padStart(2,"0");
    minutes.textContent = String(m).padStart(2,"0");
    seconds.textContent = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


// ======================
// LETTER BUTTON
// ======================

letterBtn.addEventListener("click",()=>{

    if(!unlocked){

        popup.style.display="flex";

        return;

    }

    music.play().catch(()=>{});

    showPage("letterPage");

    typeLetter();

});


// ======================
// STARS
// ======================

function createStars(){

    const stars = document.getElementById("stars");

    for(let i=0;i<120;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*5+"s";

        stars.appendChild(star);

    }

}

/* ==========================================
   BIRTHDAY WEBSITE
   JS FINAL - BAGIAN 2
========================================== */

// ======================
// ELEMENT TAMBAHAN
// ======================

const letterText = document.getElementById("letterText");
const nextBtn = document.getElementById("nextBtn");
const wishBtn = document.getElementById("wishBtn");
const giftBtn = document.getElementById("giftBtn");
const restartBtn = document.getElementById("restartBtn");
const giftBox = document.getElementById("giftBox");


// ======================
// ISI SURAT
// ======================

const message = `Happy birthday sayanggg 🤍

Panjang umur, sehat selalu, rezekinya lancar, tambah sayang sama adikk.

Semoga tiap langkahmu diberi keberkahan.
Semoga segala hal baik yang kamu doakan dikabulkan satu per satu. ✨

Terima kasih sudah hadir di hidup adik dan bertahan sampai sekarang ya sayang.

Adik tahu semua ini nggak gampang.
Tapi adik percaya kalau kamu orangnya.

Cuma kamu yang bisa melewati semuanya.

Maaf ya adik belum bisa nemuin kamu langsung.
Tapi adik selalu berusaha kasih yang terbaik buat kamu.

Hope u always happy sayang.

Adik bangga banget sama kamu.
Selalu.

Terima kasih karena selalu berusaha,
selalu kuat,
dan selalu jadi orang hebat.

Jangan pernah lupa kalau ada adik
yang selalu percaya,
selalu dukung,
dan selalu bangga sama kamu.

I Love You.

— Amanda`;


// ======================
// TYPING EFFECT
// ======================

function typeLetter(){

    letterText.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        letterText.innerHTML += message.charAt(i);

        letterText.scrollTop = letterText.scrollHeight;

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },35);

}


// ======================
// NEXT
// ======================

nextBtn.addEventListener("click",()=>{

    showPage("wishPage");

});


// ======================
// WISH
// ======================

wishBtn.addEventListener("click",()=>{

    createConfetti();

    alert("Semoga semua harapanmu terkabul ya 🤍");

    showPage("giftPage");

});


// ======================
// GIFT
// ======================

giftBtn.addEventListener("click",()=>{

    giftBox.innerHTML = "🤍";

    createConfetti();

    showPage("endingPage");

});


// ======================
// RESTART
// ======================

restartBtn.addEventListener("click",()=>{

    location.reload();

});

/* ==========================================
   BIRTHDAY WEBSITE
   JS FINAL - BAGIAN 3
========================================== */

// ======================
// CONFETTI
// ======================

function createConfetti(){

    const container=document.getElementById("confetti");

    if(!container) return;

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDelay=(Math.random()*2)+"s";

        piece.style.opacity=Math.random();

        piece.style.transform=`rotate(${Math.random()*360}deg)`;

        container.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}


// ======================
// HEART EFFECT
// ======================

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.pointerEvents="none";
    heart.style.fontSize="20px";
    heart.style.zIndex="99999";
    heart.style.transition="1.5s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform="translateY(-120px) scale(2)";
        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },1500);

});


// ======================
// AUTO MUSIC
// ======================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        music.pause();

    }else{

        if(unlocked){

            music.play().catch(()=>{});

        }

    }

});


// ======================
// COUNTDOWN FINISH
// ======================

const originalUpdate = updateCountdown;

updateCountdown = function(){

    originalUpdate();

    if(unlocked && !window.__birthdayStarted){

        window.__birthdayStarted=true;

        createConfetti();

        music.play().catch(()=>{});

    }

};


// ======================
// ENTER KEY
// ======================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && unlocked){

        showPage("letterPage");

        typeLetter();

    }

});


// ======================
// END MESSAGE
// ======================

console.log(
"%cHappy Birthday Bryand 🤍",
"color:white;font-size:22px;font-weight:bold;"
);

console.log(
"%cWebsite dibuat oleh Amanda 🤍",
"color:#bbbbbb;font-size:16px;"
);
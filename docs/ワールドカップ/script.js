const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll(".card,.host,.analysis-card,.gallery-grid img,.section")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/*==========================
    Counter Animation
==========================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.dataset.target;

        const count=+counter.innerText;

        const increment=Math.ceil(target/speed);

        if(count<target){

            counter.innerText=count+increment;

            requestAnimationFrame(update);

        }else{

            counter.innerText=target;

        }

    }

    update();

});


/*==========================
    Navbar Background
==========================*/

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background="rgba(5,8,22,.85)";

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background="rgba(5,8,22,.35)";

        nav.style.boxShadow="none";

    }

});


/*==========================
    Hero Parallax
==========================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let offset=window.pageYOffset;

    hero.style.backgroundPositionY=offset*0.45+"px";

});


/*==========================
    Mouse Glow Effect
==========================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});


/*==========================
    Button Ripple
==========================*/

document.querySelectorAll(".button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


/*==========================
    Smooth Hover Card
==========================*/

document.querySelectorAll(".card,.host,.analysis-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,212,255,.20),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.06)";

    });

});


/*==========================
    Image Zoom
==========================*/

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});


/*==========================
    Loading Animation
==========================*/

window.onload=()=>{

    document.body.classList.add("loaded");

};
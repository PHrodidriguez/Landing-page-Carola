const menu = document.querySelector(".menu");

var lastIndex = 0;

var images = document.querySelectorAll(".catalogo img");

images.forEach((item, index)=>{
    document.querySelectorAll(".bullet-single")[index]
    .addEventListener("click",()=>{
        let lastImage = document.querySelectorAll(".catalogo img")[lastIndex];
        let atualImage = document.querySelectorAll(".catalogo img")[index];
      
         document.querySelectorAll(".bullet-single")[lastIndex]
        .classList.remove('active-bullet');

        ;
         document.querySelectorAll(".bullet-single")[index]
        .classList.add('active-bullet');

        lastImage.style.opacity = 0;
        atualImage.style.opacity = 1;

        lastIndex = index;
    })
})
const scroll = document.querySelector(".arrowdown i").addEventListener("click", function(){
        window.scroll({
        top: 620,
        behavior: "smooth"
       });
       
});
const scrolltwo = document.querySelector(".texto button").addEventListener("click", function(){
    window.scroll({
        top: 1360,
        behavior:"smooth"
    });
});

const home = document.querySelector('header i').addEventListener('click',()=>{
    window.scroll({
        top: -1300,
        behavior: "smooth"
    });
});

 



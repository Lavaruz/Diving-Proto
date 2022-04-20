const coll = document.querySelectorAll('.faq-1-q')

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling
        content.classList.toggle("faq-active");
        let icon = this.firstElementChild.nextElementSibling
        icon.classList.toggle("uil-angle-down");
        icon.classList.toggle("uil-angle-up");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

$('header').ripples({
    resolution: 254,
	dropRadius: 20,
	perturbance: 0.04,
  });

var x = window.matchMedia('(max-width:970px)')
if(x.matches){
    window.addEventListener('load', function () {
        alert(`Ups sorry.
        Mobile version of this website is under construction.`)
        window.location.replace("mobile.html");
    })
    
}




var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '.article',
    triggerHook : .95
})
.setClassToggle('.article','article-scroll')
.addIndicators({
    name:'Article',
    colorTrigger: 'lightblue'
})
.addTo(controller);



var scene = new ScrollMagic.Scene({
    triggerElement: '.faq-1',
    triggerHook : .91,
    // duration : 10000
})
.setClassToggle('.faq-1','faq-slide')
.addIndicators({
    name:'faq',
    colorTrigger: 'pink'
})
.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: '.about-us',
    triggerHook : .95,
})
.setClassToggle('.about-us','article-scroll')
.addIndicators({
    name:'About',
    colorTrigger: 'crimson'
})
.addTo(controller);



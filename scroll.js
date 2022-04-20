var controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    triggerElement: '.merah'
})
.addIndicators()
.setClassToggle('#merah','.fade-in')
.addTo(controller)
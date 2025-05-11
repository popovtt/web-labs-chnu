document.addEventListener("DOMContentLoaded", function () {
    let imgs = [
        { id: 1, name: "Mechanics", img: "/src/images/slider/Work.jpg" },
        { id: 2, name: "Service", img: "/src/images/slider/Great.jpg" },
        { id: 3, name: "Advice", img: "/src/images/slider/Worked.jpeg" },
        { id: 4, name: "Fast Process", img: "/src/images/slider/Osmotr.jpeg" },
        { id: 5, name: "Private", img: "/src/images/slider/Osmotr.jpeg" },
        { id: 6, name: "Great Job", img: "/src/images/pictures/coming_soon.jpg" },
        { id: 7, name: "No Queue", img: "/src/images/pictures/coming_soon.jpg" },
        { id: 8, name: "Good Staff", img: "/src/images/pictures/coming_soon.jpg" },
        { id: 9, name: "Better Life", img: "/src/images/pictures/coming_soon.jpg" },
    ];

    let slider = document.getElementById("services-slider")
    if (slider != null) {
        for (let i = 0; i < imgs.length; i++) {
            let elem = document.createElement("div")
            elem.classList.add("swiper-slide")
            elem.innerHTML = '<img src="' + imgs[i].img + '" alt="' + imgs[i].name + '"><p>' + imgs[i].name + '</p>'
            slider.appendChild(elem)
        }
    }

    var swp = new Swiper(".mySwiper", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        speed: 500,
        effect: "slide",
        navigation: {
            nextEl: ".custom-button-next",
            prevEl: ".custom-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    })
});


let wasAd = false;

function showAdModal() {
    if (wasAd === true) {
        return
    }
    wasAd = true

    let modal = document.getElementById("ad-modal")
    let btn = document.getElementById("ad-close-btn")
    let timer = document.getElementById("ad-timer")
    let sec = 5

    document.body.classList.add("target-lock")
    modal.classList.remove("hidden")

    let interval = setInterval(function () {
        sec = sec - 1
        timer.innerText = sec
        if (sec <= 0) {
            clearInterval(interval)
            btn.disabled = false
            btn.className += " active"
            btn.innerText = "Закрити"
        }
    }, 1000)

    btn.onclick = function () {
        if (btn.disabled != true) {
            modal.classList.add("hidden")
            document.body.classList.remove("target-lock")
        }
    }
}

setTimeout(showAdModal, 1500)

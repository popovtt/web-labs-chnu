window.addEventListener("load", () => {
    const popup = document.getElementById("subscribe-popup");
    const thanks = document.getElementById("thanks-modal");
    const accept = document.getElementById("subscribe-accept");
    const decline = document.getElementById("subscribe-decline");
    const close = document.getElementById("thanks-close-btn");

    if (!localStorage.subscribed) {
        setTimeout(() => popup.classList.remove("hidden"), 300);
    }

    accept.onclick = () => {
        localStorage.subscribed = "true";
        popup.classList.add("hidden");
        thanks.classList.remove("hidden");
    };

    decline.onclick = () => popup.classList.add("hidden");
    close.onclick = () => thanks.classList.add("hidden");
});

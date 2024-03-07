const timer = document.querySelector(".timer");
let time = 30;
const timeId = setInterval(timeOut, 100);
function timeOut() {
    time--;
    if (time === 10) timer.classList.add("animate");
    if (time === 0) {
        clearInterval(timeId);
        timer.style.backgroundImage = "https://ukraflora.ua/image/cache/catalog/image/cache/catalog/bouquets/14.02.23/4837e948-e996-4377-a9c3-9524456d4997-1100x1100.webp";
    }
    timer.textContent = `${time} \u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`;
}

//# sourceMappingURL=index_2.c6d8af99.js.map

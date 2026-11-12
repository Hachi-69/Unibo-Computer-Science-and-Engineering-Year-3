document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("div.slider-image img");

    if (images.length > 0) {
        images[0].classList.add("current");
    }

    images.forEach((img, index) => {
        if (index > 1) {
            img.style.display = "none";
        }
    });

    images.forEach((img, clickedIndex) => {
        img.addEventListener("click", () => {
            if (img.classList.contains("current")) {
                return;
            }

            images.forEach(otherImg => otherImg.classList.remove("current"));
            img.classList.add("current");

            images.forEach((item, index) => {
                if (index >= clickedIndex - 1 && index <= clickedIndex + 1) {
                    item.style.display = "inline-block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

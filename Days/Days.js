document.addEventListener("DOMContentLoaded", function () {
    const days = document.querySelectorAll(".day");
    const boxes = document.querySelectorAll(".box");

    days.forEach((day, index) => {
        day.addEventListener("click", function () {
            const box = boxes[index];

            if (box.classList.contains("active")) {
                box.classList.remove("active");
                box.classList.add("hidden");
            } else {
                boxes.forEach(b => b.classList.remove("active", "hidden"));

                box.classList.add("active");
                box.classList.remove("hidden");
            }
        });
    });
});

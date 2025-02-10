let activeBox = null; 

function hideShow(day) {
    const boxes = document.querySelectorAll(".box");
    const newBox = document.querySelector(`.${day}.box`);

    if (activeBox) {
        activeBox.classList.remove("active"); 
    }

    if (activeBox !== newBox) {
        newBox.classList.add("active"); 
        activeBox = newBox;
    } else {
        activeBox = null; 
    }
}

document.getElementById("animateBtn").addEventListener("click", function () {
    const content = document.getElementById("content");
    content.style.transition = "transform 2s";
    content.style.transform = "scale(1.2)";
});

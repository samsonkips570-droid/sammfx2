document.addEventListener("DOMContentLoaded", function () {
    console.log("SammFX Website Loaded Successfully!");

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            console.log("You clicked:", this.textContent);
        });
    });
});

function reveal() {
    let reveals = document.querySelectorAll(".reveal") 

    reveals.forEach(div => {
        let windowHeight = window.innerHeight;
        let elementTop = div.getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        div.classList.add("active");
        } else {
        div.classList.remove("active");
        }
    }) 

}


window.addEventListener("scroll", reveal);

reveal();
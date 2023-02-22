function reveal() {
    let reveals = document.querySelectorAll(".reveal") 

    reveals.forEach(div => {
        let windowHeight = window.innerHeight
        let elementTop = div.getBoundingClientRect().top
        let elementBottom = div.getBoundingClientRect().bottom
        let elementVisible = 250;

        if ((elementTop < windowHeight - elementVisible) && (elementBottom > windowHeight - elementVisible)) {
        div.classList.add("active");
        } else {
        div.classList.remove("active");
        }
    }) 

}


window.addEventListener("scroll", reveal);

reveal();


const div3 = document.querySelector(".div3");




document.addEventListener("scroll", function () {
    const clientHeight = document.documentElement.clientHeight;
    const skillsY = div3.getBoundingClientRect().y;

    if (clientHeight > skillsY) {

        div3.style.animation = "slideTitleUp2 0.6s 0.4s forwards ease";

    }else{
        div3.style.animation = "";
    }
});







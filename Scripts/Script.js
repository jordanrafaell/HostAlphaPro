// Menu mobile
document.addEventListener("DOMContentLoaded", function(){
    const btnMobile = document.querySelector(".btn_mobile");
    const Mobile = document.querySelector(".list_mobile");

    btnMobile.addEventListener("click", () =>{

        Mobile.classList.toggle("active");

    });
});

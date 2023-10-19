// Menu mobile
document.addEventListener("DOMContentLoaded", function(){
    const btnMobile = document.querySelector(".btn_mobile");
    const Mobile = document.querySelector(".list_mobile");

    Mobile.classList.remove("active")

    btnMobile.addEventListener("click", () =>{

        Mobile.classList.toggle("active");

    });
});

// nav Scroll box-shadow
window.addEventListener("scroll", function() {
    // Altura em que você deseja ativar o box-shadow
    var scrollHeight = 100;
  
    if (window.scrollY >= scrollHeight) {
      document.getElementById("elementToApplyBoxShadow").style.boxShadow = " 0 10px 20px #000";

    } else {
      document.getElementById("elementToApplyBoxShadow").style.boxShadow = "none";
    }
  });
  

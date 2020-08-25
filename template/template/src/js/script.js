//*------------------ibg----------------------
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();
//*-------------------------------------------
//?----------------burger---------------------
$(".icon-menu").click(function (event) {
  $(this).toggleClass("active");
  $(".menu__body").toggleClass("active");
  $("body").toggleClass("lock");
});
//?-------------------------------------------

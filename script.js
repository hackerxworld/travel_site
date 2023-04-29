// Menu Bar
let menu_btn = document.getElementsByClassName("bi-three-dots")[0];
let menu_bx = document.getElementById("menu_bx");

menu_btn.addEventListener("click", () => {
  menu_bx.classList.toggle("ul_active");
});

// Scroll Button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="770" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=naqashbanditravels&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:510px;width:770px;}</style><a href="https://embedgooglemap.2yu.co">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}</style></div></div> */}
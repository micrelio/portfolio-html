// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true,
  });
}


// $(document).ready(function () {
//   $("#titaniumGamers").hide(0);
//   $("#tiendaTitanium").hide(0);
//   $("#primeroscoc").hide(0);
//   $("#guerrasOnline").hide(0);

// $("#titaniumGamers").fadeIn(2000);

// $(window).scroll(function () {
//   var windowHeight = $(window).scrollTop();
//   var titaniumGamers = $("#titaniumGamers").offset();
//   titaniumGamers = titaniumGamers.top/2;
//   var tiendaTitanium = $("#tiendaTitanium").offset();
//   tiendaTitanium = tiendaTitanium.top/2;
//   var primeroscoc = $("#primeroscoc").offset();
//   primeroscoc = primeroscoc.top/2;
//   var guerrasOnline = $("#guerrasOnline").offset();
//   guerrasOnline = guerrasOnline.top/2;

// if (windowHeight <= titaniumGamers) {
//   $("#tiendaTitanium").fadeOut(2000);
// } else {
//   $("#tiendaTitanium").fadeIn(2000);
// }
// if (windowHeight <= titaniumGamers + tiendaTitanium) {
//   $("#primeroscoc").fadeOut(2000);
// } else {
//   $("#primeroscoc").fadeIn(2000);
// }
// if (windowHeight <= titaniumGamers + tiendaTitanium + primeroscoc) {
//   $("#guerrasOnline").fadeOut(2000);
// } else {
//   $("#guerrasOnline").fadeIn(2000);
// }
//    });
// });

// }
// }
// customElements.define("mi-curriculum", miCurriculum);

//Navegación
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

//Carrusel
var $mobileNavTrigger = $(".mobile-nav-bar"),
    $targetMobileNav = $(".mobile-nav"),
    showMobileNavClass = "show-mobile-nav";

$mobileNavTrigger.click(function(){
  $targetMobileNav.toggleClass(showMobileNavClass)});


  

var x = document.getElementById('openbtn');
var y = document.getElementById('nav-list');


function menuBtn() {
  if (x.classList.contains('open')) {

    closeNav();

  } else if (x.classList.contains('close')) {

    openNav();

  }
}


function openNav() {
  x.classList.remove('close');
  x.classList.add('open');
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("main-doc").style.marginLeft = "250px";

}

function closeNav() {
  x.classList.remove('open');
  x.classList.add('close');
  if (window.matchMedia("(max-width:815px)").matches) {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main-doc").style.marginLeft = "0";
  } else {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("main-doc").style.marginLeft = "100px";
  }

}





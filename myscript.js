/* Mobile -> Tablet */
const tabletQuery = window.matchMedia('(min-width: 767px)');

function mobiletablet(e){
  let contpersonalizacao = document.getElementById("selectcor"); 
  let inputcor = document.getElementById("cor");
  let iconlupa = document.getElementById("iconlupa");
  let searchbar = document.getElementById("searchbar");


  if (e.matches) {
  contpersonalizacao.style.display = "flex";
  contpersonalizacao.style.gap = "1rem";
  inputcor.style.margin = "0";
  iconlupa.style.display = "none";
  searchbar.style.display = "inline";
  }
}

tabletQuery.addListener(mobiletablet)
mobiletablet(tabletQuery)

/* Tablet -> Mobile */

const mobileQuery = window.matchMedia('(max-width: 767px)');

function tabletmobile(e){
  let contpersonalizacao = document.getElementById("selectcor"); 
  let inputcor = document.getElementById("cor");
  let iconlupa = document.getElementById("iconlupa");
  let searchbar = document.getElementById("searchbar");


  if (e.matches) {
  contpersonalizacao.style.display = "block";
  contpersonalizacao.style.gap = "0px";
  inputcor.style.margin = "1rem 0px 0px 0px";
  iconlupa.style.display = "inline";
  searchbar.style.display = "none";
  }
}

mobileQuery.addListener(tabletmobile)
tabletmobile(mobileQuery)

/* Menu navbar */

var statusnavbar = 0;

function openSideMenu(){
  if(window.innerWidth <= 1024)
  {
    let iconmenu = document.getElementById("iconmenu");
    let iconx = document.getElementById("iconx");
    let sidemenu = document.getElementById("navcontent");
    statusnavbar = 1;
  
    iconmenu.style.display = "none";
    iconx.style.display = "inline";
    sidemenu.style.width = '253px';
  }
}

function closeSideMenu(){
  if(window.innerWidth <= 1024 || statusnavbar == 2)
  {
    let iconmenu = document.getElementById("iconmenu");
    let iconx = document.getElementById("iconx");
    let sidemenu = document.getElementById("navcontent");
    statusnavbar = 0;

    iconmenu.style.display = "inline";
    iconx.style.display = "none";
    sidemenu.style.width = '0';
  }
}

const desktopQuery = window.matchMedia('(min-width: 1025px)');

function tabletdesktop(e){
  if (e.matches) {
    let contpersonalizacao = document.getElementById("selectcor"); 
    let inputcor = document.getElementById("cor");
    let iconmenu = document.getElementById("iconmenu");

    contpersonalizacao.style.display = "block";
    contpersonalizacao.style.gap = "0px";
    inputcor.style.margin = "1rem 0px 0px 0px";
    iconmenu.style.display = "none";

    if(statusnavbar == 1){ /* Previnir que a navbar esteja fechada quando a width ultrapassa 1024pxs */
      statusnavbar = 2;
      closeSideMenu();
    }
  }
}

desktopQuery.addListener(tabletdesktop)
tabletdesktop(desktopQuery)


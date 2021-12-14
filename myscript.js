/* Mobile -> Tablet */
const tabletQuery = window.matchMedia('(min-width: 767px)');

function mobiletablet(e){
  let contpersonalizacao = document.getElementById("selectcor"); 
  let inputcor = document.getElementById("cor");


  if (e.matches) {
  contpersonalizacao.style.display = "flex";
  contpersonalizacao.style.gap = "1rem";
  inputcor.style.margin = "0";
  }
}

tabletQuery.addListener(mobiletablet)
mobiletablet(tabletQuery)

/* Tablet -> Mobile */

const mobileQuery = window.matchMedia('(max-width: 767px)');

function tabletmobile(e){
  let contpersonalizacao = document.getElementById("selectcor"); 
  let inputcor = document.getElementById("cor");


  if (e.matches) {
  contpersonalizacao.style.display = "block";
  contpersonalizacao.style.gap = "0px";
  inputcor.style.margin = "1rem 0px 0px 0px";
  }
}

mobileQuery.addListener(tabletmobile)
tabletmobile(mobileQuery)

/* Tablet -> Desktop */

const desktopQuery = window.matchMedia('(min-width: 1025px)');

function tabletdesktop(e){
  if (e.matches) {
    let contpersonalizacao = document.getElementById("selectcor"); 
    let inputcor = document.getElementById("cor");

    contpersonalizacao.style.display = "block";
    contpersonalizacao.style.gap = "0px";
    inputcor.style.margin = "1rem 0px 0px 0px";

    if(statusnavbar == 1){ /* Previnir que a navbar esteja fechada quando a width ultrapassa 1024pxs */
      statusnavbar = 2;
      closeSideMenu();
    }
  }
}

desktopQuery.addListener(tabletdesktop)
tabletdesktop(desktopQuery)


/* Menu navbar */

var statusnavbar = 0;

function openSideMenu(){
  if(window.innerWidth <= 1024)
  {
    let iconmenu = document.getElementById("iconmenu");
    let iconx = document.getElementById("iconx");
    let sidemenu = document.getElementById("navcontent");
    let hhmenu = document.getElementById("divmenu");
    let hhx = document.getElementById("divx");

    statusnavbar = 1;
    hhmenu.style.display = "none";
    hhx.style.display = "inline";
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
    let hhmenu = document.getElementById("divmenu");
    let hhx = document.getElementById("divx");
    statusnavbar = 0;

    hhmenu.style.display = "inline";
    hhx.style.display = "none";
    iconmenu.style.display = "inline";
    iconx.style.display = "none";
    sidemenu.style.width = '0';
  }
}

/* Lupa / searchbar */

var statuslupa = 0;

function openlupa(){
  if(window.innerWidth <= 767)
  {
    if(statuslupa == 0)
    {
      let iconlupa = document.getElementById("divlupa");
      let searchbar = document.getElementById("searchbar");
      statuslupa = 1;
    
    
      iconlupa.style.display = 'none';
      searchbar.style.display = 'inline';
    }
    else
    {
      let iconlupa = document.getElementById("divlupa");
      let searchbar = document.getElementById("searchbar");
      statuslupa = 0;
    
    
      iconlupa.style.display = 'inline';
      searchbar.style.display = 'none';
    }
  }
}



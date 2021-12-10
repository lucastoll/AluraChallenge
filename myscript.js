const tabletQuery = window.matchMedia('(min-width: 767px)')

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

const mobileQuery = window.matchMedia('(max-width: 767px)')

function tabletmobile(e){
  let contpersonalizacao = document.getElementById("selectcor"); 
  let inputcor = document.getElementById("cor");
  let iconlupa = document.getElementById("iconlupa");
  let searchbar = document.getElementById("searchbar");
  let sidemenu = document.getElementById("navcontent");

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

function openSideMenu(){
  let iconmenu = document.getElementById("iconmenu");
  let iconx = document.getElementById("iconx");
  let sidemenu = document.getElementById("navcontent");

  iconmenu.style.display = "none";
  iconx.style.display = "inline";
  sidemenu.style.width = '253px';
}

function closeSideMenu(){
  let iconmenu = document.getElementById("iconmenu");
  let iconx = document.getElementById("iconx");
  let sidemenu = document.getElementById("navcontent");

  iconmenu.style.display = "inline";
  iconx.style.display = "none";
  sidemenu.style.width = '0';
}




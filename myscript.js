const tabletQuery = window.matchMedia('(min-width: 768px)')

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

const mobileQuery = window.matchMedia('(max-width: 768px)')

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

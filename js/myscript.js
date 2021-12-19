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


/* Lupa -> searchbar */

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

/* Efeitos memu lateral desktop */

const HoverMenuLateral = () => {
  const img = document.getElementById('img_desktop_comunidade')
  const p = document.getElementById('p_desktop_comunidade')
  img.src = 'img/comunidade3.svg'
  p.style.opacity = '0.80'
}

const MouseOutMenuLateral = () => {
  const img = document.getElementById('img_desktop_comunidade')
  const p = document.getElementById('p_desktop_comunidade')
  img.src = 'img/comunidade.svg'
  p.style.opacity = '0.56'
}

const ClickMenuLateral = () => {
  const img = document.getElementById('img_desktop_comunidade')
  img.src = 'img/comunidade2.svg'
  p.style.opacity = '1'
}

const DivMenuLateral = document.getElementById('div_desktop_comunidade')

DivMenuLateral.addEventListener('mouseover', HoverMenuLateral)
DivMenuLateral.addEventListener('mouseleave', MouseOutMenuLateral)
DivMenuLateral.addEventListener('click', ClickMenuLateral)

/* Efeitos menu lateral mobile */

const HoverMenuLateralMobile = () => {
  const img = document.getElementById('nav_img_mobile')
  const p = document.getElementById('nav_p_mobile')
  img.src = 'img/comunidade3.svg'
  p.style.opacity = '0.80'
}

const MouseOutMenuLateralMobile = () => {
  const img = document.getElementById('nav_img_mobile')
  const p = document.getElementById('nav_p_mobile')
  img.src = 'img/comunidade.svg'
  p.style.opacity = '0.56'
}

const ClickMenuLateralMobile = () => {
  const img = document.getElementById('nav_img_mobile')
  img.src = 'img/comunidade2.svg'
  p.style.opacity = '1'
}

const DivMenuLateralMobile = document.getElementById('nav_div_mobile')

DivMenuLateralMobile.addEventListener('mouseover', HoverMenuLateralMobile)
DivMenuLateralMobile.addEventListener('mouseleave', MouseOutMenuLateralMobile)
DivMenuLateralMobile.addEventListener('click', ClickMenuLateralMobile)

/* textarea background = input color */

const rgbcontainer = document.getElementById("rgbcontainer")
const inputcolor = document.getElementById("cor")
rgbcontainer.style.background = inputcolor.value

inputcolor.addEventListener('input', function() {
  rgbcontainer.style.background = inputcolor.value
})


/* Highlight */

const linguagem = document.getElementById('linguagem')
const botao = document.getElementById('buttonhighlight')
var controlebotao = 0;

linguagem.addEventListener('change', () => {  /* Mudar linguagem */
  let codigo = rgbcontainer.querySelector('code');
  rgbcontainer.innerHTML = ` <div id="mac"><img src="img/mac_buttons.png" alt="Botoes do mac"></div>
  <code class="hljs ${linguagem.value} preview" contenteditable="true" aria-label="editor"></code> `
  rgbcontainer.lastElementChild.textContent = codigo.textContent;
  controlebotao = 1; /* Voltar para o estado inicial do botão quando trocar de linguagem */
  clickhighlight(); 
})

botao.addEventListener('click', () => { /* Aplicar highlight */
  let codigo = rgbcontainer.querySelector('code')
  hljs.highlightElement(codigo)
  clickhighlight(codigo);
})

function clickhighlight(codigo) {
  if(controlebotao==0) /* Botão não pressionado*/
  { 
    botao.textContent = "Voltar a editar"
    botao.style.background = "#5081FB"
    botao.style.color = "black"
    controlebotao = 1
    document.querySelector("code").setAttribute('contenteditable', 'false')
  }
  else /* Botão pressionado */
  {
    botao.textContent = "Visualizar com o highlight"
    botao.style.color = "white"
    botao.style.background = "#5080fb2d"
    controlebotao = 0

    document.querySelector("code").setAttribute('contenteditable', 'true')
    rgbcontainer.lastElementChild.textContent = codigo.textContent; /* Tirar o highlight, esta variavel codigo contém o codigo antes do highlight */
  }
}

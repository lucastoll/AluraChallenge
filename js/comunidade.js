/* Textarea códigos */

var codigo1 = 
`class TaErrado(Exception):
  pass

def testar():
  raise TaErrado('Você fez errado!')

try:
  testar()
except TaErrado as error:
  print(f'Error0258: {error}')
`;

var codigo2 = `#include stdio.h

int main()
{
  int i = 0, j = 0;
  for(i = 0; i < 3; i++)
  {
    printf("GAU?")
  }
  printf("G?3?")
  printf("X?")
  for(j = 0; j < 2; j++)
  {
    printf("XIS?")
  }
}
`;

var codigo3 = `console.log("Sorri, Sorri");
console.log("Sorri, Sorri");
console.log("Sorri, Sorri");
console.log("Sorri, Sorri");
console.log("We will, we will rock you (É o Sorrizo Ronaldo)");
console.log("We will, we will rock you (Sorri, Sorrizo Ronaldo)");
console.log("[Verso 1]");
console.log("É o Sorrizo Ronaldo");
console.log("Sorrizo Ronaldo");
console.log("Esse é o Sorrizo Ronaldo");
console.log("Tá de volta, é o Sorrizo Ronaldo");
console.log("Sorrizo Ronaldo, isso não é legal");
console.log("É o Sorrizo Ronaldo que chegou");
console.log("Quando vê o Sorri, Sorri, Sorri, Sorri, Sorrizo");
console.log("Ronaldo");
console.log("Esse é o Sorrizo Ronaldo do YouTube");
console.log("Quinhentas fotos por minuto");
console.log("Pode soltar, pode soltar");
console.log("É o Sorrizo Ronaldo");
console.log("Sorrizo Ronaldo");
console.log("Esse é o Sorrizo Ronaldo");
console.log("Esse é o Sorrizo Ronaldo");
`;

var codigo4 = `console.log("bololo veinho");`

var textarea1 = document.getElementById("c1");
textarea1.innerHTML = codigo1;

var textarea2 = document.getElementById("c2");
textarea2.innerHTML = codigo2;

var textarea3 = document.getElementById("c3");
textarea3.innerHTML = codigo3;

var textarea4 = document.getElementById("c4");
textarea4.innerHTML = codigo4;


/* Menu navbar */

var statusnavbar = 0;

function openSideMenu(){
  if(window.innerWidth <= 1200)
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
  if(window.innerWidth <= 1200 || statusnavbar == 2)
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

const desktopQuery = window.matchMedia('(min-width: 1200px)');

function tabletdesktop(e){
  if (e.matches) {
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

/* Efeitos menu lateral desktop */

const HoverMenuLateral = (evento) => {
  const img = document.getElementById('img_desktop_editor')
  const p = document.getElementById('p_desktop_editor')
  img.src = 'img/editor3.svg'
  p.style.opacity = '0.80'
}

const MouseOutMenuLateral = (evento) => {
  const img = document.getElementById('img_desktop_editor')
  const p = document.getElementById('p_desktop_editor')
  img.src = 'img/editor2.svg'
  p.style.opacity = '0.56'
}

const ClickMenuLateral = (evento) => {
  const img = document.getElementById('img_desktop_editor')
  const p = document.getElementById('p_desktop_editor')
  img.src = 'img/editor.svg'
  p.style.opacity = '1'
}

const DivMenuLateral = document.getElementById('div_desktop_editor')

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
  const p = document.getElementById('nav_p_mobile')
  img.src = 'img/comunidade2.svg'
  p.style.opacity = '1'
}

const DivMenuLateralMobile = document.getElementById('nav_div_mobile')

DivMenuLateralMobile.addEventListener('mouseover', HoverMenuLateralMobile)
DivMenuLateralMobile.addEventListener('mouseleave', MouseOutMenuLateralMobile)
DivMenuLateralMobile.addEventListener('click', ClickMenuLateralMobile)

/* Efeito de like nos códigos. */

function functionlike(e){
  let likesnumber = Number(e.lastElementChild.textContent);
  if(e.lastElementChild.class == "pressed")
  {
    likesnumber -=1;
    e.firstElementChild.src = 'img/likes.svg';
    e.lastElementChild.textContent = likesnumber;
    e.lastElementChild.class = "notpressed";
  }
  else
  {
    likesnumber += 1;
    e.firstElementChild.src = 'img/likespressed.svg';
    e.lastElementChild.textContent = likesnumber;
    e.lastElementChild.class = "pressed";
  }
}

/* Storage */

const projetos = JSON.parse(localStorage.getItem('projetos')) || []  /* Pega os items diretamente da local storage, caso esteja vazio cria uma array sem nada */
const container = document.getElementById("container")
var contador = 1;

projetos.forEach(projeto => {
  let auxlinguagem = ""
  if(projeto.linguagem == "javascript")
    auxlinguagem += "JavaScript"
  else if(projeto.linguagem == "python")
    auxlinguagem += "Python"
  else if(projeto.linguagem == "c")
    auxlinguagem += "C"
  else if(projeto.linguagem == "html")
    auxlinguagem += "HTML"
  else
    auxlinguagem += "CSS"

  let conteudo = 
  `
  <div id="rgbcontainer_comunidade" style="background: ${projeto.cor}">
      <div id="mac"><img src="img/mac_buttons.png" alt="Botoes do mac" id="macbutton"></div>
      <pre><code class="hljs preview ${projeto.linguagem}" contenteditable="false" aria-label="Editor de código" id="c1">${projeto.codigo}</code></pre>
    </div>
    <div class="info_projeto">
      <div class="space_between">
      <h2>${projeto.titulo}</h2>
      <h3>${auxlinguagem}</h3>
      </div>
      <p class="descricao">${projeto.descricao}</p>
      <div class="info_div">
          <div class="info_social">
              
              <div class="comunidadeiconhover transition">
              <img src="img/comentario.svg" alt=""> <p>0</p>
              </div>

              <div class="comunidadeiconhover transition" onclick="functionlike(this);">
              <img src="img/likes.svg" alt=""> <p id="like1">0</p>
              </div>
              
          </div>
          <div class="info_profile comunidadeiconhover transition">
              <img src="img/pp.PNG" alt="Foto de perfil do usuário">
              <p>@Lucas</p>
          </div>
      </div>
    </div>
  `
  const divpar = document.createElement('div')
  const divimpar = document.createElement('div')


  divpar.classList.add('caixa_projeto_par')
  divimpar.classList.add('caixa_projeto_impar')

  if(contador % 2 == 0)
  {
    divpar.innerHTML = conteudo;
    container.appendChild(divpar)
  }
  else
  {
    divimpar.innerHTML = conteudo;
    container.appendChild(divimpar)
  }
  contador++;
})

/* Highlight */

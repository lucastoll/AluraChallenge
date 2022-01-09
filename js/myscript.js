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

    if(statusnavbar == 1){ /* Previnir que a navbar esteja fechada quando a width ultrapassa  */
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
  const p = document.getElementById('p_desktop_comunidade')
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
  const p = document.getElementById('nav_p_mobile')
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

const linguagem = document.querySelector('#linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('#buttonhighlight')
var controlebotao = 0;

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" id="code"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))

    if(controlebotao==0) /* Botão não pressionado*/
    { 
      botao.textContent = "Voltar a editar"
      botao.style.background = "#5081FB"
      botao.style.color = "black"
      controlebotao = 1
      document.querySelector("code").setAttribute('contenteditable', 'false')
      botao.classList.add("botaoativo")
      botao.classList.remove("botaonaoativo")
    }
    else /* Botão pressionado */
    {
      botao.textContent = "Visualizar com o highlight"
      botao.style.color = "white"
      botao.style.background = "#5080fb2d"
      controlebotao = 0
  
      botao.classList.add("botaonaoativo")
      botao.classList.remove("botaoativo")
      document.querySelector("code").setAttribute('contenteditable', 'true')
      document.querySelector("code").textContent = codigo; /* Tirar o highlight, esta variavel codigo contém o codigo antes do highlight */
    }
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

linguagem.addEventListener('change', () => {  /* Mudar linguagem */
    controlebotao = 1; /* Voltar para o estado inicial do botão quando trocar de linguagem */
    aplicaHighlight(); 
  })


  /* Storage / Submit listener / Popup */

const myForm = document.querySelector('form')
const popup = document.querySelector('.container_popup')
const botaopopup = document.querySelector('.botao_popup')

popup.addEventListener('click', (e) => {
  if(e.target.id == 'containerpopup' ||e.target.id == 'botaopopup' )
    popup.style.display = 'none';
})


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
    let titulo = document.getElementById("projeto").value
    let descricao = document.getElementById("descricao").value
    descricao = '\n' + descricao;
    let linguagem = document.getElementById("linguagem").value
    let cor = document.getElementById("cor").value
    let codigo = document.querySelector("code").innerText;

    /* Checar e enviar dados para a storage */
    const projetos = JSON.parse(localStorage.getItem('projetos')) || []  /* Pega os items diretamente da local storage, caso esteja vazio cria uma array sem nada */
    const dados = {
      titulo, descricao, linguagem, cor, codigo
    }
    const projetosAtualizadas = [...projetos, dados] 
    localStorage.setItem('projetos', JSON.stringify(projetosAtualizadas)) 


    /* Resetar campo de código */
    document.querySelector("code").innerText = "";
    document.getElementById("projeto").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("linguagem").value = "javascript";
    document.getElementById("cor").value = "#6BD1FF";
    rgbcontainer.style.background = "#6BD1FF";
}) 


/* Exportar imagem do código */

const botaoexport = document.getElementById('export')

botaoexport.addEventListener("click", () => {
  if(controlebotao == 0)
    aplicaHighlight()
  const code = document.getElementById('code');
  const divexport = document.getElementById('divexport');
  const selectformato = document.getElementById('selectexport');
  let nomearquivo = document.getElementById("projeto").value;
  if(nomearquivo=="")
  {
    nomearquivo = 'meu-codigo'
  }
  areaDoCodigo.style.height = 'auto'; /* codigo-wrapper */
  code.style.maxHeight = 'none';
  code.style.overflowY = 'hidden';
  divexport.style.display = 'none';

  if(selectformato.value == 'png')
  {
    png(nomearquivo)
  }
  else if(selectformato.value == 'jpeg')
  {
    rgbcontainer.style.borderRadius = '0px';
    jpeg(nomearquivo)
  }
  else
  {
    rgbcontainer.style.borderRadius = '0px';
    svg(nomearquivo)
  }
})

function png(nomearquivo){
  domtoimage.toBlob(rgbcontainer)
  .then(function (blob) {
      window.saveAs(blob, `${nomearquivo}.png`);
      areaDoCodigo.style.height = '337px'; /* codigo-wrapper */
      code.style.maxHeight = '390px';
      divexport.style.display = 'flex'
      code.style.overflowY = 'none';
  });
}

function jpeg(nomearquivo){
  domtoimage.toJpeg(rgbcontainer, { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${nomearquivo}.jpeg`;
        link.href = dataUrl;
        link.click();

        areaDoCodigo.style.height = '337px'; /* codigo-wrapper */
        code.style.maxHeight = '390px';
        divexport.style.display = 'flex'
        rgbcontainer.style.borderRadius = '8px';
        code.style.overflowY = 'none';
    });
}

function svg(nomearquivo){
    function filter (node) {
      return (node.tagName !== 'i');
  }

  domtoimage.toSvg(rgbcontainer, {filter: filter})
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${nomearquivo}.svg`;
        link.href = dataUrl;
        link.click();

        areaDoCodigo.style.height = '337px'; /* codigo-wrapper */
        code.style.maxHeight = '390px';
        divexport.style.display = 'flex'
        rgbcontainer.style.borderRadius = '8px';
        code.style.overflowY = 'none';
      });
}
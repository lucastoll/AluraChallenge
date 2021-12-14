/* Textarea códigos */

var codigo1 = 
`cpf = input("Digite seu CPF completo (só números):")
# cpf = cpf_completo[:-2]
multiplicador = 10
storage = 0
c = []

digit_map = map(int, cpf)  # Converte a string cpf para int
lista_1 = list(digit_map)  # Passa os elementos inteiros para uma c
somatorio = 0
# PRIMEIRO DIGITO

for numero in lista_1:  # For para realizar a formula em que os números do cpf são multiplicados
    numero = numero * multiplicador
    somatorio = somatorio + numero
    multiplicador -= 1

conta = 11 - (somatorio % 11)
primeiro_digito = 0
if conta > 9:  # Na validação de cpf, se o valor da conta for maior ou igual a 9 o digito vai para 0.
    primeiro_digito = 0
else:
    primeiro_digito = conta   # Caso contrário o digito vale o valor da conta.
    primeiro_digito = str(primeiro_digito)

cpf_n1 = cpf + primeiro_digito
print(cpf_n1)  # Cpf com o primeiro digito incluido

digit_map = map(int, cpf_n1)  # Converte a string cpf para int
lista_2 = list(digit_map)  # Passa os elementos inteiros para uma c

# SEGUNDO DIGITO - mesmo princípio seguido acima
somatorio = 0
multiplicador = 11
for numero in lista_2:
    numero = numero * multiplicador
    somatorio = somatorio + numero
    multiplicador -= 1

conta_2 = 11 - (somatorio % 11)  # Conta necessária para descobrir o segundo número do cpf
segundo_digito = 0

if conta_2 >= 9:
    segundo_digito = '0'
else:
    segundo_digito = str(conta_2)

cpf_n2 = cpf_n1 + segundo_digito
print(cpf_n2)

# if cpf_n2 == cpf_completo:
#     print("CPF VALIDO!")
# else:
#     print("CPF INVALIDO")
`;

var codigo2 = `Gau?Gau?
G?3?
X? XIS? 
XIS?
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

var textarea1 = document.getElementById("textarea_comunidade");
textarea1.innerHTML = codigo1;

var textarea2 = document.getElementById("textarea_comunidade2");
textarea2.innerHTML = codigo2;

var textarea3 = document.getElementById("textarea_comunidade3");
textarea3.innerHTML = codigo3;

var textarea4 = document.getElementById("textarea_comunidade4");
textarea4.innerHTML = codigo4;


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

const desktopQuery = window.matchMedia('(min-width: 1025px)');

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
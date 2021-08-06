const headerButton: HTMLButtonElement =
  document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};


let drop1open = false;
function dropdown1(el, th){
  th.classList.toggle('current-link');
  if(drop1open == false){
    el.style.opacity = '1';
    el.style.visibility = "visible";
    el.style.transform = "translateY(0)";
    drop1open = true;
  }else{
    el.style.opacity = '0';
    el.style.visibility = "hidden";
    el.style.transform = "translateY(-100%)";
    drop1open = false;
  }
}




const headerLink = document.getElementsByClassName('header__link');

if (window.location.href.indexOf("dates.html") != -1 || window.location.href.indexOf("edit-dates.html") != -1 || window.location.href.indexOf("edit-password.html") != -1 ){
  for(let i = 0; i < headerLink.length; i++){
    headerLink[i].classList.remove('current-link');
    if(headerLink[i].innerHTML.indexOf("Личные данные") !== -1){
      headerLink[i].classList.add('current-link');
    }
  }
}
if (window.location.href.indexOf("bots.html") != -1){
  for(let i = 0; i < headerLink.length; i++){
    headerLink[i].classList.remove('current-link');
    if(headerLink[i].innerHTML.indexOf("Бот") !== -1){
      // dropdown2(document.getElementsByClassName('dropdown__content_2')[0],document.getElementsByClassName('dropdown__button_2')[0]);
    }else if(headerLink[i].innerHTML.indexOf("Список ботов") !== -1){
      headerLink[i].classList.add('current-link');
    }
  }
}
if (window.location.href.indexOf("new-bot.html") != -1){
  for(let i = 0; i < headerLink.length; i++){
    headerLink[i].classList.remove('current-link');
    if(headerLink[i].innerHTML.indexOf("Бот") !== -1){
      // dropdown2(document.getElementsByClassName('dropdown__content_2')[0],document.getElementsByClassName('dropdown__button_2')[0]);
    }else if(headerLink[i].innerHTML.indexOf("Добавить бота") !== -1){
      headerLink[i].classList.add('current-link');
    }
  }
}

let drop2open = false;
function dropdown2(el, th){
  if(th.classList.contains('current-link')){drop2open = true} else drop2open = false;
  th.classList.toggle('current-link');
  if(drop2open == false){
    el.style.opacity = '2';
    el.style.visibility = "visible";
    el.style.transform = "translateY(0)";
    drop2open = true;
  }else{
    el.style.opacity = '0';
    el.style.visibility = "hidden";
    el.style.transform = "translateY(-100%)";
    drop2open = false;
  }
}

function dropOpen(el){
  el.classList.toggle('open');
}

if(document.querySelector('.bot__row')){
  let slider = document.getElementById("range");
  let range2 = document.getElementById("range2");
  let output = document.getElementById("demo");
  let demo2 = document.getElementById("demo2");
  demo2.innerHTML = `Минимум`
  range2.oninput = function() {
    if(range2.value == 1){
      demo2.innerHTML = `Минимум`
    }
    if(range2.value == 2){
      demo2.innerHTML = `Средний`
    }
    if(range2.value == 3){
      demo2.innerHTML = `Максимальный`
    }
  }
  output.innerHTML = slider.value + ' грн'; 

  slider.oninput = function() {
    output.innerHTML = this.value + ' грн';
  }
}

function mydropdown(el){
  el.classList.toggle('show');
}
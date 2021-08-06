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

let drop2open = false;
function dropdown2(el, th){
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


const headerLink = document.getElementsByClassName('header__link');
if (window.location.href.indexOf("dates.html") != -1 || window.location.href.indexOf("edit-dates.html") != -1 || window.location.href.indexOf("edit-password.html") != -1 ){
  console.log('da');
  for(let i = 0; i < headerLink.length; i++){
    headerLink[i].classList.remove('current-link');
    if(headerLink[i].innerHTML.indexOf("Личные данные") !== -1){
      headerLink[i].classList.add('current-link');
    }
  }
}
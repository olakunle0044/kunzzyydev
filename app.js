let navLink = document.getElementById('navlink');
navlink.style.maxHeight = '0px';

function toggleMenu(){
  if(navlink.style.maxHeight == '0px'){
    navlink.style.maxHeight = '300px';
  } else{
    navlink.style.maxHeight = '0px';
  }
}
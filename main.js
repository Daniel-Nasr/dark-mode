let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    if(localStorage.getItem('mode') === 'light'){
      localStorage.setItem('mode', 'dark');
    }else if(localStorage.getItem('mode') === 'dark'){
      localStorage.setItem('mode', 'light');
    }
    document.querySelector('body').classList.toggle('dark');
    btn.innerHTML = localStorage.getItem('mode');
});
window.addEventListener('load', ()=>{
 if(localStorage.getItem('mode') === null){
    localStorage.setItem('mode', 'light');
  }else{
    if(localStorage.getItem('mode') == 'dark'){
      document.querySelector('body').classList.add('dark');
    }
  }
  btn.innerHTML = localStorage.getItem('mode');
});

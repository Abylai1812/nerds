window.addEventListener('DOMContentLoaded',() => {
    
 const openBurger = document.querySelector('.burger'),   
       navBody = document.querySelector('.nav'),
       openTrigger = document.querySelector('[data-modal]'),
       closeModalBtn = document.querySelector('[data-close]'),
       modal = document.querySelector('.modal');
       
    
openBurger.addEventListener('click',() =>{
    openBurger.classList.toggle('burger-active');
    navBody.classList.toggle('nav-active');
    
});    
    
openTrigger.addEventListener('click',() => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});
    
closeModalBtn.addEventListener('click',() => {
     modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
});    
    
    
    
    
    
    
});
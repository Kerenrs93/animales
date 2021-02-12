const paneles=document.querySelectorAll('.imagenes');
paneles.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removerClaseActive();
        panel.classList.add('active');
    });
});


function removerClaseActive() {
 paneles.forEach(panel=>{
     panel.classList.remove('active');
 });   
}
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu-items');
            menu_items.classList.toggle('show')
        })
    }
})
window.addEventListener('scroll', () =>{
    let animati = document.querySelector('.menu')
    let coords = animati.getBoundingClientRect()
    position = coords.top + scrollY 
    document.querySelector('.menu').style.display = 'none';
    console.log(position)
    if (position > 0){
        animati.style.transition = "all 0.9s"
        document.querySelector('.menu').style.display = 'flex';
    }
})
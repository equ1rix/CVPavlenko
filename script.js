const menu = document.getElementById('menu_checkbox');
const icons = document.getElementById('icons');
const theme = document.getElementById('theme');
const html = document.getElementById('html');
const lineMenu = document.getElementById('line-menu');
const lineMenu1 = document.getElementById('line-menu1');
const lineMenu2 = document.getElementById('line-menu2');

menu.addEventListener('click', () => {
    if (icons.classList.contains('none')){
        icons.classList.remove('none')
    } else {
        icons.classList.add('none');
    }
})



theme.addEventListener('click', () => {
    if (html.classList.contains('dark')) {

        html.classList.remove('dark')
        lineMenu.classList.remove('white')
        lineMenu1.classList.remove('white')
        lineMenu2.classList.remove('white')

    } else {
        
        html.classList.add('dark')
        lineMenu.classList.add('white')
        lineMenu1.classList.add('white')
        lineMenu2.classList.add('white')

    }
})

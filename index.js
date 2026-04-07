/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modalWindow = document.getElementById('modal_window');
const open_lightbox = document.getElementById('open_lightbox');
const close_lightbox = document.getElementById('close_lightbox');

open_lightbox.onclick = () => modalWindow.style.display = "flex";
close_lightbox.onclick = () => modalWindow.style.display = "none";
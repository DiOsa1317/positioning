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
'use strict';

const bar = document.querySelector('.progress-container');
const labelBlack = document.querySelector('.label-black');
const labelWhite = document.querySelector('.label-white');
const interval = setInterval(frame,30);
let width = 0;
function frame() {
    if (width >= 100){
        clearInterval(interval);
        return;
    }
    width++;
    bar.style.setProperty('--progress', width + '%');
    const text = `Loading... ${width + '%'}`;
    labelBlack.textContent = text;
    labelWhite.textContent = text;
}
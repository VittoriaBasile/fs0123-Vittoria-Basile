function addS(element){
    let simbolo = element.getAttribute('data-simbolo');

    let display = document.querySelector('#calcoli');

    display.value += simbolo;
}


function canc(){
    let display = document.querySelector('#calcoli');
    display.value = '';
}

function total(){
    let display = document.querySelector('#calcoli');
    display.value = eval(display.value);
}

function piGreco(){
    display = document.querySelector('#calcoli');
    
    if (display.value === '') {
        display.value += 'π';

    } else {
        display.value = display.value * 3.1415926535;
    }
}

function radice(){
    display = document.querySelector('#calcoli');
   
    if (display.value === '') {
        display.value += '√';

    } else {

       display.value = Math.sqrt(eval(display.value));
    }
}

function seno(){
    display = document.querySelector('#calcoli');
    display.value = Math.sin(eval(display.value));
}

function coseno(){
    display = document.querySelector('#calcoli');
    display.value = Math.cos(eval(display.value));
}

function percentuale(){
    display = document.querySelector('#calcoli');
    let n = elemento
    display.value = (display.value * n) / 100;
}
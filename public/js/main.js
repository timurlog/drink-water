let buttons = document.querySelectorAll('button');
let remainedBox = document.querySelector('.bw-bottle-re');
let drinkedBox = document.querySelector('.bw-bottle-dr');
let remaindedL = document.querySelector('#remaindedL');
let drinkedL = document.querySelector('#drinkedL');

buttons[0].addEventListener('click', () => {
    if (buttons[0].style.background === 'rgb(87, 118, 242)')
    {
        buttons[0].style.background = '#382C50';
        buttons[1].style.background = '#382C50';
        buttons[2].style.background = '#382C50';
        buttons[3].style.background = '#382C50';
        buttons[4].style.background = '#382C50';
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        remainedBox.style.height = '100%';
        drinkedBox.style.height = '0%';
        remaindedL.innerHTML = '2L';
        drinkedL.innerHTML = ''
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        remainedBox.style.height = '87.5%';
        drinkedBox.style.height = '12.5%';
        remaindedL.innerHTML = '1.75L';
        drinkedL.innerHTML = '0.25L'
    }
});

buttons[1].addEventListener('click', () => {
    if (buttons[1].style.background === 'rgb(87, 118, 242)')
    {
        buttons[1].style.background = '#382C50';
        buttons[2].style.background = '#382C50';
        buttons[3].style.background = '#382C50';
        buttons[4].style.background = '#382C50';
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        remainedBox.style.height = '87.5%';
        drinkedBox.style.height = '12.5%';
        remaindedL.innerHTML = '1.75L';
        drinkedL.innerHTML = '0.25L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        remainedBox.style.height = '75%';
        drinkedBox.style.height = '25%';
        remaindedL.innerHTML = '1.50L';
        drinkedL.innerHTML = '0.50L'
    }
});

buttons[2].addEventListener('click', () => {
    if (buttons[2].style.background === 'rgb(87, 118, 242)')
    {
        buttons[2].style.background = '#382C50';
        buttons[3].style.background = '#382C50';
        buttons[4].style.background = '#382C50';
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        remainedBox.style.height = '75%';
        drinkedBox.style.height = '25%';
        remaindedL.innerHTML = '1.50L';
        drinkedL.innerHTML = '0.50L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        remainedBox.style.height = '62.5%';
        drinkedBox.style.height = '37.5%';
        remaindedL.innerHTML = '1.25L';
        drinkedL.innerHTML = '0.75L'
    }
});

buttons[3].addEventListener('click', () => {
    if (buttons[3].style.background === 'rgb(87, 118, 242)')
    {
        buttons[3].style.background = '#382C50';
        buttons[4].style.background = '#382C50';
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        remainedBox.style.height = '62.5%';
        drinkedBox.style.height = '37.5%';
        remaindedL.innerHTML = '1.25L';
        drinkedL.innerHTML = '0.75L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        buttons[3].style.background = '#5776F2';
        remainedBox.style.height = '50%';
        drinkedBox.style.height = '50%';
        remaindedL.innerHTML = '1.00L';
        drinkedL.innerHTML = '1.00L'
    }
});

buttons[4].addEventListener('click', () => {
    if (buttons[4].style.background === 'rgb(87, 118, 242)')
    {
        buttons[4].style.background = '#382C50';
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        remainedBox.style.height = '50%';
        drinkedBox.style.height = '50%';
        remaindedL.innerHTML = '1.00L';
        drinkedL.innerHTML = '1.00L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        buttons[3].style.background = '#5776F2';
        buttons[4].style.background = '#5776F2';
        drinkedBox.style.height = '62.5%';
        remainedBox.style.height = '37.5%';
        remaindedL.innerHTML = '0.75L';
        drinkedL.innerHTML = '1.25L'
    }
});

buttons[5].addEventListener('click', () => {
    if (buttons[5].style.background === 'rgb(87, 118, 242)')
    {
        buttons[5].style.background = '#382C50';
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        drinkedBox.style.height = '62.5%';
        remainedBox.style.height = '37.5%';
        remaindedL.innerHTML = '0.75L';
        drinkedL.innerHTML = '1.25L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        buttons[3].style.background = '#5776F2';
        buttons[4].style.background = '#5776F2';
        buttons[5].style.background = '#5776F2';
        drinkedBox.style.height = '75%';
        remainedBox.style.height = '25%';
        remaindedL.innerHTML = '0.50L';
        drinkedL.innerHTML = '1.50L'
    }
});

buttons[6].addEventListener('click', () => {
    if (buttons[6].style.background === 'rgb(87, 118, 242)')
    {
        buttons[6].style.background = '#382C50';
        buttons[7].style.background = '#382C50';
        drinkedBox.style.height = '75%';
        remainedBox.style.height = '25%';
        remaindedL.innerHTML = '0.50L';
        drinkedL.innerHTML = '1.50L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        buttons[3].style.background = '#5776F2';
        buttons[4].style.background = '#5776F2';
        buttons[5].style.background = '#5776F2';
        buttons[6].style.background = '#5776F2';
        drinkedBox.style.height = '87.5%';
        remainedBox.style.height = '12.5%';
        remaindedL.innerHTML = '0.25L';
        drinkedL.innerHTML = '1.75L'
    }
});

buttons[7].addEventListener('click', () => {
    if (buttons[7].style.background === 'rgb(87, 118, 242)')
    {
        buttons[7].style.background = '#382C50';
        drinkedBox.style.height = '87.5%';
        remainedBox.style.height = '12.5%';
        remaindedL.innerHTML = '0.25L';
        drinkedL.innerHTML = '1.75L'
    }
    else
    {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = '#382C50';
        }
        buttons[0].style.background = '#5776F2';
        buttons[1].style.background = '#5776F2';
        buttons[2].style.background = '#5776F2';
        buttons[3].style.background = '#5776F2';
        buttons[4].style.background = '#5776F2';
        buttons[5].style.background = '#5776F2';
        buttons[6].style.background = '#5776F2';
        buttons[7].style.background = '#5776F2';
        drinkedBox.style.height = '100%';
        remainedBox.style.height = '0%';
        remaindedL.innerHTML = '0L';
        drinkedL.innerHTML = '2L'
    }
});
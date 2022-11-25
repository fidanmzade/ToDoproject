let btn = document.querySelector('.add-list');
let listFlex = document.querySelector('list-li')
let mainInput = document.querySelector('.mainInput')
let buttonImg = document.querySelector('.sortingbutton');
let buttonImg2 = document.querySelector('.button-img2');
let listItem = document.querySelector('.list-ul');
const textContainer = document.querySelector(".container");


btn.addEventListener('click', (event) => {
    const text=document.createElement('div');
    text.classList.add('text')
    listItem.innerHTML += `
    <li class = 'list-li'>
    <input type='text' class='mainInput'>
    <div class='button_x'>
    <div class='ox1'></div>
    <div class='ox2'></div>
    </div>
    </li>`;
  
    const button_x = document.querySelectorAll('.button_x');

    for (let i = 0; i < button_x.length; i++) {
        button_x[i].addEventListener('click', () => {
            button_x[i].parentElement.style.display = 'none';
        });
    }
    sortingbutton.addEventListener('click', () => {
        s.style.display = 'none';
        buttonImg2.style.display = 'flex';
        for (let i = 0; i < document.getElementsByClassName('mainInput').length; i++) {
            for (let j = i + 1; j < document.getElementsByClassName('mainInput').length; j++) {
                let tmp = 0;
                if (document.getElementsByClassName('mainInput')[i].value < document.getElementsByClassName('mainInput')[j].value) {
                    tmp = document.getElementsByClassName('mainInput')[i].value;
                    document.getElementsByClassName('mainInput')[i].value = document.getElementsByClassName('mainInput')[j].value;
                    document.getElementsByClassName('mainInput')[j].value = tmp;
                }
            }
        }
    });
    

    buttonImg2.addEventListener('click', () => {
        buttonImg2.style.display = 'none';
        sortingbutton.style.display = 'flex';
        for (let i = 0; i < document.getElementsByClassName('mainInput').length; i++) {
            for (let j = i + 1; j < document.getElementsByClassName('mainInput').length; j++) {
                let tmp = 0;
                if (document.getElementsByClassName('mainInput')[i].value > document.getElementsByClassName('mainInput')[j].value) {
                    tmp = document.getElementsByClassName('mainInput')[i].value;
                    document.getElementsByClassName('mainInput')[i].value = document.getElementsByClassName('mainInput')[j].value;
                    document.getElementsByClassName('mainInput')[j].value = tmp;
                }
            }
        }


    })

});
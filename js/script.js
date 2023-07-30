const Name = document.getElementById('input1')
const znak = document.getElementById('input2')
const resoult = document.getElementById('resoult')
const resBtn = document.getElementById('resoultBtn')


resBtn.onclick = function (){
    if(Name.value === '', znak.value ==='') {
        resoult.textContent = 'Поля хоть все заполни сначала🤡'
        resoult.style.color = 'red'
    } else if(Name.value === 'Данил'& znak.value ==='Рак'){
        resoult.textContent = 'Правильно, скинь ему на карту 5000 руб пж😘'
        resoult.style.color = 'green'
    } else if(Name.value === 'Иван'& znak.value ==='Лев'){
        resoult.textContent = 'ЭТО ПРОСТО ПРИМЕР, ЗАЧЕМ ЕГО ВВОДИТЬ???🤬'
        resoult.style.color = 'red'
    } else {
        resoult.textContent = 'Не правильно, вот и иди к нему!🤬'
        resoult.style.color = 'red'
    }
}




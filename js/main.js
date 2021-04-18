const btnTask = document.querySelectorAll('.btn__task');
const textTask = document.querySelectorAll('.body__text');





const completedTask = (i) => {
    if(btnTask[i].classList.contains('task__btn--compleate')){
        btnTask[i].classList.remove('task__btn--compleate')
    } else {
        btnTask[i].classList.add('task__btn--compleate')
    }
    // if(btnTask[i] != 1)
}



for(let i = 0; i < btnTask.length; i++){
    btnTask[i].addEventListener('click', () => completedTask(i))
}
const btnTask = document.querySelectorAll('.btn__task');






const completedTask = (b) => {
    if(b.classList.contains('task__btn--compleate')){
        b.classList.remove('task__btn--compleate')
    } else {
        b.classList.add('task__btn--compleate')
    }
}



btnTask.forEach(b => {
    b.addEventListener('click', () => completedTask(b))
})
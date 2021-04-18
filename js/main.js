const inputBtn = document.querySelector('.input__btn');
const textTask = document.querySelectorAll('.body__text');
const input = document.querySelector('.header__input');
const tasksWrapper = document.querySelector('.tasks__wrapper');
const tasksInfo = document.querySelector('.tasks__info');

let tasksAll = []



const addCompletedTask = (btn, bodyText) => {
    if(btn.classList.contains('task__btn--compleate') && bodyText.classList.contains('body__text--compleate')) {
        btn.classList.remove('task__btn--compleate')
        bodyText.classList.remove('body__text--compleate')

    } else {
        btn.classList.add('task__btn--compleate')
        bodyText.classList.add('body__text--compleate')
    }
}

const clearInput = () => {
    input.value = '';
    if(inputBtn.classList.contains('task__btn--compleate')){
        inputBtn.classList.remove('task__btn--compleate')
    }
}

const addTask = () => {
    const task = {
        compleated: checkCompleated(),
        text: input.value
    }
    tasksAll.push(task)
    clearInput();
    addElemDOM()
}

const checkCompleated = () =>{
    if(inputBtn.classList.contains('task__btn--compleate')){
        return true
    } else {
       return false
    }
}

const addElemDOM =  () => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task__wrapper')
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn__wrapper');
    const btn = document.createElement('button');
    btn.classList.add('btn__task');


    const taskBody = document.createElement('div');
    taskBody.classList.add('task__body');
    const bodyText = document.createElement('div');
    bodyText.classList.add('body__text');
    const delWrapper = document.createElement('div');
    delWrapper.classList.add('body__del');
    delBtn = document.createElement('button');
    delBtn.classList.add('del__btn');


    btnWrapper.appendChild(btn);
    taskWrapper.appendChild(btnWrapper);
    delWrapper.appendChild(delBtn);
    taskBody.appendChild(bodyText);
    taskBody.appendChild(delWrapper);
    taskWrapper.appendChild(taskBody);

    for(let i=0; i < tasksAll.length; i++) {
        if(tasksAll[i].compleated == true) {
            btn.classList.add('task__btn--compleate')
            bodyText.classList.add('body__text--compleate')
        }
        bodyText.textContent = tasksAll[i].text;
        tasksWrapper.insertBefore(taskWrapper, tasksInfo);
        btn.addEventListener('click', () => addCompletedTask(btn, bodyText))
    }
}


input.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
        addTask()
    }
});

inputBtn.addEventListener('click', () => {
    if(inputBtn.classList.contains('task__btn--compleate')) {
        inputBtn.classList.remove('task__btn--compleate')
    } else {
        inputBtn.classList.add('task__btn--compleate')
    }
})


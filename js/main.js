const inputBtn = document.querySelector('.input__btn');
const textTask = document.querySelectorAll('.body__text');
const input = document.querySelector('.header__input');
const tasksWrapper = document.querySelector('.tasks__wrapper');
const taskWrapperFirst = document.querySelector('.task__wrapper');
const tasksInfo = document.querySelector('.tasks__info');
const tasksCount = document.querySelector('.count');
const allBtn = document.querySelector('.all__btn');
const activeBtn = document.querySelector('.active__btn');
const completedBtn = document.querySelector('.completed__btn');
const infoBtn = document.querySelectorAll('.info__link');

let tasksAll = [
    // {
    //     compleated: true,
    //     text: 'gdg'
    // },
    // {
    //     compleated: false,
    //     text: '33'
    // }
];

let rewritesTask = []

let newTaskCount = 0;
tasksCount.textContent = tasksAll.length + " ";


const checkInput = (text) => {
    if(text === ''){
        return false
    } else {
        return true
    }
}

const addCompletedTask = (btn, bodyText) => {
    if(btn.classList.contains('task__btn--compleate') && bodyText.classList.contains('body__text--compleate')) {
        btn.classList.remove('task__btn--compleate')
        bodyText.classList.remove('body__text--compleate')

    } else {
        btn.classList.add('task__btn--compleate')
        bodyText.classList.add('body__text--compleate')
    }
    tasksAll.forEach(t => {
        if(t.text == bodyText.textContent){
            t.compleated = !t.compleated
        }
    })
};

const delTask = (taskWrapper, bodyText) => {    
    taskWrapper.remove()
    tasksAll.forEach(t => {
        if(t.text == bodyText.textContent){
            const idx = tasksAll.indexOf(t)
            tasksAll.splice(idx, 1);
        }
    })
    updateTasksCount();
    newTaskCount -= 1;
};

// const resetBtn = () => {
//     if(allBtn.classList.contains('info__link--active') || 
//     activeBtn.classList.contains('info__link--active') ||
//     completedBtn.classList.contains('info__link--active')){
//         infoBtn.forEach(b => {
//             b.classList.remove('info__link--active')
//         });
//         addNewTask()
//     }
// }


const updateTasksCount = () => {
    tasksCount.textContent = tasksAll.length + " "
};

const clearInput = () => {
    input.value = '';
    if(inputBtn.classList.contains('task__btn--compleate')){
        inputBtn.classList.remove('task__btn--compleate')
    }
};

const addTask = () => {
    const task = {
        compleated: checkCompleated(),
        text: input.value
    }
    if(checkInput(input.value)){
        tasksAll.push(task);
        updateTasksCount();
        clearInput();
        addElemDOM();
    } else {
        alert('ERROR')
    }  
};

// const checkBtn = (btn) => {
//     if(btn.classList.contains('info__link--active')){
//         btn.classList.remove('info__link--active');
//         addNewTask();
//     } else {
//        btn.classList.add('info__link--active');
//         if(btn.classList.contains('all__btn')){
//             rewritesTask = tasksAll.slice()
//         }
//         if(btn.classList.contains('active__btn')){
//             rewritesTask = tasksAll.filter(t => t.compleated == false);
//         }
//         if(btn.classList.contains('completed__btn')){
//             rewritesTask = tasksAll.filter(t => t.compleated == true);
//         }
//     }
// }

// const updateElement = (task) => {

// };

const checkCompleated = () =>{
    if(inputBtn.classList.contains('task__btn--compleate')){
        return true
    } else {
       return false
    }
};

const addElemDOM = () => {
    if(tasksAll.length > 1){
        newTaskCount += 1
        addNewTask()
    } else {
        taskWrapperFirst.remove();
        addNewTask()
    }
};

const addNewTask = () => {
    for(let i = newTaskCount; i < tasksAll.length; i++){
        createElement(i)
    }
};

const createElement = (i) => {
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

    if(tasksAll[i].compleated == true) {
        btn.classList.add('task__btn--compleate')
        bodyText.classList.add('body__text--compleate')
    }
    bodyText.textContent = tasksAll[i].text;
    tasksWrapper.insertBefore(taskWrapper, tasksInfo);
    btn.addEventListener('click', () => addCompletedTask(btn, bodyText))
    delBtn.addEventListener('click', () => delTask(taskWrapper, bodyText))
};


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
});

// allBtn.addEventListener('click', () => checkBtn(allBtn));
// activeBtn.addEventListener('click', () => checkBtn(activeBtn));
// completedBtn.addEventListener('click', () => checkBtn(completedBtn));


const initialState = {
    task: [
        {
            id: 0,
            name: 'Finalizar la tarea 03',
            check: true,
        }
    ]
}

const taskReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case 'TASK_ADD':
            return {
                task: [...prevState.task, action.payload],
            }
        case 'TASK_UPDATE':
            let taskUpdate = [...prevState.task].find(task => task.id === action.payload.id);
            taskUpdate.check = action.payload.check;
            return {
                task: [...prevState.task],
            }
        case 'TASK_REMOVE':
            let tasks = [...prevState.task];
            let taskRemove = tasks.find(task => task.id === action.payload);
            let index = tasks.indexOf(taskRemove, 0);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            return {
                task: tasks
            }
        default:
            return prevState
    }
}

export default taskReducer
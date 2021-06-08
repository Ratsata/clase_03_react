export const addTaskAction = (task: any) => {
    return {
        type: 'TASK_ADD',
        payload: task,
    }
}

export const updateTaskAction = (task: any) => {
    return {
        type: 'TASK_UPDATE',
        payload: task,
    }
}
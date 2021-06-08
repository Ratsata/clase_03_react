const initialState = {
    tasks: [
        {
            id: 0,
            name: 'Tarea inicial',
            check: false,
        }
    ]
}

const taskReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case 'TASK_ADD':
            return {
                tasks: [...prevState.tasks, action.payload],
            }
        case 'TASK_UPDATE':
            console.log("prevstate:" + JSON.stringify(prevState))
            const id = action.payload.id
            prevState.tasks.map((u: any) => {
                if (u.id == id) {
                    u.check = action.payload.check
                }
                console.log("prevstateMap:" + JSON.stringify(prevState))
                return prevState
            })
            console.log("prevstateFinal:" + JSON.stringify(prevState))
            return prevState
        default:
            return prevState
    }
}

export default taskReducer
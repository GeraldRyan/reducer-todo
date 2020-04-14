
export const todoArray = {
  tasks: [],
  task: 'Learn about reducers',
  completed: false,
  id: 3892987589
}



export const reducer = (state, action) =>
{
  switch (action.type)
  {
    case 'COMPLETED':
      const toggler = state.tasks.map(item =>
      {
        if (action.payload === item.id)
        {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
      return { ...state, tasks: toggler }
    case 'CLEAR':
      const dummyV = state.tasks.filter((e) => e.completed !==true)
      console.log("Dummy Variable", dummyV)
      return {...state, task:dummyV    }
    case 'ADDING':
      // console.log('action payload',action.payload)
      // console.log('state.tasks action.payload',[...state.tasks,action.payload])

      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    default:
      return state
  }
}


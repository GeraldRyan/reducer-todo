
export const todoArray = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}



export const reducer = (state, action) =>
{
  switch (action.type)
  {
    case 'completed':
      return { state: !completed }
    default:
      return state
  }
}

export const initialState = {
    user :null,
    playLists:[],
    playing: false,
    item: null,
    // token: "BQAmIkV0eJfsp6CUCG2Y7kkxmvkW7WSM8fm0aXT-Conc0mZ3NFpMyz0ZDiZhR1CylbniB6PioPKNDCQpeONq6IxFk5cmk14eWSxoqTF0uo8NZN4mJlwlUr6NhUtg_DBuU-QAU9wVQfDvZbA0zlp2l4oNBwceWJV8vMT-CC6dnNwpmA",
}

const reducer = (state, action)=>{
console.log(action);
switch(action.type) {
    case 'SET_USER':
        return{
            ...state,
            user: action.user
        }
   case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
    case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists
                }
case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly : action.discover_weekly
                }
        default: 
        return state;  
}
}
export default reducer;
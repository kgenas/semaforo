const initialState = {
    count: 0,
    valueArray: []
};
export const semaforoReducer = (state =initialState, action) => {
  
    if ( action.type === 'NEXT_VALUE'){
        return{
            count: action.payload.count,
            valueArray:action.payload.array
            
        }
    }
    return state;
}

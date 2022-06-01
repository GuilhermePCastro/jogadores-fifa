export function fifaReducer(state, action){
    switch(action.type){

        case 'TROCA_FIFA':
            return {...state, VersaoFifa: action.payload }

        default:
            return state;
    }
}

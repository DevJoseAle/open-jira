import { UIState } from "./";

//Tipos de Acciones:
//De esta manera podemos hacer y tener varios types
type UIActionType = 
| { type: 'UI - Open Sidebar', }
| { type: 'UI - Close Sidebar', }


export const uiReducer = (state : UIState, action : UIActionType) : UIState =>{

//El action es quien modifica el State
//Un reducer no es ni debe ser async

    //Para manejar las acciones, lo mejor es hacerlo con un switch

    switch (action.type) {
        case 'UI - Open Sidebar':
        //Recordemos q no debemos mutar el estado si no, regresar uno nuevo
        return {
            ...state,
            sidemenuOpen: true
        } 
        case 'UI - Close Sidebar':
        //Recordemos q no debemos mutar el estado si no, regresar uno nuevo
        return {
            ...state,
            sidemenuOpen: false
        } 
        default:
            return state;
    }

}




import { UIState } from "./";

//Tipos de Acciones:
//De esta manera podemos hacer y tener varios types
type UIActionType = 
| { type: 'UI - Open Sidebar', }
| { type: 'UI - Close Sidebar', }
| { type: 'UI - Set IsAddingEntry', payload: boolean }
| { type: 'UI - Start Dragging',  }
| { type: 'UI - End Dragging',  }


export const uiReducer = (state : UIState, action : UIActionType) : UIState =>{

//El action es quien modifica el State
//Un reducer no es ni debe ser async

    //Para manejar las acciones, lo mejor es hacerlo con un switch

    switch (action.type) {
        case 'UI - Open Sidebar':
        return {
            ...state,
            sidemenuOpen: true
        } 
        case 'UI - Close Sidebar':
        return {
            ...state,
            sidemenuOpen: false
        } 
        case 'UI - Set IsAddingEntry':
        return {
            ...state,
            isAddingEntry: action.payload
        } 
        case 'UI - Start Dragging':
        return {
            ...state,
            isDragging: true
        } 

        case 'UI - End Dragging':
        return {
            ...state,
            isDragging: false
        } 
        default:
            return state;
    }

}




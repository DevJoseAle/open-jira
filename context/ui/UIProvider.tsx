import { FC, useReducer, PropsWithChildren, ReactNode, ReactElement,} from "react"
import { UIContext } from "./UIContext"
import { uiReducer } from "./uiReducer"
import  React from 'react';


export interface UIState{ 
    sidemenuOpen : boolean,
    isAddingEntry: boolean,
    isDragging: boolean

}

const UI_INITIAL_STATE: UIState  = { 
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

//Proveedor del state 
export const UIProvider:FC = ({children} : any ) => {

    
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu =() =>{
        dispatch({type:"UI - Open Sidebar"})

    }

    const closeSideMenu =() =>{
        dispatch({type:"UI - Close Sidebar"})

    }

    const setIsAddingEntry =(isAdding: boolean) =>{
        dispatch({type: 'UI - Set IsAddingEntry', payload: isAdding})
    }

    const startDragging = () =>{
        dispatch({type: 'UI - Start Dragging'})
    }
    const endDragging = () =>{
        dispatch({type: 'UI - End Dragging'})
    }

  return (
    <UIContext.Provider value={{
        ...state,
        sidemenuOpen: state.sidemenuOpen,

        //Métodos
        openSideMenu,
        closeSideMenu, 
        setIsAddingEntry,

        startDragging,
        endDragging
    }}> 

    {children}
    </UIContext.Provider>
  )
}

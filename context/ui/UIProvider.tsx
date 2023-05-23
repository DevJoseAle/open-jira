import { FC, useReducer, PropsWithChildren, ReactNode, ReactElement,} from "react"
import { UIContext } from "./UIContext"
import { uiReducer } from "./uiReducer"
import  React from 'react';


export interface UIState{ 
    sidemenuOpen : boolean,

}

const UI_INITIAL_STATE: UIState  = { 
    sidemenuOpen: false,
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

  return (
    <UIContext.Provider value={{
        
        sidemenuOpen: state.sidemenuOpen,

        //Métodos
        openSideMenu,
        closeSideMenu
    }}> 

    {children}
    </UIContext.Provider>
  )
}

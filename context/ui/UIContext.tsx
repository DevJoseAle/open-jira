import { createContext } from 'react';

export interface ContextProps{
     sidemenuOpen: boolean;
     isAddingEntry: boolean,
     closeSideMenu: ()=> void, 
     openSideMenu:  ()=> void,
     setIsAddingEntry: (isAdding : boolean)=> void,

}


export const UIContext = createContext({} as ContextProps)
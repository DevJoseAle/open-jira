import { createContext } from 'react';

export interface ContextProps{
     sidemenuOpen: boolean;
     isAddingEntry: boolean,
     isDragging: boolean,
     
     closeSideMenu: ()=> void, 
     openSideMenu:  ()=> void,
     setIsAddingEntry: (isAdding : boolean)=> void,
     startDragging: ()=> void,
     endDragging: ()=> void,


}


export const UIContext = createContext({} as ContextProps)
import { createContext } from 'react';

export interface ContextProps{
     sidemenuOpen: boolean;
     closeSideMenu: ()=> void, 
     openSideMenu:  ()=> void,

}


export const UIContext = createContext({} as ContextProps)
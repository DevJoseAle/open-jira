import { EntriesContext } from './'
import { FC, useReducer } from 'react'
import { entriesReducer } from './'
import { Entry, EntryStatus } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState{
    entries: Entry[],
}



const ENTRIES_INITIAL_STATE : EntriesState = { 
    entries: [
      {
        _id: uuidv4(),
        description: 'In-Progress: Lorem ipsum o como mierda se diga',
        createdAt: Date.now(),
        status: 'in-progress',
      },
      {
        _id: uuidv4(),
        description: 'Finished: Lorem ipsum o como mierda se diga2',
        createdAt: Date.now(),
        status: 'finished',
      },
      {
        _id: uuidv4(),
        description: 'Pending: Lorem ipsum oa',
        createdAt: Date.now(),
        status: 'pending',
      },

    ],
}


export const EntriesProvider: FC = ({children}:any) => {


   const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

   const addNewEntry = (description : string) =>{

      const newEntry : Entry = {
         _id: uuidv4() ,
        status: 'pending', 
        createdAt: Date.now(), 
        description, 
      }

      dispatch({type: '[Entry] - Add-Entry', payload: newEntry})

   }

     return (
      <EntriesContext.Provider value={{
        ...state,

        //Métoodos
        addNewEntry
        
      }}> 

      {children}
      </EntriesContext.Provider>
     )
}
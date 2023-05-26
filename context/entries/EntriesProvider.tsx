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
        description: 'Lorem ipsum o como mierda se diga',
        createdAt: Date.now(),
        status: 'in-progress',
      },
      {
        _id: uuidv4(),
        description: 'Lorem ipsum o como mierda se diga2',
        createdAt: Date.now(),
        status: 'finished',
      },
      {
        _id: uuidv4(),
        description: 'Lorem ipsum oa',
        createdAt: Date.now(),
        status: 'pending',
      },
      {
        _id: uuidv4(),
        description: 'mo mierda se diga',
        createdAt: Date.now(),
        status: 'finished',
      },
    ],
}


export const EntriesProvider: FC = ({children}:any) => {


   const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

     return (
      <EntriesContext.Provider value={{
        ...state,
        
      }}> 

      {children}
      </EntriesContext.Provider>
     )
}
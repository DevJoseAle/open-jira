import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface ContextProps{
     entries: Entry[];//todo Falta el tipo de entrie del array

     //Metodos:
     addNewEntry: (description: string) => void;
     updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
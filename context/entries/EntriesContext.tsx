import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface ContextProps{
     entries: Entry[];//todo Falta el tipo de entrie del array
}

export const EntriesContext = createContext({} as ContextProps);
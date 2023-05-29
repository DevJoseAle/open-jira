import { Paper, List } from '@mui/material'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { FC, useContext, useMemo } from 'react';
import { EntriesContext, EntriesProvider } from '@/context/entries';

interface Props {
  status: EntryStatus
}
export const EntryList: FC<Props> = ({status}) => {

  const {entries} = useContext(EntriesContext)

  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status) ,[entries]) 
  




  return (

    //TODO Aqui haremos drop
    <div>
        <Paper sx={{
            height: 'calc(100vh - 230px)',
            overflow: 'scroll',
            backgroundColor: 'transparent',
            padding: 1
        }}>
            <List sx={{opacity: 1}}>

              {
                entriesByStatus.map((entry) => (
                  <EntryCard 
                    key={entry._id}
                    entry={entry}/>
                ))
              }

            </List>
        </Paper>
        
    </div>
  )
}


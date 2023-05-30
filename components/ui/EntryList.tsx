import { Paper, List } from '@mui/material'
import { EntryCard } from './EntryCard'
import { Entry, EntryStatus } from '@/interfaces'
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntriesContext, EntriesProvider } from '@/context/entries';
import { UIContext } from '@/context/ui';
import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}
export const EntryList: FC<Props> = ({status}) => {

  const {entries, updateEntry} = useContext(EntriesContext)
  const {isDragging, endDragging} = useContext(UIContext)
  
  const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status) ,[entries]) 
  

  const onDropentry = (event:DragEvent<HTMLDivElement>) =>{
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(entry => entry._id === id)!;
    entry.status = status;
    updateEntry(entry)
    endDragging()

  } 
  const allowDrop = (event: DragEvent<HTMLDivElement>) =>{
     event.preventDefault();
   }


  return (

    //TODO Aqui haremos drop
    <div
    onDrop={onDropentry}
    onDragOver={ allowDrop }
    className={isDragging ? styles.dragging : ''}
    >
        <Paper sx={{
            height: 'calc(100vh - 280px)',
            overflow: 'scroll',
            backgroundColor: 'transparent',
            padding: 1
        }}>
            <List sx={{opacity: isDragging ? 0.2 : 1 , transition: 'all .3s'}}>

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


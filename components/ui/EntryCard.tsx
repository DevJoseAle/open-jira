import { UIContext } from '@/context/ui'
import { Entry } from '@/interfaces'
import {CardActions, Card, Typography, CardActionArea, CardContent } from '@mui/material'
import { FC,DragEvent, useContext } from 'react'


interface Props {
    entry: Entry
}
export const EntryCard: FC<Props> = ({entry}) => {

    
    const {startDragging, endDragging} = useContext(UIContext)
  const onDragStart =(event : DragEvent<HTMLDivElement>) =>{
        event.dataTransfer.setData('text', entry._id)
        startDragging()
  }

  const onDragEnd = () =>{
    //Todo fin del drag
    endDragging()
  }

  return (
    <Card 
        sx={{marginBottom: 1}}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        >

        {/* Eventos del Drag */}

        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>
                    {entry.description} 
                </Typography>
            </CardContent>

            <CardActions sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                paddingRight: 2
                }}>
                <Typography variant='body2'>
                
                    Hace 30min
                </Typography>
            </CardActions>


        </CardActionArea>
    </Card>
  )
}

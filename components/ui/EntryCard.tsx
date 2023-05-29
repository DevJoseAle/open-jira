import { Entry } from '@/interfaces'
import {CardActions, Card, Typography, CardActionArea, CardContent } from '@mui/material'
import { FC } from 'react'


interface Props {
    entry: Entry
}
export const EntryCard: FC<Props> = ({entry}) => {

    console.log(entry)

  return (
    <Card sx={{marginBottom: 1}}>

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

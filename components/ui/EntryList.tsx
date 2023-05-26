import React from 'react'
import { Paper, List } from '@mui/material'

export const EntryList = () => {
  return (

    //TODO Aqui haremos drop
    <div>
        <Paper sx={{
            height: 'calc(100vh -250px)',
            overflow: 'scroll',
            backgroundColor: 'transparent'
        }}>
            <List>
        
            </List>
        </Paper>
        
    </div>
  )
}

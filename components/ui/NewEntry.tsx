import React, { ChangeEvent, useState } from 'react'
import { Box, Button, TextField } from "@mui/material";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import { useContext } from 'react';
import { EntriesContext } from '@/context/entries';


export const NewEntry = () => {

    const { addNewEntry, entries} = useContext(EntriesContext)
    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onTextFieldChange = (event : ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value)
    }
    const onSave = () =>{

        if(inputValue.trim().length == 0) return;
        addNewEntry(inputValue);

        setInputValue('');
        setTouched(false);
    }

  return (
    <Box
        sx={{
            marginBottom: 2, paddingX: 2
        }}
        >

            {
                isAdding 
                ? 
                (
                <>
                <TextField
                    fullWidth
                    sx={ { 
                        marginBottom: 1,
                        marginTop: '15px'
                    }}
                    placeholder='Agrega nueva tarea'
                    autoFocus
                    multiline
                    label='Nueva Tarea'
                    helperText={inputValue.length <=0 && touched && 'Ingresa un valor'}
                    error={inputValue.length <= 0 && touched}
                    value={inputValue}
                    onChange={onTextFieldChange}
                    onBlur={ ()=> setTouched(true)}
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '10px',
                    
                }}>

                
                    <Button 
                        onClick={() => setIsAdding(false)}
                        variant='outlined' 
                        endIcon={<MailOutlineOutlinedIcon/>}>
                        Cancelar
                    </Button>
                    <Button 
                        onClick={onSave}
                        variant='contained' 
                        color='secondary'
                        endIcon={<MailOutlineOutlinedIcon/>}>
                        Guardar
                    </Button>
                    


                </Box>   
                </>
                    
                )
                :
                (
                    <>
            <Button
                onClick={ () => setIsAdding(true)}
                fullWidth
                variant='contained'
                startIcon={<AddIcon/>}>
                Nueva Tarea

            </Button>   
                    </>

                )
            }
       
       
    </Box>
  )
}

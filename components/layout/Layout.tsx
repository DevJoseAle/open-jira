import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'


interface Props{
    title?: 'string'
    children: any
}
const Layout : FC<Props> = ({title = 'OpenProject App', children}) => {
  return (

    <Box sx={{flexFlow: 1}}>
        <Head>
            <title>
                {title}
            </title>
        </Head>

        {/* NavBar */}
        <Navbar/>
        {/* SideBar */}

        <Box sx={{
            padding:'10px 20px'
        }}>
            {children}
        </Box>

    </Box>
  )
}

export default Layout
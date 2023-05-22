import Layout from '@/components/layout/Layout'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const HomePage : NextPage = () => {
  return (
   <Layout>
      <Typography 
        variant='h3' 
        color='primary'
          >
            HomePage -- NextPage
      </Typography>
   </Layout>
  )
}

export default HomePage
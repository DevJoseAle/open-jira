import Layout from '@/components/layout/Layout'
import { Card, Grid, CardHeader } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const HomePage : NextPage = () => {
  return (
   <Layout>

    <Grid container spacing={ 2 }>

      <Grid item xs={12} sm={4} >
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title="Pendientes"/>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} >
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title="En Proceso"/>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title="Finalizados"/>
        </Card>
      </Grid>

    </Grid>

      
   </Layout>
  )
}

export default HomePage
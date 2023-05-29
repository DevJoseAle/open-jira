import Layout from '@/components/layout/Layout'
import { EntryList, NewEntry } from '@/components/ui'
import { CardContent, Card, Grid, CardHeader } from '@mui/material'
import { NextPage } from 'next'


const HomePage : NextPage = () => {
  return (
   <Layout>

    <Grid container spacing={ 1 }>

      <Grid item xs={12} sm={4} >
        
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
        
          <CardHeader title="Pendientes"/>
        
            <CardContent>
              <NewEntry/>
              {/* Listado de Entradas */}
              <EntryList status='pending'/>
          
            </CardContent>

        </Card>

      </Grid>

      <Grid item xs={12} sm={4} >
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title="En Proceso"/>
            <CardContent>
              <EntryList status='in-progress'/>

            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Card sx={{ height: 'calc(100vh - 100px)'}}>
          <CardHeader title="Finalizados"/>
          <CardContent>
              <EntryList status='finished'/>

            </CardContent>
        </Card>
      </Grid>

    </Grid>

      
   </Layout>
  )
}

export default HomePage
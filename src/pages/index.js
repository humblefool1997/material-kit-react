import Head from 'next/head';
import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Summary } from '../components/dashboard/latest-products';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic'
import Fleethealth from 'src/components/graphs/fleethealth';
import Stack from '@mui/material/Stack';
const TrendGraph = dynamic(() => import('../components/trends/TrendGraph'), { ssr: false });
const Mapleaf = dynamic(() => import('../components/mapopenstreet/mapleaf'), { ssr: false });

 const Dashboard = () => (
  <>
    <Head>
      <title>
        KPI's and Alerts
      </title>
    </Head>
   
  <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  
>

 

          
</Grid>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
        <Mapleaf lat={53.437389} longs={-2.98517}  sx={{ height: '50%' }} />

        </Grid>
        <Grid item xs="auto">
        <Summary />

        </Grid>
        <Grid item xs>
        <Fleethealth />
        <Stack direction="row" spacing={1}>
        <TrendGraph trend="Week " />
        <TrendGraph trend="Month " />
        <TrendGraph trend="Year " />
       
      </Stack>
        </Grid>
        <Grid item xs>
        
        </Grid>
  </Grid>
  </Box>
     
    
      
         
         
  
      
           
         
     
      
   


 
  

  </>
);


Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;

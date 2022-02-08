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
const Plot = dynamic(
  () => {
    return import("react-plotly.js")
  },
  { ssr: false}
);  
const Dashboard = () => (
  <>
    <Head>
      <title>
        KPI's and Alerts
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
  <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
         
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
        
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
         
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
         
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
      
      <Mapleaf lat={53.437389} longs={-2.98517}  sx={{ height: '100%' }} />    
        

          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
          
            <Summary sx={{ height: '100%' }} />
          </Grid>
  
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          > <h1>Fleet Health</h1></Grid>
           
         
        <Fleethealth />
       
        <Stack direction="row" spacing={2}>
        <TrendGraph trend="Week " />
        <TrendGraph trend="Month " />
        <TrendGraph trend="Year " />
       
      </Stack>
          
          
          </Grid>
        </Grid>
      </Container>
    </Box>

  </>
);


Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;

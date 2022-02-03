import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { LatestProducts } from '../components/dashboard/latest-products';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic'
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
      
      <Mapleaf sx={{ height: '100%' }} />

          {/* here */} 
    
        

          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/*
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            */}
          
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Plot
 data={[
   {
    values: [9,2,1],
    labels: ['Green', 'Amber', 'Red' ],
    domain: {column: 0},
    
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    

   }
   
 ]}
 layout={ {width: 750, height: 500, title: 'Fleet Health'} }
/>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          
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

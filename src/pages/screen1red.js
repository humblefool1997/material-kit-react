import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import  {Compressortrackerred} from '../components/dashboard/compressortrackerred';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic'
import { LatestProducts } from '../components/dashboard/latest-products';
const Mapleaf = dynamic(() => import('../components/mapopenstreet/mapleaf'), { ssr: false });
const Screen1red = () => (
  <>
    <Head>
      <title>
        Unit Overview
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
          <Compressortrackerred sx={{ height: '100%' , width: '400%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
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
        <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          ></Grid>
        
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
      
      <Mapleaf lat={53.5800705} longs={-3.0656900} sx={{ height: '100%' }} />

          {/* here */} 
    
          

          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
          
 {/* <LatestProducts sx={{ height: '100%' }} /> */}
          </Grid>
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


Screen1red.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen1red;

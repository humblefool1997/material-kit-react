import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import dynamic  from 'next/dynamic';
import { DashboardLayout } from '../components/dashboard-layout';

const Plot = dynamic(
() => {
  return import("react-plotly.js")
},
{ ssr: false}

)
const Compressorstats = () => (
  <>
    <Head>
      <title>
      COMPRESSOR STAT
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
         <Plot
 data={[
   {
     x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
     y: [1, 3, 6],
     type: 'scatter'
   },
   {type: 'bar'},
 ]}
 layout={ {width: 750, height: 500, title: 'Compressor Pressure time-series plot '} }
/>
          {/* here */} 


          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {}
          
           
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

Compressorstats.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Compressorstats;

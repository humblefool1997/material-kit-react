import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Compressortracker} from '../components/dashboard/compressortracker';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic';
const Unitmapleaf = dynamic(() => import('../components/mapopenstreet/unitmapleaf'), { ssr: false });
import UnitTable from 'src/components/DataTables/UnitTable';
import {Stack} from '@mui/material/Stack';
const Screen1 = () => (
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
          <Compressortracker sx={{ height: '100%' , width: '400%' }} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            
          </Grid>
       
         
        
         
         
          <UnitTable sx={{ height: '100%' }}/>
          

          <Unitmapleaf lat={53.437389} longs={-2.98517}/>
         



      

    
       

          
        
        </Grid>
      </Container>
    </Box>
  </>
);


Screen1.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen1;

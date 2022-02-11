import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import  {Compressortrackerred } from '../components/dashboard/compressortrackerred';
import { DashboardLayout } from '../components/dashboard-layout';
import dynamic from  'next/dynamic';
import UnitTableRed from 'src/components/DataTables/UnitTableRed';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Unitmapleafred = dynamic(() => import('../components/mapopenstreet/unitmapleafred'), { ssr: false });

const Screen1Red = () => (
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
   <Grid>  <Compressortrackerred sx={{ width: '100%' }} /> </Grid>     
   <Grid container direction={'row'}>
   <Grid container spacing={3}>
  <Grid item xs={3}>
 
  <Unitmapleafred lat={53.426521} longs={-3.066215}/> 
    </Grid>
    <Grid item xs={9}>
    <UnitTableRed/> 
    </Grid>
    
      </Grid>
   
   </Grid>
  </Container> 
  <Box sx={{ flexGrow: 1 }}>
  
    </Box>
  </Box>
  </>
);


Screen1Red.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen1Red;

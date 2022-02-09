import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import dynamic  from 'next/dynamic';
import { DashboardLayout } from '../components/dashboard-layout';
import CompressorStatsDialog from 'src/components/CompressorStat/CompressorStatsDialog';

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
        <CompressorStatsDialog></CompressorStatsDialog>
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

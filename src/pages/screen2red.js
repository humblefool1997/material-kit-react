import Head from 'next/head';
import { Box, Container, Link } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';




const columns= [
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 150,
    type: 'number',
    renderCell: (params) => (
      <Button variant="contained" color="error"> Red </Button>
    ),
  },
  { field: 'id', 
    headerName: 'Unit No', 
    width: 90,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  
  {
    field: 'fc_a_b',
    headerName: 'Functioning Compressor',
    width: 190,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
   
  },
  
  {
    field: 'location',
    headerName: 'Location',
    width: 200,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  
  },
  {
    field: 'health',
    headerName: 'Health (%)',
    width: 100,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    
  },
  {
    field: 'dutycycle',
    headerName: 'Duty Cycle (%)',
    width: 100,
    type: 'number',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
   
  },
  {
    field: 'operatinghours',
    headerName: 'Operating Hours (hrs)',
    width: 150,
    type: 'number',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
   
  }
  
];

const rows = [
  { id: 777012,  status: 'Red', fc_a_b: 'A', location: 'Kirkdale Depot,Liverpool', health: 25, dutycycle: '89', 
  operatinghours: '3500' }
 
];
const Screen2red = () => (
  <>
    <Head>
      <title>
        Fleet Overview
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
        <Link href='/'>
       <Button >Dashboard Overview</Button>
       </Link>
       <Link href='/screen2'>
       <Button >Green Fleet</Button>
       </Link>
       <Link href='/screen2amber'>
       <Button >Amber Fleet</Button>
       </Link>
       <Link href='/screen2red'>
       <Button >Red Fleet</Button>
       </Link>
      <div style={{ height: 700, width: '100%' }}>
      <Box
      sx={{
        height: 700,
        width: 1,
        '& .super-app-theme--header': {
          backgroundColor: '#81D4FA',
        },
      }}
    >
     
    
<DataGrid
        sx={{ m: 2 }}
        rows={rows}
        columns={columns}
        pageSize={12 }
        rowsPerPageOptions={[10]}
      disableSelectionOnClick
      />
    </Box>
      
    </div>
      </Container>
    </Box>
  </>
);
Screen2red.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen2red;

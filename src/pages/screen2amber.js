import Head from 'next/head';
import { Box, Container, Link } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.status.danger,
  }));

const theme = createTheme({
    status: {
      danger: yellow[700],
    },
  });

const columns= [
  {
    field: 'status',
    headerName: 'Status',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 150,
    type: 'number',
    renderCell: (params) => (
    <ThemeProvider theme={theme}>
    <Button variant="contained" color="warning"> Amber </Button>
    </ThemeProvider>
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
  { id: 777001,  status: 'amber', fc_a_b: 'A', location: 'Kirkdale Depot,Liverpool', health: 25, dutycycle: '89', 
  operatinghours: '3500' },
  { id: 777002,  status: 'amber', fc_a_b: 'B', location: 'Formby', health: 25, dutycycle: '89',
  operatinghours: '4600'
},
  { id: 777003,  status: 'amber', fc_a_b: 'B', location: 'Sefton', health: 25, dutycycle: '89',
  operatinghours: '1100'}

 
];
const Screen2amber = () => (
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
Screen2amber.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Screen2amber;

import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    type: 'number'
  },
  { field: 'id', headerName: 'Unit No', width: 90 },
  
  {
    field: 'fc_a_b',
    headerName: 'Functioning Compressor (A or B)',
    width: 320,
   
  },
  
  {
    field: 'location',
    headerName: 'Location',
    width: 200,
  
  },
  {
    field: 'health',
    headerName: 'Health (%)',
    width: 100,
    
  },
  {
    field: 'dutycycle',
    headerName: 'Duty Cycle',
    width: 150,
    type: 'number',
   
  }
  
];

const rows = [
  { id: 777001,  status: 'green', fc_a_b: 'A', location: 'Kirkdale Depot', health: 25, dutycycle: '89' },
  { id: 777002, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 777003, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 777004, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 777005, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 777006, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 777007, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 777008, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 777009, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const Trains = () => (
  <>
    <Head>
      <title>
        Trains
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
       
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        sx={{ m: 2 }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      
        disableSelectionOnClick
      />
    </div>
      </Container>
    </Box>
  </>
);
Trains.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Trains;

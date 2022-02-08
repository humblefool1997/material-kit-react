import Head from 'next/head';
import { Box, Container, Link } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'
const columns = [
 
    {
      field: 'status',
      headerName: 'Status',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      width: 100,
      renderCell: (params) => (
        <strong>
          
          <Button
            variant="contained"
            color={params.value}
            size="small"
            style={{ marginLeft: 16 }}
          >
            
          </Button>
        </strong>
      ),
   
  },
    
  
    
    
    {
      field: 'fc_a_b',
      headerName: 'Functioning Compressor',
      width: 220,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
     
    },
    { field: 'id', 
      headerName: 'Serial No', 
      width: 90,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    
    
    {
      field: 'health',
      headerName: 'Compressor Health (%)',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      
    },
    {
      field: 'dutycycle',
      headerName: 'Duty Cycle (%)',
      width: 150,
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
     
    },
    {
      field: 'operatinghours',
      headerName: 'Operating Hours (hrs)',
      width: 180,
      type: 'number',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'justify',
     
    },
    {
        field: 'lastmaintaineddate',
        headerName: 'Last Maintained Date',
        width: 180,
        type: 'date',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'justify',
       
    },
    {
        field: 'days_last_maintained',
        headerName: 'Days since Last maintained',
        width: 180,
        type: 'number',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'justify',
       
    }
    
    
  ];
  
  const rows = [
    { id: 7, status: 'warning', fc_a_b: 'A',health: 25, dutycycle: '89', operatinghours: '3500', days_last_maintained: 3,
     lastmaintaineddate: new Date(2021, 1, 1),   },
     { id: 777001, status: 'success', fc_a_b: 'A',health: 25, dutycycle: '89', operatinghours: '3500', days_last_maintained: 3,
     lastmaintaineddate: new Date(2022, 11, 1)   },
    
   
  ];
const UnitTable = (props) => {

    return (
    <Container maxWidth={true}>
     
    <div style={{ height: 800, width: '100%' }}>
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
      sx={{ m: 3 }}
      rows={rows}
      columns={columns}
      pageSize={12 }
      rowsPerPageOptions={[10]}
    disableSelectionOnClick
    />
  </Box>
    
  </div>
</Container>

 )};

export default UnitTable;
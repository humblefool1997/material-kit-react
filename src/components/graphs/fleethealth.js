import { Card, CardContent, CardHeader } from '@mui/material';
import dynamic from 'next/dynamic'
import CardActions from '@mui/material/CardActions';

const TrendGraph = dynamic(() => import('../trends/TrendGraph'), { ssr: false });
const DonutChart = dynamic(() => import('react-donut-chart'), { ssr: false });

const Fleethealth = () =>{
    return (
    <Card>
    <CardHeader title="Fleet Health"/>

    <CardContent>
<DonutChart
     data={[
       {
         label: 'Red',
         value: 1,
       },
       {
         label: 'Amber',
         value: 2,
        
       },
       {
        label: 'Green',
        value: 9,
       
      },
     ]}
    colors={[
        '#D2222D',
        '#FFBF00',
        '#238823',
        '#D2222D',
        '#FFBF00',
        '#238823'
    ]
   
  
  }
  innerRadius	= '0.40'
  outerRadius = '0.90'
  height = "200"
  width = "300"
  clickToggle="true"

  strokeColor="#D2222D"
   />

    <CardActions>
   <TrendGraph trend="Week"></TrendGraph>
   <TrendGraph trend="Month"></TrendGraph>
   <TrendGraph trend="Year"></TrendGraph>
   </CardActions>
  </CardContent>
 </Card>  
     ) 
}
export default Fleethealth;

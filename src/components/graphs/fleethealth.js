import dynamic from 'next/dynamic'
const DonutChart = dynamic(import('react-donut-chart'), { ssr: false })

const Fleethealth = () =>{
    return <DonutChart
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
        '#238823'
    ]
   
  
  }
  innerRadius	= '0.50'
  outerRadius = '0.90'
  clickToggle = 'false'
  emptyColor = 'false'
  legend = "true"
  height = "600"
  width = "400"

   />
   
   ;
}
export default Fleethealth;

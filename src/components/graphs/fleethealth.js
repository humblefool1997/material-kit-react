import dynamic from 'next/dynamic'
const DonutChart = dynamic(import('react-donut-chart'), { ssr: false })

const Fleethealth = () =>{
    return <DonutChart
     data={[
       {
         label: 'Red Fleet',
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
    ]}

   />;
}
export default Fleethealth;

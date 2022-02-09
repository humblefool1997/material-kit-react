import { Map,Overlay } from "pigeon-maps"
import { useRouter } from 'next/router'
import Link from 'next/link'



const Unitmapleaf = (props) => {
  
  return (
    
    //53.437389, -2.98517
    <Map height={300}
         width = {
           300}
defaultCenter={[props.lat,props.longs]}
defaultZoom={16}> 
    <Overlay anchor={[53.437389, -2.98517]} >
    <Link href="/screen1red">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png'
width={20}
height={20}
alt='' />
   </Link>
   
    </Overlay>
   

  
  
  
  
  
  
  
  
  
  
  </Map>
  )
}

export default Unitmapleaf;
import { Map,Overlay } from "pigeon-maps"
import { useRouter } from 'next/router'
import Link from 'next/link'



const Mapleaf = (props) => {
  
  return (
    
    //53.437389, -2.98517
    <Map height={600}
width={400}
defaultCenter={[props.lat,props.longs]}
defaultZoom={11}> 
    <Overlay anchor={[53.437389, -2.98517]} >
    <Link href="/screen1red">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png'
width={20}
height={20}
alt='' />
   </Link>
   
    </Overlay>
   

    
    <Overlay anchor={[53.55369949, -3.07075]} >
    <Link href="/screen1amber">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_amber.png'
width={20}
height={20}
alt='' />
   </Link>
    </Overlay>
    
    <Overlay anchor={[53.43753815, -2.9856801]} >
    <Link href="/screen1amber">
    <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_amber.png'
width={20}
height={20}
alt='' />
    </Link>
  </Overlay>
  <Overlay anchor={[53.5800705 , -3.0656900]} >
  <Link href="/screen1red">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png'
width={20}
height={20}
alt='' />
   </Link>
    </Overlay>
    <Overlay anchor={[53.08068085, -2.42459011]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
   </Link>
    </Overlay>
   
    
    <Overlay anchor={[53.43761826, -2.98574996]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
    </Link>
    </Overlay>
     
    <Overlay anchor={[53.4864, -2.9025]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
    </Link>
    </Overlay>
    <Overlay anchor={[53.43740082, -3.04800815]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
    </Link>
    </Overlay>
    <Overlay anchor={[53.1968, -2.8798]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
    </Link>
    </Overlay>
    <Overlay anchor={[53.4529, -2.730]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
   </Link>
    </Overlay>
    <Overlay anchor={[53.3606, -2.8560]} >
    <Link href="/screen1">
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png'
width={20}
height={20}
alt='' />
    </Link>
    </Overlay>
  
  
  
  
  
  
  
  
  
  
  </Map>
  )
}

export default Mapleaf;
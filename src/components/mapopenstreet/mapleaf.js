import { Map, Marker,Overlay } from "pigeon-maps"
import { useRouter } from 'next/router'

const Mapleaf = () => {
  return (
    
    <Map height={600} defaultCenter={[53.437389, -2.98517]} defaultZoom={11}> 
    <Overlay anchor={[53.437389, -2.98517]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png' width={20} height={20} alt='' />
   <Marker 
        width={50}
        anchor={[50.879, 4.6997]} 
        onClick={() => alert("Hello")} 
      />
    </Overlay>
   

    
    <Overlay anchor={[53.55369949, -3.07075]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_amber.png' width={20} height={20} alt='' />
    </Overlay>
    
    <Overlay anchor={[53.43753815, -2.9856801]} >
    <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_amber.png' width={20} height={20} alt='' />
  </Overlay>
  <Overlay anchor={[53.5800705 , -3.0656900]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_red.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[53.08068085, -2.42459011]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
    
    <Overlay anchor={[53.43761826, -2.98574996]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
     
    <Overlay anchor={[53.4864, -2.9025]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[53.43740082, -3.04800815]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[53.1968, -2.8798]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[53.4529, -2.730]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[53.3606, -2.8560]} >
   <img src='https://raw.githubusercontent.com/humblefool1997/CDN_ASSETS/main/stadler_green.png' width={20} height={20} alt='' />
    </Overlay>
  
  
  
  
  
  
  
  
  
  
  </Map>
  )
}

export default Mapleaf;
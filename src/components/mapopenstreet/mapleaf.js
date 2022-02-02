import { Map, Marker,Overlay } from "pigeon-maps"
const Mapleaf = () => {
  return (
    
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}> 
    <Marker
    
    width={50}
    anchor={[50.879, 4.6997]} 
    
    
    />
    <Overlay anchor={[50.879, 4.6997]} >
      <img src='http://localhost:3000/static/images/products/product_2.png' width={20} height={20} alt='' />
    </Overlay>
    
    <Overlay anchor={[50.879, 3.6997]} >
      <img src='http://localhost:3000/static/images/products/product_2.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[50.879, 2.6997]} >
      <img src='http://localhost:3000/static/images/products/product_2.png' width={20} height={20} alt='' />
    </Overlay>
    <Overlay anchor={[50.879, 1.6997]} >
      <img src='http://localhost:3000/static/images/products/product_2.png' width={20} height={20} alt='' />
    </Overlay>
  </Map>
  )
}

export default Mapleaf;
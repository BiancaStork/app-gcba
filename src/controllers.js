import axios from 'axios';


const obtenerCalles= async (direccion) =>{
    try{
          
        const result = await axios.get( `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccion}`);
        return result.data.direccionesNormalizadas;
    } catch(error){
        console.error(error)
    }
    
}

export {
    obtenerCalles,
}
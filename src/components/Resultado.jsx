import useCotizador from "../hooks/useCotizador"
import {useRef} from "react"
const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos;
    const yearRef = useRef(year)
    
    const [nombreMarca] = useMemo(() => 
    MARCAS.filter(m => m.id === Number(marca)),
    [resultado]
    )

    if (resultado === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
     
        {plan == 1 ? 'Básico' : 'Completo'}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total de Cotizacion: </span>
       {resultado}
      </p>
    </div>
  )
}

export default Resultado

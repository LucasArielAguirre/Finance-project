import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface DolarBlue {
    value_avg: number;
    value_sell: number;
    value_buy: number;
  }
  
const Dashboard = () => {
const [dolarBlue, setDolarBlue] = useState <DolarBlue | null>(null);

useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => response.json())
    .then(data => setDolarBlue(data.blue))
}, [])
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="transparent w-full h-full">
    <div className="grid grid-cols-6 grid-rows-9 gap-6 w-full h-full text-black">
    <div className="rounded-xl col-span-2 row-span-3 border border-white/80 justify-center align-middle text-center flex flex-col items-center bg-[#032C69] bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100 ">
        <h1 className="text-black text-6xl">BALANCE</h1>
        <h2 className="text-black text-4xl font-extralight">$10,000 <span className="text-green-900">$ USD</span></h2>
        <div className="py-2 px-4 border border-white w-[40%] mt-5 hover:cursor-pointer">New Balance</div>
    </div>
    <div className="col-span-2 row-span-3 col-start-3 border border-black/80 bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100 ">2</div>
    <div className="col-span-2 row-span-3 col-start-5 border border-black/80 w-full text-white justify-center align-middle flex flex-col items-center bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100">
        {dolarBlue ? (
          <div className=" w-full h-full flex">
            <div className="space-y-4 flex flex-col items-center text-center justify-center m-auto">
              <div className="flex flex-col">
                <span className="text-black text-6xl">Dolar blue</span>
                <h2 className="text-2xl font-extralight text-black">
                   {dolarBlue.value_avg} 
                  <span className="text-green-900 px-1">$ USD</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-white">
                <div className="flex flex-col items-center justify-center py-2 px-4">
                  <span className="text-sm opacity-75">COMPRA</span>
                  <h2 className="text-lg font-medium text-black">{dolarBlue.value_buy}<span className="text-green-900 px-1">$ USD</span></h2>
                </div>
                <div className="flex flex-col items-center justify-center py-2 px-4">
                  <span className="text-sm opacity-75">VENTA</span>
                  <h2 className="text-lg font-medium text-black">{dolarBlue.value_sell}<span className="text-green-900 px-1">$ USD</span></h2>
                </div>
              </div>
            </div>
          </div>
        ) : (     
          <div className="text-center py-4">
            <h1 className="text-white text-lg">Cargando...</h1>
          </div>
        )}
        </div>
    <div className="row-span-3 row-start-4 border border-black/80 bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100">4</div>
    <div className="row-span-3 row-start-4 border border-black/80 bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100">5</div>
    <div className="col-span-4 row-span-3 row-start-4 border border-black/80 bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100">6</div>
    <div className="col-span-6 row-span-3 row-start-7 border border-black/80 bg-white/20 bg-clip-padding backdrop-filter  backdrop-blur-2xl backdrop-saturate-100 backdrop-contrast-100">
    <table className="w-full border-collapse border border-black/80">
        <thead>
          <th className="border border-white">Nombre</th>
          <th className="border border-white">Categoria</th>
          <th className="border border-white">Fecha</th>
          <th className="border border-white">Motivo</th>
          <th className="border border-white">Monto</th>
          <th className="border border-white">Eliminar</th>
          <th className="border border-white">Editar</th>
        </thead>
        <tbody className="border border-white w-full h-full">
          <tr className="border border-white text-center">    
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white gap-2 flex items-center justify-center">
              a
            </td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
        
    </motion.div>
  )
}

export default Dashboard

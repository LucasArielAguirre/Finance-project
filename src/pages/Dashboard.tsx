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
    <div className="bg-neutral-950 w-full h-full">
    <div className="grid grid-cols-6 grid-rows-9 gap-6 w-full h-full">
    <div className="col-span-2 row-span-3 border border-white justify-center align-middle text-center flex flex-col items-center">
        <h1 className="text-white text-6xl">BALANCE</h1>
        <h2 className="text-white text-4xl font-extralight">$10,000 <span className="text-green-900">$ USD</span></h2>
        <div className="py-2 px-4 border border-white w-[40%] mt-10 hover:cursor-pointer">New Balance</div>
    </div>
    <div className="col-span-2 row-span-3 col-start-3 border border-amber-400">2</div>
    <div className="col-span-2 row-span-3 col-start-5 border border-blue-400 w-full text-white justify-center align-middle flex flex-col items-center">
        {dolarBlue ? (
          <div className=" w-full h-full flex">
            <div className="space-y-4 flex flex-col items-center text-center justify-center m-auto">
              <div className="flex flex-col">
                <span className="text-white text-6xl">Dolar blue</span>
                <h2 className="text-2xl font-extralight text-white">
                   {dolarBlue.value_avg} 
                  <span className="text-green-900 px-1">$ USD</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-white">
                <div className="flex flex-col items-center justify-center py-2 px-4">
                  <span className="text-sm opacity-75">COMPRA</span>
                  <h2 className="text-lg font-medium">{dolarBlue.value_buy}<span className="text-green-900 px-1">$ USD</span></h2>
                </div>
                <div className="flex flex-col items-center justify-center py-2 px-4">
                  <span className="text-sm opacity-75">VENTA</span>
                  <h2 className="text-lg font-medium">{dolarBlue.value_sell}<span className="text-green-900 px-1">$ USD</span></h2>
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
    <div className="row-span-3 row-start-4 border border-green-400">4</div>
    <div className="row-span-3 row-start-4 border border-yellow-400">5</div>
    <div className="col-span-4 row-span-3 row-start-4 border border-orange-400">6</div>
    <div className="col-span-6 row-span-3 row-start-7 border border-purple-400">7</div>
</div>
    
    </div>
  )
}

export default Dashboard

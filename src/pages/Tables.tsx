import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { fetchUsuarios, Usuario } from "../services/userService";

const Tables = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function cargarUsuarios() {
      const data = await fetchUsuarios();
      setUsuarios(data);
    }

    cargarUsuarios();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F9F4CC] w-full h-full"
    >
      <h1 className="text-3xl text-black text-center">TABLES</h1>
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr className="text-black">
            <th className="border border-black">Nombre</th>
            <th className="border border-black">categoria</th>
            <th className="border border-black">Fecha</th>
            <th className="border border-black">Ingreso</th>
            <th className="border border-black">Egreso</th>
            <th className="border border-black">Monto</th>
          </tr>
        </thead>
        <tbody className="border border-black w-full h-full">
          <tr className="border border-black text-center text-black">
            <td className="border border-black">a</td>
            <td className="border border-black">a</td>
            <td className="border border-black">a</td>
            <td className="border border-black">a</td>
            <td className="border border-black">a</td>
          </tr>
        </tbody>
      </table>

    <div className="flex flex-col items-center justify-center w-full h-full">
      <ul className="text-white w-full h-full">
        {usuarios.map((u) => (
          <li className="text-white" key={u.id}>
            {u.user} - {u.correo}
          </li>
        ))}
      </ul>
      </div>
    </motion.div>
  );
};

export default Tables;

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
      className="bg-black w-full h-full"
    >
      <h1 className="text-3xl text-white text-center">TABLES</h1>
      <table className="w-full border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white">Nombre</th>
            <th className="border border-white">categoria</th>
            <th className="border border-white">Fecha</th>
            <th className="border border-white">Ingreso</th>
            <th className="border border-white">Egreso</th>
            <th className="border border-white">Monto</th>
          </tr>
        </thead>
        <tbody className="border border-white w-full h-full">
          <tr className="border border-white text-center">
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
            <td className="border border-white">a</td>
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

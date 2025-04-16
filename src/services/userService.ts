import supabase from '../utils/supabase';

export interface Usuario {
  id: number;
  user: string;
  correo: string;
}

export async function fetchUsuarios(): Promise<Usuario[]> {
  const { data, error } = await supabase
    .from('User')
    .select('id, user, correo');

  if (error) {
    console.error('Error al obtener usuarios:', error.message);
    return [];
  }

  return data || [];
}
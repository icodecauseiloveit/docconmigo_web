"use server";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Use service role on the server for bypass RLS if needed, although it depends on your policies
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function saveFormSubmission(answers: Record<string, string>, isHotLead: boolean) {
  try {
    const { data, error } = await supabaseAdmin
      .from('clientes_formulario')
      .insert([
        {
          nombre: answers['nombre'],
          whatsapp: answers['whatsapp'],
          email: answers['email'],
          objetivo_salud: answers['objetivo_salud'],
          tiempo_problema: answers['tiempo_problema'],
          intentos_previos: answers['intentos_previos'],
          compromiso: answers['compromiso'],
          disposicion_cambio: answers['disposicion_cambio'],
          urgencia: answers['urgencia'],
          inversion: answers['inversion'],
          preferencia_modalidad: answers['preferencia_modalidad'],
          motivacion_extra: answers['motivacion_extra'],
          is_hot_lead: isHotLead,
        },
      ]);

    if (error) {
      console.error('Error saving to Supabase:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Exception saving to Supabase:', err);
    return { success: false, error: 'Internal server error' };
  }
}

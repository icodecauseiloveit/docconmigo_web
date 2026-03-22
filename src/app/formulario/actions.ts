"use server";

import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Supabase configuration missing:', {
      url: supabaseUrl ? 'PRESENT' : 'MISSING',
      key: supabaseServiceRoleKey ? 'PRESENT' : 'MISSING'
    });
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey);
}

export async function saveFormSubmission(answers: Record<string, string>, isHotLead: boolean) {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    
    if (!supabaseAdmin) {
      return { success: false, error: 'Database configuration missing on server' };
    }

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
      ])
      .select();

    if (error) {
      console.error('Error saving to Supabase:', error);
      return { success: false, error: error.message };
    }

    console.log('Form saved to Supabase successfully:', data?.[0]?.id);
    return { success: true, data };
  } catch (err) {
    console.error('Exception saving to Supabase:', err);
    return { success: false, error: 'Internal server error' };
  }
}


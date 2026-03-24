import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.docconmigo.com';
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzA5OTM5OTgsImV4cCI6MTg5MzQ1NjAwMCwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlzcyI6InN1cGFiYXNlIn0.zqPNoKIj4bFa9NHgRiSwIiL1_xWoG2BHfP983IJEWBM';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

async function testFinalSave() {
  console.log('--- Iniciando Prueba de Guardado Final ---');
  
  const answers = {
    nombre: 'Juan Perez (Prueba Final)',
    whatsapp: '573001234567',
    email: 'juan@perez.com',
    objetivo_salud: 'Mejorar energía y digestión',
    tiempo_problema: 'Más de 6 meses',
    intentos_previos: 'Sí, pero sin resultados claros',
    compromiso: 'Muy comprometido, quiero empezar ya',
    disposicion_cambio: 'Sí, totalmente',
    urgencia: 'Es una prioridad urgente',
    inversion: 'Sí',
    preferencia_modalidad: 'Sí, no tengo problema con que sea virtual',
    motivacion_extra: 'Motivado por la salud familiar'
  };

  const isHotLead = true;

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
      ])
      .select();

    if (error) {
      console.error('ERROR AL GUARDAR:', error.message);
    } else {
      console.log('✅ ÉXITO TOTAL: El formulario se guardó correctamente.');
      console.log('ID del registro:', data[0].id);
      console.log('Datos guardados:', data[0]);
    }
  } catch (err) {
    console.error('ERROR INESPERADO:', err);
  }
}

testFinalSave();

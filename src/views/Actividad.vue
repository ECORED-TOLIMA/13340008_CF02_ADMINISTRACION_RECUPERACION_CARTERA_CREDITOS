<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Contabilidad y normatividad financiera: demuestra tu dominio en la gestión de cartera.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de apropiación de los conceptos contables y normativos fundamentales para la gestión de cartera en el sistema financiero colombiano.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal del TLC Colombia–EE. UU.?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar impuestos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover el comercio sin reglas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar el acceso a mercados internacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la producción nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un mecanismo de defensa comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IVA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salvaguardias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Subsidios internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TRM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El dumping ocurre cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se exporta con altos aranceles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se vende por encima del precio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se eliminan impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se vende por debajo del valor normal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué entidad investiga prácticas antidumping en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Ministerio de Comercio, Industria y Turismo de Colombia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El Banco de la República de Colombia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Las subvenciones se refieren a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El apoyo financiero que el Estado otorga a los productores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los impuestos indirectos aplicados sobre bienes y servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las tarifas aduaneras cobradas en operaciones de importación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los costos logísticos asociados a una operación de exportación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El capítulo laboral del TLC se basa en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las directrices del Fondo Monetario Internacional (FMI).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las normas de la Organización Mundial del Comercio (OMC).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los estándares de la Organización Internacional del Trabajo (OIT).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los procedimientos de la DIAN para el comercio exterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué principio impide reducir derechos laborales para atraer inversión?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El principio de legalidad en los procedimientos laborales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El principio de igualdad de trato en el empleo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El principio de transparencia en la normativa laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El principio de no regresión laboral.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué entidad regula los alimentos en EE. UU.?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DIAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FDA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ICA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'OMC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El incumplimiento de requisitos sanitarios en EE. UU. puede generar:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La reducción de los impuestos sobre la mercancía importada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cobro de multas leves al exportador colombiano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La destrucción total del cargamento en el puerto de entrada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La asignación de subsidios compensatorios al exportador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué capítulo del APC regula los compromisos ambientales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El Capítulo 6, sobre medidas sanitarias y fitosanitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El Capítulo 10, sobre inversión y protección de capital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Capítulo 17, sobre legislación y compromisos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El Capítulo 18, sobre compromisos y obligaciones ambientales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La clasificación arancelaria de un producto determina:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tipo de empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El arancel y requisitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué entidad administra el Sistema Armonizado de clasificación de mercancías?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'OMC.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'OIT.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'OMA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'FMI.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Las zonas francas en Colombia permiten:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar exportaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incentivar inversión y exportaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar aranceles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Para acceder a los beneficios del TLC exportando desde una zona franca se deben cumplir:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las reglas de origen establecidas en el Capítulo 4 del APC.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El pago del impuesto al valor agregado sobre los insumos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La tasa representativa del mercado vigente en la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los requisitos de subsidios para operadores en zona franca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'La tasa representativa del mercado (TRM) es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un impuesto aplicado a las operaciones de importación en Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El precio promedio del dólar en el mercado interbancario colombiano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un subsidio otorgado por el Estado a los exportadores colombianos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un arancel especial definido en el marco del APC Colombia–EE. UU.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Quién regula el régimen cambiario en Colombia?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Banco de la República.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'DIAN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'INVIMA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ICA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Un forward de divisas es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un impuesto aplicado al comercio de divisas en Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un documento aduanero exigido en la declaración de exportación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un instrumento de cobertura que fija el tipo de cambio futuro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un medio de transporte utilizado en el comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el medio de pago más seguro para el exportador colombiano?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuenta abierta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transferencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carta de crédito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'El documento que certifica el origen del producto en el marco del APC es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'BL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Certificado de origen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Packing list.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué entidad controla el cumplimiento aduanero en Colombia?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Organización Internacional del Trabajo (OIT).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La Administración de Alimentos y Medicamentos (FDA).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Organización Mundial del Comercio (OMC).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

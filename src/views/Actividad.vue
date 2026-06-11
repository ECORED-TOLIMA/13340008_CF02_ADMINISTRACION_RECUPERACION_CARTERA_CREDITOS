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
          texto:
            '¿Cuál es el propósito fundamental de la contabilidad en las entidades financieras colombianas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar únicamente los ingresos por intereses generados por la cartera de créditos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar fielmente todas las transacciones económicas y generar información confiable para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calcular el monto de los impuestos que debe pagar la entidad al final del período fiscal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar el cumplimiento de los horarios del personal del área de cartera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué plan contable deben aplicar obligatoriamente las entidades vigiladas por la Superintendencia Financiera de Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las Normas Internacionales de Información Financiera (NIIF) estándar sin ninguna modificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Plan Único de Cuentas para el sector real definido por la DIAN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Plan Único de Cuentas para el Sistema Financiero (PUC), con las instrucciones técnicas de la Superintendencia Financiera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El plan contable que libremente defina cada entidad según sus necesidades operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué principio contable obliga a las entidades financieras a reconocer las pérdidas potenciales de la cartera mediante provisiones, antes de que se materialicen?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de realización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Principio de prudencia o conservadurismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Principio de revelación suficiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Principio de continuidad del negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En el balance general de una entidad financiera, ¿cómo se presenta el valor neto de la cartera de créditos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Al valor bruto de todos los créditos otorgados sin ningún descuento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Al saldo bruto de cartera menos la provisión acumulada constituida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Al valor de mercado de los créditos según la cotización del sistema financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Al valor presente de los flujos futuros esperados descontados a tasa libre de riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué efecto produce el incremento del gasto por provisiones sobre el estado de resultados de una entidad financiera?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta la utilidad neta del período al reducir el riesgo de cartera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No tiene ningún efecto sobre el estado de resultados, solo afecta el balance.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reduce directamente la utilidad antes de impuestos del período.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incrementa los ingresos operacionales por el mayor nivel de protección del activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la modalidad de amortización de crédito en la que la cuota tiene el mismo valor total durante toda la vigencia del crédito?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bullet o pago único al vencimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuota fija o sistema francés.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Amortización irregular o flexible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuota variable o capital fijo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué norma colombiana regula específicamente los créditos hipotecarios para financiación de vivienda y establece condiciones diferenciales para su gestión?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 663 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 546 de 1999.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Circular básica contable y financiera de la SFC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1328 de 2009.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué es la tasa de usura y qué entidad la certifica en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es el límite máximo legal para el cobro de intereses; la certifica trimestralmente la Superintendencia Financiera de Colombia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es la tasa de interés promedio del sistema financiero; la certifica mensualmente el DANE.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es la tasa de interés mínima que deben cobrar las entidades financieras; la fija el Banco de la República.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es la tasa de interés que el Banco de la República cobra a los bancos comerciales; la certifica el Ministerio de Hacienda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el documento normativo de la Superintendencia Financiera que regula la clasificación, calificación y provisionamiento de la cartera de créditos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La Circular Básica Contable y Financiera (CBCF), especialmente el Capítulo II.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El Estatuto Orgánico del Sistema Financiero (Decreto 663 de 1993).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La Ley 1328 de 2009 o Estatuto del Consumidor Financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Ley 795 de 2003 sobre ajustes al sistema financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuáles son los componentes fundamentales que debe tener el Sistema de Administración del Riesgo Crediticio (SARC) según la Superintendencia Financiera de Colombia?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los reportes mensuales de cartera que se envían a la Superintendencia Financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Políticas, procesos, modelos de calificación y sistemas de control interno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Únicamente los modelos estadísticos de probabilidad de incumplimiento de los deudores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo las políticas de otorgamiento de crédito aprobadas por la junta directiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el porcentaje de provisión general que deben constituir las entidades financieras sobre el saldo total bruto de la cartera?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0.5 % del saldo total bruto de la cartera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3.2 % del saldo total bruto de la cartera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1 % del saldo total bruto de la cartera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '20 % del saldo total bruto de la cartera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué ocurre con los intereses causados de un crédito cuando entra en mora avanzada y es reclasificado a categorías de mayor riesgo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se siguen reconociendo como ingresos en el estado de resultados hasta que el crédito sea castigado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se contabilizan en cuentas de orden y no se reconocen como ingresos hasta que sean efectivamente pagados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se condonan automáticamente como parte del proceso de clasificación de la cartera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se transfieren a una cuenta de patrimonio para proteger la solvencia de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la función principal de la Superintendencia Financiera de Colombia en relación con la gestión de cartera de las entidades vigiladas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Otorgar créditos de emergencia a las entidades financieras en dificultades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fijar las tasas de interés activas que deben cobrar los bancos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ejercer la inspección, vigilancia y control de las entidades del sector financiero y emitir las normas técnicas que regulan la gestión de cartera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Administrar los recursos del Fondo de Garantías de Instituciones Financieras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿A través de qué mecanismo el Banco de la República influye sobre las condiciones de la cartera de créditos de las entidades financieras?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisa directamente la calidad de la cartera de cada entidad financiera vigilada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Otorga créditos de cartera comercial a las empresas del sector real de la economía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A través de su tasa de intervención, influye sobre las tasas activas del mercado y el costo del crédito para los deudores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establece los criterios de provisionamiento que deben aplicar las entidades financieras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la función principal del Fondo de Garantías de Instituciones Financieras (FOGAFIN) en el sistema financiero colombiano?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Supervisar directamente las prácticas de cobranza de las entidades vigiladas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proteger los ahorros del público depositados en las instituciones financieras mediante el Seguro de Depósitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Fijar los límites máximos para el cobro de intereses en las operaciones de crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Representar los intereses gremiales de los bancos comerciales ante el Gobierno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacer el gestor de cartera al detectar que los intereses de mora cobrados a un deudor superan la tasa de usura vigente?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Continuar el cobro, ya que el exceso de intereses es un beneficio legítimo de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Informar al deudor que el exceso será capitalizado en el siguiente período.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reversar el cobro indebido, ajustar el estado de cuenta del deudor y reportar el error internamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Escalar el caso al área jurídica para que defienda la posición de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Según la Ley 1328 de 2009, ¿cuál es el plazo máximo que tiene la entidad financiera para responder una queja del consumidor financiero radicada directamente ante ella?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cinco días hábiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Treinta días calendario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Quince días hábiles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ocho días hábiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué implica, en términos de calificación de riesgo, la reestructuración de un crédito en mora durante los primeros meses de cumplimiento de las nuevas condiciones?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La obligación reestructurada mejora automáticamente a categoría A desde la firma del acuerdo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La obligación reestructurada mantiene la calificación de riesgo que tenía en el momento de la reestructuración hasta que el deudor demuestre comportamiento de pago sostenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La obligación reestructurada pasa automáticamente a categoría E hasta que se complete el plazo pactado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La calificación se suspende durante el período de gracia y se recalcula al vencimiento del crédito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'En el caso de una queja de un consumidor financiero que alega cobros indebidos, ¿cuál es el primer paso que debe seguir el gestor de cartera?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Informar al deudor que el cobro es correcto y exigir el pago del saldo pendiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escalar inmediatamente la queja a la Superintendencia Financiera sin revisar la información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Consultar el historial de la obligación en el sistema para verificar si el cobro fue correcto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Enviar al deudor a la Defensoría del Consumidor Financiero sin atender la queja internamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué registro contable se realiza cuando una entidad financiera decide castigar (dar de baja) una obligación clasificada en categoría E con provisión del 100 %?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se debita la cartera y se acredita el gasto por provisión del período.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se debita la provisión acumulada y se acredita la cartera, eliminando la obligación del balance general.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se debita el patrimonio y se acredita la cartera como reconocimiento de la pérdida definitiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se debita el gasto por cartera castigada y se acredita la provisión acumulada del período.',
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

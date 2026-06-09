<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Aplicación normativa en la gestión de cartera

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/1.svg', style='width: 100px').m-auto
      
      .col
        p El conocimiento de la normativa contable y financiera solo adquiere valor real cuando se traduce en la capacidad de aplicarla correctamente en las situaciones concretas que el profesional de cartera enfrenta en su trabajo cotidiano. El conocimiento teórico de las normas no es suficiente: es necesario saber cómo se implementan esas normas en cada proceso específico de la gestión de cartera.

    .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aplicación normativa en la gestión de cartera exige precisión técnica, criterio profesional y capacidad de análisis frente a situaciones que con frecuencia no encajan perfectamente en los modelos previstos por las normas. El gestor que domina la aplicación práctica de la normativa puede tomar decisiones fundamentadas incluso en situaciones complejas o inusuales.


    p.mt-4 Este tema desarrolla tres procesos específicos de aplicación normativa que el gestor de cartera debe dominar:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-21.bg-r8.align-items-end
          .col-12

            ul.lista-ul--color
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Cálculo de provisiones:] procedimiento técnico para determinar las reservas contables que la entidad debe constituir según la categoría de riesgo de cada obligación.
                
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Reporte e informes de cumplimiento:] procedimiento para transmitir información sobre el estado de la cartera a la Superintendencia Financiera y para elaborar los informes internos que documentan el cumplimiento normativo del área.

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Gestión de quejas:] procedimiento para atender y resolver las reclamaciones de los consumidores financieros conforme a los mecanismos establecidos por la Ley 1328 de 2009.


    p.mt-4 El dominio de estos tres procesos le permite al gestor de cartera cumplir con responsabilidad sus obligaciones normativas y actuar como un profesional técnicamente competente ante el regulador, la alta dirección y los consumidores financieros.


    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/3.svg', style='width: 100px').m-auto
      
      .col
        p Para aplicar la normativa en la gestión de cartera, el primer aspecto que debe revisarse es el cálculo de provisiones, porque permite estimar el posible deterioro de las obligaciones según su categoría de riesgo. Este proceso ayuda a reconocer cuánto debe reservar la entidad para cubrir pérdidas esperadas y garantiza que la información financiera refleje de manera más precisa el estado real de la cartera.


    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Cálculo de provisiones por categoría de riesgo


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/4.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El cálculo de provisiones es una de las tareas técnicas más importantes del área de cartera, con impacto directo sobre los estados financieros de la entidad. Su correcta aplicación garantiza que la entidad cumple con las normas de la Superintendencia Financiera y que sus estados financieros reflejan fielmente el riesgo real de su portafolio.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema5/5.svg', style='width: 100px').m-auto
          
          .col
            p Asimismo, el proceso de cálculo de provisiones no es solo un ejercicio contable, es una herramienta de gestión que permite a la entidad identificar con precisión el nivel de deterioro de su cartera y cuantificar el costo financiero de ese deterioro. Un cálculo correcto de provisiones es el fundamento de una toma de decisiones rigurosa en materia de gestión de riesgo crediticio.


    p.mt-4 El proceso de cálculo de provisiones individuales según la categoría de riesgo se realiza de la siguiente manera:


    .row.justify-content-center 
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Identificación de la categoría de riesgo")
            .col-md-12.mb-4.mb-md-0
              p El primer paso es verificar la categoría A, B, C, D o E asignada a cada obligación según los criterios de la CBCF: días de mora, comportamiento de pago, capacidad del deudor y perspectivas de recuperación. Esta categoría determina el porcentaje de provisión aplicable.

              p #[b Ejemplo:] el gestor revisa el sistema de cartera y encuentra que un crédito comercial de $50.000.000 tiene 75 días de mora, lo que corresponde a categoría C. El porcentaje de provisión individual requerido para esta categoría es del 20 %.
    
          .row(numero="2" titulo="Análisis de viabilidad")
            .col-md-12.mb-4.mb-md-0
              p Cálculo de la provisión requerida: se aplica el porcentaje de provisión correspondiente a la categoría sobre el saldo bruto de la obligación. La provisión requerida es el monto que la entidad debe tener reservado como respaldo ante la pérdida potencial de ese crédito.
              p #[b Ejemplo:] para el crédito del ejemplo anterior: $50.000.000 × 20 % = $10.000.000 de provisión individual requerida. Si la entidad tiene constituida una provisión de $500.000 (1 % de categoría A anterior), el ajuste necesario es de $9.500.000 adicionales.

    
          .row(numero="3" titulo="Diseño de las nuevas condiciones")
            .col-md-12.mb-4.mb-md-0
              p Comparación con la provisión constituida: el resultado del cálculo se compara con la provisión que la entidad tiene actualmente registrada en su contabilidad para esa obligación. Si la provisión constituida es menor a la requerida, debe constituirse la diferencia; si es mayor, puede liberarse el exceso.
              p #[b Ejemplo:] si una obligación requiere una provisión de $10.000.000 y la entidad solo tiene registrada una provisión de $7.000.000, debe constituir $3.000.000 adicionales para cubrir el nivel de riesgo correspondiente.


          .row(numero="4" titulo="Registro contable")
            .col-md-12.mb-4.mb-md-0
              p Registro contable del ajuste: el ajuste de provisiones se registra como gasto en el estado de resultados (débito a la cuenta de gasto por provisiones) y como incremento de la provisión acumulada en el balance general (crédito a la cuenta de provisión acumulada de cartera).
              p #[b Ejemplo:] si la entidad debe aumentar la provisión en $3.000.000, registra ese valor como gasto por provisiones y lo suma a la provisión acumulada de cartera, para que los estados financieros reflejen el riesgo real de la obligación.


          .row(numero="5" titulo="Seguimiento posterior")
            .col-md-12.mb-4.mb-md-0
              p Periodicidad del cálculo: el proceso debe realizarse mensualmente para la mayoría de las entidades, conforme a las instrucciones de la SFC, y los resultados deben ser revisados por el área contable antes de su registro definitivo en los estados financieros del período.
              p #[b Ejemplo:] al cierre de cada mes, el área de cartera actualiza los días de mora y la categoría de riesgo de cada obligación. Luego, el área contable revisa los valores calculados y registra los ajustes de provisión que correspondan.

               
    
    p.mt-4 El dominio del proceso de cálculo de provisiones le permite al gestor de cartera dimensionar con precisión el impacto financiero del deterioro de cada obligación, fundamentar sus informes ante la dirección con información cuantitativa, verificable y actuar con criterio técnico en la priorización de las acciones de recuperación.


    .row.justify-content-center.mt-4
      .col-lg-10
        p.p-4.bg-16.bg-r8 Una vez dominado el proceso de cálculo de provisiones, es necesario revisar el proceso de reporte de esa información a la Superintendencia Financiera y la elaboración de los informes de cumplimiento normativo que documentan la gestión del área ante la alta dirección y el regulador.


    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Reporte e informes de cumplimiento normativo

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/6.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Las entidades financieras tienen la obligación de reportar periódicamente a la Superintendencia Financiera información detallada sobre el estado de su cartera de créditos a través de los módulos de información del regulador. Este reporte incluye el saldo de cada obligación, su categoría de riesgo, las provisiones constituidas, los pagos recibidos y las gestiones de cobranza realizadas.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Asimismo, además del reporte externo al regulador, el área de cartera debe elaborar informes internos de cumplimiento normativo que demuestran a la alta dirección, al área de auditoría interna y eventualmente a la SFC que los procesos del área se ajustan a los estándares regulatorios. Estos informes son la evidencia documental del cumplimiento normativo del área de cartera.


    p.mt-4 Los informes de cumplimiento normativo del área de cartera deben incluir los siguientes elementos:

    .row.align-items-center.justify-content-center.mt-4
      
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/7.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Estado de los indicadores regulatorios
            p.text-center Presenta los indicadores de calidad de cartera frente a los límites establecidos por la SFC, índice de cartera vencida, cobertura de provisiones, porcentaje de cartera en categorías de alto riesgo y muestra la tendencia de estos indicadores en el período analizado.

            
          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/8.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Evolución de la calidad de la cartera
            p.text-center Describe los movimientos entre categorías de riesgo durante el período: obligaciones que migraron a categorías de mayor riesgo, obligaciones que mejoraron su calificación y obligaciones que fueron castigadas o recuperadas. Esta información permite evaluar la efectividad de las acciones de gestión.

            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/9.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Estado de las provisiones
            p.text-center Compara las provisiones requeridas con las provisiones constituidas para cada categoría y cada modalidad de crédito, e identifica si existen brechas que deben corregirse antes del cierre del período contable.

            
          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/10.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Evidencias del cumplimiento del SARC
            p.text-center Documenta que los procedimientos del Sistema de Administración del Riesgo Crediticio se han aplicado correctamente durante el período: políticas vigentes y aprobadas, procedimientos documentados y seguidos, modelos de calificación aplicados con los criterios establecidos.

            
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-08.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/11.svg',  style='width: 100px').m-auto
            p.text-center.mb-0 
              b Acciones de mejora
            p.text-center Propone los ajustes necesarios para corregir las desviaciones identificadas, mejorar la calidad de los datos, actualizar los procedimientos desactualizados o reforzar la gestión en los segmentos con mayor deterioro.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/12.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La oportunidad y exactitud de los reportes a la SFC es una obligación regulatoria de primer orden. La SFC realiza cruces sistemáticos entre los reportes de diferentes entidades para detectar inconsistencias y puede iniciar investigaciones cuando identifica diferencias significativas entre los datos reportados y los resultados esperados. 

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-16.p-4(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema5/13.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Un reporte confiable permite evidenciar la gestión realizada y reduce el riesgo de sanciones por información incompleta o inconsistente.



    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/3.svg', style='width: 100px').m-auto
      
      .col
        p Con el dominio del proceso de reporte e informes de cumplimiento normativo, el gestor de cartera cuenta con herramientas para documentar su gestión de manera clara, ordenada y verificable. Esta base permite avanzar hacia la gestión de quejas de consumidores financieros, proceso en el que la entidad debe responder con oportunidad, soporte documental y respeto por los derechos del usuario.


    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Gestión de quejas de consumidores financieros


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/14.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La gestión de quejas de consumidores financieros permite atender, revisar y resolver las inconformidades que los usuarios presentan frente a los servicios, cobros o procedimientos aplicados por una entidad financiera. En el área de cartera, estas reclamaciones pueden relacionarse con intereses liquidados, acuerdos de pago, reportes de mora, trato recibido durante la cobranza o información registrada en el sistema.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema5/15.svg', style='width: 100px').m-auto
          
          .col
            p La Ley 1328 de 2009 establece mecanismos de protección al consumidor financiero y exige que las entidades vigiladas cuenten con procedimientos claros para recibir y responder quejas. Este proceso se desarrolla mediante instancias sucesivas, que permiten revisar la reclamación de manera ordenada y garantizar una respuesta sustentada:



    .row.mb-4.mt-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/16.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Atención directa por parte de la entidad
                p.mb-0 Es el primer canal al que acude el consumidor financiero para presentar su queja o solicitud. La entidad debe revisar los hechos, verificar los soportes y responder dentro de los plazos establecidos. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/17.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Actuación del defensor del consumidor financiero
                p.mb-0 Interviene cuando el usuario no está conforme con la respuesta recibida o considera que sus derechos no fueron atendidos adecuadamente. Su función es revisar el caso de manera imparcial y emitir una respuesta conforme al marco aplicable. 

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/18.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Superintendencia Financiera de Colombia
                p.mb-0 Puede conocer la reclamación cuando el caso escala a una instancia superior o cuando se evidencian posibles incumplimientos normativos. Su intervención permite verificar la actuación de la entidad vigilada y adoptar las medidas correspondientes.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/19.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Estas instancias permiten que el consumidor financiero cuente con canales organizados para presentar sus reclamaciones y recibir una respuesta verificable. Para la entidad, la correcta atención de quejas fortalece la transparencia, mejora la trazabilidad de la gestión y reduce el riesgo de sanciones, especialmente cuando existen soportes claros sobre los valores cobrados, los acuerdos realizados y las comunicaciones efectuadas.

        .row.align-items-center.mt-2.p-4.bg-15(data-aos="fade-right")
          .col-12
            figure
              img(src="@/assets/curso/tema5/20.svg", alt="", style="width: 80px")

            p.mt-2 Asimismo, para el área de cartera, la gestión correcta de las quejas no es solo una obligación regulatoria, es una oportunidad para identificar y corregir prácticas inadecuadas en los procesos de cobranza antes de que escalen a instancias superiores. Una queja bien resuelta fortalece la confianza del consumidor en la entidad; una queja mal gestionada puede derivar en sanciones, daños reputacionales y precedentes negativos para la institución.


    p.mt-4 Las quejas más frecuentes relacionadas con la gestión de cartera y el procedimiento para atenderlas son las siguientes:

    .row.justify-content-center.mt-4
     .col-lg-10
       .row.justify-content-center 
         AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
           //-1ra pestaña
           .row(titulo="Cobro de intereses por encima de los límites legales")
             p El área de cartera debe verificar si los intereses calculados corresponden a la tasa pactada y si no superan la tasa de usura vigente en el período. Si se confirma el error, debe corregirse y reintegrar al consumidor los cobros indebidos.

              p #[b Ejemplo:] la señora Guerrero alega que le cobraron intereses de mora de $1.850.000 cuando su cálculo indica que deberían ser $920.000. El área de cartera verifica la liquidación y confirma que se aplicó incorrectamente la tasa; procede a la corrección y al reintegro del exceso cobrado.
   
           //-2da pestaña  
           .row(titulo="Aplicación incorrecta de pagos")
             p Aplicación incorrecta de pagos: cuando el deudor alega que un pago no fue aplicado correctamente a su obligación, el área de cartera debe verificar el registro del pago en el sistema, el estado de cuenta antes y después del pago y la aplicación del valor según las reglas del contrato.
              p #[b Ejemplo:] el señor Ramírez informa que realizó un pago de $850.000, pero su obligación continúa apareciendo en mora. El área de cartera revisa el comprobante, verifica la fecha de aplicación y encuentra que el pago fue registrado en otra obligación del mismo cliente. La entidad corrige la imputación y actualiza el estado de cuenta.

           
           //-3ra pestaña
           .row(titulo="Prácticas de cobranza indebidas")
             p Prácticas de cobranza indebidas: el consumidor puede quejarse de llamadas en horarios no autorizados, contacto a terceros, lenguaje amenazante o cualquier otra práctica que considere contraria a sus derechos. El área de cartera debe revisar los registros de gestión y determinar si la queja tiene fundamento.
              p #[b Ejemplo:] una consumidora manifiesta que recibió llamadas de cobranza en horas de la noche y que también contactaron a un familiar que no era codeudor. El área de cartera revisa los registros de llamadas, confirma la situación y ordena suspender ese tipo de contacto, además de reforzar las instrucciones al equipo de cobranza.

   
           //-4ra pestaña
           .row(titulo="Reporte indebido a centrales de riesgo")
             p Reporte indebido a centrales de riesgo: el deudor puede reclamar que fue reportado incorrectamente o que la información no fue actualizada luego de un pago. El área debe verificar la exactitud del reporte y corregirlo si se constata algún error.
              p #[b Ejemplo:] la señora López solicita revisar su reporte porque canceló la obligación hace un mes y aún aparece como deudora en mora. El área de cartera verifica el pago total, confirma que la actualización no fue enviada oportunamente y solicita la corrección ante la central de riesgo correspondiente.

    p.mt-4 El procedimiento general para atender una queja incluye recibirla formalmente, registrarla en el sistema de seguimiento de quejas, investigar los hechos con base en la documentación disponible, emitir una respuesta fundamentada dentro del plazo establecido por la normativa y, si procede, aplicar las correcciones necesarias. 


    .row.justify-content-center.mt-4
      .col-lg-10
        // Contenedor principal centrado
        .bg-15.p-3.align-items-center.text-center
          // Imagen centrada
          figure.mb-3.img-center
            img(src="@/assets/curso/tema5/21.svg", alt="", style="width: 50px")
          
          b.mb-0 Toda queja debe quedar documentada con soportes claros, respuesta oportuna y registro verificable de la gestión realizada.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/22.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La gestión de quejas del consumidor financiero permite verificar si las actuaciones de la entidad se desarrollan con oportunidad, transparencia y soporte documental. Cada reclamación debe analizarse a partir de los hechos reportados, los registros disponibles, las normas aplicables y la respuesta emitida por la entidad.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema5/23.svg', style='width: 100px').m-auto
          
          .col
            p A partir de esta base, se profundiza en casos aplicados que representan situaciones frecuentes en la vida real del área de cartera. Su análisis permite identificar errores de liquidación, reportes indebidos, prácticas de cobranza inadecuadas o fallas en la atención al usuario, con el fin de establecer decisiones correctivas claras, verificables y ajustadas a la normativa vigente.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

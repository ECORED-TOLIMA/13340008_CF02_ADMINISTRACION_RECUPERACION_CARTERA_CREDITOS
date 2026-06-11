<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contabilidad básica del sistema financiero

    .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La contabilidad es el lenguaje de los negocios, porque permite registrar, clasificar y comunicar la información económica y financiera de las organizaciones para apoyar la toma de decisiones. En el sector financiero colombiano adquiere una relevancia especial, debido a que las entidades de crédito administran recursos del público, como los depósitos de los ahorradores, y su solidez incide en la estabilidad del sistema económico. Por esta razón, la normativa contable del sector financiero es más detallada y exigente que la aplicada en otros sectores.


    .row.align-items-start.mt-4
      .col
        p Para comprender su utilidad en la gestión de cartera, es necesario reconocer que la contabilidad no solo organiza datos, sino que también respalda decisiones técnicas, regulatorias y operativas. En este sentido, permite hacer seguimiento al comportamiento de las obligaciones, identificar riesgos, verificar saldos y reportar información confiable a las áreas internas y a los organismos de vigilancia y control. A continuación, se presentan cuatro funciones clave de la contabilidad aplicada a la cartera:
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/2.svg', style='width: 100px').m-auto
            

    //Tarjetas conectadas
    .tarjeta--container.row
      //Tarjeta 1
      .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/3.svg', style='width: 150px').m-auto 

        p.text-center #[b Registro]

        p Permite dejar evidencia ordenada de los créditos otorgados, pagos recibidos, intereses causados, provisiones y castigos de cartera. 

      //Tarjeta 2
      .col-md.tarjeta.bg-16.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/4.svg', style='width: 150px').m-auto 
        p.text-center #[b Clasificación]

        p Organiza la información según modalidad de crédito, nivel de riesgo, estado de pago y condiciones de la obligación. 

      //Tarjeta 3
      .col-md.tarjeta.bg-7.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/5.svg', style='width: 150px').m-auto 

        p.text-center #[b Control]

        p Facilita verificar saldos, mora, provisiones, movimientos contables y cumplimiento de las políticas internas. 

      //Tarjeta 4
      .col-md.tarjeta.bg-18.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/6.svg', style='width: 150px').m-auto 

        p.text-center #[b Reporte]

        p Comunica información confiable a las áreas de riesgo, contabilidad, dirección y organismos de vigilancia y control. 


    p.mt-4 Estas funciones muestran que la contabilidad es una herramienta práctica para interpretar la situación real de la cartera. Su correcta aplicación permite identificar riesgos, sustentar decisiones de recuperación y mantener información verificable sobre cada obligación administrada por la entidad.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-19(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/7.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Con esta base general, es posible comprender el propósito específico que cumple la contabilidad en las entidades financieras. En el siguiente apartado se explica cómo este sistema de información contribuye al control interno, al cumplimiento normativo y a la toma de decisiones relacionadas con la cartera de créditos.


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Propósito de la contabilidad en las entidades financieras

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/8.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La contabilidad en las entidades financieras tiene como propósito fundamental registrar fielmente todas las transacciones económicas que afectan la posición financiera de la institución, generando información útil para la toma de decisiones internas y para el cumplimiento de las obligaciones de reporte ante la Superintendencia Financiera de Colombia.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-15.bg-r8.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/9.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Asimismo, el propósito de la contabilidad en las entidades financieras va más allá de la simple documentación de transacciones, es también un mecanismo de control interno que permite detectar irregularidades, medir la exposición al riesgo crediticio y verificar el cumplimiento de las normas prudenciales definidas por el regulador.


    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/10.svg', style='width: 100px').m-auto
      
      .col
        p De igual manera, para el profesional de cartera, los reportes contables constituyen el insumo principal para dimensionar el impacto de su gestión sobre el desempeño financiero de la entidad. Los reportes contables más relevantes para la gestión de cartera son los que reflejan el estado de las obligaciones administradas. A continuación, se describen los propósitos específicos de la contabilidad que tienen mayor impacto sobre la gestión de cartera:


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Registro y trazabilidad")
              p La contabilidad garantiza que cada operación de crédito, cada pago recibido, cada provisión constituida y cada castigo de cartera quede registrado de manera ordenada y verificable, lo que permite reconstruir el historial financiero de cada obligación.
    
            //-2da pestaña  
            .row(titulo="Control interno")
              p lLs registros contables permiten identificar desviaciones entre los saldos esperados y los saldos reales, detectar errores en la aplicación de pagos y verificar que las provisiones se han constituido conforme a la normativa vigente.
            
            //-3ra pestaña
            .row(titulo="Reporte a la Superintendencia Financiera")
              p La información contable de la cartera se transmite periódicamente a través de los sistemas de reporte del regulador, quien la utiliza para evaluar la calidad de la gestión de cada entidad y comparar sus indicadores con los del sector.
    
            //-4ra pestaña
            .row(titulo="Soporte para la toma de decisiones")
              p Los informes contables de cartera le entregan a la alta dirección y a los gestores información objetiva sobre el comportamiento del portafolio, que respalda las decisiones de priorización, asignación de recursos y ajuste de estrategias de recuperación. 

    p.mt-4 Estos cuatro propósitos conforman un sistema integrado, la contabilidad no cumple ninguno de ellos de manera aislada, sino que los realiza simultáneamente a través del registro continuo y sistemático de cada transacción que afecta la cartera de créditos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-16.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/11.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Saber para qué sirve la contabilidad es el punto de partida, pero registrar y presentar esa información correctamente exige criterios técnicos precisos y uniformes. Esos criterios son los principios contables que determinan cómo se mide y comunica la situación financiera de una entidad de crédito, y cuyo cumplimiento tiene consecuencias directas sobre la solidez del sistema financiero.



    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Principios de contabilidad del sector financiero

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/12.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Los principios de contabilidad generalmente aceptados (PCGA) son el conjunto de normas, convenciones y criterios que rigen el registro y la presentación de la información financiera. En Colombia, el sistema financiero aplica estos principios a través de las instrucciones de la Superintendencia Financiera de Colombia, que establece normas técnicas específicas para las entidades vigiladas, con base en los estándares internacionales de información financiera (NIIF).

        p.p-4.bg-r8.bg-16 Asimismo, en las entidades financieras los principios contables adquieren especial relevancia porque su aplicación correcta o incorrecta tiene consecuencias directas sobre los indicadores que la Superintendencia Financiera utiliza para evaluar la salud del sistema financiero. Por ejemplo, si una entidad no aplica correctamente el principio de prudencia, puede registrar provisiones inferiores a las necesarias y mostrar una situación financiera mejor de la que realmente tiene.


    p.mt-4 Los principios más relevantes para la gestión de cartera y su aplicación específica en el sector financiero son los siguientes:


    .row.justify-content-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%").m-auto
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Principio de realización")
            .col-md-12.mb-4.mb-md-0
              p Establece que los ingresos por intereses solo deben reconocerse cuando existe certeza razonable de que serán percibidos. Para la cartera de créditos, esto significa que los intereses de obligaciones en mora avanzada no se registran como ingreso hasta que se reciban efectivamente, lo que protege a la entidad de sobreestimar sus ingresos.
    
          .row(numero="2" titulo="Principio de prudencia")
            .col-md-12.mb-4.mb-md-0
              p Exige reconocer las pérdidas potenciales en el momento en que se identifican, sin esperar a que se materialicen, y diferir el reconocimiento de las ganancias hasta que se confirmen. Para la gestión de cartera, este principio fundamenta todo el sistema de provisiones: la entidad debe reservar recursos para cubrir las pérdidas esperadas de sus obligaciones deterioradas antes de que esas pérdidas se produzcan.
    
          .row(numero="3" titulo="Principio de uniformidad")
            .col-md-12.mb-4.mb-md-0
              p Exige que los criterios contables aplicados en un período se mantengan en los períodos siguientes, de manera que los estados financieros sean comparables a lo largo del tiempo. Para la cartera, esto significa que los criterios de clasificación de riesgo y los porcentajes de provisión deben aplicarse de manera consistente.

          .row(numero="4" titulo="Principio de uniformidad")
            .col-md-12.mb-4.mb-md-0
              p Obliga a las entidades a presentar en sus estados financieros y en las notas que los acompañan toda la información necesaria para que los usuarios puedan formarse un juicio correcto sobre la situación financiera. En la gestión de cartera, este principio se traduce en la obligación de revelar los saldos vencidos, los niveles de provisión y los indicadores de calidad del portafolio.

          .row(numero="5" titulo="Principio de uniformidad")
            .col-md-12.mb-4.mb-md-0
              p Asume que la entidad continuará operando en el futuro previsible, lo que justifica valorar los activos a su valor en libros y no a su valor de liquidación. Para la cartera, este principio sustenta la lógica de la reestructuración: si la entidad y el deudor pueden continuar su relación, es preferible ajustar las condiciones del crédito a proceder a la liquidación inmediata de la garantía. 
      

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/14.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Estos principios conforman el marco de referencia técnico que guía el registro y la presentación de la información contable de la cartera. Su conocimiento permite al gestor comprender por qué la contabilidad de su entidad se organiza de la manera en que lo hace y cuáles son las consecuencias de no aplicarlos correctamente.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Los principios contables cobran sentido cuando se aplican a documentos concretos en los que la situación financiera de una entidad queda registrada, medida y comunicada. Esos documentos son los estados financieros, cuya estructura y contenido revelan dimensiones distintas del desempeño de la institución y permiten interpretar con precisión el comportamiento de la cartera.


    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Estados financieros de una entidad de crédito

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/15.png', alt='', style="width: 390px").m-auto
      .col-lg-9
        p Los estados financieros de una entidad de crédito en Colombia comprenden cuatro documentos principales que presentan, de manera organizada y verificable, la situación económica y financiera de la institución en un período determinado. Cada uno de estos documentos revela una dimensión distinta del desempeño de la entidad y tiene implicaciones específicas para la gestión de cartera.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/16.svg', style='width: 100px').m-auto
          
          .col
            p Asimismo, la comprensión de estos estados financieros no es exclusiva de los especialistas contables: el gestor de cartera los utiliza como insumo para interpretar los resultados de su gestión, dimensionar el impacto de sus decisiones y fundamentar sus informes ante la dirección. Un gestor que no comprende qué revelan estos documentos opera con información incompleta.

        p.mt-2 Los cuatro estados financieros principales de una entidad de crédito en Colombia y su relevancia para la gestión de cartera son los siguientes:


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Balance general (estado de situación financiera)")
              p Revela la posición patrimonial de la entidad en una fecha determinada: activos, pasivos y patrimonio. Para la gestión de cartera, este estado muestra el saldo total de la cartera por modalidad, el nivel de provisiones constituido y la relación entre la cartera y los recursos captados del público.

              p #[b Ejemplo:] el gestor que revisa el balance de su entidad puede identificar que la cartera de consumo representa el 45 % del activo total y que las provisiones constituidas equivalen al 3,2 % del saldo bruto, lo que le permite dimensionar la exposición al riesgo de su portafolio en el contexto general de la institución.
    
            //-2da pestaña  
            .row(titulo="Estado de resultados (estado de pérdidas y ganancias)")
              p Presenta los ingresos, los gastos y la utilidad o pérdida del período. Revela el ingreso por intereses generado por la cartera, el gasto por provisiones reconocido durante el período y las recuperaciones de cartera castigada, que mejoran las utilidades cuando se producen.
              p #[b Ejemplo:] si el gasto por provisiones de un período aumenta en $500 millones respecto del período anterior, el gestor puede relacionar ese incremento con el deterioro de la cartera bajo su administración y comprender su impacto directo sobre las utilidades de la entidad.

            
            //-3ra pestaña
            .row(titulo="Estado de cambios en el patrimonio")
              p Muestra las variaciones en el patrimonio durante el período por utilidades, pérdidas, aportes o distribuciones. Para la gestión de cartera, permite evaluar el impacto acumulado del deterioro del portafolio sobre la base patrimonial de la entidad, que es la que garantiza su solvencia frente a los depositantes.
              p #[b Ejemplo:] si la entidad registra pérdidas por el deterioro de la cartera durante el período, el patrimonio puede disminuir. Esta información permite al gestor comprender cómo una baja recuperación afecta la solidez financiera de la institución.

    
            //-4ra pestaña
            .row(titulo="Estado de flujos de efectivo")
              p Registra las entradas y salidas de efectivo clasificadas por actividades operativas, de inversión y de financiación. Muestra el recaudo efectivo de capital e intereses de cartera y los desembolsos de nuevos créditos durante el período, lo que refleja con precisión la eficiencia real del proceso de recuperación.
              p #[b Ejemplo:] si durante el mes se recuperan $300.000.000 en capital e intereses, el estado de flujos de efectivo evidencia la entrada real de dinero. Este dato permite evaluar si la gestión de cobranza está generando liquidez para la entidad. 


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/17.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Estos cuatro estados conforman un sistema integrado de información financiera. Ninguno de ellos es suficiente por sí solo para describir la situación de la entidad: es su lectura conjunta la que permite formarse un juicio completo sobre el desempeño de la cartera y sus implicaciones para la sostenibilidad de la institución.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/18.svg', style='width: 100px').m-auto
          
          .col
            p La comprensión de los cuatro estados financieros le permite al gestor de cartera contextualizar sus resultados dentro del panorama financiero global de la entidad y comunicarlos con precisión ante la dirección. Sin ese contexto, la información de gestión pierde parte de su valor como herramienta para la toma de decisiones.

    p.mt-4 La cartera ocupa una posición central en el balance general, pero su valor real depende del comportamiento de los deudores. Cuando ese comportamiento se deteriora y las obligaciones entran en mora, los efectos se trasladan al estado de resultados, los ingresos disminuyen y los gastos aumentan de manera simultánea, con un impacto desproporcionado sobre la rentabilidad de la entidad.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 La mora y su impacto en los ingresos financieros


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/19.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El estado de resultados de una entidad financiera refleja el desempeño económico durante un período determinado. Para los bancos y demás entidades de crédito, la estructura del estado de resultados tiene una característica particular: sus ingresos operacionales provienen principalmente de los intereses que generan los créditos otorgados, lo que convierte la calidad de la cartera en el principal determinante de su rentabilidad.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Asimismo, la mora afecta el estado de resultados de una entidad financiera por dos vías simultáneas que se refuerzan mutuamente: por una parte, reduce los ingresos que la entidad puede reconocer contablemente; por otra, obliga a incrementar los gastos por provisiones. Esta doble incidencia explica por qué el deterioro de la cartera tiene un impacto desproporcionado sobre las utilidades de la institución.


    p.mt-4 Los dos mecanismos mediante los cuales la mora deteriora el estado de resultados de una entidad financiera son los siguientes:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row
          //Tarjeta izquierda
          .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/20.svg', style='width: 150px').m-auto 

            p.text-center #[b Reducción de ingresos por intereses]

            p Cuando un crédito entra en mora y es reclasificado a categorías de mayor riesgo, los intereses causados dejan de reconocerse como ingreso contable, porque el principio de realización impide registrar ingresos cuya percepción no es certera. Esto reduce directamente los ingresos operacionales del período, independientemente de que la obligación siga generando intereses teóricos. 

            p #[b Ejemplo:] una entidad con 500 créditos de consumo en mora de 60 días deja de reconocer los intereses de ese período. Si cada crédito genera en promedio $80.000 mensuales en intereses, la reducción de ingresos asciende a $40.000.000 en ese período, cifra que no se recuperará, aunque los deudores paguen posteriormente.

          //Tarjeta derecha
          .col-md.tarjeta.bg-19.p-4.p-lg-5
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/21.svg', style='width: 150px').m-auto 

            p.text-center #[b Incremento del gasto por provisiones]

            p Cada crédito que migra a una categoría de mayor riesgo obliga a constituir una provisión más elevada, lo que se registra como gasto en el estado de resultados y reduce directamente las utilidades del período. Cuanto más rápido se deteriora la cartera, mayor es el gasto por provisiones que la entidad debe registrar. 

            p #[b Ejemplo:] un crédito de $10.000.000 que migra de categoría A a categoría C incrementa la provisión requerida del 1 % al 20 %, lo que representa un cargo adicional de $1.900.000 al gasto del período. Si 200 créditos similares migran en el mismo período, el impacto total sobre las utilidades supera los $380.000.000. 


        p.mt-4 Esta doble incidencia de la mora sobre el estado de resultados explica por qué el deterioro de la cartera tiene un impacto desproporcionado sobre la rentabilidad de la entidad. Cada crédito que entra en mora no solo deja de generar ingresos: además genera gastos adicionales, lo que produce un doble efecto negativo sobre las utilidades del período.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-15.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/22.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p El deterioro de la cartera no solo reduce los ingresos, también obliga a las entidades a reservar recursos para cubrir las pérdidas que ese deterioro puede generar antes de que se materialicen. Este reconocimiento anticipado de pérdidas se realiza a través de las provisiones, cuyo funcionamiento y cálculo determinan la manera en que el riesgo crediticio queda reflejado en la contabilidad de la entidad.


    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 El sistema de provisiones contables


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/23.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Las provisiones son el mecanismo contable mediante el cual las entidades financieras reconocen anticipadamente las pérdidas esperadas por el incumplimiento de sus deudores, afectando el estado de resultados antes de que esas pérdidas se materialicen efectivamente. Este reconocimiento anticipado responde al principio de prudencia y es una obligación regulatoria establecida por la Superintendencia Financiera de Colombia.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/24.svg', style='width: 100px').m-auto
          
          .col
            p Asimismo, la Superintendencia Financiera de Colombia establece dos componentes en el sistema de provisiones que las entidades deben constituir y mantener de manera diferenciada: la provisión individual y la provisión general. Cada componente tiene reglas específicas para su cálculo y registro contable, y su cumplimiento es verificado periódicamente por el regulador.

        p.mt-2 Los dos componentes del sistema de provisiones y su impacto sobre la gestión de cartera se describen a continuación:


    .row.justify-content-center.mt-4
        .col-lg-10.position-relative
          .crd.crd--avatarHorizontal.p-4.bg-15(style="border-radius: 8px 8px 0 0;")
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/25.svg", alt="alt").img100
              .col
                p #[b Provisión individual:] es la que se constituye específicamente sobre cada obligación crediticia en función de su categoría de riesgo. Su porcentaje aumenta progresivamente con el tiempo de mora: 1 % para categoría A, 3,2 % para categoría B, 20 % para categoría C, 50 % para categoría D y 100 % para categoría E. Esta progresión refleja la mayor probabilidad de pérdida a medida que se deteriora la obligación.

                p #[b Ejemplo:] el gestor que logra que un deudor en categoría C normalice su obligación y migre a categoría A genera un ahorro en provisiones del 18,8 % del saldo del crédito, lo que se traduce directamente en una reducción del gasto y un mejoramiento de las utilidades del período.
          
          .crd.crd--avatarHorizontal.crd--last.p-4.bg-16(style="border-radius: 0 0 8px 8px;")
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/tema1/26.svg", alt="alt").img100
              .col
                p #[b Provisión general:] es la reserva equivalente al 1 % del saldo total bruto de la cartera, que todas las entidades deben constituir independientemente de la calidad de sus obligaciones. Funciona como un colchón de seguridad ante riesgos sistémicos o ante deterioros generalizados que no se reflejan aún en la calificación individual de los créditos.

                p #[b Ejemplo:] una entidad con una cartera bruta de $5.000.000.000 debe constituir una provisión general del 1 %, equivalente a $50.000.000. Esta reserva no se asigna a un crédito específico; funciona como respaldo preventivo frente a posibles deterioros generales de la cartera. 


    p.mt-4 La provisión individual y la provisión general permiten reconocer de manera anticipada el posible deterioro de la cartera. Mientras la primera responde al riesgo específico de cada obligación, la segunda actúa como respaldo preventivo frente a riesgos generales del portafolio. Por ello, su cálculo oportuno fortalece la gestión contable, facilita el seguimiento de la mora y contribuye a proteger la estabilidad financiera de la entidad.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/27.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p.p-4.bg-r8.bg-15 La clasificación del riesgo y el cálculo de provisiones permiten comprender cómo cambia el tratamiento contable de una obligación cuando aumenta la mora. En este proceso se relacionan los días de atraso, la categoría asignada, el porcentaje de provisión y el registro contable que debe realizar la entidad para reconocer oportunamente el deterioro de la cartera.

        p.mt-2 A continuación, se presenta una síntesis del sistema de provisiones individuales según la categoría de riesgo. Esta información facilita identificar el impacto financiero de cada nivel de mora y evidencia por qué la gestión temprana de las obligaciones reduce pérdidas, provisiones y afectaciones en los estados financieros.


    .row.justify-content-center
      .col-lg-auto
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 1.
              span Sistema de provisiones individuales según categoría de riesgo

            .tabla-a.color-acento-contenido
              table
                caption Nota. Elaboración propia con base en la Circular Básica Contable y Financiera, Capítulo II, Superintendencia Financiera de Colombia (2023).
                thead(style="background-color: #FF984A")
                  tr
                    th Categoría de riesgo
                    th Días de mora
                    th % Provisión individual
                    th Registro contable
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start A – Normal
                    td.text-start 0 a 30 
                    td.text-start 1 % del saldo.
                    td.text-start Gasto por provisiones (débito) / Provisión acumulada – Cartera (crédito).
                  tr
                    th.text-start B – Aceptable
                    td.text-start 31 a 60 
                    td.text-start 3.2 % del saldo.
                    td.text-start Gasto por provisiones (débito) / Provisión acumulada – Cartera (crédito).
                  tr(style="background-color: #F6F6F6")
                    th.text-start C – Apreciable
                    td.text-start 61 a 90 
                    td.text-start 20 % del saldo.
                    td.text-start Gasto por provisiones (débito) / Provisión acumulada – Cartera (crédito).
                  tr
                    th.text-start D – Significativo
                    td.text-start 91 a 180 
                    td.text-start 50 % del saldo.
                    td.text-start Gasto por provisiones (débito) / Provisión acumulada – Cartera (crédito).
                  tr(style="background-color: #F6F6F6")
                    th.text-start E – Irrecuperable
                    td.text-start Más de 180 
                    td.text-start 100 % del saldo.
                    td.text-start Gasto por provisiones (débito) / Provisión acumulada – Cartera (crédito).


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/28.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La tabla evidencia que la gestión oportuna de cada obligación tiene consecuencias contables directas, actuar en mora temprana es significativamente menos costoso para la entidad que esperar a que la obligación migre a categorías de mayor riesgo. Cada categoría implica no solo una mayor reserva de capital, sino también un mayor gasto registrado en el estado de resultados del período.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-15.bg-r8.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/29.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p La contabilidad revela el estado de la cartera desde una perspectiva financiera global. Para gestionar cada obligación con precisión técnica, es necesario además conocer las condiciones específicas de cada crédito, la forma en que el deudor debe devolver los recursos, los intereses que genera y las normas que determinan cuándo y cómo pueden modificarse esas condiciones.





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

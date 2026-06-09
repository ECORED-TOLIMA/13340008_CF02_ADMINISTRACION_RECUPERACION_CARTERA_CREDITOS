<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Entidades del sistema financiero colombiano

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/1.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p El sistema financiero colombiano opera dentro de un entramado institucional que combina entidades reguladoras, supervisoras, de protección de depósitos y de representación gremial. El conocimiento de estas entidades, sus funciones y sus facultades es esencial para el gestor de cartera, porque sus decisiones, normas y requerimientos determinan directamente las condiciones en las que se ejerce la gestión de recuperación.

        p.bg-r8.p-4.bg-16 Para el gestor de cartera, estas instituciones no son entidades distantes: sus disposiciones llegan al trabajo cotidiano a través de las circulares que definen cómo calificar un crédito, las visitas de inspección que verifican el cumplimiento de los procesos, los límites de tasas que determinan los montos que puede cobrar y los sistemas de reporte a los que debe transmitir información periódicamente.

    p.mt-4 Las entidades del sistema financiero colombiano que mayor impacto tienen sobre la gestión de cartera y que se abordan en este tema son las siguientes:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-16.bg-r8.align-items-end
          .col-12

            ul.lista-ul--color
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b La Superintendencia Financiera de Colombia:] entidad de inspección, vigilancia y control cuyas circulares y resoluciones definen las reglas operativas de la gestión de cartera.
                
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b El Banco de la República:] banco central cuyas decisiones de política monetaria afectan las tasas de interés y la demanda de crédito en el sector.

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b El FOGAFIN:] entidad de protección de depósitos cuya presencia garantiza la confianza del público en las instituciones financieras.


              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b La UGPP:] unidad de fiscalización que verifica el cumplimiento de las obligaciones parafiscales de las entidades del sector.

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 #[b Los gremios del sector:] Asobancaria y Asomicrofinanzas, que representan los intereses del sector y producen información estadística de referencia para la gestión.


    p.mt-4 El conocimiento de estas cinco instituciones le permite al gestor de cartera comprender el entorno institucional en el que ejerce su labor y anticipar el impacto de sus decisiones sobre las condiciones operativas del área de cartera.



    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 La Superintendencia Financiera de Colombia

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema4/2.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La Superintendencia Financiera de Colombia (SFC) es la entidad estatal encargada de la inspección, vigilancia y control de las personas que realizan actividades financiera, bursátil, aseguradora y cualquier otra relacionada con el manejo, aprovechamiento o inversión de recursos captados del público. Para las entidades de crédito, la SFC es el regulador de referencia en todos los aspectos de la gestión de cartera.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-16.p-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/3.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Asimismo, la SFC no solo verifica el cumplimiento de las normas existentes: también las genera. A través de circulares externas, resoluciones y conceptos, la SFC define los criterios técnicos y operativos que las entidades deben aplicar en su gestión diaria, incluidos los criterios de clasificación de cartera, los porcentajes de provisión y las reglas para la atención de quejas de consumidores financieros.


    p.mt-4 Las funciones de la Superintendencia Financiera de Colombia con mayor relevancia directa para la gestión de cartera son las siguientes:


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="Inspección y vigilancia")
              p Realiza visitas periódicas a las entidades para verificar el cumplimiento de la normativa. Durante estas visitas se revisan las prácticas de cobranza, los registros de gestión, la calificación de la cartera y el cumplimiento del SARC. El gestor debe garantizar que sus prácticas, registros y reportes sean verificables en todo momento.

              p #[b Ejemplo:] durante una visita de inspección, el equipo de la SFC revisa una muestra de expedientes de créditos en mora para verificar que la calificación asignada corresponde con el tiempo de incumplimiento y con el comportamiento del deudor registrado en el sistema.
    
            //-2da pestaña  
            .row(titulo="Regulación técnica")
              p Regulación técnica: emite las circulares y resoluciones que definen los criterios de clasificación de cartera, los porcentajes de provisión y las normas de cobranza que las entidades vigiladas deben aplicar. Cada actualización de la CBCF puede modificar los procedimientos que el gestor aplica en su trabajo diario.
              p #[b Ejemplo:] si la SFC actualiza los criterios de provisión para una modalidad de crédito, el área de cartera debe ajustar sus reportes y verificar que las obligaciones se clasifiquen según los nuevos parámetros establecidos.

            
            //-3ra pestaña
            .row(titulo="Certificación de tasas")
              p Certificación de tasas: certifica trimestralmente la tasa de usura y el interés bancario corriente, valores que el gestor debe conocer para verificar que los intereses de mora cobrados a los deudores se encuentran dentro de los límites legales vigentes en cada período.
              p #[b Ejemplo:] antes de liquidar intereses de mora sobre una obligación vencida, el gestor consulta la tasa vigente certificada por la SFC para confirmar que el valor cobrado no supere el límite legal permitido.

    
            //-4ra pestaña
            .row(titulo="Atención de consumidores")
              p Atención de consumidores: recibe quejas de usuarios del sistema financiero que no han sido resueltas satisfactoriamente por la entidad ni por el defensor del consumidor financiero. Las quejas escaladas a la SFC pueden derivar en investigaciones y sanciones si se identifican prácticas indebidas en la cobranza. 
              p #[b Ejemplo:] un deudor presenta una queja porque recibió llamadas de cobranza fuera del horario permitido. Si la entidad no resuelve adecuadamente la reclamación, el caso puede escalarse a la SFC para su revisión.


            //-4ra pestaña
            .row(titulo="Publicación de estadísticas")
              p Publicación de estadísticas: publica mensualmente indicadores de calidad de cartera, provisiones y rentabilidad del sector, que permiten al gestor comparar los indicadores de su portafolio con el promedio del mercado y fundamentar sus análisis con información sectorial objetiva. 
              p #[b Ejemplo:] el gestor revisa los indicadores publicados por la SFC y observa que el índice de cartera vencida de su entidad supera el promedio del sector. Con esta información, propone reforzar el seguimiento preventivo y priorizar los créditos con mayor riesgo de deterioro.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema4/4.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p El conocimiento de las funciones de la SFC permite al gestor de cartera comprender que su trabajo opera dentro de un marco de supervisión permanente que define los estándares mínimos de actuación y puede verificar su cumplimiento en cualquier momento. Actuar con esa conciencia fortalece la calidad y la trazabilidad de cada gestión

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/5.svg', style='width: 100px').m-auto
          
          .col
            p Una vez identificadas las funciones del regulador principal del sistema financiero, corresponde revisar la entidad cuyas decisiones de política monetaria afectan de manera indirecta pero significativa la cartera de créditos: el Banco de la República.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 El Banco de la República y la cartera


    p El Banco de la República es el banco central de Colombia, encargado de mantener la estabilidad de precios, preservar el poder adquisitivo de la moneda y contribuir a la estabilidad del sistema financiero. Aunque el Banco de la República no regula directamente la gestión de cartera, sus decisiones de política monetaria tienen impacto directo sobre las condiciones en que operan las entidades financieras y sobre el comportamiento de sus deudores.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-8.bg-r8(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Asimismo, la tasa de interés de intervención del Banco de la República es la tasa de referencia sobre la que se construyen las tasas activas del sistema financiero. Cuando el Banco modifica esta tasa, las entidades ajustan sus tasas de colocación, lo que afecta el costo de los nuevos créditos y, en créditos con tasa variable, las condiciones de pago de los deudores.



    p.mt-4 Los mecanismos a través de los cuales las decisiones del Banco de la República impactan la gestión de cartera son los siguientes:

    //Tarjetas conectadas
    .tarjeta--container.row
      //Tarjeta 1
      .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/7.svg', style='width: 150px').m-auto 

        p.text-center #[b Incremento de la tasa de intervención]

        p Cuando el Banco eleva su tasa para controlar la inflación, el costo del crédito sube. Esto puede dificultar el cumplimiento de los deudores que tienen créditos a tasa variable, incrementar la demanda de reestructuraciones y aumentar la presión sobre la cartera de las entidades.

      //Tarjeta 2
      .col-md.tarjeta.bg-19.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/8.svg', style='width: 150px').m-auto 
        p.text-center #[b Reducción de la tasa de intervención]

        p Cuando el Banco baja su tasa para estimular la economía, el costo del crédito disminuye. Esto facilita el cumplimiento de los deudores con tasas variables y puede generar un ambiente más favorable para la recuperación de obligaciones reestructuradas.

      //Tarjeta 4
      .col-md.tarjeta.bg-7.p-4.p-lg-5
        .row.justify-content-center.mb-4
          .col-6.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/9.svg', style='width: 150px').m-auto 

        p.text-center #[b Informes de política monetaria]

        p El Banco publica trimestralmente su Informe de Política Monetaria, que incluye proyecciones sobre inflación, crecimiento económico y estabilidad financiera. Esta información es útil para el gestor al proyectar el comportamiento de la cartera en el mediano plazo.


    p.mt-4 El conocimiento del papel del Banco de la República en el sistema financiero colombiano le permite al gestor de cartera anticipar el impacto macroeconómico sobre el comportamiento de sus deudores y comprender los contextos en los que se producen los incrementos o disminuciones en los niveles de mora de su portafolio.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El papel del Banco de la República permite comprender que la cartera de créditos también está influida por factores macroeconómicos. Aunque esta entidad no administra directamente los créditos de los bancos, sus decisiones sobre la tasa de intervención, la inflación y la estabilidad monetaria inciden en el costo del dinero, la capacidad de pago de los deudores y las estrategias de recuperación que aplican las entidades financieras.

    p.mt-4 En la gestión de cartera, estos efectos pueden observarse en situaciones como las siguientes:

    .row.align-items-center.mt-4.justify-content-center
      .col-lg-10
        .row.p-3.bg-16.bg-r8.align-items-end
          .col-8
            ul.lista-ul--color
              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Aumento en el valor de las cuotas de créditos con tasa variable. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Mayor dificultad de pago cuando sube el costo del crédito. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Incremento de solicitudes de refinanciación o reestructuración. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Mejores condiciones de pago cuando disminuyen las tasas de interés. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Necesidad de ajustar las estrategias de seguimiento según el contexto económico. 

              li(class="fa-solid fa-comment-dollar" style="color: rgb(255, 152, 74);")                
                p.mb-0 Uso de informes económicos para anticipar posibles cambios en la mora. 

          .col-lg-4.d-flex.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/10.svg', alt='', style="width: 290px").m-auto


        p.mt-4 De esta manera, el gestor de cartera no solo debe revisar el comportamiento individual de cada obligación, sino también interpretar el entorno económico que influye en la capacidad de pago de los deudores. Esta comprensión permite anticipar riesgos, orientar mejor las decisiones de recuperación y actuar con mayor criterio técnico frente a los cambios del sistema financiero.


        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-7.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/11.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Una vez revisado el papel del Banco de la República en la política monetaria y su efecto sobre la cartera, corresponde conocer la entidad que protege los ahorros del público en caso de liquidación de una institución financiera, el FOGAFIN.



    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Fondo de Garantías de Instituciones Financieras (FOGAFIN)


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/12.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El Fondo de Garantías de Instituciones Financieras (FOGAFIN) es la entidad estatal encargada de proteger los ahorros del público depositados en las instituciones financieras colombianas mediante el Seguro de Depósitos. Este mecanismo garantiza que, ante la liquidación de una entidad vigilada, los depositantes recibirán una compensación por los recursos que tenían en esa institución, hasta el valor cubierto por el seguro.

        p.p-4.bg-8 Asimismo, FOGAFIN tiene facultades para realizar operaciones de fortalecimiento patrimonial de entidades en dificultades, administrar los procesos de liquidación de instituciones financieras y apoyar los mecanismos de resolución de crisis del sistema financiero. Su presencia en el sistema financiero colombiano cumple una función de estabilización que mantiene la confianza del público en las instituciones financieras.


    p.mt-4 Los aspectos de FOGAFIN con mayor relevancia para el gestor de cartera son los siguientes:

    .row.justify-content-center.mt-4
      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 1
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema4/13.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema4/30.svg', style='width: 80px')
          h4.text-center Seguro de depósitos
          p Garantiza que los ahorradores recuperen sus recursos hasta el monto asegurado en caso de liquidación de la entidad. Este mecanismo preserva la confianza del público en el sistema financiero, lo que contribuye a mantener la captación de recursos que financia la cartera de créditos.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 2
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema4/14.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema4/32.svg', style='width: 80px')
          h4.text-center Procesos de resolución
          p Cuando una entidad financiera es objeto de medidas de resolución por parte de la SFC y FOGAFIN, los procesos de cartera continúan bajo la administración de quien asuma el control de la institución. El gestor debe conocer cómo operan estos procesos para entender qué ocurre con las obligaciones bajo su administración en situaciones de crisis institucional.

      .col-lg-4.mb-4.mb-lg-0
        //-Tarjeta 3
        .tarjeta.clr-paleYellow.p-4.text-center.bg-17.h-100.tarjeta-hover
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure.icono-hover(data-aos="zoom-in")
                  img.icon-normal(src='@/assets/curso/tema4/31.svg', style='width: 80px')
                  img.icon-hover(src='@/assets/curso/tema4/15.svg', style='width: 80px')
          h4.text-center Información pública
          p FOGAFIN publica informes periódicos sobre el estado del sistema financiero colombiano y sobre la cobertura del seguro de depósitos, que son fuentes de información útiles para el análisis del entorno sectorial.
      

    p.mt-4 El conocimiento de FOGAFIN y su función de protección de depósitos le permite al gestor de cartera comprender uno de los pilares que sostiene la estabilidad del sistema financiero colombiano y la confianza del público en las instituciones que administran sus recursos.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Con la revisión de FOGAFIN se completa el panorama de las entidades que contribuyen a la estabilidad, vigilancia y protección del sistema financiero colombiano. A continuación, se aborda la Unidad de Gestión Pensional y Parafiscales (UGPP), entidad que cumple funciones de fiscalización relacionadas con el pago correcto y oportuno de las obligaciones parafiscales.


    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 La UGPP y su rol en la fiscalización del sector

    .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Unidad de Gestión Pensional y Parafiscal (UGPP) tiene un rol específico en el contexto del sistema financiero relacionado con la fiscalización del pago correcto de los aportes al sistema de seguridad social integral por parte de las entidades financieras en su calidad de empleadoras. Aunque su función no regula directamente la cartera de créditos, su impacto sobre la gestión administrativa de las entidades es relevante.

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema4/17.svg', style='width: 100px').m-auto
      
      .col
        p Asimismo, la UGPP tiene facultades para requerir información financiera de las entidades, incluyendo información de nómina, pagos y contratos de prestación de servicios que permita verificar el cumplimiento de las obligaciones parafiscales. Para el área de cartera, esto se traduce en la obligación de mantener registros ordenados y verificables de todas las personas vinculadas a la gestión.

    p.mt-4 Los aspectos de la actuación de la UGPP con mayor relevancia para las entidades del sector financiero son los siguientes:

    .row.mb-4
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/18.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Fiscalización de aportes al sistema de seguridad social
                p.mb-0 La UGPP verifica que las entidades liquidaron y pagaron correctamente los aportes a salud, pensión y riesgos laborales de sus trabajadores y contratistas. Un error en estos cálculos puede generar glosas con intereses moratorios y multas significativas.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/19.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Requerimientos de información
                p.mb-0 La UGPP puede solicitar a las entidades financieras información detallada sobre sus contratos, nóminas y pagos para verificar el cumplimiento. Esta información debe estar disponible y bien organizada para atender oportunamente cualquier requerimiento.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/20.svg' alt='')
            .tarjeta.bg-15
              .p-4
                h4.text-center Sanciones por incumplimiento
                p.mb-0 La UGPP puede imponer la liquidación de los aportes omitidos más intereses moratorios y multas por inexactitud cuando detecta errores u omisiones en el pago de las contribuciones parafiscales. Estas sanciones representan costos financieros adicionales para la entidad.



    p.mt-4 El conocimiento del rol de la UGPP en el sistema financiero le permite al gestor de cartera comprender uno de los frentes de fiscalización al que están expuestas las entidades y la importancia de mantener registros completos y correctos de todas las vinculaciones laborales y contractuales del área.


    .row.justify-content-center.mt-4
      .col-lg-10
        p.p-4.bg-16 Una vez revisadas las entidades de supervisión y fiscalización del sistema financiero colombiano, es necesario conocer las organizaciones que representan los intereses del sector y producen información estadística de referencia para la gestión de cartera, los gremios del sector financiero.


    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Gremios del sector: Asobancaria y Asomicrofinanzas


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/21.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p En Colombia, un gremio es una organización que reúne empresas, entidades o personas de un mismo sector económico para representar intereses comunes, promover buenas prácticas y participar en espacios de diálogo con el Gobierno, los reguladores y otros actores del país. En el sector financiero, los gremios apoyan el análisis de tendencias, la generación de información especializada y la comprensión de los cambios que pueden afectar la actividad crediticia.

        p.p-4.bg-15 En la práctica, la labor de los gremios se refleja en acciones de apoyo que ayudan a comprender mejor el comportamiento del sector financiero. Estas acciones sirven como referencia para que el gestor de cartera analice su entorno, identifique tendencias y cuente con información útil al momento de sustentar decisiones institucionales.


    p.mt-4 A partir de esta función de apoyo sectorial, se destacan cuatro acciones que sintetizan el aporte de los gremios a la gestión financiera:

    .row.justify-content-center.mt-4
      .row.justify-content-center
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-16.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/22.svg', style='width: 114px')
            p.mb-0.mt-2 #[b Orientar] 
      
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-16.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/23.svg', style='width: 114px')
            p.mb-0 #[b Analizar]
      
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-16.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/24.svg', style='width: 114px')
            p.mb-0 #[b Proponer]
    
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-16.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/25.svg', style='width: 53px')
            p.mb-0 #[b Aportar información]
      

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema4/26.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p En el sistema financiero, estas acciones permiten que los gremios aporten una visión amplia sobre el comportamiento del crédito, la cartera, la mora y la inclusión financiera. Para el gestor de cartera, esta información sirve como apoyo para interpretar el entorno, comparar tendencias del sector y fortalecer el análisis de las decisiones relacionadas con seguimiento, recuperación y atención al deudor.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-16.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/27.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Entre los gremios más relevantes para la gestión de cartera se encuentran Asobancaria y Asomicrofinanzas. El primero reúne principalmente a entidades bancarias y financieras; el segundo agrupa actores vinculados con el microcrédito y la inclusión financiera. Sus estudios, estadísticas y publicaciones permiten comprender mejor el comportamiento del sector y apoyar la gestión técnica de la cartera.


    p.mt-4 Los dos principales gremios del sector financiero colombiano y su relevancia para la gestión de cartera son los siguientes:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row
          //Tarjeta izquierda
          .col-md.tarjeta.bg-15.p-4.p-lg-5.mb-3.mb-md-0
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/28.svg', style='width: 150px').m-auto 

            p.text-center #[b Asobancaria]

            p La Asociación Bancaria y de Entidades Financieras de Colombia es uno de los gremios más representativos del sector financiero colombiano. Sus informes, cifras sectoriales y publicaciones periódicas presentan análisis sobre coyuntura económica, regulación, supervisión, calidad de cartera, evolución de la mora y comportamiento del crédito. Para el gestor de cartera, esta información sirve como referencia para contextualizar los indicadores de su portafolio frente al desempeño general del sector.

          //Tarjeta derecha
          .col-md.tarjeta.bg-19.p-4.p-lg-5
            .row.justify-content-center.mb-4
              .col-6.d-flex.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/29.svg', style='width: 150px').m-auto 

            p.text-center #[b Asomicrofinanzas]

            p La Asociación Colombiana de Instituciones Microfinancieras reúne actores vinculados con el microcrédito y la inclusión financiera. Sus publicaciones, cifras y espacios sectoriales permiten conocer tendencias del segmento microfinanciero, condiciones de los deudores, educación financiera y dinámicas propias del crédito dirigido a pequeños negocios o unidades productivas. Para el gestor que administra cartera de microcrédito, esta información apoya el análisis del riesgo y la definición de estrategias de recuperación.

        p.mt-4 El conocimiento de estos gremios permite al gestor de cartera acceder a información sectorial útil para interpretar el comportamiento del crédito, comparar indicadores y reconocer tendencias que pueden afectar su labor. Aunque estas organizaciones no ejercen funciones de vigilancia ni sanción, sus publicaciones y espacios técnicos contribuyen a fortalecer el análisis y la toma de decisiones en la gestión de cartera.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-15.p-3(data-aos="fade-right")
                
                    p Con el conocimiento de las entidades que integran el entorno institucional del sistema financiero colombiano, el gestor de cartera cuenta con una visión más amplia para comprender cómo se regulan, supervisan y respaldan las operaciones crediticias. Esta base permite avanzar hacia la aplicación práctica de la normativa en situaciones reales de gestión, donde cada decisión debe sustentarse en información verificable, criterios técnicos y cumplimiento institucional.






































</template>

<script>
export default {
  name: 'Tema4',
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

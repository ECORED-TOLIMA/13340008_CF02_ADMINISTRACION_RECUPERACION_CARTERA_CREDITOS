<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/1.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p Este componente aborda la contabilidad y la normatividad financiera aplicadas a la gestión de la cartera de créditos en entidades del sector financiero colombiano. En este recorrido se presentan los aspectos básicos que permiten comprender cómo se registra la cartera, cómo se calculan las provisiones, cómo funcionan los planes de pago y qué normas orientan las decisiones relacionadas con la administración y recuperación de las obligaciones.

        p.p-4.bg-r8.bg-15 A partir de este enfoque, se reconoce que la cartera no solo representa un conjunto de créditos otorgados, sino un activo fundamental para la estabilidad financiera de la entidad. Por ello, comprender su tratamiento contable y normativo permite actuar con mayor precisión, reducir riesgos, respaldar decisiones de cobranza y proteger los derechos del consumidor financiero.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/intro/3.svg', alt='', style="width: 390px").m-auto
      .col-lg-9
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/intro/2.svg', style='width: 100px').m-auto
          
          .col
            p El propósito de este componente es fortalecer la capacidad para interpretar información financiera, aplicar criterios normativos y analizar situaciones propias del área de cartera. Para ello, se abordan temas relacionados con estados financieros, provisiones, planes de pago, tasas de interés, marco legal, entidades de control y procedimientos de cumplimiento.

        p.mt-2 El desarrollo temático combina explicaciones conceptuales, ejemplos aplicados y casos prácticos del sector financiero colombiano. De esta manera, el aprendiz podrá relacionar los contenidos con situaciones reales de gestión, como el cálculo de provisiones, la reestructuración de créditos, la elaboración de reportes regulatorios y la atención de quejas de consumidores financieros.

    p.mt-4 Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de cartera de créditos, se recomienda acceder al recurso audiovisual que acompaña esta sección.

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
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

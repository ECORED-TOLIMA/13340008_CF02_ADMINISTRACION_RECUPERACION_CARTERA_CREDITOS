<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La contabilidad y la normatividad financiera aplicadas a la cartera de créditos integran los fundamentos contables, el marco legal y los procedimientos técnicos que orientan la gestión responsable de las obligaciones crediticias en el sector financiero colombiano. En este sentido, se abordan la estructura de los estados financieros, el sistema de provisiones, las modalidades de amortización, los tipos de crédito, las tasas de interés y el marco normativo que regula cada decisión de gestión en las entidades vigiladas por la Superintendencia Financiera de Colombia.

    p Asimismo, se estudian el Estatuto Orgánico del Sistema Financiero, la Circular Básica Contable y Financiera (CBCF), el Sistema de Administración del Riesgo Crediticio (SARC) y el estatuto de protección al consumidor financiero, con énfasis en su aplicación práctica en situaciones concretas de gestión de cartera. De esta forma, se fortalece la capacidad para interpretar información financiera, aplicar criterios normativos con rigor técnico y actuar con responsabilidad frente al regulador y los consumidores financieros. A continuación, el mapa conceptual presenta la relación entre los ejes temáticos abordados.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual de Contabilidad y normatividad financiera aplicada a la cartera, estructurado en cuatro ejes temáticos. El primer eje, Contabilidad básica, comprende estados financieros y provisiones SARC. El segundo eje, Planes de pago de crédito, incluye amortizaciones de créditos, tasas de interés y reportes de crédito. El tercer eje, Marco normativo, establece el SARC, la tasa de usura y el defensor del consumidor financiero. El cuarto eje, Entidades de control, integra el Banco de la República y la Superintendencia Financiera de Colombia. En conjunto, estos cuatro ejes articulan los fundamentos contables y normativos para la gestión técnica y responsable de la cartera de créditos en el sector financiero colombiano. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

export default {
  global: {
    Name: 'Contabilidad y normatividad financiera aplicada a la cartera',
    Description:
      'Este componente formativo desarrolla en el aprendiz los conocimientos contables y normativos para la gestión de cartera en el sector financiero colombiano. Se abordan la contabilidad básica del sistema financiero, los planes de pago de crédito, el marco normativo vigente, las entidades de supervisión y la aplicación de estos saberes en situaciones concretas de gestión de cartera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contabilidad básica del sistema financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Propósito de la contabilidad en las entidades financieras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de contabilidad del sector financiero',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estados financieros de una entidad de crédito',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'La mora y su impacto en los ingresos financieros',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'El sistema de provisiones contables',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planes de pago y modalidades de crédito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y función de los planes de pago',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modalidades de amortización de créditos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de crédito y sus características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tasas de interés y límites legales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Reestructuración y refinanciación de créditos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marco normativo del crédito en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estatuto orgánico del sistema financiero',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Circular Básica Contable y Financiera (CBCF)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistema de Administración del Riesgo Crediticio (SARC)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Regulación de tasas de interés y usura',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Protección al consumidor financiero',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entidades del sistema financiero colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'La Superintendencia Financiera de Colombia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'El Banco de la República y la cartera',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Fondo de Garantías de Instituciones Financieras (FOGAFIN)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'La UGPP y su rol en la fiscalización del sector',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gremios del sector: Asobancaria y Asomicrofinanzas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aplicación normativa en la gestión de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Cálculo de provisiones por categoría de riesgo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Reporte e informes de cumplimiento normativo',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Gestión de quejas de consumidores financieros',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Casos prácticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Aprendizajes de los casos prácticos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Análisis aplicado de situaciones de cartera',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_13340008_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Amortización',
      significado:
        'Proceso mediante el cual se reduce gradualmente el saldo de una deuda, a través de pagos periódicos que incluyen capital e intereses.',
    },
    {
      termino: 'Circular Básica Contable y Financiera (CBCF)',
      significado:
        'Instrumento técnico de la Superintendencia Financiera de Colombia que establece lineamientos contables, financieros y de riesgo para las entidades vigiladas.',
    },
    {
      termino: 'Defensoría del Consumidor Financiero',
      significado:
        'Instancia independiente que atiende quejas y reclamos de los consumidores financieros frente a las entidades vigiladas.',
    },
    {
      termino: 'Estatuto Orgánico del Sistema Financiero (EOSF)',
      significado:
        'Norma que organiza la estructura, funcionamiento y facultades de las entidades del sistema financiero colombiano.',
    },
    {
      termino: 'FOGAFIN',
      significado:
        'Fondo de Garantías de Instituciones Financieras, entidad que protege a los ahorradores y contribuye a la estabilidad del sistema financiero colombiano.',
    },
    {
      termino: 'Plan de pago',
      significado:
        'Cronograma que establece fechas, valores y condiciones para el cumplimiento de una obligación crediticia.',
    },
    {
      termino: 'Provisión general',
      significado:
        'Reserva contable constituida sobre la cartera total para cubrir posibles pérdidas no identificadas individualmente.',
    },
    {
      termino: 'Provisión individual',
      significado:
        'Reserva contable aplicada a una obligación específica, de acuerdo con su categoría de riesgo y probabilidad de pérdida.',
    },
    {
      termino: 'Reestructuración',
      significado:
        'Modificación de las condiciones originales de un crédito en aspectos como plazo, cuotas o garantías, con el fin de adecuarlo a la capacidad de pago actual del deudor.',
    },
    {
      termino: 'Sistema de Administración del Riesgo Crediticio (SARC)',
      significado:
        'Conjunto de políticas, procesos y controles que permite identificar, medir, controlar y monitorear el riesgo de crédito.',
    },
    {
      termino: 'Tasa de usura',
      significado:
        'Límite máximo legal permitido para el cobro de intereses en operaciones de crédito en Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asobancaria. (2024). <em>Informe de tipificación del sistema financiero colombiano</em>. Asobancaria.',
      link: '',
    },
    {
      referencia:
        'Banco de la República de Colombia. (2024). <em>Informe de política monetaria</em>. Banco de la República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1999). <em>Ley 510 de 1999: por la cual se dictan disposiciones en relación con el sistema financiero y asegurador</em>. Diario Oficial No. 43.654.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1999). <em>Ley 546 de 1999: por la cual se dictan normas en materia de vivienda</em>. Diario Oficial No. 43.827.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2003). <em>Ley 795 de 2003: por la cual se ajustan algunas normas del Estatuto Orgánico del Sistema Financiero y se dictan otras disposiciones</em>. Diario Oficial No. 45.064.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). <em>Ley 1328 de 2009: por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones</em>. Diario Oficial No. 47.411.',
      link: '',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública. (2022). <em>Marco conceptual para la información financiera: NIIF plenas</em>. CTCP.',
      link: '',
    },
    {
      referencia:
        'Fondo de Garantías de Instituciones Financieras. (2024). <em>Informe de gestión anual</em>. FOGAFIN.',
      link: '',
    },
    {
      referencia:
        'Gitman, L. J., & Zutter, C. J. (2016). <em>Principios de administración financiera</em> (14.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). <em>Decreto 663 de 1993: por medio del cual se actualiza el Estatuto Orgánico del Sistema Financiero y se modifica su titulación y numeración</em>. Diario Oficial No. 40.820.',
      link: '',
    },
    {
      referencia:
        'Ramírez Padilla, D. N. (2018). <em>Contabilidad administrativa: un enfoque estratégico para competir</em> (10.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2016). <em>Diseño curricular del programa Administración y recuperación de la cartera de créditos</em>. SENA.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2014). <em>Circular Externa 029 de 2014: instrucciones relativas a las prácticas de cobranza de las entidades vigiladas</em>. SFC.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2023). <em>Circular Básica Contable y Financiera: Capítulo II, gestión del riesgo crediticio</em>. SFC.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

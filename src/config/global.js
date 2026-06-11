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
        download: 'downloads/dist.pdf',
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
      termino: 'Acuerdo de pago',
      significado:
        'Convenio formal entre la entidad financiera y el deudor en el que se fijan nuevas condiciones para saldar una obligación vencida, tales como plazos, cuotas y posibles descuentos por pronto pago.',
    },
    {
      termino: 'Cartera de créditos',
      significado:
        'Conjunto de préstamos otorgados por una entidad financiera a sus clientes, que constituye el principal activo generador de ingresos y cuya calidad refleja la solidez patrimonial de la institución.',
    },
    {
      termino: 'Cartera vencida',
      significado:
        'Porción de la cartera que registra obligaciones con más de treinta días de incumplimiento y cuyo comportamiento determina el nivel de provisiones que la entidad debe constituir.',
    },
    {
      termino: 'Castigo de cartera',
      significado:
        'Decisión contable por la cual una entidad retira de sus activos una obligación calificada como irrecuperable, sin que ello implique la condonación de la deuda.',
    },
    {
      termino: 'Cobranza',
      significado:
        'Proceso de gestión mediante el cual una entidad financiera busca el recaudo de créditos en mora, aplicando estrategias diferenciadas según la etapa de incumplimiento: preventiva, extrajudicial o jurídica.',
    },
    {
      termino: 'Índice de cartera vencida',
      significado:
        'Indicador que expresa el porcentaje del saldo total de cartera con mora superior a treinta días y permite comparar la calidad del portafolio frente al promedio del sector.',
    },
    {
      termino: 'Mora',
      significado:
        'Situación de incumplimiento en el pago de una obligación crediticia en la fecha pactada, que genera intereses moratorios para el deudor y obliga a la entidad a constituir provisiones.',
    },
    {
      termino: 'Provisión',
      significado:
        'Reserva contable constituida por la entidad financiera para cubrir las pérdidas esperadas por el incumplimiento de sus deudores, conforme a las normas de la Superintendencia Financiera de Colombia.',
    },
    {
      termino: 'Reestructuración',
      significado:
        'Modificación de las condiciones originales de un crédito en aspectos como plazo, cuotas o garantías, con el fin de adecuarlo a la capacidad de pago actual del deudor.',
    },
    {
      termino: 'Superintendencia Financiera de Colombia',
      significado:
        'Entidad gubernamental que supervisa, inspecciona y controla las instituciones del sector financiero, asegurador y bursátil del país, y define las normas de gestión del riesgo crediticio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (2024). <em>Resolución Externa DCIN-83: régimen cambiario de operaciones de cambio</em>. Banco de la República.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio Internacional [CCI]. (2020). <em>Incoterms® 2020: reglas de la CCI para el uso de términos comerciales nacionales e internacionales</em>. ICC Publishing.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2019). <em>Decreto 1165 de 2019: régimen de aduanas de Colombia</em>. Ministerio de Hacienda y Crédito Público.',
      link: '',
    },
    {
      referencia:
        '<em>Food and Drug Administration</em> [FDA]. (2024). <em>Requisitos de etiquetado para alimentos importados a Estados Unidos</em>. U.S. Department of Health and Human Services. <u></u>',
      link: 'https://www.fda.gov',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario [ICA]. (2024). <em>Certificados sanitarios para la exportación de productos agropecuarios</em>. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo [MinCIT]. (2012). <em>Acuerdo de Promoción Comercial entre la República de Colombia y los Estados Unidos de América: texto oficial en español</em>. MinCIT. <u></u>',
      link: 'https://www.tlc.gov.co',
    },
    {
      referencia:
        'Organización Internacional del Trabajo [OIT]. (2012). <em>El Acuerdo de Promoción Comercial Colombia y los Estados Unidos: compromisos laborales y estándares internacionales</em>. OIT.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2024). <em>Guía para exportar a Estados Unidos: requisitos sanitarios, documentales y logísticos</em>. ProColombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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

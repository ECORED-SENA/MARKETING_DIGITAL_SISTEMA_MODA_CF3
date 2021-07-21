export default {
  global: {
    componenteFormativo: 'Analítica digital para redes sociales',
    descripcionCurso:
      'Dentro del <i>marketing</i> digital, las redes sociales tienen la gran habilidad de permitir su medición, lo cual constituye un insumo demasiado valioso para direccionar las estrategias digitales que desarrollan las empresas de acuerdo con los objetivos y metas propuestas. De esta manera, en el presente componente de formación hace una exploración conceptual de la analítica digital desde las redes sociales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Analítica de datos para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes de la analítica digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Uso de los datos obtenidos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contenidos, medición y análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué se debe medir?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición de objetivos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'KPI (Key Performance Indicator)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Proceso de medición',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Cómo analizar?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Análisis de la competencia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Análisis cualitativo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Comportamiento del consumidor (personalidades de compra)',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Estructuración e interpretación de indicadores para la preparación de reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características de un reporte de resultados',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de reportes',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Cibrián, B., I. (2019). Marketing digital. Mide, analiza y mejora. ESIC.',
    },
    {
      referencia:
        'DANE. (s.f.). Guía para diseño, construcción e interpretación de indicadores. DANE.',
    },
    {
      referencia:
        'Galiana, P. (2018). Qué es la analítica web, para qué sirve y principales herramientas. ',
      link:
        'https://www.iebschool.com/blog/herramientas-analisis-web-analitica-usabilidad/',
    },
    {
      referencia:
        'Gómez, S., Instituto de Marketing Ágil. (22 de noviembre de 2017). Qué es la analítica web y para qué sirve. [Video]. YouTube ',
      link:
        'https://www.youtube.com/watch?v=W1q_SyJPfdg&ab_channel=InstitutodeMarketingAgil',
    },
    {
      referencia:
        'GraciAds. (2021). El comportamiento del consumidor en las redes sociales. ',
      link:
        'https://graciads.com/comportamiento-del-consumidor-en-redes-sociales/#:~:text=Por%20lo%20general%2C%20los%20estudios,de%20marca%20como%20un%20bot',
    },
    {
      referencia:
        'IEBS Business School. (11 de septiembre de 2018). Cómo definir e interpretar métricas y KPI en analítica web de IEBS. [Webinar]. ',
      link: 'https://www.youtube.com/watch?v=-_8tNwzyCi8',
    },
    {
      referencia:
        'Maciá, F., y Santoja, M. (2017). Marketing en redes sociales. Anaya. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=13656 ',
    },
    {
      referencia:
        'Mejía, J. (2020). Indicadores de redes sociales: principales KPI y métricas de social media. ',
      link:
        'https://www.juancmejia.com/redes-sociales/kpis-de-redes-sociales-guia-con-principales-metricas-e-indicadores-de-social-media/',
    },
    {
      referencia:
        'Núñez, V. (2013). Cómo hacer un informe de resultados en redes sociales. ',
      link:
        'https://vilmanunez.com/como-hacer-un-informe-de-redes-sociales-incluye-plantillas/',
    },
    {
      referencia:
        'Redes Sociales. (2021). Redes sociales: ¿qué son las redes sociales? ',
      link: 'https://www.rdstation.com/es/redes-sociales/',
    },
  ],
  glosario: [
    {
      termino: 'Analítica web',
      significado:
        'Entender e interpretar datos del entorno digital para conocer resultados que permitan una acertada toma de decisiones.',
    },
    {
      termino: 'Suftware',
      significado:
        'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
    },
    {
      termino: 'Buyer persona',
      significado: 'Representación de un modelo de cliente.',
    },
    {
      termino: 'KPI',
      significado: 'Indicador Clave de Desempeño.',
    },
    {
      termino: 'Medida',
      significado: 'Cuantificación de datos específica.',
    },
    {
      termino: 'Métricas',
      significado:
        'Valores numéricos en los que se presenta una campaña o estrategia.',
    },
  ],
  complementario: [
    {
      texto:
        'Gómez, S., Instituto de Marketing Ágil. (22 de noviembre de 2017). Qué es la analítica web y para qué sirve. [Video]. YouTube ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=W1q_SyJPfdg&ab_channel=InstitutodeMarketingAgil',
    },
    {
      texto:
        'Galiana, P. (2018). Qué es la analítica web, para qué sirve y principales herramientas. ',
      tipo: 'Página web',
      link:
        'https://www.iebschool.com/blog/herramientas-analisis-web-analitica-usabilidad/',
    },
    {
      texto:
        'IEBS Business School. (11 de septiembre de 2018). Cómo definir e interpretar métricas y KPI en analítica web de IEBS. [Webinar]. ',
      tipo: 'Webinar',
      link: 'https://www.youtube.com/watch?v=-_8tNwzyCi8',
    },
    {
      texto:
        'Núñez, V. (2013). Cómo hacer un informe de resultados en redes sociales. ',
      tipo: 'Artículo Web',
      link:
        'https://vilmanunez.com/como-hacer-un-informe-de-redes-sociales-incluye-plantillas/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Camila Álvarez',
        cargo: 'Contratista diseño Curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana Ceballos',
        cargo: 'Contratista diseño Curricular',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Sena Regional Distrito Capital Centro de Diseño y Metrología',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Regional Tolima Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Oscar Julian Marquez Sanabria'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Angela Maldonado Jaime',
          'Adriana Marcela Suarez',
          'Daniela Bedoya Muñoz',
          'Gilberto Junior Rodriguez Rodriguez',
          'Wilson Andrés Arenales Caceres',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

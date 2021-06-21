<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span.numero 1
      h1 Analítica de datos para redes sociales
    .row.justify-content-center.align-items-center
      .col-10  
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Las redes sociales se han convertido en el medio más utilizado tanto para marcas como para usuarios, pues la flexibilidad de interacción y el fácil acceso han permitido que estas lleguen a todos los rincones del planeta. Detrás de todo lo que se publica hay algo muy importante para tener en cuenta por toda persona o marca que desee hacer uso de las redes sociales como medio empresarial. Ese “algo” es la información y datos obtenidos de las interacciones, de ahí la importancia del análisis de dichos datos para definir o direccionar la estrategia de marketing digital. 
            .col-lg-4.mb-4.mb-lg-0
                img.img-t.img-a(src='@/assets/ilustraciones/img6.svg', alt='')

        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular De esta manera, se habla de la analítica digital, la cual Cibrián (2019) define como: “Disciplina en la que se miden y analizan los datos generados por los usuarios para transformarlos en información relevante, la cual se presentará en informes útiles para que los destinatarios de estos puedan tomar decisiones y mejorar el negocio” (p. 19).
            i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-5 
        img.img-t.img-a(src='@/assets/ilustraciones/img7.png', alt='')
      .col-12.col-md-5
        .row.cajon.color-primario.p-4
          p.mb-0 Entendiendo la importancia de la analítica digital es cómo se reconoce la facilidad que brinda el marketing digital para medir todo lo que se considere necesario y con miras a direccionar las acciones de mejora en una determinada estrategia digital. Para realizar esta medición en la web existe una gran cantidad de herramientas gratuitas y de acuerdo con los criterios y métricas elegidas.

    .titulo-segundo#t_1_1.mt-5
      .h4 1.1. Componentes de la analítica digital 
    p La analítica digital se compone de tres factores importantes. A continuación, se debe observar cada componente para identificar las características de los factores que le ayudarán a obtener datos para sus planes de marketing.                 

    .row.justify-content-center.align-items-stretch.mt-5
      .col-10.col-md-4.bg-1.p-4
        h4.text-center Medición
        p La analítica digital se compone de tres factores importantes. A continuación, se debe observar cada componente para identificar las características de los factores que le ayudarán a obtener datos para sus planes de marketing. 
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img8.svg', alt='')

      .col-10.col-md-4.bg-2.p-4
        h4.text-center Análisis
        p Estudio y comprensión de los datos encontrados, segmentados de acuerdo con los criterios definidos.
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img9.svg', alt='')

      .col-10.col-md-4.bg-1.p-4
        h4.text-center #[i Reporting]
        p Acción de plasmar por medio de gráficos los resultados encontrados, con el fin de una toma de decisiones adecuada.
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img10.svg', alt='')

    .titulo-segundo#t_1_2.mt-5
      .h4 1.2. Uso de los datos obtenidos
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-7
        p Al realizar la medición de las acciones realizadas por los usuarios que interactúan con determinada red social o sitio web, la información obtenida es el tesoro mejor guardado por cada marca, puesto que este permite realizar estudios de análisis que permitan la toma de decisiones basada en datos y no en supuestos. 

        p Entre los beneficios del uso de datos se encuentra mayor cercanía con la realidad para generar oportunidades de incrementar ingresos, entendimiento de los hábitos del consumidor para definir una estrategia que permita llegar de manera eficaz a este público, además de optimizar recursos para lo que verdaderamente se debe invertir dinero y tiempo, a partir de los resultados obtenidos.

        p De esta forma, se define que para pasar de los datos obtenidos a la acción se debe tener en cuenta la conexión de los siguientes factores que, al finalizar su ciclo, vuelven a tomar acción en el momento que se necesiten de nuevo. En el siguiente recurso de aprendizaje se describe el proceso para pasar los datos a la acción desde el pensamiento de Cibrián (2019, p. 22); pero antes de ir al recurso, ¿para que utilizarían los datos obtenidos de las redes sociales? 

      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img11.png', alt='')
    
    ImagenInfografica.color-acento-botones.mt-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/ilustraciones/img12.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="51.5%" y="15%")
        p.mb-0 Números arrojados por la información obtenida, puede ser de visitas a la página, alcance, interacción, etc. 
      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="71%" y="33%")
        p.mb-0 Se debe enfocar en los aspectos que se desean conocer para lograr las metas propuestas. 
      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="70.1%" y="66.7%")
        p.mb-0 Transformación de la información. 
      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="51.3%" y="82%")
        p.mb-0 Se debe poner en contexto los datos encontrados, para determinar causas del porqué y para qué interactúan los usuarios con una determinada red social o web. Esto permite observar en qué punto se debe poner el foco de atención. 
      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="30.5%" y="67.6%")
        p.mb-0 De acuerdo con los resultados obtenidos se determinar qué aspectos deben cambiar o mejorar en el futuro, lo que se debe saber expresar a la empresa para una toma de decisiones acertada.  
      .tarjeta.color-acento-botones.bg-3.text-white.p-3(x="31%" y="33%")
        p.mb-0 Después de realizar la medición, el análisis y la presentación de resultados, llega el momento de llevar a la acción las decisiones tomadas.                                         

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>

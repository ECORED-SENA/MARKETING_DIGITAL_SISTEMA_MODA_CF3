<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span.numero 4
      h1 Estructuración e interpretación de indicadores para la preparación de reportes
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-7
        p De nada sirve medir cifras y analizar datos si no se plasman en información importante para direccionar la toma de decisiones. Con esto, se hace evidente la necesidad de usar indicadores que guíen la presentación de dicha información para ser trabajada con el equipo técnico. 
        .row.cajon.color-primario.p-4
          p.mb-0 Según la #[i Guía para diseño, construcción e interpretación de indicadores ](DANE, s.f.), un indicador se considera como la expresión cualitativa o cuantitativa capaz de ser observada y con la que es posible identificar comportamientos o características de una variable con relación a un tiempo determinado, encaminada a la meta fijada; para ello, el indicador debe tener simplificación, medición y comunicación.
      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img53.svg', alt='')       

    .titulo-segundo#t_4_1.mt-5
      .h4 4.1. Características de un reporte de resultados        
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-5
        img.img-t.img-a(src='@/assets/ilustraciones/img54_1.png', alt='')      
      .col-12.col-md-7
        p Un informe de resultados basa sus características de acuerdo con la persona que será presentada como también definirá los KPI, objetivos, formatos, etc. Es importante saber a quién se dirige para exponer de la manera más clara la información encontrada y permitir una toma de decisiones certera.
        p Según Cibrián (2019), existen cuatro requisitos para un buen reporte de resultados:
        .row.justify-content-center.align-items-center.mt-3
          .col-11        
            .list
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Información relevante y actualizada.
            .list.mt-2
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Fácil comprensión visual.
            .list.mt-2
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Conclusiones y recomendaciones.
            .list.mt-2
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Automatización.
        p.mt-3 La finalidad de un informe bien estructurado radica en su entendimiento de manera rápida y eficaz, dicho en otras palabras, debe ser explicada en un mismo idioma para todos los receptores, permitiendo desarrollar conclusiones a primera vista para ser analizadas a profundidad y direccionar la estrategia.                

    .titulo-segundo#t_4_2.mt-5
      .h4 4.2. Tipos de reportes 
    .row.justify-content-center.align-items-center.mt-5
      .col-10     
        .row.cajon.color-primario.p-4
          p.mb-0 Teniendo en cuenta la información que se desea dar a conocer, se pueden definir tres tipos de reportes, cuya importancia radica en aprender a organizar la información encontrada para exponerla de manera clara y tener muy presente para la toma de decisiones (Cibrián, 2019). Ellos son:  
    TabsA.color-acento-contenido.mt-5
      .tarjeta.nav-bg-color.p-5(titulo="Cuadro de mando")
        .row.justify-content-center.align-items-strech
          .col-7
            h4 Cuadro de mando
            p Elementos de vital importancia donde se pueden agrupar los KPI necesarios dentro de un mismo contexto para identificar a simple vista si la marca o empresa va por buen o mal camino. En este se debe hacer uso de los gráficos necesarios para que visualmente cause la atención que se desea; la información para estos recursos se puede extraer de las fuentes de tráfico, objetivos y conclusiones.           
          .col-5
            img.img-t.img-a(src='@/assets/ilustraciones/img54.png', alt='')      


      .tarjeta.nav-bg-color.p-5(titulo="Panel de control")
        .row.justify-content-center.align-items-strech
          .col-7
            h4 Panel de control
            p También conocido como Dashboard, se mantiene en constante actualización y permite dividir los objetivos de la marca o empresa en otros más pequeños, de acuerdo con las métricas necesarias para analizar su rendimiento. Para ello, hay una gran cantidad de herramientas que permiten automatizar este proceso con el fin de optimizar tiempo.         
          .col-5
            img.img-t.img-a(src='@/assets/ilustraciones/img55.png', alt='')   

      .tarjeta.nav-bg-color.p-5(titulo="Informe")
        .row.justify-content-center.align-items-strech
          .col-7
            h4 Informe
            p Este se enfoca, sobre todo, en las conclusiones del proceso de análisis y debe estar redactado de una manera clara y entendible para el lector al que está dirigido, siempre y cuando maneje datos que se ajusten a la realidad y puede ser producido periódicamente según lo requiere la marca.         
          .col-5
            img.img-t.img-a(src='@/assets/ilustraciones/img56.png', alt='')  
    p.mt-5 Al finalizar la lectura de este componente de formación, se espera que se haya recuperado información para desarrollar conocimientos, habilidades y actitudes que deberán aplicarse al contexto laboral, pues es allí en donde tiene sentido esta experiencia de aprendizaje.              

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

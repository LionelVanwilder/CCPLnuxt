<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>{{ $t('history.title') }}</h2>
        <p>
          {{ $t('history.intro') }}  
        </p>
        <h3>{{ $t('history.subtitle1') }}</h3>
        <p>
            {{ $t('history.content1') }}
        </p>
        <h3>{{ $t('history.subtitle2') }}</h3>
        <p>
            {{ $t('history.content2_1') }}
            <br><br>
            {{ $t('history.content2_2') }}
            <br><br>
            {{ $t('history.content2_3') }}
            <br><br>
            {{ $t('history.content2_4') }}
            <br><br>
            {{ $t('history.content2_5') }}
            <br><br>
            {{ $t('history.content2_6') }}


        </p>
   </div>
    </div>
   
 </template>
 
 <script>
    
    import BreadCrumbCom from '../components/breadcrumbs.vue'
 
     export default {
     name: 'HistoiretPage',
     
     components: {
        BreadCrumbCom
    },


    computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Histoire', label: this.$t('blocflex.cards.history') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Histoire | CCPL asbl',
      meta: [
        {
          name: 'description',
          content: 'Explorez l\'évolution du Centre Comprendre et Parler depuis sa fondation en 1965 par le Docteur Olivier Périer. Découvrez comment le Centre a intégré des méthodes innovantes de rééducation, comme le LPC et le FCSC, et les récentes avancées technologiques telles que les implants cochléaires. Suivez notre parcours de l\'utilisation exclusive de méthodes audio-orales à l\'adoption des techniques visuelles et de soutien aux troubles concomitants.',
        },
        {
          name: 'keywords',
          content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients',
        }
      ]
    })
  }
 
 }
 </script>

 <style scoped>
    ol{
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem 0;
    }
    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
        background-color: #005387;
        color: #ffffff;
        width: 100%;
    }

    /*ol li:before{
        content: url('../../../../../../icons/check-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin: 0 1rem;
    }*/
</style>
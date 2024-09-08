<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>{{$t('AboutPage.title')}} "Comprendre et Parler"</h2>
        <p v-html="$t('AboutPage.content1')"></p>
        <p v-html="$t('AboutPage.content2')"></p>
        <div class="pages-paragraph">
            <h3>{{ $t('AboutPage.subtitle1') }}</h3>
            <p v-html="$t('AboutPage.content3')"></p>
        
        </div>

            
    
        
   </div>
    </div>
    
</template>

<script>

    import BreadCrumbCom from '../components/breadcrumbs.vue'
   

    export default{
        name: 'AboutusExpend',

        components: {
            BreadCrumbCom
        },

        

        computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Quisommesnous', label: this.$t('Aboutus.title') }
            ];
        }
    },

    setup() {
    useHead({
      title: 'Qui sommes-nous? | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Le Centre Comprendre et Parler, fondé en 1965, est une ASBL spécialisée dans la réhabilitation fonctionnelle des enfants sourds. Avec une équipe multidisciplinaire de 110 professionnels, le centre accompagne plus de 600 enfants et leurs familles dans le développement de leur langage et autonomie.',
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
   h3{
    color: #222222;
   }
    
</style>
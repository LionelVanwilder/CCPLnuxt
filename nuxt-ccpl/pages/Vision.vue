<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
   <div class="Pages-container-content">
        <h2>{{ $t('vision.title') }}</h2>
        <h3>{{ $t('vision.subtitle') }}</h3>
        <p>
            {{ $t('vision.content1') }}
        </p>

        <h3></h3>
            <div class="pages-paragraph">
                <p v-html="$t('vision.content2')"></p>
                <p v-html="$t('vision.content3')"></p>
                <p v-html="$t('vision.content4')"></p>
                <p v-html="$t('vision.content5')"></p>
                <p v-html="$t('vision.content6')"></p>
                <p v-html="$t('vision.content7')"></p>
                <p v-html="$t('vision.content8')"></p>
            </div>
   </div>
    </div>
   
</template>

<script>
    
    import BreadCrumbCom from '../components/breadcrumbs.vue'

    export default {
    name: 'VisionPage',
    
    components: {
        BreadCrumbCom
    },
   
        computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Vision', label: this.$t('blocflex.cards.vision') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées pour la page
    useHead({
      title: 'Vision | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Le Centre Comprendre et Parler, A.S.B.L., est un Centre de Réadaptation Fonctionnelle dédié aux troubles de l\'audition, du langage et de la parole, reconnu pour son approche multidisciplinaire et ses projets de recherche innovants.',
        },
        {
          name: 'keywords',
          content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, staut et vision',
        },
        // Ajouter d'autres meta balises ici
      ],
    })
  }

    }
</script>
<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
        <div class="Edu-container">
        <h2>{{ $t("program.integration.title") }}</h2>
        <span>{{ $t("program.integration.subtitle") }}</span>
        <p>{{ $t("program.integration.text1") }}</p>
        <p>{{ $t("program.integration.text2") }}</p>
    </div>
    </div>
    


</template>
<script>
    
    import BreadCrumbCom from '../../components/breadcrumbs.vue'
    export default{
        name: 'IntegrationPage',

        components: {
            BreadCrumbCom
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Programmes', label: this.$t('navbar.links.program') },
                { to: '/Integration', label: this.$t('navbar.dropdown.program.integration') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Intégration | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Découvrez notre programme d\'intégration qui soutient les enfants et adolescents avec déficience auditive dans leur évolution linguistique et communicationnelle. Nous favorisons leur intégration dans l\'enseignement ordinaire en assurant un soutien personnalisé, y compris des interprètes en communication visuelle pour les besoins spécifiques des élèves avec déficience auditive profonde. Notre objectif est de faciliter leur transition vers une intégration sociale et académique réussie.',
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

.Edu-container{
        margin: 0 6rem;
        padding: 1rem;
    }

    h2{
        margin-bottom: 2rem;
    }

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    span{
    line-height: 1.5;
    letter-spacing: 1px;
    color:  #005387;
    font-weight: 600;
    font-style: italic;
    }

    @media all and (max-width: 769px){
    .Edu-container{
        margin: 0 2rem;
    }
}

@media all and (max-width: 600px){
    .Edu-container h1{
        font-size: 2rem;
    }

    .Edu-container h2{
        font-size: 1.5rem;
    }

    .Edu-container h3{
        font-size: 1.2rem;
    }
}

@media all and (max-width: 476px){

    .Edu-container{
        padding: 1rem;
    }
    .Edu-container h1{
        font-size: 1.7rem;
    }

    .Edu-container p{
        letter-spacing: 0.5px;
    }
}

@media all and (max-width: 426px){

.Edu-container{
    padding: 1rem;
}
.Edu-container h1{
    font-size: 1.5rem;
}




}
</style>
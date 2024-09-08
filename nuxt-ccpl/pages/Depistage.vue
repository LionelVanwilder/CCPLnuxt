<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t("program.screening.title") }}</h2>
        <p>{{ $t("program.screening.text1") }}</p>
        <p>{{ $t("program.screening.text2") }}</p>
        <p>{{ $t("program.screening.text3") }}</p>
    </div>
    </div>
</template>
<script>
    
    import BreadCrumbCom from '../../components/breadcrumbs.vue'
    export default{
        name: 'DepistagePage',

        components: {
            BreadCrumbCom
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Programmes', label: this.$t('navbar.links.program') },
                { to: '/Depistage', label: this.$t('navbar.dropdown.program.screening') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Dépistage | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Le service Dépistage évalue et diagnostique la surdité en maternité (CHIREC, Edith Cavell) ou au Centre. En cas de risques potentiels ou d\'antécédents familiaux, nous assurons le suivi jusqu\'au diagnostic ou l\'exclusion de la surdité. Environ 3.000 bébés et jeunes enfants sont testés chaque année, avec confirmation et coordination des diagnostics avec les hôpitaux et médecins externes.',
        },
        {
          name: 'keywords',
          content: 'Centre Comprendre et Parler, ASBL, CCP, enfants, Centre, sourds, patients',
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
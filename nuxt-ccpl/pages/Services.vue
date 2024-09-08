<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t("program.services.title") }}</h2>
        <h3>{{ $t("program.services.subtitle1") }}</h3>
        <p>{{ $t("program.services.text1") }}</p>

        <h3>{{ $t("program.services.subtitle2") }}</h3>
        <p>{{ $t("program.services.text2") }}</p>
    </div>

    </div>
    

</template>
<script>
    
    import BreadCrumbCom from '../../components/breadcrumbs.vue'
    export default{
        name: 'ServicesPage',

        components: {
            BreadCrumbCom
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Programmes', label: this.$t('navbar.links.program') },
                { to: '/Services', label: this.$t('navbar.dropdown.program.services') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Services | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Explorez les services offerts par le Centre Comprendre et Parler pour soutenir les enfants et étudiants sourds. Notre Service d’Appui à la Formation Professionnelle aide les enfants avec implants cochléaires à améliorer leurs capacités de communication et leur intégration sociale. Le Service d’Accompagnement Pédagogique assiste les étudiants sourds dans leur parcours académique, offrant une coordination de projet, une aide pédagogique, des prises de notes, et une interprétation des cours, avec un suivi approuvé par les pouvoirs subsidiants.',
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
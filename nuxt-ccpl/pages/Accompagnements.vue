<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <div class="skills-img-container">
                <NuxtImg src="/images/accompagnementetudiant.webp" accesskey="" alt="étudiant" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Accompagnement pour les étudiants</h1>
        <h2>{{ $t("skills.acc.title") }}</h2>
        <h4>{{ $t("skills.acc.subtitle") }}</h4>
        <p>{{ $t("skills.acc.text1") }}</p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'AccompagnementPage',

        components: {
            BreadCrumbCom,
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Accompagnements', label: this.$t('navbar.dropdown.skills.acc') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Accompagnements | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Nous assistons les étudiants sourds dans leurs études supérieures, en offrant une aide personnalisée',
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
    h1{
        display: none;
    }
    .Edu-container{
        margin: 0 6rem;
        padding: 1rem;
    }

    h4{
        margin: 2rem 0;
        font-size: 1.2rem;
        color: #222222;
        font-weight: 500;
        letter-spacing: 1.1px;
    }

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    span{
    margin: 2rem 0;
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
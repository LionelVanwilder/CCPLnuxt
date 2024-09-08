<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t('skills.assistance.title') }}</h2>
        <h3>{{ $t('skills.assistance.assubtitle') }}</h3>
        <p>
            {{ $t('skills.assistance.ascontent1') }}
        </p>
        <p>
            {{ $t('skills.assistance.ascontent2') }} 
        </p>
        <h3>{{ $t('skills.assistance.edutitle') }}</h3>
        <p>
            {{ $t('skills.assistance.educontent1') }}
        </p>
        <p>
            {{ $t('skills.assistance.educontent2') }}
        </p>
    </div>

    </div>
    
</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'AssistancePage',

        components: {
            BreadCrumbCom,
        },
        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/AssistancesSociales', label: this.$t('navbar.dropdown.skills.assistance') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Assistances sociales | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Nos assistantes sociales soutiennent les familles et les jeunes adultes sourds, les aidant dans leurs démarches administratives et leur autonomie, tout en collaborant à la rééducation. Les éducateurs créent des environnements stimulants pour le développement harmonieux des enfants sourds, en animant des activités individuelles et en groupe.',
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
    
    }

    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    ol li:before{
        content: url('../../public/imges/check-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin: 0 .2rem;
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

    .Edu-container h2{
        font-size: 1.3rem;
    }
}

@media all and (max-width: 426px){

.Edu-container{
    padding: 1rem;
}
.Edu-container h1{
    font-size: 1.5rem;
}
.breadcrumb-first a{
    font-size: inherit;
}



}
</style>
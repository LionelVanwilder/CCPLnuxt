<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <div class="skills-img-container">
                <NuxtImg src="/images/logopedie.webp" accesskey="" alt="enfants qui joue" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Service logopedie</h1>
        <h2>{{ $t('skills.logo.title') }}</h2>
        <p v-html="$t('skills.logo.content1')"></p>
        <p>
            {{ $t('skills.logo.content2') }}
        </p>
        <p v-html="$t('skills.logo.content3')">
            
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'LogopediePage',

        components: {
            BreadCrumbCom,
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Logopedie', label: this.$t('navbar.dropdown.skills.logo') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Logopédie | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Le service de logopédie du Centre Comprendre et Parler offre une rééducation individuelle et collective pour améliorer la communication des enfants avec déficience auditive. Les logopèdes utilisent des activités variées et des supports attractifs pour développer les compétences linguistiques. Ils intègrent la langue des signes lorsque nécessaire et impliquent les parents dans le processus d\'accompagnement.',
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
    
    }

    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    ol li:before{
        content: url('../../public/images/check-solid.svg');
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
<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <div class="skills-img-container">
                <NuxtImg src="/images/psychomotricite.webp" accesskey="" alt="enfant qui apprends via un jeu" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Psychomotricite et developpement de l'enfant</h1>
        <h2>{{ $t('skills.psychomot.title') }}</h2>
        <p>
            {{ $t('skills.psychomot.content1') }}
        </p>
        <p>
            {{ $t('skills.psychomot.content2') }}
        </p>
        <p>
            {{ $t('skills.psychomot.content3') }}
        </p>
        <p>
            {{ $t('skills.psychomot.content4') }}
        </p>
        <p>
            {{ $t('skills.psychomot.content5') }}
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'PsychomotricitePage',

        components: {
            BreadCrumbCom,
        },


        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Psychomotricite', label: this.$t('navbar.dropdown.skills.psychomotor') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Psychomotricité | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Au Centre Comprendre et Parler, les psychomotriciens spécialisés soutiennent les enfants sourds dans le développement psychomoteur et la rééducation. Ils travaillent sur l’adaptation corporelle, l’équilibre, et les interactions sociales, en utilisant des thérapies individuelles et collectives pour favoriser une meilleure intégration corporelle et relationnelle, essentiel à l\'épanouissement et à l\'autonomie des enfants.',
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
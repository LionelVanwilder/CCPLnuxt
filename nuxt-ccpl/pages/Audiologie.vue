<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <div class="skills-img-container">
                <NuxtImg src="/images/audiologie.webp" accesskey="" alt="son audiologie" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Service audiologie</h1>
        <h2>{{ $t("skills.audio.title") }}</h2>
        <p>{{ $t("skills.audio.text1") }}</p>
        <p>{{ $t("skills.audio.text2") }}</p>
        <p>{{ $t("skills.audio.text3") }}</p>
        <p>{{ $t("skills.audio.text4") }}</p>
        <p>{{ $t("skills.audio.text5") }}</p>
    </div>

    </div>
    
</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'AudiologiePage',

        components: {
            BreadCrumbCom,
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Audiologie', label: this.$t('navbar.dropdown.skills.audio') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Audiologie | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Le service d\'audiologie du Centre Comprendre et Parler évalue et ajuste les déficiences auditives, adapte les appareils auditifs, programme les implants cochléaires et assure le suivi audiologique. Composé de 5 audiologistes pédiatriques spécialisés, le service offre des solutions adaptées aux enfants, enrichies par des collaborations et formations régulières.',
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
        content: url('../../../../../../icons/check-solid.svg');
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
<template>
    <div class="programmes-container">
        <div class="programmes-nav">
            <ul>
                <li><router-link to="/Accompagnements">{{ $t('navbar.dropdown.skills.acc') }}</router-link></li>
                <li><router-link to="/AssistancesSociales">{{ $t('navbar.dropdown.skills.assistance') }}</router-link></li>
                <li><router-link to="/Audiologie">{{ $t('navbar.dropdown.skills.audio') }}</router-link></li>
                <!--<li><router-link to="/Competences/Depistage">Dépistage</router-link></li>-->
                <li><router-link to="/Recherches">{{ $t('navbar.dropdown.skills.research') }}</router-link></li>
                <!--<li><router-link to="/Programmes/FormationsExterieures">Aides visuelles à la communication :<br> Interprétation, translittération et transcription</router-link></li>-->
                <li><router-link to="/Logopedie">{{ $t('navbar.dropdown.skills.logo') }}</router-link></li>
                <li><router-link to="/Medecins">{{ $t('navbar.dropdown.skills.doctor') }}</router-link></li>
                <!--<li><router-link to="/Programmes/ServicesExterieurs">Psychologie et neuropsychologie</router-link></li>-->
                <li><router-link to="/Psychomotricite">{{ $t('navbar.dropdown.skills.psychomotor') }}</router-link></li>
               <!-- <li><router-link to="/Programmes/ServicesExterieurs">Services administratifs et financiers</router-link></li>-->
            </ul>
        </div>
        <div class="programmes-text">
        <h2>{{ $t('skills.title') }}</h2>
        <p>
           {{ $t('skills.content1') }}
        </p>
        <p>
            <span>{{ $t('skills.span1') }}</span>
            {{ $t('skills.content2') }}
        </p>

        <p>
            <span>{{ $t('skills.span2') }}</span>
            {{ $t('skills.content3') }}
        </p>

        <p>
            <span>{{ $t('skills.span3') }}</span>
            {{ $t('skills.content4') }}
        </p>

        <p>
            <span>{{ $t('skills.span4') }}</span>
            {{ $t('skills.content5') }}
        </p>
        </div>
       
    </div>
   
</template>
<script>
    export default{
        name: 'CompetencesPage',

        setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Compétences | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Découvrez les compétences multidisciplinaires des professionnels du Centre Comprendre et Parler. Nous développons les capacités linguistiques et l\'autonomie des enfants sourds grâce à une approche collaborative intégrant logopédie, langue des signes, soutien social, psychologie et soins médicaux spécialisés.',
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
    .custom-span{
        line-height: 1.5 !important;
        letter-spacing: 1px !important;
        color:  #005387 !important;
        font-weight: 600 !important;
        transition: .3s ease-in-out;
    }

    .custom-span:hover{
        text-decoration: underline;
        transition: .3s ease-in-out;
    }

    span{
        font-weight: 600;
        color: #005387;
    }
</style>
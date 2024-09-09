<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
        
    <div class="Edu-container">
        
            <div class="skills-img-container">
                <NuxtImg src="/images/education.webp" accesskey="" alt="education précoce" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Education précoce</h1>
       
        <h2>{{ $t('Education.title') }}</h2>
        
        <h4>{{ $t('Education.subtitle') }}</h4>
        <p>
            {{ $t('Education.text1') }}
        </p>
        <p>
            {{ $t('Education.text2') }}
        </p>

        <span>
            {{ $t('Education.span1') }}
        </span>
        <p>
            {{ $t('Education.text3') }}
        </p>
        <p>
            {{ $t('Education.text4') }}
        </p>
    </div>

    </div>
    
</template>
<script>
    import BreadCrumbCom from '../../../components/breadcrumbs.vue'


    export default{
            name: 'EducationPrecoce',

            components: {
                BreadCrumbCom
            },

    

        computed: {
        breadcrumbs() {
            return [
                { to: '/Programmes', label: this.$t('navbar.links.program') },
                { to: '/Education', label: this.$t('navbar.dropdown.program.education') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Education précoce | CCPL asbl',
      meta: [
        {
          name: 'description',
          content: 'Découvrez notre programme d\'éducation précoce pour enfants de 0 à 3 ans avec déficience auditive. Nous offrons un accompagnement personnalisé, incluant le home training pour stimuler la communication et le langage, ainsi qu\'un soutien psychologique aux parents. Pour les enfants entendants dans des foyers utilisant la langue des signes, notre programme aide à développer leurs capacités auditives et langagières. Explorez comment nous aidons les familles à favoriser le développement optimal de leurs enfants.',
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
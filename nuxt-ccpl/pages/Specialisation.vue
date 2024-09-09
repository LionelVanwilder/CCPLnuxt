<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        
            <div class="skills-img-container">
                <NuxtImg src="/images/specialisation.webp" accesskey="" alt="crayons de couleurs" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
        
        <h1>Spécialisation primaire maternelle et secondaire</h1>
        <h2>{{ $t('program.specialization.title') }}</h2>
        
        
        
        <h3>{{ $t('program.specialization.kindertitle') }}</h3>
        <span>{{ $t('program.specialization.subtitle') }}</span>
        <p>
            {{ $t('program.specialization.kinderintro') }}
        </p>
        <p>
            {{ $t('program.specialization.goal') }} 
        </p>

        <h3>{{ $t('program.specialization.Primarytitle') }} </h3>
        <span>
            {{ $t('program.specialization.subtitle') }}
        </span>
        <p>
            {{ $t('program.specialization.Primaryintro') }} 
        </p>
        <p>
            {{ $t('program.specialization.goal') }} 
        </p>

        <h3>{{ $t('program.specialization.suptitle') }} </h3>
        <span>
            {{ $t('program.specialization.subtitle') }}
        </span>
        <p>
            {{ $t('program.specialization.supintro') }}
        </p>
        <p>
            {{ $t('program.specialization.supgoal1') }}
        </p>
        <p>
            
        </p>
    </div>
    </div>
    

</template>
<script>

 import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'SpecialisationPage',

        components: {
            BreadCrumbCom
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '/Programmes', label: this.$t('navbar.links.program') },
                { to: '/Specialisation', label: this.$t('navbar.dropdown.program.spec') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Spécialisation | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Explorez nos programmes de rééducation spécialisée pour enfants avec déficience auditive, de la maternelle au niveau secondaire et supérieur. Nous offrons une éducation sur mesure en coordination avec l\'« École Intégrée » et les écoles ordinaires. Chaque programme vise à améliorer les compétences en communication orale et, lorsque nécessaire, à utiliser des moyens de communication par signes. Découvrez comment nous soutenons le développement langagier et académique des enfants à différents niveaux d\'enseignement.',
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

    h3{
        margin-bottom: 2rem !important;
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

    ol{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem 0;
    }
    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    ol li:before{
        content: url('../../public/imges/icons/check-solid.svg');
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
        margin-top: 2rem;
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
<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
<div class="Edu-container">
    
        <img src="../public/images/DonationNEW.svg" class="icon-bloc-flex">
    
    <h2>{{ $t("donation.title") }}</h2>
    <p>{{ $t("donation.intro") }}</p>
    <p>{{ $t("donation.intro2") }}</p>
    
</div>
<div class="don-grid">
        <div class="don-grid-left">
            <h2 v-html="$t('donation.gridleft.title')"></h2>
            <p v-html="$t('donation.gridleft.info')"></p>
           <!-- <p v-html="$t('donation.gridleft.text')"></p>-->
        </div>
        <div class="don-grid-right">
            <h2 v-html="$t('donation.gridright.title')"></h2>
            <DonForm></DonForm>
            <!--<p v-html="$t('donation.gridright.info')"></p>
            <p v-html="$t('donation.gridright.text')"></p>-->
        </div>
    </div>
    </div>

</template>
<script>

import BreadCrumbCom from '../components/breadcrumbs.vue'
import DonForm from '../components/Don/form.vue'

export default{
        name: 'DonPage',

        components: {
            BreadCrumbCom,
            DonForm
        },

        

       

        computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Don', label: this.$t('breadcrumbs.donation') }
            ];
        }
    },

    setup() {
    // Définir les métadonnées de la page
    useHead({
      title: 'Nous soutenir | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Soutenez le Centre Comprendre et Parler en faisant un don ! Votre générosité aide à financer nos projets et améliorer la vie des enfants et familles que nous accompagnons. Recevez une attestation fiscale pour les dons de 40 € et plus. Pour faire un don, choisissez entre domiciliation, virement bancaire ou don en ligne.',
        },
        {
          name: 'keywords',
          content: 'Centre Comprendre et Parler, ASBL, CCP, enfants, Centre, sourds, patients, don',
        }
      ]
    })
  }
    }
</script>
<style scoped>

.template-page-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.breadcrumb-container{
    margin-top: 2rem !important;
}
.don-grid-left h2 span, .don-grid-right h2 span{
    color: #005387 !important;
    font-weight: 700 !important;
}
.Edu-container{
        
        padding: 3rem;
        background-color: #005387;
        margin-top: 2rem !important;
        position: relative;
    }

.Edu-container h2{
    color: #ffffff !important;
}

.Edu-container p{
    color: #ffffff;

}

.don-grid{
    width: 70%;
    padding: 3rem 0;
   
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /*display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 50px;*/
}

.don-grid p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
}

.don-grid h2{
    color: #222222;
}
.don-grid a{
    color: #005387;
    text-decoration: underline;
    font-weight: 600 !important;
    transition: .3s ease-in-out;
}

.don-grid-left{
    margin-bottom: 2rem;
}

.icon-bloc-flex{
    right: 30px;
}

@media all and (max-width: 769px){
    .don-grid{
        width: 80%;
        padding: 2rem;
    }
}

@media all and (max-width: 600px){

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 4rem;
    }
    .Edu-container h2{
        font-size: 1.5rem;
    }

    .Edu-container p{
        letter-spacing: 0.5px;
    }

    .don-grid{
        margin: 2rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        padding: 2rem;
    }

    .don-grid h2{
        font-size: 1.5rem;
    }

    .don-grid-left{
        display: flex;
        flex-direction: column;
    }

    
}

@media all and (max-width: 476px){
    .icon-bloc-flex{
        height: 3.5rem;
    }

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 2rem;
    }

    .Edu-container h2{
        font-size: 1.2rem;
    }

    .don-grid h2{
        font-size: 1.2rem;
    }

    .don-grid p{
        line-height: 1.2;
    }

    .Edu-container p{
        line-height: 1.3;
    }

    .don-grid{
       padding: 2rem 1rem;
        margin: 2rem 2rem;
    }
    #formdon{
        width: 90%;
    }

   
}
</style>
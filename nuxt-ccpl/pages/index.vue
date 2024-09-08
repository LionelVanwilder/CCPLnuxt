<template>
    <div class="home-banner">
    <HomeBanner></HomeBanner>
  </div>
  <main>
    <AboutUs></AboutUs>
    <PatientGrid></PatientGrid>
    <BlocFlex></BlocFlex>
    <NewsSection></NewsSection>
    <DonationSection></DonationSection>
  </main>
    
</template>

<script>
import AboutUs from '../components/home/aboutus'
import HomeBanner from '../components/home/home-banner.vue'
import PatientGrid from "../components/home/patient.vue"
import BlocFlex from "../components/home/bloc-flex.vue"
import NewsSection from "../components/home/news/news.vue"
import DonationSection from "../components/home/Donation.vue"
import { useHead } from '#app'

export default {
  name: 'HomePage',
  components: {
   
    AboutUs,
    HomeBanner,
    PatientGrid,
    BlocFlex,
    NewsSection,
    DonationSection
   
  },

  setup() {
    // Définir les métadonnées pour la page
    useHead({
      title: 'Accueil | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Bienvenue sur le site du Centre Comprendre et Parler ASBL (CCP), une organisation dédiée à l\'accompagnement des enfants sourds et malentendants. Découvrez nos services, nos programmes de soutien et nos initiatives pour améliorer la qualité de vie de nos patients.',
        },
        {
          name: 'keywords',
          content: 'Centre Comprendre et Parler, ASBL, CCP, enfants, Centre, sourds, patients',
        },
        // Ajouter d'autres meta balises ici
      ],
    })
  }

  
}
</script>
<template>
    <div class="home-banner">
    <HomeBanner></HomeBanner>
  </div>
  <main>
    <AboutUs></AboutUs>
    <Gallery></Gallery>
    <PatientGrid></PatientGrid>
    <BlocFlex></BlocFlex>
    <NewsSection></NewsSection>
    <DonationSection></DonationSection>
    <CarouselApp></CarouselApp>
  </main>
    
</template>

<script>
import AboutUs from '../components/home/aboutus'
import HomeBanner from '../components/home/home-banner.vue'
import PatientGrid from "../components/home/patient.vue"
import BlocFlex from "../components/home/bloc-flex.vue"
import NewsSection from "../components/home/news/news.vue"
import DonationSection from "../components/home/Donation.vue"
import CarouselApp from "../components/home/carousel/carousel.vue"
import { useHead } from '#app'
import Gallery from "../components/home/gallery.vue"

export default {
  name: 'HomePage',
  components: {
   
    AboutUs,
    HomeBanner,
    PatientGrid,
    BlocFlex,
    NewsSection,
    DonationSection,
    CarouselApp,
    Gallery
   
  },

  setup() {
    // Définir les métadonnées pour la page
    useHead({
      title: 'Accueil | CCP asbl',
      meta: [
        {
          name: 'description',
          content: 'Bienvenue sur le site du Centre Comprendre et Parler ASBL (CCP), une organisation dédiée à l\'accompagnement des enfants sourds et malentendants.',
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
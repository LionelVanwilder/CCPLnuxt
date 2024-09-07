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

export default {
  name: 'HomePage',
  components: {
   
    AboutUs,
    HomeBanner,
    PatientGrid,
    BlocFlex,
    NewsSection,
    DonationSection
   
  }
}
</script>
<template>
    <div class="carousel-container"  
        data-aos="fade-up"
        data-aos-duration="1000"
    >
      <div class="align-title">
        <h2>{{ $t("carousel.title") }}</h2>
      </div>
      
      <!-- Carousel Component -->
      <carousel 
        ref="carousel"
        :items-to-show="1"
        :transition="500"
        :breakpoints="breakpoints"
        v-if="pagesReady"
      >
        <slide v-for="(item, index) in pages" :key="index">
          <a :href="'#slide-' + index" class="carousel__item" :class="'slide-' + index">
            <div class="container-news">
              <router-link  :to="item.path" class="news-card carousel-card" :style="{ backgroundColor: item.color }">
                <span class="carousel-date" :style="{ backgroundColor: item.color }">{{ item.title }}</span>
                <div class="carousel__img-container">
                  <img :src="item.image">
                </div>
              </router-link>
            </div>
          </a>
        </slide>
  
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      
    </div>
  </template>
  
  <script>
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import progrImage from '../../../public/images/programmes.webp'
  import compImage from '../../../public/images/competences.webp'
  import collabImage from '../../../public/images/collaborations.webp'
  import docImage from '../../../public/images/documentation.webp'
  
  export default {
    name: 'CarouselApp',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    
    data() {
      return {
        pagesReady: false,  // Indicateur de données prêtes
        breakpoints: {
          475: {
            itemsToShow: 1.5,
          },
          515: {
            itemsToShow: 2,
          },
          768: {
            itemsToShow: 3,
          },
        }
      };
    },
  
    computed: {
      pages() {
        return [
          {
            title: this.$t('navbar.links.program'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: progrImage,
            color: '#EA3788',
            path: '/Programmes'
          },
          {
            title: this.$t('navbar.links.skills'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: compImage,
            color: '#004FFF',
            path: '/Competences'
          },
          {
            title: this.$t('navbar.links.collab'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: collabImage,
            color: '#29bf12',
            path: '/Collaborations/Partenaires'
          },
          {
            title: this.$t('navbar.links.doc'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: docImage,
            color: '#E71D36',
            path: '/SAFP/Surdite'
          }
        ];
      }
    },
  
    mounted() {
      // Forcer la mise à jour du carousel après le montage du composant
      this.pagesReady = true;
      this.$nextTick(() => {
        if (this.$refs.carousel) {
          this.$refs.carousel.update();  // Force l'update du carousel
        }
      });
    }
  };
  </script>
  
  <style></style>
  
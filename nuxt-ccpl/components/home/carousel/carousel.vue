<template>
    <div class="carousel-container"  
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                <div class="align-title">
                  <h2>{{ $t("carousel.title") }}</h2>
                </div>
                
      <carousel 
        :items-to-show="1"
        :transition="500"
        :breakpoints="breakpoints"
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
  import docImage from '../../../public/images/documentation.avif'
  
  export default {
    name: 'CarouselApp',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
  
    computed: {
        pages(){
          return[
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
          },
  
        
          ]
        }
    },
  
    data() {
      return {
      
  
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
    }
  };
  </script>
  <style></style>
  
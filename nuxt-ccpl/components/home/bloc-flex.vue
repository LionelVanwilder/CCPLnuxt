<template>
    <div class="blocflex-container-container">
      <div class="bloc-flex-container">
        <h2>{{ $t("blocflex.title") }}</h2>
        <div class="grid-bloc-flex">
          <div
            class="bloc-flex"
            v-for="(item, index) in bloc"
            :key="index"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img :src="item.source" class="icon-bloc-flex" :alt="item.title">
            <h3 v-html="item.title"></h3>
            <p>{{ item.content }}</p>
            <RouterLink :to="item.url">{{ $t("blocflex.cards.more") }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlocFlex',
    computed: {
      bloc() {
        return [
          {
            source: '/images/visionnew.svg', // Chemin relatif à partir du répertoire public
            title: this.$t('blocflex.cards.vision'),
            content: this.$t('blocflex.visionintro'),
            url: '/Vision',
          },
          {
            source: '/images/missionnew.svg',
            title: this.$t('blocflex.cards.mission'),
            content: this.$t('blocflex.missionintro'),
            url: '/Mission',
          },
          {
            source: '/images/gestionnew.svg',
            title: this.$t('blocflex.cards.gestion'),
            content: this.$t('blocflex.gestionintro'),
            url: '/OrganesdeGestion',
          },
          /*{
            source: '/images/hierarchynew.svg',
            title: this.$t('blocflex.cards.organ'),
            content: this.$t('blocflex.organintro'),
            url: '/Organigrammes',
          },
          {
            source: '/images/reportnew.svg',
            title: this.$t('blocflex.cards.activity'),
            content: this.$t('blocflex.activityintro'),
            url: '/RapportdActivites',
          },*/
          {
            source: '/images/historynew.svg',
            title: this.$t('blocflex.cards.history'),
            content: this.$t('blocflex.historyintro'),
            url: '/Histoire',
          },
        ]
      },
    },
  }
  </script>
  
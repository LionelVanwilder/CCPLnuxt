<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <div class="skills-img-container">
                <NuxtImg src="/images/recherches.webp" accesskey="" alt="image de recherches scientifique" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1300" height="350"/>
            </div>
            <h1>Services recherches</h1>
        <h2>{{ $t("skills.research.title") }}</h2>
        <p>{{ $t("skills.research.text1") }}</p>
        <p>{{ $t("skills.research.text2") }}</p>
        <p>{{ $t("skills.research.text3") }}</p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from '../../components/breadcrumbs.vue'

export default{
        name: 'ResearchPage',

        components: {
            BreadCrumbCom,
        },


        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Recherches', label: this.$t('navbar.dropdown.skills.research') }
            ];
        }
    }
    }
</script>
<style scoped>
   h1{
    display: none;
   }
</style>
<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.skills") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Accompagnements" @click="selectItemAndCloseBurger('Accompagnements')">{{ this.$t('navbar.dropdown.skills.acc') }}</router-link></li>
        <li><router-link to="/AssistancesSociales" @click="selectItemAndCloseBurger('Assistancesociale')">{{ this.$t('navbar.dropdown.skills.assistance') }}</router-link></li>
        <li><router-link to="/Audiologie" @click="selectItemAndCloseBurger('Audiologie')">{{ this.$t('navbar.dropdown.skills.audio') }}</router-link></li>
        <!--<li><router-link to="/Competences/Depistage" @click="selectItemAndCloseBurger('Dépistage')">Dépistage</router-link></li>-->
        <li><router-link to="/Recherches" @click="selectItemAndCloseBurger('Recherches')">{{ this.$t('navbar.dropdown.skills.research') }}</router-link></li>
        <li><router-link to="/Logopedie" @click="selectItemAndCloseBurger('Logopédie')">{{ this.$t('navbar.dropdown.skills.logo') }}</router-link></li>
        <li><router-link to="/Medecins" @click="selectItemAndCloseBurger('Médecins')">{{ this.$t('navbar.dropdown.skills.doctor') }}</router-link></li>
        <li><router-link to="/Psychomotricite" @click="selectItemAndCloseBurger('Psychomotricite')">{{ this.$t('navbar.dropdown.skills.psychomotor') }}</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'CompetencesShow',

        props: ['CloseBurger'],

        data(){
            return{
                displayMenu: false,
                showDropdown: false,
            }
        },

        methods: {
        toggleMenu() {
            this.displayMenu = !this.displayMenu;
        },

        selectItemAndCloseBurger(){
            this.CloseBurger();
        }
    }
    }
</script>
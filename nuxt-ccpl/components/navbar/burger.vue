<template>
    <div class="sidenav" :class="{ 'open': displayMenu }" id="sidenav">
        <button class="OpenMenu" @click="toggleMenu" aria-label="Name">
            <img src="../../public/images/burger-icon.svg" alt="menu mobile">
        </button>
        <div class="menu-container animation-menu " v-if="displayMenu">
            <div class="burger-close-btn">
                <button class="CloseMenu" @click="toggleMenu">
                    <img src="../../public/images/xmark-solid.svg" alt="menu mobile close">
                </button>
            </div>
            <ul>
                    <ProgrammesShow :CloseBurger="CloseBurger"></ProgrammesShow>
                    <CompetencesShow :CloseBurger="CloseBurger"></CompetencesShow>
                    <CollaborationsShow :CloseBurger="CloseBurger"></CollaborationsShow>
                    <DocumentationsShow :CloseBurger="CloseBurger"></DocumentationsShow>
                    
            </ul>
            <ul class="burger-info">
                <li>
                    <a target="_blank" rel="noopener" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA">
                        <img src="../../public/images/location-dot-solid-w.svg" alt="" class="icon-navinfo">
                        {{ $t("banner.adress") }}
                    </a>
                </li>
                <li>
                    <a href="tel: 02 770 04 40">
                        <img src="../../public/images/phone-solid-white.svg" alt="" class="icon-navinfo">
                        +32 2 770 04 40
                    </a>
                </li>
                <li><router-link to="/Contact" @click="goToInfosAndCloseMenu">{{ $t("Navinfo.infos") }}</router-link></li>
            <ul class="burger-languages">
                    <li><button :class="{ 'activelangburger' : $i18n.locale === 'fr' }" @click="$i18n.locale = 'fr'">FR</button></li>
                    <li><button :class="{ 'activelangburger' : $i18n.locale === 'nl' }" @click="$i18n.locale = 'nl'">NL</button></li>
                    <li><button :class="{ 'activelangburger' : $i18n.locale === 'en' }" @click="$i18n.locale = 'en'">EN</button></li>
                    <li><button>LDS</button></li>
            </ul>

            </ul>
        </div>
    </div>
</template>
<script>
    import ProgrammesShow from './Showdropdown/ProgrammesShow.vue'
    import CompetencesShow from './Showdropdown/CompetencesShow.vue'
    import CollaborationsShow from './Showdropdown/CollaborationsShow.vue'
    import DocumentationsShow from './Showdropdown/DocumentationShow.vue'
   

    export default{
        name: 'BurgerNav',

        components: {
            ProgrammesShow,
            CompetencesShow,
            CollaborationsShow,
            DocumentationsShow,
            
        },

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

        CloseBurger(){
            this.displayMenu = false;
        },

        goToInfosAndCloseMenu() {
      
      this.$router.push('/Contact');
      this.CloseBurger();
    }
    }
    }
</script>


<style>

    .burger-languages li button{
    text-transform: uppercase;
    padding: .5rem;
    font-size: 0.88rem;
    background-color: #005387;
    border: inherit;
    color: #ffffff;
    }

    .activelangburger{
        background-color: #ffffff !important;
        color: #005387 !important;
        padding: .5rem;
        border-radius: 3px;
    }
    .burger-languages{
        display: flex !important;
        justify-content: space-evenly !important;
        flex-direction: row !important;
        width: 70%;
        margin: auto;
        margin-top: 2rem;
    }

    .burger-info{
       gap: 20px;
       margin-top: 2rem;
       border-top: 2px solid #ffffff;
       padding: 1rem 0;

    }

    .burger-info li a{
        color: #ffffff;
        text-align: left;

    }

    .burger-info li{
        margin: 0;
    }

    .burger-links{
        color: #ffffff;
        margin: .8rem 0;
        text-transform: uppercase;
        position: relative;
        font-weight: 600;
       
    }

    .sidenav{
        display: none;
    }

    .animation-menu{
        animation-name: animation-menu;
    }

    @keyframes animation-menu{
        0%{
            opacity: 0;
            transform: translateX(80%);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }



    .burger-close-btn{
        position: relative;
        z-index: 99;
    }

    .CloseMenu{
        position: absolute;
        right: 0;
        background-color: #ffffff;
        border: 1px solid #ffffff;
    }

    .menu-container{
        position: fixed;
        background-color: #005387;
        border: 2px solid #ffffff;
        border-radius: 10px;
        padding: 1rem;
        min-height: 300px;
        overflow-x: hidden;
        top: 2rem;
        right: 2rem;
        max-width: 100vw;
        z-index: 99;
        min-width: 500px;
        animation-duration: .6s;
        transition: ease-in-out;
       
    }
    

    
    .menu-container ul{
        display: flex;
        flex-direction: column;
    
    }

    .burger-dropdown-links a{
        color: #ffffff;
        cursor: pointer;
        text-transform: capitalize;
    }

    .burger-dropdown-links li{
        margin: .3rem;
    }

    .burger-links:after{
        content: url('../../public/images/chevron-down-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin-left: .5rem;
        position: absolute;
        top: .1rem;
    }

    @media all and (max-width: 1023px){
        .sidenav{
            display: block;
        }

        .menu-container{
            min-width: 100%;
            border: none;
            border-radius: 0;
            top: 0;
            right: 0;
            max-height: 100vh;
            overflow: auto;
            min-height: 100vh;
            padding: 2rem;
        }
    }
     

    .OpenMenu{
       background-color: #ffffff;
        border: none;
    }

    .OpenMenu img{
        height: 1.5rem;
    }

    .CloseMenu img{
        height: 1rem;
    }



    @media all and (max-width: 600px){

       
        .menu-container{
            min-width: 100%;
            border: none;
            border-radius: 0;
            top: 0;
            right: 0;
            max-height: 100vh;
            overflow: auto;
            min-height: 100vh;
            padding: 1rem;
        }
    }

    
</style>
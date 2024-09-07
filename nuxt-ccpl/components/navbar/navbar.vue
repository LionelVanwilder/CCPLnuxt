<template>
    <nav class="main-nav">
    <div class="navlogo-don">
        <RouterLink to="/"><img src="../../public/images/logotypo.svg" class="logoimgnav" alt="Logo du Centre Comprendre et Parler asbl"></RouterLink>
        <NavButton></NavButton>
        <BurgerNav></BurgerNav>
    </div>
    <div class="nav-links-container">
        <NavLinks></NavLinks>
        
    </div>
    
    
  </nav>
</template>
<script>

    import NavLinks from './nav-links.vue'
    import NavButton from './button.vue'
    import BurgerNav from './burger.vue'

    export default{
        name: 'NavBar',

        components: {
            NavLinks,
            NavButton,
            BurgerNav
        },

        
    }
</script>
<style scoped>

    @media all and (max-width: 1023px){
        .navbuttoncomp{
            display: none;
        }

        .nav-links-ul{
            display: none;
        }
    }

</style>
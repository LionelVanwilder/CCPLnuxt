<template>
    <div id="homebanner-container">
        <h1 class="fade-appear">
        <span class="special-font">{{ $t("banner.centre") }}</span>
        <br>
        Comprendre et parler
        <br>
        <span class="special-font">{{ $t("banner.asbl") }}</span>
        </h1>
    </div>
</template>
<script>
    export default{
        name: 'HomeBanner',
        
    }
</script>
<style>
.home-banner{
    background-image: url('../../public/images/banniere-du-centre-comprendre-et-parler.avif');
    min-height: 65vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
}

@media all and (max-width: 769px){
    .home-banner h1{
        font-size: 2.5rem;
    }
    .home-banner{
        min-height: 40vh;
        background-image: url('../../public/images/banniere-du-centre-comprendre-et-parler-tablet.avif');
    }
}

@media all and (max-width: 600px){
    .home-banner h1{
        font-size: 1.7rem;
    }

    
}

@media all and (max-width: 500px){
    .home-banner{
        
        background-image: url('../../public/images/banniere-du-centre-comprendre-et-parler-mobile.avif');
    }
}
</style>
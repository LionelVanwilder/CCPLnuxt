<template>
    <div id="homebanner-container">
        <img src="../../public/images/banniere-du-centre-comprendre-et-parler.avif" 
             srcset="../../public/images/banniere-du-centre-comprendre-et-parler.avif 1x, 
                     ../../public/images/banniere-du-centre-comprendre-et-parler-tablet.avif 2x"
             sizes="(max-width: 769px) 100vw, 100vw"
             alt="bannière du Centre Comprendre et Parler"
             loading="lazy">
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


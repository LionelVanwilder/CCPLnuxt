<template>
    <div class="aboutus">
        <h2>{{ $t("Aboutus.title") }}</h2>
        <p>{{ $t("Aboutus.intro") }}</p>
        <Router-link to="/Quisommesnous" data-aos="fade-up" data-aos-duration="1000">{{ $t("Aboutus.button") }}</Router-link>
       <video controls width="70%" poster="../../public/images/poster.png">
        <source src="../../public/videos/50ans.mp4">
       </video>
        
    </div>
</template>

<script>
    export default{
        name: 'AboutUs',
    }
</script>
<style scoped>

video{
    margin-top: 2rem;
}

@media screen and (max-width: 769px){
    video{
        width: 100%;
    }
}
</style>
<template>
    <div class="image-text-row patient-section" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
        <div class="image-wrapper">
            <NuxtImg src="/images/patient2.webp" alt="Patient enfant" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="1000" height="708"/>
        </div>
        <div class="content-wrapper">
            <div class="content-wrapper-content patient-content"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                <img src="../../public/images/childnew.svg" alt="icone enfant" class="icon-bloc-flex">
                <h2 v-html="$t('patient.title')"></h2>
                <p>{{ $t('patient.content') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PatientGrid',

    }

    
</script>
<style scoped>
.patient-content p{
    text-align: justify;
}

.content-wrapper{
    position: relative;
}
</style>
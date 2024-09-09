<template>
    <div class="donation-container"  data-aos="fade-up" data-aos-duration="1000">
        <img src="../../public/images/DonationNEW.svg" class="icon-bloc-flex" alt="Don">
        <div class="donation-row">
            <div class="donation-image-wrapper">
                <NuxtImg src="/images/Soutenir-le-centre-comprendre-et-parler.webp" accesskey="" alt="Soutenir le Centre Comprendre et Parler" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width="900" height="604,157"/>
            </div>
            <div class="donation-content-wrapper">
                
                <span v-html="$t('homedonation.title')"></span>
                
                <p>
                    {{ $t("homedonation.content") }}
                </p>
                <router-link to="/Don">{{ $t("homedonation.button") }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'DonationSection',
    }
</script>
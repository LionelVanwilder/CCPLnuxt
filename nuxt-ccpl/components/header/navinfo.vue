<template>
    <nav class="navinfo">
        <ul>
            <li>
                <a target="_blank" rel="noopener" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA">
                        <img src="../../public/images/location-dot-solid-white.svg" alt="icone localisation" class="icon-navinfo">
                        {{ $t("banner.adress") }}
                </a></li>

                <li>
                    <a href="tel:027700440">
                    <img src="../../public/images/phone-solid.svg" alt="icone telephone" class="icon-navinfo">
                    +32 2 770 04 40
                </a></li>

                <li><router-link to="/Contact" id="infosbutton">{{ $t("Navinfo.infos") }}</router-link></li>
        </ul>

        <ul class="langnavinfo">
                <!--<li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"><a>{{ locale }}</a></li>-->
                
                
                    <li><button :class="{ 'activelang': $i18n.locale === 'fr' }" @click="$i18n.locale = 'fr'">FR</button></li>
                    <li><button :class="{ 'activelang': $i18n.locale === 'nl' }" @click="$i18n.locale = 'nl'">NL</button></li>
                    <li><button  :class="{ 'activelang': $i18n.locale === 'en' }" @click="$i18n.locale = 'en'">EN</button></li>
                    <li><button>Lsfb</button></li>
                    <!--<a href="#" id="signbtn"><img src="../../../../icons/hands-asl-interpreting-solid.svg"></a>-->
                </ul>
    </nav>
</template>
<script>
 export default{
        name: 'NavInfo'
    }
</script>
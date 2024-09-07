<template>
    <div class="programmes-container">
      <div class="programmes-nav">
        <ul>
          <li><NuxtLink to="/Education">{{ $t("navbar.dropdown.program.education") }}</NuxtLink></li>
          <li><NuxtLink to="/Specialisation">{{ $t("navbar.dropdown.program.spec") }}</NuxtLink></li>
          <li><NuxtLink to="/Integration">{{ $t("navbar.dropdown.program.integration") }}</NuxtLink></li>
          <li><NuxtLink to="/Services">{{ $t("navbar.dropdown.program.services") }}</NuxtLink></li>
          <li><NuxtLink to="/Formations">{{ $t("navbar.dropdown.program.formations") }}</NuxtLink></li>
          <li><NuxtLink to="/Depistage">{{ $t("navbar.dropdown.program.screening") }}</NuxtLink></li>
        </ul>
      </div>
      <div class="programmes-text">
        <h2>{{ $t('program.heading') }}</h2>
        <h3>{{ $t('program.subheading') }}</h3>
        <p>{{ $t('program.content1') }}</p>
        <p>{{ $t('program.content2') }}</p>
        <p>{{ $t('program.content3') }}</p>
        <h3>{{ $t('program.subtitle1') }}</h3>
        <p>{{ $t('program.content4') }}</p>
      </div>
    </div>
  </template>
<script>
    export default{
        name: 'ProgrammesPage',


    }
</script>
<style scoped>

</style>
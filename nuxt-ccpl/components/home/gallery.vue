<template>
    <div class="gallery-container">
        <div class="gallery-grid"  >
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/gallery1.webp" alt="enfants" loading="lazy">
            </div>
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/batiment-centre-comprendre-et-parler.webp" alt="Batiment du centre comprendre et parler" loading="lazy">
            </div>
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/gallery3.webp" alt="enfant qui joue" loading="lazy">
            </div>
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/Dr-Olivier-Perier.webp" alt="Dr Olivier Périer" loading="lazy">
            </div>
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/gallery5.webp" alt="dessin enfant" loading="lazy">
            </div>
            <div class="image-gallery-container" data-aos="fade-up"
            data-aos-duration="1000">
                <img src="../../public/images/equipe-du-centre-comprendre-et-parler.webp" alt="equipe du Centre Comprendre et parler" loading="lazy">
            </div>
            
        </div>
    </div>
</template>
<script>
export default{
    name: 'Gallery'
}
</script>

<style scoped>

.gallery-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
}

.gallery-grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 70%;
    grid-gap: 2rem;
}

.image-gallery-container{
    width: 100%;
    overflow: hidden;
}

.image-gallery-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
}

.image-gallery-container:hover img{
    transform: scale(1.2);
}

h2{
    font-size: 2.5rem;
    color: #444444;
    margin-bottom: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    font-style: normal;
}

@media screen and (max-width: 1025px){
    .gallery-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 70%;
    grid-gap: 1rem;
}
}

@media screen and (max-width: 600px){
    .gallery-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 75%;
    grid-gap: 1rem;
}
}

@media screen and (max-width: 476px){
    .gallery-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 85%;
    grid-gap: 0.8rem;
}
}
</style>
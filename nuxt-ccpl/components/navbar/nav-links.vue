<template>
    <ul class="nav-links-ul">
        <li v-for="(item, index) in dropdowns" :key="index" class="nav-links-ul-li">
            <router-link :to="item.path" @click="toggle(index)" class="nav-hover" :class="['nav-hover', { 'active': activeDropdown === index }]">{{ item.title }}</router-link>
            <ul class="dropdown fadein" v-if="activeDropdown === index"  @click="toggle(index)">
                <li v-for="(link, linkIndex) in item.links" :key="linkIndex"><router-link :to="link.url">{{ link.label }} </router-link></li>
            </ul>
        </li><br>
    </ul>
</template>
<script>
    export default{

        name: "NavLinks",

        computed: {
            dropdowns(){

                return[
                { 
                    title: this.$t('navbar.links.program'), 
                    path: '',
                    
                    links: [
                        {label: this.$t('navbar.dropdown.program.education'), url: '/Education'},
                        {label: this.$t('navbar.dropdown.program.spec'), url: '/Specialisation'},
                        /*{label: this.$t('navbar.dropdown.program.ord'), url: '/Programmes/Specialisation'},
                        {label: this.$t('navbar.dropdown.program.spec2'), url: '/Programmes/Specialisation'},
                        {label: this.$t('navbar.dropdown.program.sup'), url: '/Programmes/Specialisation'},*/
                        {label: this.$t('navbar.dropdown.program.integration'), url: '/Integration'},
                        /*{label: this.$t('navbar.dropdown.program.implants'), url: '/Programmes/ImplantsCochleaires'},*/
                        /*{label: this.$t('navbar.dropdown.program.services'), url: '/Services'},*/
                        {label: this.$t('navbar.dropdown.program.formations'), url: '/Formations'},
                        /*{label: this.$t('navbar.dropdown.program.screening'), url: '/Depistage'},*/
                    ] 
                },

                { 
                    title: this.$t('navbar.links.skills'),
                    path: '', 
                    
                    links: [
                        {label: this.$t('navbar.dropdown.skills.acc'), url: '/Accompagnements'},
                        {label: this.$t('navbar.dropdown.skills.assistance'), url: '/AssistancesSociales'},
                        {label: this.$t('navbar.dropdown.skills.audio'), url: '/Audiologie'},
                        {label: this.$t('navbar.dropdown.skills.research'), url: '/Recherches'},
                        
                        {label: this.$t('navbar.dropdown.skills.logo'), url: '/Logopedie'},
                        {label: this.$t('navbar.dropdown.skills.doctor'), url: '/Medecins'},
                        
                        {label: this.$t('navbar.dropdown.skills.psychomotor'), url: '/Psychomotricite'},
                       
                    ] 
                },

                { 
                    title: this.$t('navbar.links.collab'), 
                    path: '',
                    
                    links: [
                        {label: this.$t('navbar.dropdown.collab.partner'), url: '/Collaborations/Partenaires'},
                        {label: this.$t('navbar.dropdown.collab.other'), url: '/Collaborations/Autrescollaborations'},
                        {label: this.$t('navbar.dropdown.collab.influence'), url: '/Collaborations/Rayonnement'}
                    ] 
                },

                { 
                    title: this.$t('navbar.links.doc'), 
                    path: '',
                    
                    links: [
                        {label:  this.$t('navbar.dropdown.doc.deafness'), url: '/SAFP/Surdite'},
                        /*{label: this.$t('navbar.dropdown.doc.post'), url: 'Instagram.com'},
                        {label: this.$t('navbar.dropdown.doc.link'), url: '/'}*/
                    ] 
                },

                /*{ 
                    title: this.$t('navbar.links.activity'),
                    path: '', 
                    
                    links: [
                        {label: this.$t('navbar.dropdown.activity.sign'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.speech'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.lang'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.vac'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.other'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.job'), url: '/'}
                    ] 
                }*/
                ]
            }


        },

       

    data(){
        return{
            activeDropdown: -1
        }
    },

    methods: {
        toggle(index){
            this.activeDropdown = this.activeDropdown === index ? -1 : index;
        }
    }
}

    
</script>
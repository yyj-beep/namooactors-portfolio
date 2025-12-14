<template>
    <v-app-bar
        app fixed flat
        :class="appBarClass"
        class="header justify-center">

        <!--=============
        로고 삽입
        ================-->
        <v-toolbar-title>
            <RouterLink to="/namooActors">
            <div class="top-logo"></div>
            </RouterLink>
        </v-toolbar-title>

        <v-spacer/>

        <!--=============
        데스크탑 (md 이상)
        ================-->
        <div class="header-menu d-none d-md-inline-flex justify-center">
            <v-btn to="/company" variant="text"
            class="menu-btn" :ripple="false"
            :class="{'active-tab' : $route.path === '/company'}"
            >company</v-btn>

            <v-btn to="/artist" variant="text"
            class="menu-btn" :ripple="false"
            :class="{'active-tab' : $route.path === '/artist'}"
            >artist</v-btn>

            <v-btn to="/news" variant="text"
            class="menu-btn" :ripple="false"
            :class="{'active-tab' : $route.path === '/news'}"
            >community</v-btn>

            <v-btn to="/audition" variant="text"
            class="menu-btn" :ripple="false"
            :class="{'active-tab' : $route.path === '/audition'}"
            >audition</v-btn>
            
        </div>


        <!--=============
        모바일 버튼 (md 이하)
        ================-->
        <v-btn icon class="d-md-none d-flex align-center mr-6"
            @click="drawer = !drawer" :ripple="false"
            ><v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </v-btn>
    </v-app-bar>


    <!--=============
    모바일 메뉴
    ================-->
    <v-navigation-drawer
        class="menu-mobile d-flex d-md-none flex-column"
        v-if="drawer"
        v-model="drawer"
        temporary right>
        <div class="menu-mobile-max d-flex flex-column justify-space-between">

            <v-list>

                <v-list-group
                    v-model="company"
                    append-icon=" ">

                    <template #activator="{props}">
                        <v-list-item v-bind="props"
                        :class="{ 'active-drawer-item': companyActive }">
                        <v-list-item-title class="menu-text">company</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="d-flex flex-column">
                    <v-list-item density="compact" @click="navigate('/company')">
                    <v-list-item-title class="menu-subtext">introduction</v-list-item-title>
                    </v-list-item>

                    <v-list-item density="compact" @click="navigate('/history')">
                    <v-list-item-title class="menu-subtext">history</v-list-item-title>
                    </v-list-item>
                    </div>

                </v-list-group>

                
                <v-list-item
                @click="navigate('/artist')"
                :class="{ 'active-drawer-item': artistActive }">
                <v-list-item-title class="menu-text">artist</v-list-item-title>
                </v-list-item>


                <v-list-group
                    v-model="community" prepend-icon=""
                    append-icon=" ">

                    <template #activator="{props}">
                        <v-list-item v-bind="props"
                        :class="{ 'active-drawer-item': communityActive }">
                        <v-list-item-title class="menu-text">community</v-list-item-title>
                        </v-list-item>
                    </template>
                    <div class="d-flex flex-column">
                    <v-list-item density="compact" @click="navigate('/news')">
                    <v-list-item-title class="menu-subtext">news</v-list-item-title>
                    </v-list-item>

                    <v-list-item density="compact" @click="navigate('/notice')">
                    <v-list-item-title class="menu-subtext">notice</v-list-item-title>
                    </v-list-item>
                    </div>

                </v-list-group>


                <v-list-group
                    v-model="audition" prepend-icon=""
                    append-icon=" ">

                    <template #activator="{props}">
                        <v-list-item v-bind="props"
                        :class="{ 'active-drawer-item': auditionActive }">
                        <v-list-item-title class="menu-text">audition</v-list-item-title>
                        </v-list-item>
                    </template>

                    <div class="menu-wrapper d-flex flex-column">
                    <v-list-item density="compact" @click="navigate('/audition')">
                    <v-list-item-title class="menu-subtext">audition</v-list-item-title>
                    </v-list-item>

                    <v-list-item density="compact" @click="navigate('/FAQ')">
                    <v-list-item-title class="menu-subtext">FAQ</v-list-item-title>
                    </v-list-item>
                    </div>

                </v-list-group>

            </v-list>


            <!--=============
            SNS 아이콘
            ================-->
            <div class="drawer-footer">
                <v-btn class="elevation-0"
                icon target="_blank" aria-label="twitter">
                <v-icon>mdi-twitter</v-icon>
                </v-btn>

                <v-btn class="elevation-0"
                icon target="_blank" aria-label="instagram">
                <v-icon>mdi-instagram</v-icon>
                </v-btn>

                <v-btn class="elevation-0"
                icon target="_blank" aria-label="youtube">
                <v-icon>mdi-youtube</v-icon>
                </v-btn>

                <v-btn class="elevation-0"
                icon target="_blank" aria-label="blog">
                <v-icon>mdi-web</v-icon>
                </v-btn>
            </div>

        </div>

    </v-navigation-drawer> 

</template>














<script setup>
import {ref, computed, onMounted, onBeforeUnmount, nextTick} from 'vue'
import {useRouter, useRoute} from 'vue-router'

// const isOpaque = ref(false)
const isScrolled = ref(false)
const hideHeader = ref(false)
const drawer=ref(false)

const community = ref(false)
const company = ref(false)
const audition = ref(false)

const router = useRouter()
const route = useRoute()

let lastScrollY = 0

const navigate = (path) => {
    router.push(path)
    drawer.value = false
}




const handleScroll = () => {
    const scrollY = window.scrollY
    isScrolled.value = scrollY > 0

    const delta = scrollY - lastScrollY

if (scrollY > lastScrollY && scrollY > 100) {
  hideHeader.value = true
}else{hideHeader.value = false
}

  lastScrollY = scrollY
}

onMounted(async () => {
  await nextTick()
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const appBarClass = computed(() => [
  isScrolled.value ? 'nav-border' : '',
  hideHeader.value ? 'hide-header' : '',
])

const auditionActive=computed(()=>['/audition','/FAQ'].includes(route.path))
const communityActive=computed(()=>['/news','/notice'].includes(route.path))
const companyActive=computed(()=>['/company','/history'].includes(route.path))
const artistActive=computed(()=>['/artist'].includes(route.path))



</script>
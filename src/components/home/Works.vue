<template>
<v-container fluid class="grid12 m85">
    <v-row class="mt80">
        
        <v-col cols="12" class="d-flex align-center justify-space-between m30">
        <h1 class="title72">Works.</h1>
        <v-btn
            to="/news" class="btn16 op100"
            :ripple="false"
            elevation="0"
            variant="plain">
            <p class="view-btn">view more →</p>
        </v-btn>
        </v-col>

        <v-col cols="12" class="work-slide mb-4">

            <div class="work-wrap">
            <swiper
                class="work-group"
                :modules="[Autoplay]"
                :slides-per-view="1"
                :autoplay="{ delay: 5000 }"
                @slideChange="onSlideChange"
                loop
                >
                
                <swiper-slide v-for="item in artworks" :key="item.id">

                    <v-img
                    class="work-img"
                    :src="item.img" 
                    alt="이달 개봉하거나 배우가 참여/활동하게 된 작품 내역입니다."
                    cover/> 
                    
                </swiper-slide>
            </swiper>

            <v-card class="work-text elevation-0 d-flex flex-column">

                <div class="work-title d-flex flex-column">
                <h2 class="stitle36-1">{{ activeWork.title }} </h2>
                <div class="d-flex body16"><p>{{ activeWork.actor.join(' ') }}</p></div>
                </div>

                <p class="date d-none d-md-block">{{ activeWork.date }}</p>
                
            </v-card>
            </div>
        </v-col>
    </v-row>

    <v-row class="work-content">
        
        <v-col
            class="work-pa-0"
            cols="12" md="4"
            v-for="(item,i) in newsData" :key="i"
            @click="goToLink(item.link)">

            <div class="content-border px-3">
            <v-card class="content-news">

                <h2 class="content-title stitle24">{{item.title}}</h2>
                <p class="content-main">{{item.content}}</p>
                
                <div class="content-subtitle d-flex justify-space-between align-center">
                <p class="date">{{item.date}}</p>
                <v-icon class="content-btn">mdi-arrow-right</v-icon>
                </div>

            </v-card>
            </div>
        </v-col>

    </v-row>
</v-container>
</template>




<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { artworkList } from "@/data/artworkList.js";
import newsList from "@/data/newsList.js";
import "swiper/css";
import "swiper/css/autoplay";

const modules=[Autoplay]



/*=====================
슬라이드 데이터 구성
======================*/
const imageMap = import.meta.glob(
    '@/assets/img/artworks/*.{jpg,png}', {
    eager: true,
    import: 'default',
})

const artworks = artworkList.map(item => ({
  ...item,
  img: imageMap[`/src/assets/img/artworks/${item.poster}`] || '',
}))
const activeIndex = ref(0);
const activeWork = computed(() => artworks[activeIndex.value])

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex ?? swiper.activeIndex;
}



/*=====================
뉴스 데이터 구성
======================*/
const newsData = computed(() => newsList.slice(0, 3))

function goToLink(url) {
  if (url) window.open(url, "_blank")
}

</script>
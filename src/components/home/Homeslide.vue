<template>

    <div class="home-slide">
        <div class="grid12 white d-flex align-center justify-space-between mt100 px-6 m30">
            
            <h1 class="title72">Artist.</h1>
            <v-btn
                to="/artist" class="btn16 op100"
                :ripple="false"
                elevation="0"
                variant="plain">
                <p class="view-btn">view more →</p>
            </v-btn>

        </div>

        <div class="slide-text">
        <div class="slide-text-group">
            <span>namoo actors</span>
            <span>namoo actors</span>
            <span>namoo actors</span>
            <span>namoo actors</span>
        </div>
        </div>

        <swiper
            class="slide-group"
            :modules="modules"
            :slides-per-view="'auto'"
            :space-between="20"
            :autoplay="{delay:8000}"
            :grabCursor="true"
            >

            <swiper-slide
                class="slide-content bottom-title"
                v-for="artist in artists"
                :key="artist.id"
                @click="goToDetail(artist.id)">

                <v-img
                    class="slide-img"
                    :src="artist.url"
                    alt="클릭 시 해당 아티스트의 페이지로 이동합니다."
                    cover
                />

            </swiper-slide>
        </swiper>

  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import { artistList } from '@/data/artistList'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const modules=[Autoplay]

const imageMap = import.meta.glob('@/assets/img/actors/profile/*.{jpg,png}',{
    eager:true,
    import:'default',
})

const artists = artistList.map(artist => ({
    ...artist,
    url: imageMap[`/src/assets/img/actors/profile/${artist.url}`],
}))

const router = useRouter()
function goToDetail(id){
    router.push(`/artist/${id}`)
}
</script>
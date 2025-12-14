<template>
    <v-container fluid>
        <v-row class="filmo grid15 align-start m85">
            <v-col cols="12" sm="6" class="d-flex justify-center">

                <div class="filmo-list">                    

                    <div
                    v-for="archive in archives"
                    :key="archive.key"
                    @click="toggle(archive.key)">
                    
                        <div class="filmo-tap-title d-flex justify-space-between align-center">
                        <h4 class="title24">{{ archive.label }}</h4>
                        <v-icon>{{ openKey === archive.key ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </div>

                        <v-expand-transition class="filmo-tap-content">
                            <div v-if="openKey === archive.key">
                                
                                <div class="filmo-content-wrapper d-flex flex-column mt-6">
                                <div class="filmo-content-year d-flex"
                                    v-for="(item, i) in archive.list"
                                    :key="i">

                                    <p class="body16">{{ item.year }}</p>

                                    <div class="d-flex flex-column ga-1">
                                        <p v-for="(text, a) in item.content"
                                        :key="a"
                                        class="body14"
                                        >{{ text }}</p>
                                    </div>

                                </div>
                                </div>

                            </div>
                        </v-expand-transition>
                    </div>

                </div>
            </v-col>

            <!--==================
            프로필 항목
            ===================-->
            <v-col sm="6" class="d-none d-sm-flex">

                
                <v-carousel
                    v-if="profile.length"
                    hide-delimiters
                    interval="5000"
                    class="filmo-slide"
                    :show-arrows="false"
                    cycle>

                    <v-carousel-item
                        v-for="(img, index) in profile"
                        :key="index"
                        class="slide-img">

                        <v-img
                        class="slide-img"
                        :src="img" cover
                        alt="배우의 기본 프로필 사진이 슬라이드 방식으로 게시됩니다."
                        />
                    </v-carousel-item>

                </v-carousel>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import {ref, computed} from 'vue'
import { artistList } from '@/data/artistList.js'


/* ===================
캐러셀 슬라이드 항목
===================== */
const props = defineProps({
    artistId:{
        type:String,
        required:true
    }
})

const imageMap = import.meta.glob('../../assets/img/actors/**/slide/*.{jpg,png}',{
    eager:true,
    import:'default'
})

const artist = computed(() => artistList.find(a => a.id === props.artistId))
const archives = computed(() =>
artist.value?.archive || [])
const profile = computed(() => {
    if (!artist.value || !artist.value.slideImages) return[]
    return artist.value.slideImages
        .map(filename => imageMap[`../../assets/img/actors/${artist.value.id}/slide/${filename.trim()}`])
        .filter(Boolean)
})


/* ===================
작품 내역 여닫기
===================== */
const openKey = ref(null)
function toggle(key){
    openKey.value = openKey.value === key ? null : key
}

</script>
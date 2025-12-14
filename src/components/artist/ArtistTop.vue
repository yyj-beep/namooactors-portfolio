<template>
<v-container fluid class="pa-0 ma-0">
    <v-row class="actors-top grid12 d-flex justify-space-between" dense>
        <v-col class=" actors-info pa-0 d-flex align-start justify-start">
            <v-col cols="12" sm="6" class="pa-0 ma-0">
                <v-img
                    v-if="artist?.url"
                    class="actors-img"
                    :src="artist.url"
                    cover>
                </v-img>
            </v-col>

            <v-col cols="12" sm="6" class="pa-0 ma-0 w-100">
            <v-card class="actors-profile w-100">
                <v-card-title class="actors-title m150">
                <h2 class="title72" v-html="artist.nameEng"></h2>
                </v-card-title>

                <v-card-subtitle class="actors-subtitle date20 d-flex align-center">
                    <p class="d-none d-sm-flex">{{ artist.nameKr }}</p>
                    <p class="actors-line d-none d-sm-flex"></p>
                    <p>{{artist.date}}</p>
                </v-card-subtitle>

                <div class="top-line ml-3 d-none d-sm-flex"></div>

                <v-card-text class="d-none d-sm-flex w-100">

                    <p class="body16 actors-list">수상</p>
                    <div class="actors-col-gap d-flex flex-column w-100">

                        <p
                            v-for="(award,index) in artist.awards"
                            :key="index"
                            class="body14"
                            >{{award}}
                        </p>

                    </div>

                </v-card-text>
            </v-card>
            </v-col>
        </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import { computed } from 'vue'
import { artistList } from '@/data/artistList.js'

const imageMap = import.meta.glob('../../assets/img/actors/profile/*.{jpg,png}', { eager: true })

const artists = artistList.map(artist => ({
  ...artist,
  url: imageMap[`../../assets/img/actors/profile/${artist.url}`]?.default || ''
}))

const props = defineProps({
    artistId: {
        type: String,
        required: true
    }
})

const artist = computed(() => artists.find(a => a.id === props.artistId))

</script>
<template>

<v-container fluid>

    <!--====================
    이미지 버튼
    =====================-->
    <v-row class="tab-gallery d-flex justify-center m85">
      <v-col cols="12" class="grid12 bottom-button">
        <div class="top-line ml-3"></div>
        <h1 class="title72">Photo.</h1>

        <div class="tab-btn-group">
          <v-btn
            v-for="item in gallery"
            :key="item.key"
            @click="tab = item.key"
            class="top-btn"
            :class="{'active-btn' : tab === item.key}"
            
            >{{ item.key }}
          </v-btn>
        </div>

      </v-col>

      <!--====================
      tab 본문
      =====================-->
      <v-col cols="12" class="grid15">
        <v-window
          v-model="tab"
          transition="slide-x-transition"
          continuous
          hide-delimiter>

          <v-window-item
            v-for="item in gallery"
            :key="item.key"
            :value="item.key"
            class="actors-tab-content"
            ><v-row>
              <v-col cols="6" sm="4"
                v-for="(img,index) in item.image"
                :key="index">
                
                <v-img
                v-if="img"
                :src="img" cover
                class="actors-tab-content-outline"
                alt="배우가 노출된 포스터를 각 탭의 종류에 따라 게시합니다."
                lazy-src
                />

              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
        </v-col>
    </v-row>
</v-container>

    
</template>






<script setup>
import { ref, computed, watch } from 'vue'
import { artistList } from '@/data/artistList.js'

const imageMap = import.meta.glob('../../assets/img/actors/**/*.{jpg,png}', {
  eager: true,
  import: 'default'
})

const mapImagePaths = (paths = []) =>
  paths
    .map(path => imageMap[`../../assets/img/actors/${path}`] || '')
    .filter(Boolean)

const artists = artistList.map(artist => ({
  ...artist,
  gallery: (artist.gallery || []).map(item => ({
    ...item,
    image: mapImagePaths(item.image)
  }))
}))

const props = defineProps({
  artistId:{
    type:String,
    required:true
  }
})

const artist = computed(() => artists.find(a => a.id === props.artistId))
const gallery = computed(() => artist.value?.gallery || [])

const tab = ref('')
watch(gallery, newGallery => {
  if (newGallery.length > 0){
    tab.value = newGallery[0].key
  }
})


</script>
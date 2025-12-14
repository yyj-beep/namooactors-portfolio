<template>
<v-container fluid class="faq">

  <v-row class="grid12 bottom-title">
    <v-col cols="12"><h1 class="title72 top-title">Audition.</h1></v-col>
    <v-col cols="12" class="align-bottom py-0">
      
      <!-- ================
      카테고리 탭
      ================== -->
      <v-btn to="/audition" class="top-btn"
        :class="$route.path.startsWith('/audition') ? 'active-btn' : ''"
        >Infromation
      </v-btn>
      
      <v-btn to="/FAQ" class="top-btn"
        :class="$route.path.startsWith('/FAQ') ? 'active-btn' : ''"
        >FAQ
      </v-btn>
    </v-col>
  </v-row>

  <v-row class="grid12 m85">

    <!-- ================
    서브 타이틀
    ================== -->
    <v-col cols="12">
      <div class="top-line"></div>
      <h2 class="stitle36-1 m100">오디션 지원자들이 자주 하는 질문입니다.</h2>
    </v-col>

    <v-col cols="12">
      <div class="faq-list">

        <!-- 질문 -->
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          @click="toggle(i)">

          <div class="faq-Q d-flex justify-space-between align-center ga-1">

            <div class="faq-Q-left d-flex body16">
              <v-icon>mdi-help-circle-outline</v-icon>
              <p>{{ faq.question }}</p>
            </div>

            <v-icon>{{ openIndex === i ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>

          </div>

          <v-expand-transition>
            <div v-if="openIndex === i">
              <div class="faq-A-wrapper">
              <p class="body16" v-html="faq.answer"></p>
              </div>
            </div>
          </v-expand-transition>
        
        </div>
      </div>
    </v-col>
  </v-row>
</v-container>

</template>

<script setup>
import {ref} from 'vue'
import faqList from '@/data/faqList.js'

const faqs = faqList

const openIndex=ref(null)
function toggle(index){
  openIndex.value = openIndex.value === index ? null : index
}
</script>
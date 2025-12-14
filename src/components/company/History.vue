<template>
  <v-container fluid>
    <v-row class="grid12 bottom-title">
      <v-col cols="12"><h1 class="title72 top-title">History.</h1></v-col>

      <v-col cols="12" class="align-bottom py-0">
        <!-- ================
        세부 카테고리 스위치
        ================== -->
        <div>
        <v-btn to="/company" class="top-btn"
        :class="$route.path.startsWith('/history') ? 'active-btn' : ''"
          >company
        </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row class="grid12 m70">

      <!-- ================
      서브 타이틀
      ================== -->
      <v-col cols="12">
      <div class="top-line"></div>
      <h2 class="stitle36-1 m100">Since 2004,</h2>
      </v-col>


      <!-- ================
      연혁
      ================== -->
      <v-col cols="12" class="timeline">

        <v-timeline
          truncate-line="both"
          class="timeline-content"
          align="start" side="end">

          <v-timeline-item
            class="timeline-group"
            dot-color="white"
            v-for="item in history"
            :key="item.time">
          
            <template #opposite>
              <div class="timeline-time f92"
              >{{ item.time }}</div>
            </template>
            
            <v-card class="d-flex flex-column timeline-card">

              <v-card-text class="body16 pa-0"
              v-for="event in item.events" :key="event"
              >{{ event }}</v-card-text>

            </v-card>

          </v-timeline-item>
        </v-timeline>
      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
import {history} from '@/data/historyData.js'
</script>

<style>
.v-timeline-divider__dot {
  width:clamp(20px,3vw,31px) !important;
  height:clamp(20px,3vw,31px) !important;
  background:white !important;
  border:3px solid #e9e9e9;
}
</style>
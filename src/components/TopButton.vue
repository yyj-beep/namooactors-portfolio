<template>
    <v-btn icon
    v-if="showScrollBtn"
    @click="scrollToTop"
    variant="text"
    :style="`--bottom-offset: ${scrollBottomOffset}px`"
    class="scroll-top d-flex justify-center align-center">
    <div class="d-flex flex-column align-center">
        <v-icon>mdi-chevron-up</v-icon>
        <p class="date">TOP</p>
    </div>
    </v-btn>
</template>






<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollBtn = ref(false)
const scrollBottomOffset = ref(60)

const handleScroll = () => {
  showScrollBtn.value = window.scrollY > 10

const footer = document.querySelector('footer')
  if (!footer) return

  const footerRect = footer.getBoundingClientRect()
  const windowHeight = window.innerHeight

  if (footerRect.top < windowHeight) {
    const overlap = windowHeight - footerRect.top
    scrollBottomOffset.value = -60 + overlap
  } else {
    scrollBottomOffset.value = 60
  }
}


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
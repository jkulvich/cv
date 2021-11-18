<template>
  In Dev
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  mounted () {
    this.hideSitePreloader()
    // LoadingBar.start()
    // LoadingBar.stop()
    // Notify.create({
    //   message: 'Приложение обновлено',
    //   caption: 'Обновите страницу, чтобы увидеть изменения',
    //   icon: 'mdi-alert-decagram'
    // })
  },

  methods: {
    hideSitePreloader () {
      const sitePreloader = document.querySelector('.site-preloader') as HTMLDivElement
      const anim = sitePreloader.animate([
        { filter: 'opacity(1)' },
        { filter: 'opacity(0)' }
      ], {
        delay: 500,
        duration: 300
      })
      anim.onfinish = () => {
        sitePreloader.style.visibility = 'hidden'
      }
    }
  }
})
</script>

<style lang="scss">
@import "~reset.css";
</style>

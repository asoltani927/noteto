<script setup lang="ts">
import SidebarDefault from '@/components/layouts/SidebarDefault.vue';
import { RouterView } from 'vue-router'
import { useRtlDirection } from '@/composable/useTemplate'

// for change direction of template
useRtlDirection()

</script>
<template>
  <div id="wrapper" class="wrapper">

    <SidebarDefault/>
    <div class="content-page">

      <div class="container-fluid ">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

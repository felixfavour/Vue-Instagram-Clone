<template>
  <div class="activity-modal-ctn drop-modal">
    <div class="bg-layer" @click="$emit('close')"/>
    <div class="triangle-pointer"/>
    <div class="tp-cover" />
    <div class="inner">
      <div class="day">
        New
      </div>
      <ActivityItem v-for="activity in 3" :key="activity" :even="activity % 2  === 0" />
      <div class="day">
        Today
      </div>
      <ActivityItem v-for="activity in 5" :key="activity" :even="activity % 2  === 0" />
      <div class="day">
        This Week
      </div>
      <ActivityItem v-for="activity in 20" :key="activity" :even="activity % 2  === 0" />
    </div>
  </div>
</template>

<script>
import ActivityItem from './ActivityItem.vue'
export default {
  name: 'ActivityModal',
  components: { ActivityItem }
}
</script>

<style scoped>
  .activity-modal-ctn {
    height: 360px;
    width: 500px;
    background: #FFFFFF;
    border-radius: 4px;
    position: absolute;
    top: 33px;
    right: -50px;
    color: #000000;
  }
  .triangle-pointer {
    content: '';
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    box-shadow: 0 0 5px 3px rgb(0 0 0 / 10%);
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    right: 52px;
    z-index: -1;
  }
  .day {
    border-top: 1px solid var(--border-color);
    padding: 8px;
    padding-bottom: 0;
    font-size: 0.875rem;
    font-weight: 600;
  }
  .day:nth-child(1) {
    border-top: 0;
  }
  .inner {
    height: 100%;
    overflow-y: auto;
    position: absolute;
    inset: 0;
  }
</style>
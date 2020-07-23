<template>
  <div>
   <app-server-status v-for="(server) in 5" :key="server"></app-server-status>
  </div>
</template>

<script>

import ServerStatus from "./ServerStatus.vue";

export default {
    //ici j'utilise un statement , mais localement
  components: {
    "app-server-status": ServerStatus
  }
};
</script>

<style></style>

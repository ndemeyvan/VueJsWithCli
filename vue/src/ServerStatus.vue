<template>


  <div>
        <p>Serve status: {{ status }}</p>
        <button @click="changeStatus">Change serve status</button>
  </div>


</template>






<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
        this.status = " Normal";
    }
  }
};
</script>




<style>

</style>

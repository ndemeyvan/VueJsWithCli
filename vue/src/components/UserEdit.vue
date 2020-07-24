<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js';

export default {
    props: {
        userAge:{
            type:Number,
            required:true,
        },
    },
   data() {
       return {
           
       }
   },
   methods: {

       editAge:function(){
            this.userAge=30;
            // this.$emit("ageIsReset", this.userAge);
            // eventBus.$emit("ageIsReset", this.userAge);
            eventBus.$emit(this.userAge);
       },
       
   },

};
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

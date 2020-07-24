<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>

    <button @click="changeInChildComponent()">
      Change my name
    </button>

    <p>{{ name }}</p>
    <p>{{ age }}</p>

    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          v-on:nameIsReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
          @ageIsReset="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      name: "Yvana",
      age: 27
    };
  },
  components: {
    "app-user-detail": UserDetail,
    "app-user-edit": UserEdit
  },
  methods: {
    changeInChildComponent: function() {
      this.name = "Micheal Nde";
    },
    resetName: function() {
      this.name = "Reseted";
    }
  },

  created: function() {
    eventBus.$on("ageIsReset", age => {
      console.log("ok");
      this.age = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>

<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>
      User Name is :
      {{
        // swithCaracter()
        myName
      }}
    </p>

    <p>
      User Age is :
      {{
        // swithCaracter()
        userAge
      }}
    </p>
    <button @click="resetName()">Change the name</button>
    <button @click="resetFn()">Reset the name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {};
  },
  props: {
    myName: {
      type: String,
      required: true
    },
    resetFn: Function,
    userAge: {
      type: Number,
      required: true
    }
  },
  methods: {
    swithCaracter: function() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName: function() {
      this.myName = "Max";
      this.$emit("nameIsReset", this.myName);
    }
  },
  created: function() {
    eventBus.$on("ageIsReset", age => {
      console.log("ok");
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

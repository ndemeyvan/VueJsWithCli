<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name is : {{  
        // swithCaracter()
        myName
         }}</p>
    <button @click="resetName">Reset the name</button>
  </div>
</template>

<script>
export default {
    props: {
        myName:{
            type:String,
            required:true,
        }
    },
    methods: {

        swithCaracter:function(){
                return this.myName.split('').reverse().join("");
        },
        resetName:function() {

            this.myName = "Max";
            this.$emit('nameIsReset',this.myName);
            
        }
        
    },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item) in 5" :key="item">
                Server #{{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>

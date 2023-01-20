<template>
  <div class="home">
    club detail
    <li v-for="i in 10" :key="i">test{{ i }}</li>
  </div>
</template>

<script>
export default {
  name: "ClubDetail",
};
</script>

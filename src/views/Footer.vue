<template>
  <q-footer
    class="footer row wrap justify-center items-start content-start q-py-sm bg-color-red-v1"
  >
    <div class="text-grey-2" style="font-size: 15px">
      © Copyright 2023. Wiki Football Club All rights reseved
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "FooterLayout",
};
</script>

<style>
.footer {
  position: absolute;
  font-size: 12px;
  padding: 8px;
  bottom: 0;
  width: 100%;
  border-top: 0.1px solid black;
}
</style>

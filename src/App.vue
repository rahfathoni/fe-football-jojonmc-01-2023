<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderLayout />
    <q-page-container>
      <router-view class="bg-white q-mx-xl" />
    </q-page-container>
    <FooterLayout />

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="q-pb-sm">
          <div class="text-h6">Announcement</div>
        </q-card-section>

        <q-card-section class="q-pt-none color-red-v1">
          Access to XMLHttpRequest at 'http://api.football-data.org/v4/areas/'
          from origin 'http://localhost:8080' has been blocked by CORS policy:
          Response to preflight request doesn't pass access control check: No
          'Access-Control-Allow-Origin' header is present on the requested
          resource.
        </q-card-section>
        <q-card-section class="q-pt-none q-pb-lg">
          Because I always getting this error when I try access the services
          from API <i>http://api.football-data.org</i>, I create my own
          <b> LIMITED DUMMY DATA </b> with data mostly based on that API.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";

export default {
  name: "LayoutDefault",
  components: {
    HeaderLayout: defineAsyncComponent(() => import("./views/Header")),
    FooterLayout: defineAsyncComponent(() => import("./views/Footer")),
  },
  setup() {
    return {
      alert: ref(true),
    };
  },
};
</script>

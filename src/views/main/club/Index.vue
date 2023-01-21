<template>
  <div class="q-pt-md q-pb-lg">
    <div class="text-weight-bold text-uppercase" style="font-size: 30px">
      <q-breadcrumbs>
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="grey" />
        </template>
        <q-breadcrumbs-el label="COUNTRY" to="/" />
        <q-breadcrumbs-el :label="areaData.area" />
      </q-breadcrumbs>
    </div>
    <div class="fit row inline wrap justify-around items-start content-start">
      <q-card
        v-for="(item, index) in areaData.list"
        :key="'id' + index"
        v-ripple
        class="col-4 q-mt-lg cursor-pointer q-hoverable"
        style="width: 200px"
        @click="redirect(item)"
      >
        <q-img :src="item.crest" :alt="item.shortName" height="200px">
          <div
            class="absolute-bottom text-subtitle2 text-center text-uppercase"
          >
            {{ item.name }}
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ClubList",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    //BEFORE MOUNTED
    onBeforeMount(async () => {
      await store.dispatch("main/inquiryTeamList", route.params.id);
    });

    //COMPUTED
    const areaData = computed(() => store.getters["main/getTeamList"]);

    //METHOD
    const redirect = (item) => {
      router.push({ path: `${route.path}/team/${item.id}` });
    };

    return {
      areaData,
      redirect,
    };
  },
};
</script>

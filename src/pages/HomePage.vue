<template>
  <div class="container-fluid">
    <div
      class="background-img grow row"
      :style="`background-image: url(${picture?.largeImgUrl})`"
    ></div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { apodsService } from "../services/ApodsService";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await apodsService.getApods();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {
      picture: computed(() => AppState.apods),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.grow {
  height: 100vh;
}
</style>

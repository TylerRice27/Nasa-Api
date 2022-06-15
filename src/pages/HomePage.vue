<template>
  <div class="container-fluid">
    <div
      class="background-img grow row justify-content-end"
      :style="`background-image: url(${picture?.hdurl})`"
    >
      <div class="col-md-12 text-light cal m-2 p-3 bg-dark elevation-2 d-flex">
        <label for="start shadow ">Pick Your Date</label>

        <input
          type="date"
          id="start"
          name="trip-start"
          value="6-14-2022"
          max="6-14-2022"
        />
      </div>
      <h1 class="text-light text-center">
        {{ picture.title }}
      </h1>
      <h5 class="text-light text-center">
        {{ picture.explanation }}
      </h5>
    </div>
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
      date: new Date(),
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

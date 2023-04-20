<script setup>
import {onMounted, ref,} from "vue";
const mapRef = ref()


onMounted(() => {
  try {
      const mapEl = document.querySelector('.map')
      const map = L.map(mapEl, {
      crs: L.CRS.EPSG3395
    }).setView([41.336494, 69.282562], 15);

    L.tileLayer('https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=22.05.23-0-b220520184800&x={x}&y={y}&z={z}&scale=2&lang=ru_RU', {
      maxZoom: 19,
    }).addTo(map);
  } catch (e) {

  }

})

</script>
<template>
    <div ref="mapRef" class="map"></div>
</template>

<style scoped>
.map {
    height: 350px;
}
</style>

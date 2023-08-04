<script setup lang="ts">
import { onMounted, ref } from 'vue'
import "anov-gis-sdk/dist/anov-gis-sdk/index.css";
import ANOVGIS from "anov-gis-sdk/dist/anov-gis-sdk/anov-gis-sdk.js";
onMounted(() => {
  window.viewer = new ANOVGIS.Viewer("cesiumContainer", {
    vrButton: false,
    baseLayerPicker: true,
    fullscreenButton: true,
    homeButton: true,
    sceneModePicker: true,
    navigationHelpButton: true,
  });
  ANOVGIS.WidgetsControl.showAllControls({
    index: 4,
  });
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style>
html,
body,
#app,
#cesiumContainer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>

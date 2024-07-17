<script setup>
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const viewer = new GaussianSplats3D.Viewer({
  'cameraUp': [0.01933, -0.75830, -0.65161],
  'initialCameraPosition': [1.54163, 2.68515, -6.37228],
  'initialCameraLookAt': [0.45622, 1.95338, 1.51278],
  'sphericalHarmonicsDegree': 2
});
let path = 'src/assets/bonsai_high.ksplat'
// let path = 'src/assets/model.splat'

viewer.addSplatScene(path, {
  'splatAlphaRemovalThreshold': 5,
  'showLoadingUI': true,
}).then(() => {
  console.log('start')
  viewer.start();
  console.log('finished')
}).catch(e => {
  console.error(e)
})

</script>

<template>
  <div class="main">
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

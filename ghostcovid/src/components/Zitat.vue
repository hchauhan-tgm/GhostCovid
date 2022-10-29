<template>
  <div>
    <h3>{{ msg }}</h3>
    <h4>{{ msg2 }}</h4>
  </div>
</template>

<script>
export default {
  name: "Zitat",
  props: {
    msg: String,
    msg2: String,
  },
};
</script>

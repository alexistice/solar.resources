<template>
    <!-- <div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="checkFilter">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{ title }}</span>
    </div> -->

    <div class="p-0 pointer" v-on:click="checkFilter">
        <small>
            <i v-bind:class="{ 'far fa-square': checked==false, 'fas fa-check-square': checked }" class="mr-1"  style="color: rgb(150, 150, 150)"></i> {{ name }}
        </small>
    </div>

</template>
<script>
// import Vue from 'vue';
// const bus = new Vue();
// import { checkFilter } from "../util/bus";
export default {
  data() {
    return {
      checked: false
    };
  },
  props: ["name", "category"],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
    //   this.$bus.$emit("check-filter", this.category, this.name, this.checked);
      this.$bus.$emit("check-filter", this.category, this.name, this.checked);
    //   console.log(this);
    //   bus.$emit("check-filter", this.category, this.name, this.checked);
    }
  }
};
</script>
<style scoped>
pointer{
    cursor: pointer;
}
</style>

<template>

<div>
  <strong v-if="subhead" style="font-size:.75em">{{ subhead }}</strong>
  <div v-for="prod in list" v-bind:key="prod">

    <div class="p-0 pointer" v-on:click="checkFilter(category, prod)">
        <small>
            <i v-bind:class="{ 'fas fa-check-square': checked.indexOf(prod)>=0, 'far fa-square': checked.indexOf(prod)==-1 }" v-bind:name="prod" class="mr-1"  style="color: rgb(150, 150, 150)"></i> {{ prod }}
        </small>
    </div>
  </div>
</div>

</template>
<script>

export default {
  data() {
    return {
      checked: []
    };
  },
  props: ["list", "subhead", "category"],
  methods: {
    checkFilter(category, name) {
      if(this.checked.indexOf(name) != -1){
        this.checked.splice(this.checked.indexOf(name), 1);
        this.$bus.$emit("check-filter", category, name, false);
      }else{
        this.checked.push(name);
        this.$bus.$emit("check-filter", category, name, true);
      }
      // this.checked = !this.checked;
    }
  }
};
</script>
<style scoped>
pointer{
    cursor: pointer;
}
</style>

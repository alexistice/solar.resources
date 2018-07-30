<template>

<div>
  <!-- <strong style="font-size:.75em">{{ subhead }}</strong> -->

  <div v-if="show" v-for="product in products" v-bind:key="product">
    <div v-if="list[product] && list[product].length" style="font-size:.75em; line-height:15px;font-weight:800;" class="mt-2 mb-1 pt-1">
      {{ product }}
    </div>
  
    <div v-for="feature in list[product]"  v-bind:key="feature">
      <div class="p-0 pointer" v-on:click="checkFilter(category, feature)">
        <small>
          <i v-bind:class="{ 'fas fa-check-square': checked.indexOf(feature)>=0, 'far fa-square': checked.indexOf(feature)==-1 }" v-bind:name="feature" class="mr-1"  style="color: rgb(150, 150, 150)"></i> {{ feature }}
        </small>
      </div>
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
  props: ["list", "products", "category", "show", "sqf", "hideHeaders"],
  methods: {
    checkFilter(category, name) {
      if(this.checked.indexOf(name) != -1){
        this.checked.splice(this.checked.indexOf(name), 1);
        this.$bus.$emit("check-filter", category, name, false);
      }else{
        this.checked.push(name);
        this.$bus.$emit("check-filter", category, name, true);
      }
    }
  }
};
</script>
<style scoped>
pointer{
    cursor: pointer;
}
</style>

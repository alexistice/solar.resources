<template>
    <div class="col-lg-4  mt-3 pt-3">
        <div class="row no-gutters">
            <div class="col-lg-12">
                <div class="row no-gutters pr-3 justify-content-end">
                <div class="col-lg-12">
                    <h4 class="mb-0">{{ resource.ProjectID }}</h4>
                    <!-- <p class="mb-2"><small class="text-muted">May 12, 2018</small></p> -->
                </div>
                <div class="col-12 mb-1">
                    <img class="img"  v-bind:src="imgUrlFormat(resource.ProjectID, 1)" >
                </div>
                </div>
            </div> 
            <div class="col-lg-12 align-content-between">
                <div class="mb-2" v-if="Array.isArray(resource.Products)">
                    <span class="badge badge-primary mr-2" v-for="product in resource.Products" v-bind:key="product">{{ product }}</span>
                </div>
            </div>
            <div class="col-lg-12">

                <div class="d-flex flex-row justify-content-start">
                <div class="d-flex flex-column mr-3 justify-content-start align-items-center">
                    <i class="fas fa-truck-loading fa-2x float-right"></i>
                </div>
                <div class="d-flex flex-column mr-3 justify-content-start align-items-center">
                    <span class="fa-stack fa-1x">
                    <i class="fas fa-search fa-stack-2x" ></i>
                    <i class="fas fa-briefcase fa-stack-1x" style="font-size: 60%;margin-left: -3px;margin-top: -3px;"></i>
                    </span>
                </div>
                <div class="d-flex flex-column mr-3 justify-content-start align-items-center">
                    <i class="fas fa-camera-retro fa-2x"></i>
                </div>
                </div>
            </div>
        
        
        </div>
    </div>
</template>
<script>
export default {
  props: ["resource"],
  methods: {
    imgUrlFormat: function(filename, num) {
      var path = "/assets/images/project-gallery/";
      return path
        .concat(filename)
        .concat("-")
        .concat(num)
        .concat(".jpg");
    }
  }
};
</script>

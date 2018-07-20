<template>
    <div class="col-lg-12 mt-4 pb-4 border-bottom">
        <div class="row no-gutters">
            <div class="col-lg-4">
                <div class="row  no-gutters pr-3">
                    <div class="col-12 bigCrop">
                        <img class="img-fluid" v-bind:src="image" >
                    </div>
                </div>
                <div class="row no-gutters pr-3 pt-1 justify-content-end">
                    <div class="col-6 crop  mb-1" v-if="resource.Image1">
                        <img @mouseover="imgHover(imgUrlFormat(resource.Image1))" class="img" v-bind:src="imgUrlFormat(resource.Image1)" >
                    </div>
                    <div class="col-6 crop pl-1 mb-1" v-if="resource.Image2">
                        <img @mouseover="imgHover(imgUrlFormat(resource.Image2))" class="img" v-bind:src="imgUrlFormat(resource.Image2)">
                    </div>
                    <div class="col-6 crop mb-1" v-if="resource.Image3">
                        <img @mouseover="imgHover(imgUrlFormat(resource.Image3))" class="img" v-bind:src="imgUrlFormat(resource.Image3)">
                    </div>
                    <div class="col-6 crop pl-1 mb-1" v-if="resource.Image4">
                        <img @mouseover="imgHover(imgUrlFormat(resource.Image4))" lass="img" v-bind:src="imgUrlFormat(resource.Image4)">
                    </div>
                </div>
            </div>   
                  
            <div class="col-lg-8 align-content-between">
                <div class="row no-gutters">
                    <div class="col-lg-11">
                        <h4 class="mb-0">{{ resource.ProjectID }}</h4>
                        <!-- <p class="mb-0"><small class="text-muted">May 12, 2018</small></p> -->
                        <p class="mb-2"><small class="text-muted">{{ resource.Location }}</small></p>
                    </div>
                    <div class="col-lg-11">
                        <p class="mb-2" style="font-size: 90%">{{ resource.Description }}</p>
                    </div>
                    <div class="col-lg-1">
                    
                    </div>

                </div>

                <div class="row no-gutters">
                    <div class="col-lg-11">
                        <ul class="list-unstyled text-right mx-0" style="font-size: 90%">
                            <li>
                                <span class="float-left">Application:</span>	
                                <span 
                                    v-for="(application, index) in resource.Application" 
                                    v-bind:key="application">
                                    <span v-if="index != resource.Application.length && index != 0">, {{ application }}</span>
                                    <span v-else>{{ application }}</span>
                                </span> 
                            </li>
                             <li>
                                <span class="float-left">Exterior Color:</span>	
                                <span 
                                    v-for="(color, index) in resource.ExtColor" 
                                    v-bind:key="color">
                                    <span v-if="index != resource.ExtColor.length && index != 0">, {{ color }}</span>
                                    <span v-else>{{ color }}</span>
                                </span>
                            </li>
                            <li>
                                <span class="float-left">Interior Color:</span>	
                                <span 
                                    v-for="(color, index) in resource.IntColor" 
                                    v-bind:key="color">
                                    <span v-if="index != resource.IntColor.length && index != 0">, {{ color }}</span>
                                    <span v-else>{{ color }}</span>
                                </span>
                            </li>
                            <li>
                                <span class="float-left">Glaze:</span>	
                                <span 
                                    v-for="(glaze, index) in resource.Glazes" 
                                    v-bind:key="glaze">
                                    <span v-if="index != resource.Glazes.length && index != 0">, {{ glaze }}</span>
                                    <span v-else>{{ glaze }}</span>
                                </span>
                            </li>

                            <li v-if="resource.Width"><span class="float-left">Width:</span>	{{ resource.Width }}</li>
                            <li v-if="resource.LengthProjection"><span class="float-left">Length / Projection:</span>	{{ resource.LengthProjection }}</li>
                            <li v-if="resource.RidgeHeight"><span class="float-left">Ridge Height:</span>	{{ resource.RidgeHeight }}</li>
                        </ul>
                    </div>
                </div>

                <div class="row no-gutters">
                    <div class="col-lg-12">
                        <!-- <div class="mb-2" v-if="Array.isArray(resource.Products)">
                            <strong>Products:</strong>
                            <span class="badge badge-primary mr-2" v-for="product in resource.Products" v-bind:key="product.ID">{{ product.ProductName }}</span>
                        </div> -->
                        <div class="mb-1" v-if="Array.isArray(resource.Products)">
                            <!-- <strong>Features:</strong> -->
                            <div v-for="product in resource.Products" v-bind:key="product.ID" class="d-inline-block w-100">
                                <span class="badge badge-primary mr-1 mb-1">{{ product.ProductName }}</span>

                                <span class="badge badge-secondary mr-1 mb-1" v-for="geotype in product.GeoType1" v-bind:key="geotype">
                                    {{ geotype }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["resource"],
  data() {
    return {
      image: this.imgUrlFormat(this.resource.Image1)
    };
  },
  methods: {
    imgUrlFormat(filename) {
      // <img src="http://solar.localhost/wp-content/uploads/000_1163_500.jpg">

      //   var path = "/assets/images/project-gallery/";
      var path = "https://solarinnovations.com/wp-content/uploads/";
      return path.concat(filename);
      // .concat("-")
      // .concat(num)
      // .concat(".jpg");
    },
    imgHover(image) {
      this.image = image;
    }
  },
  computed: {}
};
</script>  
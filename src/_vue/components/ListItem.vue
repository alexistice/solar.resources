<template>
    <div class="col-lg-12 mt-4 pb-4 border-bottom">
        <div class="row no-gutters">
            <div class="col-lg-4">
                <div class="row no-gutters pr-3 justify-content-end">
                    <div class="col-lg-12">
                        <h4 class="mb-0">{{ resource.ProjectID }}</h4>
                        <!-- <p class="mb-0"><small class="text-muted">May 12, 2018</small></p> -->
                        <p class="mb-2"><small class="text-muted">{{ resource.Location }}</small></p>
                    </div>
                    <div class="col-12 mb-1">
                        <!-- /assets/project-gallery-images/04-03-004-t.jpg -->
                        <img class="img" v-bind:src="imgUrlFormat(resource.ProjectID, 1)" >
                    </div>
                    <div class="col-3">
                        <img class="img pl-1" v-bind:src="imgUrlFormat(resource.ProjectID, 2)">
                    </div>
                    <div class="col-3">
                        <img class="img pl-1" v-bind:src="imgUrlFormat(resource.ProjectID, 3)">
                    </div>
                    <div class="col-3">
                        <img class="img pl-1" v-bind:src="imgUrlFormat(resource.ProjectID, 4)">
                    </div>
                </div>
            </div> 
                  
            <div class="col-lg-6 align-content-between">
                <div class="row no-gutters">
                    <div class="col-lg-11">
                        <div class="mb-2" >
                            <span class="badge badge-secondary mr-2" v-for="geo in resource.GeoType1.split(',')" v-bind:key="geo">{{ geo }}</span>
                        </div>
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
                                    v-for="(application, index) in resource.Application.split(',')" 
                                    v-bind:key="application">
                                    <span v-if="index != resource.Application.split(',').length && index != 0">, {{ application }}</span>
                                    <span v-else>{{ application }}</span>
                                    
                                </span>

                            
                            </li>
                            <li><span class="float-left">Exterior Color:</span>	 {{ resource.ExtColor }}</li>
                            <li><span class="float-left">Interior Color:</span>	{{ resource.IntColor }}</li>
                            <li><span class="float-left">Glaze:</span>	{{ resource.Glazes }}</li>
                            <li><span class="float-left">Width:</span>	{{ resource.Width }}</li>
                            <li><span class="float-left">Length / Projection:</span>	{{ resource.LengthProjection }}</li>
                            <li><span class="float-left">Ridge Height:</span>	{{ resource.RidgeHeight }}</li>
                            <li><span class="float-left">Product Details:</span>	{{ resource.GeoType2 }}</li>
                        </ul>
                    </div>
                      
                </div>

                

            </div>
            <div class="col-lg-2">

                <div class="d-flex flex-column mb-3 justify-content-start">
                    <div class="d-flex flex-row justify-content-start">
                        <i class="fas fa-truck-loading fa-2x float-right"></i>
                    </div>
                </div>
                <div class="d-flex flex-column mb-3 justify-content-start">
                    <div class="d-flex flex-row justify-content-start">
                        <i class="fas fa-map-marked-alt fa-2x"></i>
                    </div>
                </div>
                <div class="d-flex flex-column mb-3 justify-content-start">
                    <div class="d-flex flex-row justify-content-start align-items-center">
                        <span class="fa-stack fa-1x">
                            <i class="fas fa-search fa-stack-2x" ></i>
                            <i class="fas fa-briefcase fa-stack-1x" style="font-size: 60%;margin-left: -3px;margin-top: -3px;"></i>
                        </span>
                    </div>
                </div>
                <div class="d-flex flex-column mb-3 justify-content-start">
                    <div class="d-flex flex-row justify-content-start align-items-center">
                  
                        <i class="fas fa-camera-retro fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'resource' ],
    methods: {
        imgUrlFormat: function(filename, num)
        {
            var path = '/assets/images/project-gallery/';
            return path.concat(filename).concat('-').concat(num).concat('.jpg');
        }
    },
}
</script>

<template >
    <div class="col-lg-3  mt-3 pt-3">
        <div class="row no-gutters">
        <div class="col-lg-12">
            <div class="row no-gutters  justify-content-end">
            <div class="col-lg-12">
                <h4 class="mb-0">{{ resource.ProjectID }}</h4>
                <!-- <p class="mb-2"><small class="text-muted">May 12, 2018</small></p> -->
            </div>
            <div class="col-12 mb-1">
                <img class="img"  v-bind:src="imgUrlFormat(resource.ProjectID, 1)" >
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

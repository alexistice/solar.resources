<template>
  <main  class="mt-3">
    
    <div class="container-fluid mb-5" id="content">
      <div class="row">
      <div class="col-12 border-bottom mb-4">
        <h1>Resources</h1>
      </div>
      <div class="col-lg-2 border-right">
        <h3 style="font-size: 90%;color:#969696"><strong>Show results for:</strong></h3>
        <div style="color:red;" v-for="(data, key) in groupByProjectID" v-bind:key="data.ID">
          {{ key }}: {{data}}
        </div>
      </div>
      
      <div class="col-lg-10">
        <div class="container-fluid mb-2 pr-3 ">
          <div class="row d-nonex">
            <div class="col-12">
              <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                <small>
                  Solar Innovations® is happy to work with our customers, vendors, and dealers to achieve outstanding results. Time is of the essence for many of our customers, we have provided various resources for immediate review.
                </small>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

            <mega-filter></mega-filter>

          </div>  
          
          <!-- Results, Sort, Display options -->
          <div class="row mt-3">

            <div class="col-6 text-muted mt-auto"><small>37 results for all.</small></div>
            <div class="col-6 text-right">
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                <!-- <button type="button" class="btn btn-secondary"><i class="fas fa-sort-amount-up"></i></button> -->
                <!-- <button type="button" class="btn btn-secondary" ><i class="fas fa-sort-amount-down"></i></button>
              
                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort: Date
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Date</a>
                    <a class="dropdown-item" href="#">Alphabetical</a>
                  </div>
                </div> -->

                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'list-item' }" @click="changeView('list-item')" type="button" ><i class="fas fa-list-ul"></i></button>
                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'large-grid-item' }" @click="changeView('large-grid-item')" type="button" class="btn btn-secondary"><i class="fas fa-th-large"></i></button>
                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'small-grid-item' }" @click="changeView('small-grid-item')" type="button" class="btn btn-secondary"><i class="fas fa-th"></i></button>

              </div>
            </div>
          </div>
          <!-- End Results, Sort, Display options -->
          
          <!-- Results List -->

          <div class="row d-nonez border-top mt-1 mb-4" id="results-list" v-if="filteredResources.length">

            <span :is="currentView" v-for="resource in filteredResources" v-bind:resource="resource" v-bind:key="resource.ID"></span>
          </div>


          

        


        </div>
      </div>
    </div>
  </div>
</main>



</template>

<script>
import projects from '../data/projects.json';

import MegaFilter from './MegaFilter.vue';
import ListItem from './ListItem.vue';
import SmallGridItem from './SmallGridItem.vue';
import LargeGridItem from './LargeGridItem.vue';

export default {
  name: 'Resources',
  data () {
    return {
      projects: projects,
      currentView: 'list-item'
    }
  },
  components: {
    MegaFilter, ListItem, SmallGridItem, LargeGridItem
  },
  methods: {
    changeView: function(component)
    {
      this.currentView = component;
    }
  },
  computed:{
    groupByProjectID(){
      return this.projects.reduce((acc, proj) => {
        (acc[proj.ProjectID] = acc[proj.ProjectID] || []).push(proj.ID)
        return acc
      }, {})
    },filteredResources() {
      return this.projects
        .slice(0, 25);
        // .filter(this.moviePassesGenreFilter)
        // .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
    }
  }
}
</script>

<style scoped>
h1 {color: #000}
</style>

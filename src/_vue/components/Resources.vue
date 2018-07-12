<template>
  <main  class="mt-3">
    <div class="container-fluid mb-5" id="content">
      <div class="row">
      <div class="col-12 border-bottom mb-4">
        <h1>Resources</h1>
      </div>
      <div class="col-lg-2 border-right">
        <h3 style="font-size: 90%;color:#969696"><strong>Show results for:</strong></h3>

        <div class="d-flex flex-column">
          <strong>Applications</strong>
          <check-filter v-for="app in listApplications" category="applications" v-bind:name="app" v-bind:key="app"></check-filter>
        </div>
        
        <hr class="my-2">
        
        <div class="d-flex flex-column">
          <strong>Glaze</strong>
          <check-filter v-for="glaze in glazesOptions"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>
        </div>

        <hr class="my-2">
        
        <div class="d-flex flex-column">
          <strong>Glaze Colors</strong>
          <check-filter v-for="glaze in glazeColor"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>
        </div>

        <hr class="my-2">
        
        <div class="d-flex flex-column">
          <strong>Glaze Coating</strong>
          <check-filter v-for="glaze in listGlazeCoatings"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>          
        </div>

      </div> 
        
      <div class="col-lg-10">
        <div class="container-fluid mb-2 pr-3 ">
          <div class="row d-nonex">
            <div class="col-12">
              <div class="alert mb-0 alert-secondary alert-dismissible fade show" role="alert">
                <small>
                  Solar Innovations<sup>®</sup> is happy to work with our customers, vendors, and dealers to achieve outstanding results. Time is of the essence for many of our customers, we have provided various resources for immediate review.
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
            <div class="col-4 text-left">
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                <!-- <button type="button" class="btn btn-secondary"><i class="fas fa-sort-amount-up"></i></button> -->
                <button type="button" class="btn btn-secondary" @click="changeSortDirection()" >
                  <i v-bind:class="{ 'fas fa-sort-amount-up': sortDirection === 'desc', 'fas fa-sort-amount-down': sortDirection === 'asc' }"></i>
                  <!-- <i class="fas fa-sort-amount-down"></i> -->
                </button>
              
                <!-- <button class="btn btn-secondary" @click="changeSortDirection()" type="button" class="btn btn-secondary">
                  <i class="fas fa-sort-amount-down"></i>
                </button> -->
 
 
                <div class="btn-group" role="group">

                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort: Date
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Date</a>
                    <!-- <a class="dropdown-item" href="#">Alphabetical</a> -->
                  </div>
                </div>

                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'list-item' }" @click="changeView('list-item')" type="button" ><i class="fas fa-list-ul"></i></button>
                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'large-grid-item' }" @click="changeView('large-grid-item')" type="button" class="btn btn-secondary"><i class="fas fa-th-large"></i></button>
                <button v-bind:class="{ 'btn btn-secondary': true, active: currentView === 'small-grid-item' }" @click="changeView('small-grid-item')" type="button" class="btn btn-secondary"><i class="fas fa-th"></i></button>

              </div>
            </div>
            <div class="col-6 text-muted mt-auto">
              <!-- <form class="searchbar" v-on:submit.prevent="onSubmit">
                  <input type="text" v-model="newSearch" placeholder="Search for Posters">
                  <input type="submit" value="Search" class="btn btn-secondary btn-sm" >
              </form> -->
              <div class="input-group">
                <input type="text" class="form-control" v-model="newSearch" placeholder="Search for Projects" aria-label="Recipient's username" aria-describedby="search">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary btn-sm" type="submit" value="Search">Search</button>
                </div>
              </div>
            </div>
            <div class="col-2 text-muted mt-auto">
              <small>Showing {{ filteredResources.length }} results.</small>
            </div>
          </div>
          <!-- End Results, Sort, Display options -->
          
          <!-- Results List -->

          <div class="row d-nonez border-top mt-1 mb-4" id="results-list" v-if="filteredResources.length">
            <span :is="currentView" v-for="resource in filteredResources" v-bind:resource="resource" v-bind:key="resource.ID"></span>
          </div>
          <div v-else-if="projects.length" class="no-results"  >
              No Results
          </div>
          <div v-else class="no-results">
              Loading...
          </div>
          <div id="product-list-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</main>



</template>

<script>
import Vue from 'vue';
import projects from "../data/projects.json";

import MegaFilter from "./MegaFilter.vue";
import ListItem from "./ListItem.vue";
import CheckFilter from "./CheckFilter.vue";
import SmallGridItem from "./SmallGridItem.vue";
import LargeGridItem from "./LargeGridItem.vue";
import { checkFilter } from "../util/bus";

// const bus = new Vue();
// Object.defineProperty(Vue.prototype, "$bus", {
//   get() {
//     return this.$root.bus;
//   }
// });


export default {
  name: "Resources",
  data() {
    return {
      projects: projects,
      currentView: "list-item",
      glazeColor: [ "Clear", "White", "Bronze", "Gray", "Blue", "Green" ],
      glazesOptions: ["Glass", "Monolithic Glass", "Polycarbonate", "Tempered"],
      newSearch: '',
      lastSearch: '',
      sortDirection: 'asc',
      applications: [],
      glazes: [],
      loadNumber: 5
    };
  },
  components: {
    MegaFilter,
    ListItem,
    CheckFilter,
    SmallGridItem,
    LargeGridItem
  },
  methods: {
    changeView: function(component) {
      this.currentView = component;
    },
    changeSortDirection: function() {
      if(this.sortDirection === 'desc'){
        this.sortDirection = 'asc';
      }else{
        this.sortDirection = 'desc';
      }
    },
    getArrayDiff: function(a, b) {
      var ret = [];
      if (!(Array.isArray(a) && Array.isArray(b))) {
          return ret;
      }
      var i; var key;
      for (i = a.length - 1; i >= 0; i--) {
        key = a[i];
        if (-1 === b.indexOf(key)) {
          ret.push(key);
        }
      }
      return ret;
    },
    appendItems: function(){
        if(this.filteredResources.length < this.projects.length){
            this.loadNumber = this.loadNumber + 10;
        }
    },
    filterApplications(proj) {
      if (!this.applications.length) {
        return true;
      } else {
        let projApplications = proj.Application;
        let matched = true;
        this.applications.forEach(app => {
          if (projApplications.indexOf(app) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    },
    filterGlazes(proj) {
      if (!this.glazes.length) {
        return true;
      } else {
        let projGlazes = proj.Glazes;
        let matched = true;
        this.glazes.forEach(app => {
          if (projGlazes.indexOf(app) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    }
  },
  computed: {
    // groupByProjectID() {
    //   return this.projects.reduce((acc, proj) => {
    //     (acc[proj.ProjectID] = acc[proj.ProjectID] || []).push(proj.ID);
    //     return acc;
    //   }, {});
    // },
    optionApplications() {
      const apps = this.projects.reduce((acc, proj) => {
        if(Array.isArray(proj.Application)){
          proj.Application.forEach(app => {
            (acc[app] = acc[app] || []).push(proj.ProjectID);
          })
        }
        return acc;
      }, {});
      
      return apps;
    },
    listApplications(){
      let list = [];
      Object.keys(this.optionApplications).forEach(function (key) {
        // do something with obj[key]
        list.push(key);
      });
      return list.sort();
    },
    optionGlazes() {
      return this.projects.reduce((acc, proj) => {
        if(Array.isArray(proj.Glazes)){
          proj.Glazes.forEach(glaze => {
            (acc[glaze] = acc[glaze] || []).push(proj.ProjectID);
          });
        }
        return acc;
      }, {});
    },
    listGlazeCoatings(){
      let list = [];
      Object.keys(this.optionGlazes).forEach(function (key) {
        // do something with obj[key]
        list.push(key);
      });
      
      // glazeColor glaze
      list = this.getArrayDiff(list, this.glazeColor);
      list = this.getArrayDiff(list, this.glazesOptions);
      return list.sort();
    },
    filteredResources() {
      // let proj = this.projects;
      
      let proj = this.projects.filter((project) => {
        return project.Description.toLowerCase().includes(this.newSearch.toLowerCase());
      });


      // sort code
      // if (this.sort == 'views') {
      //   return players.sort(function(a, b) {
      //     return b.views - a.views
      //   });
      // } else {
      //   return players;
      // }

      let projFiltered = proj
      // return this.projects
        .filter(this.filterApplications)
        .filter(this.filterGlazes)
       
        
      // TODO : Filter before the Slice 
      let projFilteredSorted =  projFiltered
        .sort(function(a, b) {
          return a.Date - b.Date
        });
      if(this.sortDirection === "asc"){
        projFilteredSorted = projFilteredSorted.reverse();
      }
      return projFilteredSorted.slice(0, this.loadNumber);


      // .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
    }
  },
  created() {
      this.$bus.$on("check-filter", checkFilter.bind(this));
  },
  mounted: function() {
      var vueInstance = this;
      var elem = document.getElementById('product-list-bottom');
      var watcher = scrollMonitor.create(elem);
      watcher.enterViewport(function(){
          vueInstance.appendItems();
      })
  }
};
</script>

<style scoped>
h1 {
  color: #000;
}
</style>

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
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleProductsDisplay">
            <strong>Products</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showProducts, 'fas fa-minus': showProducts }"></i>
            </small>
          </div>
          <check-filter v-if="showProducts" v-for="prod in listProducts" category="products" v-bind:name="prod" v-bind:key="prod"></check-filter>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleApplicationsDisplay">
            <strong>Applications</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showApplications, 'fas fa-minus': showApplications }"></i>
            </small>
          </div>
          <check-filter v-if="showApplications" v-for="app in listApplications" category="applications" v-bind:name="app" v-bind:key="app"></check-filter>
        </div>
        
        <hr class="my-2">
        
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleGlazesDisplay">
            <strong>Glaze</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showGlazes, 'fas fa-minus': showGlazes }"></i>
            </small>
          </div>
          <div v-if="showGlazes">

            <check-filter   v-for="glaze in glazesOptions"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Glaze Colors</strong>
            </div>
            <check-filter v-for="glaze in glazeColor"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Glaze Coating</strong>
            </div>
            <check-filter v-for="glaze in listGlazeCoatings"  category="glazes" v-bind:name="glaze" v-bind:key="glaze"></check-filter>          
            
          </div>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleExtColorDisplay">
            <strong>Exterior</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showExtColor, 'fas fa-minus': showExtColor }"></i>
            </small>
          </div>
          
          <div v-if="showExtColor" >
            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Materials</strong>
            </div>
            <check-filter v-for="material in materialOptions"  category="extColor" v-bind:name="material" v-bind:key="material"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Finishes</strong>
            </div>
            <check-filter v-for="finish in finishOptions"  category="extColor" v-bind:name="finish" v-bind:key="finish"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Standard Colors</strong>
            </div>
            <check-filter v-for="color in standardColors"  category="extColor" v-bind:name="color" v-bind:key="color"></check-filter>
            
            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Standard Cladding</strong>
            </div>
            <check-filter v-for="option in claddingOptions"  category="extColor" v-bind:name="option" v-bind:key="option+'-clad'"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Custom Options</strong>
            </div>
            <check-filter v-for="color in listExtColor" category="extColor" v-bind:name="color" v-bind:key="color"></check-filter>
          </div>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleIntColorDisplay">
            <strong>Interior</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showIntColor, 'fas fa-minus': showIntColor }"></i>
            </small>
          </div>
          
          <div v-if="showIntColor" >
            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Materials</strong>
            </div>
            <check-filter v-for="material in materialOptions"  category="intColor" v-bind:name="material" v-bind:key="material"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Finishes</strong>
            </div>
            <check-filter v-for="finish in finishOptions"  category="intColor" v-bind:name="finish" v-bind:key="finish"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Standard Colors</strong>
            </div>
            <check-filter v-for="color in standardColors"  category="intColor" v-bind:name="color" v-bind:key="color"></check-filter>
            
            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Standard Cladding</strong>
            </div>
            <check-filter v-for="option in claddingOptions"  category="intColor" v-bind:name="option" v-bind:key="option+'-clad'"></check-filter>

            <div class="d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Custom Options</strong>
            </div>
            <check-filter v-for="color in listIntColor" category="intColor" v-bind:name="color" v-bind:key="color"></check-filter>
          </div>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleLocationDisplay">
            <strong>Location</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showLocations, 'fas fa-minus': showLocations }"></i>
            </small>
          </div>
          <div v-if="showLocations">
            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">International</strong>
            </div>
            <check-filter v-for="loc in internatinalOptions" category="locations" v-bind:name="loc" v-bind:key="loc"></check-filter>

            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Domestic</strong>
            </div>
            <check-filter v-for="loc in listLocation" category="locations" v-bind:name="loc" v-bind:key="loc"></check-filter>
          </div>
        </div>
        
        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleWidthsDisplay">
            <strong>Width</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showWidths, 'fas fa-minus': showWidths }"></i>
            </small>
          </div>

          <div v-if="showWidths" >  
            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Min</strong>
            </div>
            <input type="range" value="0" class="custom-range" min="0" max="5" id="customRange2">

            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Max</strong>
            </div>
            <input type="range" value="5" class="custom-range" min="0" max="5" id="customRange2">
          </div>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleLengthProjectionsDisplay">
            <strong>Length Projection</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showLengthProjections, 'fas fa-minus': showLengthProjections }"></i>
            </small>
          </div>

          <div v-if="showLengthProjections" >  
            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Min</strong>
            </div>
            <input type="range" value="0" class="custom-range" min="0" max="5" id="customRange2">

            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Max</strong>
            </div>
            <input type="range" value="5" class="custom-range" min="0" max="5" id="customRange2">
          </div>
        </div>

        <hr class="my-2">

        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center pointer" v-on:click="toggleRidgeHeightsDisplay">
            <strong>Ridge Height</strong>
            <small>
              <i v-bind:class="{ 'fas fa-plus': !showRidgeHeights, 'fas fa-minus': showRidgeHeights }"></i>
            </small>
          </div>

          <div v-if="showRidgeHeights" >  
            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Min</strong>
            </div>
            <input type="range" value="0" class="custom-range" min="0" max="5" id="customRange2">

            <div class="mb-1 d-flex justify-content-between align-items-center pt-2">
              <strong style="font-size:.75em">Max</strong>
            </div>
            <input type="range" value="5" class="custom-range" min="0" max="5" id="customRange2">
          </div>
        </div>

        <hr class="my-2">


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

                <button type="button" class="btn btn-secondary" @click="changeSortDirection()" >
                  <i v-bind:class="{ 'fas fa-sort-amount-up': sortDirection === 'desc', 'fas fa-sort-amount-down': sortDirection === 'asc' }"></i>
                </button>

                <button type="button" class="btn btn-secondary" @click="toggleMapDisplay()" >
                  <i class="fas fa-globe-americas"></i>
                </button>
 
                <!-- <div class="btn-group" role="group">

                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort: Date
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Date</a>
                  </div>
                </div> -->

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
              <small>{{ totalResults }} results found.</small>
            </div>

            <div v-if="showMap" style="margin:auto" class="my-3">
              <ul class="stately"> 
                <li data-state="al" class="al" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">A</li>
                <li data-state="ak" class="ak" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">B</li>
                <li data-state="ar" class="ar" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">C</li>						
                <li data-state="az" class="az" v-bind:class="{ 'shade-5': optionLocation.Arizona.length >= 4,'shade-4': optionLocation.Arizona.length == 3, 'shade-3': optionLocation.Arizona.length == 2,'shade-2': optionLocation.Arizona.length == 1, 'shade-1': optionLocation.Arizona.length == 0 }">D</li>
                <li data-state="ca" class="ca" v-bind:class="{ 'shade-5': optionLocation.California.length >= 4,'shade-4': optionLocation.California.length == 3, 'shade-3': optionLocation.California.length == 2,'shade-2': optionLocation.California.length == 1, 'shade-1': optionLocation.California.length == 0 }">E</li>
                <li data-state="co" class="co" v-bind:class="{ 'shade-5': optionLocation.Colorado.length >= 4,'shade-4': optionLocation.Colorado.length == 3, 'shade-3': optionLocation.Colorado.length == 2,'shade-2': optionLocation.Colorado.length == 1, 'shade-1': optionLocation.Colorado.length == 0 }">F</li>
                <li data-state="ct" class="ct" v-bind:class="{ 'shade-5': optionLocation.Connecticut.length >= 4,'shade-4': optionLocation.Connecticut.length == 3, 'shade-3': optionLocation.Connecticut.length == 2,'shade-2': optionLocation.Connecticut.length == 1, 'shade-1': optionLocation.Connecticut.length == 0 }">G</li>
                <li data-state="de" class="de" v-bind:class="{ 'shade-5': optionLocation.Delaware.length >= 4,'shade-4': optionLocation.Delaware.length == 3, 'shade-3': optionLocation.Delaware.length == 2,'shade-2': optionLocation.Delaware.length == 1, 'shade-1': optionLocation.Delaware.length == 0 }">H</li>
                <li data-state="dc" class="dc" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">I</li>
                <li data-state="fl" class="fl" v-bind:class="{ 'shade-5': optionLocation.Florida.length >= 4,'shade-4': optionLocation.Florida.length == 3, 'shade-3': optionLocation.Florida.length == 2,'shade-2': optionLocation.Florida.length == 1, 'shade-1': optionLocation.Florida.length == 0 }">J</li>
                <li data-state="ga" class="ga" v-bind:class="{ 'shade-5': optionLocation.Georgia.length >= 4,'shade-4': optionLocation.Georgia.length == 3, 'shade-3': optionLocation.Georgia.length == 2,'shade-2': optionLocation.Georgia.length == 1, 'shade-1': optionLocation.Georgia.length == 0 }">K</li>
                <li data-state="hi" class="hi" v-bind:class="{ 'shade-5': optionLocation.Hawaii.length >= 4,'shade-4': optionLocation.Hawaii.length == 3, 'shade-3': optionLocation.Hawaii.length == 2,'shade-2': optionLocation.Hawaii.length == 1, 'shade-1': optionLocation.Hawaii.length == 0 }">L</li>
                <li data-state="id" class="id" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">M</li>
                <li data-state="il" class="il" v-bind:class="{ 'shade-5': optionLocation.Illinois.length >= 4,'shade-4': optionLocation.Illinois.length == 3, 'shade-3': optionLocation.Illinois.length == 2,'shade-2': optionLocation.Illinois.length == 1, 'shade-1': optionLocation.Illinois.length == 0 }">N</li>
                <li data-state="in" class="in" v-bind:class="{ 'shade-5': optionLocation.Indiana.length >= 4,'shade-4': optionLocation.Indiana.length == 3, 'shade-3': optionLocation.Indiana.length == 2,'shade-2': optionLocation.Indiana.length == 1, 'shade-1': optionLocation.Indiana.length == 0 }">O</li>
                <li data-state="ia" class="ia" v-bind:class="{ 'shade-5': optionLocation.Iowa.length >= 4,'shade-4': optionLocation.Iowa.length == 3, 'shade-3': optionLocation.Iowa.length == 2,'shade-2': optionLocation.Iowa.length == 1, 'shade-1': optionLocation.Iowa.length == 0 }">P</li>
                <li data-state="ks" class="ks" v-bind:class="{ 'shade-5': optionLocation.Kansas.length >= 4,'shade-4': optionLocation.Kansas.length == 3, 'shade-3': optionLocation.Kansas.length == 2,'shade-2': optionLocation.Kansas.length == 1, 'shade-1': optionLocation.Kansas.length == 0 }">Q</li>
                <li data-state="ky" class="ky" v-bind:class="{ 'shade-5': optionLocation.Kentucky.length >= 4,'shade-4': optionLocation.Kentucky.length == 3, 'shade-3': optionLocation.Kentucky.length == 2,'shade-2': optionLocation.Kentucky.length == 1, 'shade-1': optionLocation.Kentucky.length == 0 }">R</li>
                <li data-state="la" class="la" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">S</li>
                <li data-state="me" class="me" v-bind:class="{ 'shade-5': optionLocation.Maine.length >= 4,'shade-4': optionLocation.Maine.length == 3, 'shade-3': optionLocation.Maine.length == 2,'shade-2': optionLocation.Maine.length == 1, 'shade-1': optionLocation.Maine.length == 0 }">T</li>
                <li data-state="md" class="md" v-bind:class="{ 'shade-5': optionLocation.Maryland.length >= 4,'shade-4': optionLocation.Maryland.length == 3, 'shade-3': optionLocation.Maryland.length == 2,'shade-2': optionLocation.Maryland.length == 1, 'shade-1': optionLocation.Maryland.length == 0 }">U</li>
                <li data-state="ma" class="ma" v-bind:class="{ 'shade-5': optionLocation.Massachusetts.length >= 4,'shade-4': optionLocation.Massachusetts.length == 3, 'shade-3': optionLocation.Massachusetts.length == 2,'shade-2': optionLocation.Massachusetts.length == 1, 'shade-1': optionLocation.Massachusetts.length == 0 }">V</li>
                <li data-state="mi" class="mi" v-bind:class="{ 'shade-5': optionLocation.Michigan.length >= 4,'shade-4': optionLocation.Michigan.length == 3, 'shade-3': optionLocation.Michigan.length == 2,'shade-2': optionLocation.Michigan.length == 1, 'shade-1': optionLocation.Michigan.length == 0 }">W</li>
                <li data-state="mn" class="mn" v-bind:class="{ 'shade-5': optionLocation.Minnesota.length >= 4,'shade-4': optionLocation.Minnesota.length == 3, 'shade-3': optionLocation.Minnesota.length == 2,'shade-2': optionLocation.Minnesota.length == 1, 'shade-1': optionLocation.Minnesota.length == 0 }">X</li>
                <li data-state="ms" class="ms" v-bind:class="{ 'shade-5': optionLocation.Mississippi.length >= 4,'shade-4': optionLocation.Mississippi.length == 3, 'shade-3': optionLocation.Mississippi.length == 2,'shade-2': optionLocation.Mississippi.length == 1, 'shade-1': optionLocation.Mississippi.length == 0 }">Y</li>
                <li data-state="mo" class="mo" v-bind:class="{ 'shade-5': optionLocation.Montana.length >= 4,'shade-4': optionLocation.Montana.length == 3, 'shade-3': optionLocation.Montana.length == 2,'shade-2': optionLocation.Montana.length == 1, 'shade-1': optionLocation.Montana.length == 0 }">Z</li>
                <li data-state="mt" class="mt" v-bind:class="{ 'shade-5': optionLocation.Nevada.length >= 4,'shade-4': optionLocation.Nevada.length == 3, 'shade-3': optionLocation.Nevada.length == 2,'shade-2': optionLocation.Nevada.length == 1, 'shade-1': optionLocation.Nevada.length == 0 }">a</li>
                <li data-state="ne" class="ne" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">b</li>
                <li data-state="nv" class="nv" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">c</li>
                <li data-state="nh" class="nh" v-bind:class="{ 'shade-5': optionLocation['New Hampshire'].length >= 4,'shade-4': optionLocation['New Hampshire'].length == 3, 'shade-3': optionLocation['New Hampshire'].length == 2,'shade-2': optionLocation['New Hampshire'].length == 1, 'shade-1': optionLocation['New Hampshire'].length == 0 }">d</li>
                <li data-state="nj" class="nj" v-bind:class="{ 'shade-5': optionLocation['New Jersey'].length >= 4,'shade-4': optionLocation['New Jersey'].length == 3, 'shade-3': optionLocation['New Jersey'].length == 2,'shade-2': optionLocation['New Jersey'].length == 1, 'shade-1': optionLocation['New Jersey'].length == 0 }">e</li>
                <li data-state="nm" class="nm" v-bind:class="{ 'shade-5': optionLocation['New Mexico'].length >= 4,'shade-4': optionLocation['New Mexico'].length == 3, 'shade-3': optionLocation['New Mexico'].length == 2,'shade-2': optionLocation['New Mexico'].length == 1, 'shade-1': optionLocation['New Mexico'].length == 0 }">f</li>
                <li data-state="ny" class="ny" v-bind:class="{ 'shade-5': optionLocation['New York'].length >= 4,'shade-4': optionLocation['New York'].length == 3, 'shade-3': optionLocation['New York'].length == 2,'shade-2': optionLocation['New York'].length == 1, 'shade-1': optionLocation['New York'].length == 0 }">g</li>
                <li data-state="nc" class="nc" v-bind:class="{ 'shade-5': optionLocation['North Carolina'].length >= 4,'shade-4': optionLocation['North Carolina'].length == 3, 'shade-3': optionLocation['North Carolina'].length == 2,'shade-2': optionLocation['North Carolina'].length == 1, 'shade-1': optionLocation['North Carolina'].length == 0 }">h</li>
                <li data-state="nd" class="nd" v-bind:class="{ 'shade-5': optionLocation['North Dakota'].length >= 4,'shade-4': optionLocation['North Dakota'].length == 3, 'shade-3': optionLocation['North Dakota'].length == 2,'shade-2': optionLocation['North Dakota'].length == 1, 'shade-1': optionLocation['North Dakota'].length == 0 }">i</li>
                <li data-state="oh" class="oh" v-bind:class="{ 'shade-5': optionLocation.Ohio.length >= 4,'shade-4': optionLocation.Ohio.length == 3, 'shade-3': optionLocation.Ohio.length == 2,'shade-2': optionLocation.Ohio.length == 1, 'shade-1': optionLocation.Ohio.length == 0 }">j</li>			
                <li data-state="ok" class="ok" v-bind:class="{ 'shade-5': optionLocation.Oklahoma.length >= 4,'shade-4': optionLocation.Oklahoma.length == 3, 'shade-3': optionLocation.Oklahoma.length == 2,'shade-2': optionLocation.Oklahoma.length == 1, 'shade-1': optionLocation.Oklahoma.length == 0 }">k</li>
                <li data-state="or" class="or" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">l</li>
                <li data-state="pa" class="pa" v-bind:class="{ 'shade-5': optionLocation.Pennsylvania.length >= 4,'shade-4': optionLocation.Pennsylvania.length == 3, 'shade-3': optionLocation.Pennsylvania.length == 2,'shade-2': optionLocation.Pennsylvania.length == 1, 'shade-1': optionLocation.Pennsylvania.length == 0 }">m</li>
                <li data-state="ri" class="ri" v-bind:class="{ 'shade-5': optionLocation['Rhode Island'].length >= 4,'shade-4': optionLocation['Rhode Island'].length == 3, 'shade-3': optionLocation['Rhode Island'].length == 2,'shade-2': optionLocation['Rhode Island'].length == 1, 'shade-1': optionLocation['Rhode Island'].length == 0 }">n</li>
                <li data-state="sc" class="sc" v-bind:class="{ 'shade-5': optionLocation['South Carolina'].length >= 4,'shade-4': optionLocation['South Carolina'].length == 3, 'shade-3': optionLocation['South Carolina'].length == 2,'shade-2': optionLocation['South Carolina'].length == 1, 'shade-1': optionLocation['South Carolina'].length == 0 }">o</li>
                <li data-state="sd" class="sd" v-bind:class="{ 'shade-5': optionLocation['Alabama'].length >= 4,'shade-4': optionLocation['Alabama'].length == 3, 'shade-3': optionLocation['Alabama'].length == 2,'shade-2': optionLocation['Alabama'].length == 1, 'shade-1': optionLocation['Alabama'].length == 0 }">p</li>
                <li data-state="tn" class="tn" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">q</li>
                <li data-state="tx" class="tx" v-bind:class="{ 'shade-5': optionLocation.Texas.length >= 4,'shade-4': optionLocation.Texas.length == 3, 'shade-3': optionLocation.Texas.length == 2,'shade-2': optionLocation.Texas.length == 1, 'shade-1': optionLocation.Texas.length == 0 }">r</li>
                <li data-state="ut" class="ut" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">s</li>
                <li data-state="va" class="va" v-bind:class="{ 'shade-5': optionLocation.Virginia.length >= 4,'shade-4': optionLocation.Virginia.length == 3, 'shade-3': optionLocation.Virginia.length == 2,'shade-2': optionLocation.Virginia.length == 1, 'shade-1': optionLocation.Virginia.length == 0 }">t</li>
                <li data-state="vt" class="vt" v-bind:class="{ 'shade-5': optionLocation.Vermont.length >= 4,'shade-4': optionLocation.Vermont.length == 3, 'shade-3': optionLocation.Vermont.length == 2,'shade-2': optionLocation.Vermont.length == 1, 'shade-1': optionLocation.Vermont.length == 0 }">u</li>			
                <li data-state="wa" class="wa" v-bind:class="{ 'shade-5': optionLocation.Washington.length >= 4,'shade-4': optionLocation.Washington.length == 3, 'shade-3': optionLocation.Washington.length == 2,'shade-2': optionLocation.Washington.length == 1, 'shade-1': optionLocation.Washington.length == 0 }">v</li>
                <li data-state="wv" class="wv" v-bind:class="{ 'shade-5': optionLocation['West Virginia'].length >= 4,'shade-4': optionLocation['West Virginia'].length == 3, 'shade-3': optionLocation['West Virginia'].length == 2,'shade-2': optionLocation['West Virginia'].length == 1, 'shade-1': optionLocation['West Virginia'].length == 0 }">w</li>
                <li data-state="wi" class="wi" v-bind:class="{ 'shade-5': optionLocation.Wisconsin.length >= 4,'shade-4': optionLocation.Wisconsin.length == 3, 'shade-3': optionLocation.Wisconsin.length == 2,'shade-2': optionLocation.Wisconsin.length == 1, 'shade-1': optionLocation.Wisconsin.length == 0 }">x</li>
                <li data-state="wy" class="wy" v-bind:class="{ 'shade-5': optionLocation.Alabama.length >= 4,'shade-4': optionLocation.Alabama.length == 3, 'shade-3': optionLocation.Alabama.length == 2,'shade-2': optionLocation.Alabama.length == 1, 'shade-1': optionLocation.Alabama.length == 0 }">y</li>
              </ul>
              <h3 class="text-center">Projects by State</h3>
              <div class="text-center">
                <!-- <small>less</small> -->
                <i class="fas fa-square shade-1"></i>
                <i class="fas fa-square shade-2"></i>
                <i class="fas fa-square shade-3"></i>
                <i class="fas fa-square shade-4"></i>
                <i class="fas fa-square shade-5"></i>
                <!-- <small>more</small> -->
              </div>
            </div>
          </div>
          <!-- End Results, Sort, Display options -->
          
          <!-- Results List -->

          <div class="row d-nonez border-top mt-1 mb-4" id="results-list" v-if="filteredResources.length">
            <span :is="currentView" v-for="resource in filteredResources" v-bind:resource="resource" v-bind:key="resource.Date"></span>
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
import Vue from "vue";
import projects from "../data/projects.json";

import MegaFilter from "./MegaFilter.vue";
import ListItem from "./ListItem.vue";
import CheckFilter from "./CheckFilter.vue";
import SmallGridItem from "./SmallGridItem.vue";
import LargeGridItem from "./LargeGridItem.vue";
import { checkFilter } from "../util/bus";

export default {
  name: "Resources",
  data() {
    return {
      projects: projects,
      currentView: "list-item",
      glazeColor: [
        "Custom Color",
        "Clear",
        "Blue",
        "Bronze",
        "Gray",
        "Green",
        "White"
      ],
      glazesOptions: ["Glass", "Monolithic Glass", "Polycarbonate", "Tempered"],
      materialOptions: [
        "Aluminum",
        "Metal Cladding",
        "Vinyl-Composite",
        "Wood",
        "Wood Cladding",
        "Wood Veneer"
      ],
      finishOptions: [
        "AAMA 2603",
        "AAMA 2604",
        "AAMA 2605",
        "Class I Anodized",
        "Fluoropolymer",
        "Powder Coat"
      ],
      standardColors: [
        "Black",
        "Bronze",
        "Clear Anodized",
        "Dark Bronze Anodized",
        "Green (Hartford)",
        "Mill Aluminum",
        "Natural Clay",
        "Sandstone",
        "White"
      ],
      claddingOptions: [
        "Bronze",
        "Cherry",
        "Copper",
        "Douglas Fir",
        "Hard Maple",
        "Red Oak",
        "Sapele Mahogany",
        "Simulated Lead Coated Copper",
        "Stainless Steel",
        "Walnut",
        "White Ash",
        "White Oak"
      ],
      internatinalOptions: [
        "Europe",
        "Canada"
      ],
      showMap: false,
      showProducts: false,
      showApplications: false,
      showGlazes: false,
      showExtColor: false,
      showIntColor: false,
      showLocations: false,
      showWidths: false,
      showLengthProjections: false,
      showRidgeHeights: false,
      newSearch: "",
      lastSearch: "",
      sortDirection: "asc",
      applications: [],
      glazes: [],
      products: [],
      geoType1: [],
      extColor: [],
      intColor: [],
      locations: [],
      loadNumber: 5,
      totalResults: 0
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
    changeView(component) {
      this.currentView = component;
    },
    toggleMapDisplay() {
      this.showMap = !this.showMap;
    },
    toggleProductsDisplay() {
      this.showProducts = !this.showProducts;
    },
    toggleApplicationsDisplay() {
      this.showApplications = !this.showApplications;
    },
    toggleGlazesDisplay() {
      this.showGlazes = !this.showGlazes;
    },
    toggleGlazeColorsDisplay() {
      this.showGlazeColors = !this.showGlazeColors;
    },
    toggleGlazeCoatingDisplay() {
      this.showGlazeCoating = !this.showGlazeCoating;
    },
    toggleExtColorDisplay() {
      this.showExtColor = !this.showExtColor;
    },
    toggleIntColorDisplay() {
      this.showIntColor = !this.showIntColor;
    },
    toggleLocationDisplay() {
      this.showLocations = !this.showLocations;
    },
    toggleWidthsDisplay() {
      this.showWidths = !this.showWidths;
    },
    toggleLengthProjectionsDisplay() {
      this.showLengthProjections = !this.showLengthProjections;
    },
    toggleRidgeHeightsDisplay() {
      this.showRidgeHeights = !this.showRidgeHeights;
    },
    changeSortDirection() {
      if (this.sortDirection === "desc") {
        this.sortDirection = "asc";
      } else {
        this.sortDirection = "desc";
      }
    },
    getArrayDiff(a, b) {
      var ret = [];
      if (!(Array.isArray(a) && Array.isArray(b))) {
        return ret;
      }
      var i;
      var key;
      for (i = a.length - 1; i >= 0; i--) {
        key = a[i];
        if (-1 === b.indexOf(key)) {
          ret.push(key);
        }
      }
      return ret;
    },
    appendItems() {
      if (this.filteredResources.length < this.projects.length) {
        this.loadNumber = this.loadNumber + 10;
      }
    },
    filterProducts(proj) {
      if (!this.products.length) {
        return true;
      } else {
        let projProducts = proj.Products;
        let matched = [];
        projProducts.forEach(proj => {
          if(this.products.includes(proj.ProductName)){
            matched.push(true);
          }
        });
        if(matched.length != this.products.length){
          return false;
        }else{
          return true;
        }
        // FILTER IN CODE
        // this.products.forEach(app => {
        //   for (var i = 0; i < projProducts.length; i++) {
        //     if (projProducts[i].ProductName === app) {
        //       matched = true;
        //     }
        //   }
        // });
        // return matched;
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
    },
    filterExtColor(proj) {
      if (!this.extColor.length) {
        return true;
      } else {
        let projExtColors = proj.ExtColor;
        let matched = true;
        this.extColor.forEach(app => {
          if (projExtColors.indexOf(app) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    },
    filterIntColor(proj) {
      if (!this.intColor.length) {
        return true;
      } else {
        let projIntColors = proj.IntColor;
        let matched = true;
        this.intColor.forEach(app => {
          if (projIntColors.indexOf(app) === -1) {
            matched = false;
          }
        });
        return matched;
      }
    },
    filterLocations(proj) {
      if (!this.locations.length) {
        return true;
      } else {
        let projLocations = proj.Location;
        let matched = true;
        this.locations.forEach(loc => {
          if (projLocations.indexOf(loc) === -1) {
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
    optionProducts() {
      const products = this.projects.reduce((acc, proj) => {
        if (Array.isArray(proj.Products)) {
          proj.Products.forEach(product => {
            (acc[product.ProductName] = acc[product.ProductName] || []).push(
              proj.ProjectID
            );
          });
        }
        return acc;
      }, {});

      return products;
    },
    listProducts() {
      let list = [];
      Object.keys(this.optionProducts).forEach(function(key) {
        // do something with obj[key]
        list.push(key);
      });
      return list.sort();
    },
    optionApplications() {
      const apps = this.projects.reduce((acc, proj) => {
        if (Array.isArray(proj.Application)) {
          proj.Application.forEach(app => {
            (acc[app] = acc[app] || []).push(proj.ProjectID);
          });
        }
        return acc;
      }, {});

      return apps;
    },
    listApplications() {
      let list = [];
      Object.keys(this.optionApplications).forEach(function(key) {
        // do something with obj[key]
        list.push(key);
      });
      return list.sort();
    },
    optionGlazes() {
      return this.projects.reduce((acc, proj) => {
        if (Array.isArray(proj.Glazes)) {
          proj.Glazes.forEach(glaze => {
            (acc[glaze] = acc[glaze] || []).push(proj.ProjectID);
          });
        }
        return acc;
      }, {});
    },
    listGlazeCoatings() {
      let list = [];
      Object.keys(this.optionGlazes).forEach(function(key) {
        // do something with obj[key]
        list.push(key);
      });

      // glazeColor glaze
      list = this.getArrayDiff(list, this.glazeColor);
      list = this.getArrayDiff(list, this.glazesOptions);
      return list.sort();
    },
    optionExtColor() {
      const apps = this.projects.reduce((acc, proj) => {
        if (Array.isArray(proj.ExtColor)) {
          proj.ExtColor.forEach(app => {
            (acc[app] = acc[app] || []).push(proj.ProjectID);
          });
        }
        return acc;
      }, {});

      return apps;
    },
    listExtColor() {
      let list = [];
      Object.keys(this.optionExtColor).forEach(function(key) {
        // do something with obj[key]
        list.push(key);
      });
      list = this.getArrayDiff(list, this.materialOptions);
      list = this.getArrayDiff(list, this.finishOptions);
      list = this.getArrayDiff(list, this.standardColors);
      list = this.getArrayDiff(list, this.claddingOptions);
      return list.sort();
    },
    optionIntColor() {
      const apps = this.projects.reduce((acc, proj) => {
        if (Array.isArray(proj.IntColor)) {
          proj.IntColor.forEach(app => {
            (acc[app] = acc[app] || []).push(proj.ProjectID);
          });
        }
        return acc;
      }, {});

      return apps;
    },
    listIntColor() {
      let list = [];
      Object.keys(this.optionIntColor).forEach(function(key) {
        // do something with obj[key]
        list.push(key);
      });
      list = this.getArrayDiff(list, this.materialOptions);
      list = this.getArrayDiff(list, this.finishOptions);
      list = this.getArrayDiff(list, this.standardColors);
      list = this.getArrayDiff(list, this.claddingOptions);
      return list.sort();
    },
    optionLocation() {
      const apps = this.projects.reduce((acc, proj) => {
        if (proj.Location !== "n/a") {
          // proj.Application.forEach(app => {
            (acc[proj.Location] = acc[proj.Location] || []).push(proj.ProjectID);
          // });
        }
        return acc;
      }, {});

      return apps;
    },
    listLocation() {
      let list = [];
      Object.keys(this.optionLocation).forEach(function(key) {
        list.push(key);
      });
      list = this.getArrayDiff(list, this.internatinalOptions);
      return list.sort();
    },
    optionWidth() {
      const apps = this.projects.reduce((acc, proj) => {
        if (proj.Width !== "-") {
          // proj.Application.forEach(app => {
            (acc[proj.Width] = acc[proj.Width] || []).push(proj.ProjectID);
          // });
        }
        return acc;
      }, {});

      return apps;
    },
    listWidth() {
      let list = [];
      Object.keys(this.optionWidth).forEach(function(key) {
        list.push(key);
      });
      return list.sort();
    },
    optionRidgeHeight() {
      const apps = this.projects.reduce((acc, proj) => {
        if (proj.RidgeHeight !== "-") {
          // proj.Application.forEach(app => {
            (acc[proj.RidgeHeight] = acc[proj.RidgeHeight] || []).push(proj.ProjectID);
          // });
        }
        return acc;
      }, {});

      return apps;
    },
    listRidgeHeight() {
      let list = [];
      Object.keys(this.optionRidgeHeight).forEach(function(key) {
        list.push(key);
      });
      return list.sort();
    },
    filteredResources() {
      let proj = this.projects;

      if (this.newSearch.startsWith("pid:")) {
        proj = proj.filter(project => {
          let newSearch = this.newSearch.toLowerCase().replace(/ /g, "");
          newSearch = newSearch.replace("pid:", "");
          return project.ProjectID.toLowerCase().includes(newSearch);
        });
      } else if (this.newSearch.startsWith("desc:")) {
        proj = proj.filter(project => {
          let newSearch = this.newSearch.toLowerCase();
          newSearch = newSearch.replace("desc: ", "").replace("desc:", "");
          return project.Description.toLowerCase().includes(newSearch);
        });
      } else {
        proj = proj.filter(project => {
          if(project.Description.toLowerCase().includes(this.newSearch.toLowerCase())){
            return project.Description.toLowerCase().includes(this.newSearch.toLowerCase());
          }else if(project.ProjectID.toLowerCase().includes(this.newSearch.toLowerCase())){
            return project.ProjectID.toLowerCase().includes(this.newSearch.toLowerCase());
          }
        });
      }

      let projFiltered = proj
        .filter(this.filterApplications)
        .filter(this.filterGlazes)
        .filter(this.filterExtColor)
        .filter(this.filterIntColor)
        .filter(this.filterLocations)
        .filter(this.filterProducts);

      let projFilteredSorted = projFiltered.sort(function(a, b) {
        return a.Date - b.Date;
      });
      if (this.sortDirection === "asc") {
        projFilteredSorted = projFilteredSorted.reverse();
      }
      this.totalResults = projFilteredSorted.length;
      return projFilteredSorted.slice(0, this.loadNumber);

      // .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
    }
  },
  created() {
    this.$bus.$on("check-filter", checkFilter.bind(this));
  },
  mounted: function() {
    var vueInstance = this;
    var elem = document.getElementById("product-list-bottom");
    var watcher = scrollMonitor.create(elem);
    watcher.enterViewport(function() {
      vueInstance.appendItems();
    });
  }
};
</script>

<style scoped>
pointer {
  cursor: pointer;
}
.stately {
    width: 500px;     
    font-size: 500px; 
    color: black;
    background: none;
}
.shade-1{
  color:#D8D8D8;
}
.shade-2{
  color:#989898;
}
.shade-3{
  color:#808080;
}
.shade-4{
  color:#686868;
}
.shade-5{
  color:#383838;
}
</style>



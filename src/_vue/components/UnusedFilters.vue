<!-- <div class="d-flex flex-column">
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

        <hr class="my-2"> -->


// optionWidth() {
    //   const apps = this.projects.reduce((acc, proj) => {
    //     if (proj.Width !== "-") {
    //       // proj.Application.forEach(app => {
    //         (acc[proj.Width] = acc[proj.Width] || []).push(proj.ProjectID);
    //       // });
    //     }
    //     return acc;
    //   }, {});

    //   return apps;
    // },
    // listWidth() {
    //   let list = [];
    //   Object.keys(this.optionWidth).forEach(function(key) {
    //     list.push(key);
    //   });
    //   return list.sort();
    // },
    // optionRidgeHeight() {
    //   const apps = this.projects.reduce((acc, proj) => {
    //     if (proj.RidgeHeight !== "-") {
    //       // proj.Application.forEach(app => {
    //         (acc[proj.RidgeHeight] = acc[proj.RidgeHeight] || []).push(proj.ProjectID);
    //       // });
    //     }
    //     return acc;
    //   }, {});

    //   return apps;
    // },
    // listRidgeHeight() {
    //   let list = [];
    //   Object.keys(this.optionRidgeHeight).forEach(function(key) {
    //     list.push(key);
    //   });
    //   return list.sort();
    // },
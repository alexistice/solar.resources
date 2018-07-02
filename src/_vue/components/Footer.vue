<template>
  <div>

    <div>
        <div style="color:red;" v-for="(data, key) in groupByProjectID" v-bind:key="data.ID">
          {{ key }}: {{data}}
        </div>
    </div>


    <div>
        <div v-for="data in projects" v-bind:key="data.id">{{data.ID}}</div>
    </div>
  </div>
</template>

<script>
import projects from '../data/projects.json';

export default {
  name: 'My-Footer',
  data () {
    return {
      projects: projects
    }
  },
  computed:{
    groupByProjectID(){
      return this.projects.reduce((acc, proj) => {
        (acc[proj.ProjectID] = acc[proj.ProjectID] || []).push(proj.ID)
        return acc
      }, {})
    }
  }
}
</script>

<style scoped>
h1 {color: red}
</style>

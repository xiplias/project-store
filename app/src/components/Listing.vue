<style scoped>
  .main {
    padding-top: 85px;
    margin: 0% 15% 0%;
  }
</style>

<template>
  <div class="main">
    <h2>Projects</h2>
    <table>
      <tbody>
        <tr v-for="project in projects">
          <td><router-link :to="{ name: 'project', params: { id: project._id } }">{{project.title || 'Untitled'}}</router-link></td>
          <td>{{project.updatedAt | since}}</td>
        </tr>
      </tbody>
    </table>

    <router-link :to="{ name: 'project', params: { id: this.newUUID }}" class="button button-outline">New Project</router-link>
  </div>
</template>

<script>
  import moment from 'moment'
  import db from '../db'
  import uuid from 'uuid'

  export default {
    data () {
      return {
        newUUID: uuid.v1(),
        projects: []
      }
    },
    created: function () {
      this.getDBDocument()
    },
    methods: {
      getDBDocument () {
        console.log('get data')
        const that = this

        db.find({}, (err, data) => {
          if (err) return console.log('err', err)
          console.log(data)
          that.projects = data
        })
      }
    },
    filters: {
      since: (date) => moment(date).format('LLL')
    },
    name: 'project'
  }
</script>

<style scoped>
  .main {
    padding-top: 80px;
    height: 100%;
  }

  input, textarea {
    font: menu;
    width: 70%;
    margin: 0% 15% 0%;
    padding: 0;
    border: 0;
    outline: none;
    -webkit-font-smoothing: antialiased;
    color: #606c76;
  }

  .back {
    position: absolute;
    top: 10px;
    left: 100px;
  }

  .title {
    font-size: 2.2em;
  }

  .subtitle {
    padding-top: 10px;
    font-size: 1.4em;
    font-weight: 300;
  }

  .description {
    padding: 1em 0;
    font-size: 1em;
  }
</style>

<template>
  <div class="main">
    <router-link to="{ path: '/'}" class="back">Listing</router-link>
    <div><input class="title" v-model="title" placeholder="Project title" /></div>
    <div><input class="subtitle" v-model="subtitle" placeholder="Subtitle" /></div>
    <div><autosize-textarea :handle-change="handleChange" :value="description" class="description" placeholder="Description"></autosize-textarea></div>
  </div>
</template>

<script>
  import AutosizeTextarea from './AutosizeTextarea'
  import db, { updateDoc } from '../db'

  export default {
    components: {
      AutosizeTextarea
    },
    data () {
      return {
        title: '',
        subtitle: '',
        description: ''
      }
    },
    watch: {
      title (val) {
        updateDoc(this.$route.params.id, 'title', val, (err, result) => {
          if (err) return console.log('err', err)
        })
      },
      subtitle (val) {
        updateDoc(this.$route.params.id, 'subtitle', val, (err, result) => {
          if (err) return console.log('err', err)
        })
      },
      description (val) {
        updateDoc(this.$route.params.id, 'description', val, (err, result) => {
          if (err) return console.log('err', err)
        })
      }
    },
    created: function () {
      this.getDBDocument(this.$route.params.id)
    },
    methods: {
      getDBDocument (id) {
        const that = this

        db.findOne({_id: id}, (err, data) => {
          if (err) return console.log('err', err)
          if (data === null) return
          if (data.title !== null) that.title = data.title
          if (data.subtitle !== null) that.subtitle = data.subtitle
          if (data.description !== null) that.description = data.description
        })
      },
      handleChange (e) {
        this.description = e.target.value
      }
    },
    name: 'project'
  }
</script>

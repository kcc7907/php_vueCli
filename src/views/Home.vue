<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getData">Get PHP Api</button>
    <textarea v-html="phpContent"></textarea>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      phpContent: "",
    }
  },
  methods: {
    getData() {
      const root = process.env.NODE_ENV === 'production'
                    ? process.env.VUE_APP_SUB_PATH
                    : 'public/'

      const url = 'api'

      this.$axios.get(url).then( res => {
        this.phpContent = 'Data From : &#10;&#10; '
                          + res.data 
                          + '&#10;&#10;PHP File Path : &#10;&#10; '
                          + `./${root}${url }/index.php`
                          + '&#10;&#10;Api Url Path : &#10;&#10; '
                          + res.request.responseURL
      })
    },
  },
};
</script>

<style lang="scss">
:root {
  --primary: #42b983;
  --fs: 20px;
  --b-radios: 10px;
}

button {
  display: block;
  margin: 0 auto 2em;
  padding: 0.5em 1em;
  outline: 0;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: var(--fs);
  background: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--b-radios);
  &:hover{
    color: #354a5f;
  }
}

textarea {
  border: 2px solid var(--primary);
  padding: 1em;
  font-size: var(--fs);
  border-radius: var(--b-radios);
  width: 350px;
  height: 300px;
}
</style>

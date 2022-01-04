<template>
  <div class="app-ctn">
    <Header />
    <RouterView class="mt-60"/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
:root {
  --border-color: rgba(219,219,219,1);
  --grey-text: #aaaaaa;
  --blue-text: #0095F6;
}
.section {
  display: flex;
  justify-content: center;
}
.section.page {
  margin: 28px 0;
}
.section > .inner {
  width: 935px;
  position: relative;
}
button {
  cursor: pointer;
}
.clear-btn {
  outline: none;
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
  color: var(--grey-text);
}
.fade {
  opacity: 0.3;
}
.mt-60 {
  padding-top: 60px;
}
</style>


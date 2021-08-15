<template>
  <div>
    <Headline />
    <Search />
    <MovieList />
    <!-- 웹팩에서만 가능한 것 (컴포넌트구나!) -->
  </div>
</template>

<script>
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'
import Headline from '@/components/Headline'

export default {
  components: {
    Search,
    MovieList,
    Headline
  }
}
</script>

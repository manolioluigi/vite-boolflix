<script>

import { store } from '../store';
import MovieCard from './MovieCard.vue';
import SeriesCard from './SeriesCard.vue';

    export default {

        name: 'AppMain',

        components: {
            MovieCard,
            SeriesCard
        },

        data() {
            return {
                store,
            }
        }
    }

</script>

<template>

    <div class="container-fluid">

        <div class="row">

            <div class="col-12">
                <div>
                    {{ store.movies.length }} Film / {{ store.series.length }} Serie trovati/e
                </div>
                <div class="card-container">
                    <MovieCard v-for="(item, index) in store.movies" :key="index" :movie="item" />
                    <SeriesCard v-for="(item, index) in store.series" :key="index" :series="item" />
                </div>
            </div>

        </div>

    </div>
  
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .card-container{
        display: flex;
        flex-wrap: wrap;
    }

</style>
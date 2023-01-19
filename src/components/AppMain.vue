<script>

import { store } from '../store';
import MovieCard from './MovieCard.vue';
import SeriesCard from './SeriesCard.vue';
import PopularCard from './PopularCard.vue';
import PopularSeriesCard from './PopularSeriesCard.vue';

    export default {

        name: 'AppMain',

        components: {
            MovieCard,
            SeriesCard,
            PopularCard,
            PopularSeriesCard
        },

        data() {
            return {
                store,
            }
        }
    }

</script>

<template>

    <div class="container-fluid d-flex flex-row justify-content-center">

        <div class="row">

            <div class="col-12">
                <div class="row" v-if="store.popularFlag">
                    <div class="col-12 my-2 width-100">
                        <h4>Film del momento</h4>
                    </div>
                </div>
                <div class="row" v-if="store.popularFlag">
                    <div class="col-12 width-100">
                        <div class="card-container">
                            <PopularCard v-for="(item, index) in store.populars" :key="index" :popular="item"></PopularCard>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="store.popularFlag">
                    <div class="col-12 my-2 width-100">
                        <h4>Serie TV del momento</h4>
                    </div>
                </div>
                <div class="row" v-if="store.popularFlag">
                    <div class="col-12 width-100">
                        <div class="card-container">
                            <PopularSeriesCard v-for="(item, index) in store.popularSeries" :key="index" :popularSeries="item"></PopularSeriesCard>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="store.movieFlag">
                    <div class="col-12 my-2 width-100">
                        <h4>Film trovati</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 width-100">
                        <div class="card-container">
                            <MovieCard v-for="(item, index) in store.movies" :key="index" :movie="item" />
                        </div>
                    </div>
                </div>
                <div class="row" v-if="store.seriesFlag">
                    <div class="col-12 my-2 width-100">
                        <h4>Serie TV trovate</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 width-100">
                        <div class="card-container">
                            <SeriesCard v-for="(item, index) in store.series" :key="index" :series="item" />
                        </div>
                    </div>
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
        justify-content: start;
    }

    .witdh-100{
        width: 100%;
    }

</style>
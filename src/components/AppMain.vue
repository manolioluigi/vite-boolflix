<script>

import { store } from '../store';
import Card from './Card.vue';
import axios from 'axios';

    export default {

        components: {
            Card,
        },

        name: 'AppMain',
        data() {
            return {
                store,
                text: '',
            }
        },

        methods: {
        search(text) {
            let call = store.movieCall + text;
            axios.get(call).then((response) => {
                store.movies = response.data.results
            })
            let callSeries = store.seriesCall + text;
            axios.get(callSeries).then((response) => {
                store.series = response.data.results
            })
        }
    }

    }
</script>

<template>

    <div class="container-fluid">

        <div class="row">

            <div class="col-12">

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cerca un film" v-model="text" @keyup.enter="search(text)">
                    <button class="btn btn-outline-secondary" type="button" @click="search(inputText)">Cerca</button>
                </div>
                
                <div>
                    {{ store.movies.length }} Film / {{ store.series.length }} Serie trovati/e
                </div>
                <div class="card-container">
                    <Card v-for="(item, index) in store.movies" :key="index" :movie="item" />
                    <Card v-for="(item, index) in store.series" :key="index" :series="item" />
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
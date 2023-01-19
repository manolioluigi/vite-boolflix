<script>
    import { store } from '../store';
    import axios from 'axios';

    export default {

        name: 'AppHeader',

        data() {
            return {
                store,
                text: '',
            }
        },

        created() {
            this.getPopulars()
            this.getPopularSeries()
        },

        methods: {
            search(text) {
                let call = store.movieCall + text;
                axios.get(call).then((response) => {
                    store.movies = response.data.results
                    store.movieFlag = true
                })
                let callSeries = store.seriesCall + text;
                axios.get(callSeries).then((response) => {
                    store.series = response.data.results
                    store.seriesFlag = true
                })
                store.popularFlag = false
            },

            showBar(){
                if(store.mGlass == false){
                    store.mGlass = true
                }else{
                    store.mGlass = false
                }
                console.log(store.mGlass)
            },

            getPopulars(){
                let callPopulars = store.popularsCall;
                axios.get(callPopulars).then((response) => {
                    store.populars = response.data.results
                    store.populars = store.populars.slice(0, 5)
                })
            },

            getPopularSeries(){
                let callPopularSeries = store.popularSeriesCall;
                axios.get(callPopularSeries).then((response) => {
                    store.popularSeries = response.data.results
                    store.popularSeries = store.popularSeries.slice(0, 5)
                })
            },

        }

    }
</script>

<template>

    <div class="container-fluid d-flex flex-row justify-content-between row-height align-items-center">
        <div class="row row-height align-items-center">
            <div class="col-6">
                <div class="d-flex flex-row">
                    <img class="logo" src="../assets/images/netflix-logo.png" alt="logo">
                    <ul class="menu align-items-center">
                        <li class="active">Home</li>
                        <li>Serie Tv</li>
                        <li>Film</li>
                        <li>Originali</li>
                        <li>Aggiunti di recente</li>
                        <li>La mia lista</li>
                    </ul>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flew-row justify-content-end align-items-center">
                    <div v-if="store.mGlass" class="input-group">
                        <input type="text" class="form-control" placeholder="Cerca un film" v-model="this.text" @keyup.enter="search(this.text)">
                    </div>
                    <i v-if="!store.mGlass" class="fa-solid fa-magnifying-glass mx-3" type="button" @click="showBar()"></i>
                    <i v-if="store.mGlass" class="fa-solid fa-circle-xmark mx-3" type="button" @click="showBar()"></i>
                    <span>BAMBINI</span>
                    <div class="alert-icon mx-3">
                        <i class="fa-solid fa-bell"></i>
                        <div class="alert">1</div>
                    </div>
                    <i class="fa-solid fa-user user"></i>
                    <i class="fa-solid fa-caret-down mx-1"></i>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .row-height{
        height: 7vh;
    }
    .logo{
        max-height: 3vh;
    }
    
    .alert-icon{
        position: relative;
    }
    .alert{
        background-color: $red;
        width: 5px;
        height: 5px;
        padding: 6px;
        font-size: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -10px;
        top: 0;
    }

    .user{
        background-color: $gray;
        padding: 10px;
        border-radius: 10px;
    }
    
    .menu{
        font-size: 13px;
        margin-bottom: 0;
        display: flex;
        list-style: none;
        li{
            color: $gray;
            margin: 0 10px;
        }
        .active{
            color: white;
        }
    }

    .input-group{
        width: 25vw;
        input{
            max-width: 25vw;  
        }
    }
    

</style>
<script>

    export default {
        name: 'PopularSeriesCard',
        props:{
            popularSeries: Object
        },

        computed: {
            stars() {
                let stars = [];
                for (let i = 0; i < 5; i++) {
                    if (i < Math.round(this.popularSeries.vote_average / 2)) {
                    stars.push(i);
                    }
                }
                return stars;
            },
            emptyStars() {
                let emptystars = [];
                for (let i = 0; i < 5 - Math.round(this.popularSeries.vote_average / 2); i++) {
                    emptystars.push(i);
                }
                return emptystars;
            }

        },

    }
</script>

<template>
  
  <div class="card bg-darkgray">
        <img v-if="popularSeries.poster_path !== null" class="img-fluid poster-bg" :src="`https://www.themoviedb.org/t/p/w342/${(popularSeries.poster_path)}`">
        <img v-if="popularSeries.poster_path == null" class="replacement" src="https://media.gqitalia.it/photos/5f2bcea39dfa417e8f7023f3/master/pass/N-icon%20(1).png" :alt="popularSeries.original_title">
        <div class="overlay">
            <div class="content-card">
                <h5>{{ popularSeries.name }}</h5>
                <p>Titolo Originale: {{ popularSeries.original_name }}</p>
                <div class="lingua">
                    <span>Lingua originale: </span>
                    <img :src="popularSeries.original_language == 'en' ? `https://www.countryflagicons.com/FLAT/64/GB.png` : popularSeries.original_language == 'ja' ? `https://www.countryflagicons.com/FLAT/64/JP.png` : `https://www.countryflagicons.com/FLAT/64/${popularSeries.original_language.toUpperCase()}.png`" :alt="popularSeries.original_language">
                </div>
                <p>Voto: 
                    <i v-for="n in stars" class="fa-solid fa-star"></i>
                    <i v-for="n in emptyStars" class="fa-regular fa-star"></i>
                </p>
                <p class="overview my-2">{{ popularSeries.overview }}</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;
    

    .card{
        display: flex;
        width: auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        text-align: center;
        img{
            width: 18vw;
            object-fit: fill;
            min-height: 100%;
        }
        p{
            margin: 0;
        }
        .lingua{
            display: flex;
            align-items: center;
        }
        .content-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 18vw;
            padding: 5%;
                img{
                    width: 20px;
                    margin: 5px;
                }
            .overview{
                height: 15vh;
                overflow-y: auto;
            }
        } 

        .overlay{
            display: none;
        }

    }

    .card:hover .overlay{
        display: block;
    }

    .card:hover .poster-bg{
        display: none;
    }

    .card:hover .replacement{
        display: none;
    }

    .bg-darkgray{
        background-color: $dark-gray;
    }

</style>
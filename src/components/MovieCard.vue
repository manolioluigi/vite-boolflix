<script>
    export default {
        name: 'MovieCard',
        props: {
            movie: Object
        },

        computed: {
            stars() {
                let stars = [];
                for (let i = 0; i < 5; i++) {
                    if (i < Math.round(this.movie.vote_average / 2)) {
                    stars.push(i);
                    }
                }
                return stars;
            },
            emptyStars() {
                let emptystars = [];
                for (let i = 0; i < 5 - Math.round(this.movie.vote_average / 2); i++) {
                    emptystars.push(i);
                }
                return emptystars;
            }
        },

    }
</script>

<template>
  
    <div class="card">
        <img class="img-fluid" :src="`https://www.themoviedb.org/t/p/w342/${(movie.poster_path)}`">
        <div class="content-card">
            <h4>Titolo: {{ movie.title }}</h4>
            <p>Titolo Originale: {{ movie.original_title }}</p>
            <div class="lingua">
                <span>Lingua originale: </span>
                <img :src="movie.original_language == 'en' ? `https://www.countryflagicons.com/FLAT/64/GB.png` : movie.original_language == 'ja' ? `https://www.countryflagicons.com/FLAT/64/JP.png` : `https://www.countryflagicons.com/FLAT/64/${movie.original_language.toUpperCase()}.png`" :alt="movie.original_language">
            </div>
            <p>Voto: 
                <i v-for="n in stars" class="fa-solid fa-star"></i>
                <i v-for="n in emptyStars" class="fa-regular fa-star"></i>
            </p>

        </div>
    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;
    

    .card{
        display: flex;
        width: 20vw;
        background-color: gray;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        img{
            width: 18vw;
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
                img{
                    width: 20px;
                    margin: 5px;
                }
        } 
    }

</style>
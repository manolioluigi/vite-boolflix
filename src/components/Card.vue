<script>
    export default {
        name: 'Card',
        props: {
            movie: Object,
        },
    }
</script>

<template>
  
    <div class="card">
        <img :src="`https://www.themoviedb.org/t/p/w300/${(movie.poster_path)}`">
        <div class="content-card">
            <h4>Titolo: {{ movie.title }}</h4>
            <p>Titolo Originale: {{ movie.original_title }}</p>
            <div class="lingua">
                <span>Lingua originale: </span>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${(movie.original_language).toUpperCase()}.png`">
            </div>
            <p>Voto medio: {{ movie.vote_average }}</p>
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
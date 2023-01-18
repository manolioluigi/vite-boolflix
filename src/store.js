import { reactive } from 'vue';

export const store = reactive({
    key: '41fb86ece47e44ca2b2eb2f46467e3a2',
    movieCall: 'https://api.themoviedb.org/3/search/movie?api_key=41fb86ece47e44ca2b2eb2f46467e3a2&language=it-IT&query=',
    movies: [],
    seriesCall: 'https://api.themoviedb.org/3/search/tv?api_key=41fb86ece47e44ca2b2eb2f46467e3a2&language=it-IT&query=',
    series: []
});
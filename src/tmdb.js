import { type } from "@testing-library/user-event/dist/type"

const API_KEY = '21c8c937dfa28915a5509302845eaca6'
const API_BASE = "https://api.themoviedb.org/3"

// original da net netflix
// recomendados
// em alta
// acao
// comedia
// terro
// romance
// domentarios

    const basicFetch = async (endpoint) =>{
        const req = await fetch(`${API_BASE}${endpoint}`)
        const json = await req.json()
        return json
    }

    export default {
        getHomelist: async () =>{
            return[{
                slug:'originals',
                title:"Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:"Recomendados para Você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:"Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:"Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:"Comedia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:"Terro",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:"Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:"Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }]
        },
            getMovieInfo: async(moviveId, type) =>{
                let info = {}

                if(moviveId){
                    switch(type){
                        case "movie":
                            info = await basicFetch(`/movie/${moviveId}?language=pt-BR&api_key=${API_KEY}`)
                            break;
                        case 'tv':
                            info = await basicFetch(`/tv/${moviveId}?language=pt-BR&api_key=${API_KEY}`)
                            break;
                            
                            default:
                                info = null
                                break;
                        }

                    
                }
                return info
            }

    }
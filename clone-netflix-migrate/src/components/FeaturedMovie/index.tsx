import './FeaturedMovie.css';

export interface FeaturedMovieProps {
    id: string;
    first_air_date: string
    overview: string
    backdrop_path: string
    original_name: string
    vote_average: number
    number_of_seasons: number
}

interface FeaturedMovieGenres {
    name: string;
}

export default function FeaturedMovie(item: FeaturedMovieProps){
        const firsDate = new Date(item.first_air_date)
        const genres :Array<FeaturedMovieGenres> = []
        const genreName: string[] = []
        for(const i in genres){
            genreName.push(genres[i].name)
        }

        let descriptions = item.overview
        if(descriptions.length >200){
            descriptions = descriptions.substring(0,200)+"..."
        }

    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firsDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}</div>

                    </div>
                    <div className="featured--descriptions">{descriptions}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured-watchbuntton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured-mylistbuntton">+ Minha Lista</a>

                    </div>
                    <div className="featured--genres"><strong>Gêneros: {genreName.join(', ')}</strong></div>
                </div>
            </div>
        </section>);
}
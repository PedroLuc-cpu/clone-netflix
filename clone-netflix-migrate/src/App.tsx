import { useEffect, useState } from "react";
import tmdb from "./tmdb";
import FeaturedMovie, { FeaturedMovieProps } from "./components/FeaturedMovie";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";

interface Movie {
    id: string;
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    name: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number
    release_date: string;
    title: string;
    video: boolean
    vote_average: number
    vote_count: number
}

interface Item {
  results: Movie[]
}

interface getHomelistInterfaces {
  slug: string;
  title: string
  items : Item
}

function App() {
  const [movieList, setMovieList] = useState<getHomelistInterfaces[]>([]);
  const [FeaturedData, setFeaturedData] = useState<FeaturedMovieProps | null>(null)

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
  try {
    const list = await tmdb.getHomelist();
    setMovieList(list);

    const originals = list.find((i) => i.slug === "originals");
    if (originals) {
      const randomChosen = Math.floor(Math.random() * originals.items.length);
      const chosen = originals.items[randomChosen];
      const chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo as FeaturedMovieProps | null); 
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  console.table(FeaturedData)

  return (
    <div className="page">
      <Header black={blackHeader} />

      {FeaturedData && <FeaturedMovie {...FeaturedData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>Feito com muito carinho. Direito de imagem para Netflix.</footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;

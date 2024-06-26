import Results from "@/Components/Results";
import Spinner from "@/Components/Spinner";
import { Suspense } from 'react';

const API_KEY = process.env.API_KEY;



function SuspenseWrapper({ children }) {
  return (
    <Suspense fallback={<Spinner />}>
      {children}
    </Suspense>
  );
}
async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";


  const res =  await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,{
      next:{revalidate:60}
    });

    const data = await res.json()
    if(!res.ok) throw new Error('failed to fetch data')
    const result = data.results
  // console.log(result)
  return <div>
    
    {result?<Results result={result}/>:<Spinner />}
  </div>;
}

export default function HomePage({ searchParams }) {
  return (
    <SuspenseWrapper>
      <Home searchParams={searchParams} />
    </SuspenseWrapper>
  );
}

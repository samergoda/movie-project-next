import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'

export default function NavBarItem({ title, param }) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <NavBarItemContent title={title} param={param} />
    </Suspense>
  );
}

function NavBarItemContent({ title, param }) {
  const searchParams = useSearchParams();
  let genre = searchParams.get("genre");
  
  return (
    <Link
      className={`hover:text-amber-600 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}

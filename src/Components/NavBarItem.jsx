import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  return <NavBarItemContent title={title} param={param} />;
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

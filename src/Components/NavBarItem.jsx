"use client";
import Link from "next/link";
import { Suspense } from 'react'; 
import { useSearchParams } from "next/navigation";

function SuspenseWrapper({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}

export default function NavBarItem({ title, param }) {
  return (
    <SuspenseWrapper>
      <NavBarItemContent title={title} param={param} />
    </SuspenseWrapper>
  );
}

function NavBarItemContent({ title, param }) {
  const searchParams = useSearchParams();
  let genre = searchParams.get("genre");
  return (
    <Link
      className={`hover:text-amber-600 font-semibold  ${
        genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg " : ""
      }}`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}

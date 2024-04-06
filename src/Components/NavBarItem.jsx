"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
//453dc5c6587566b1dc3d1aac4a0bcc9a
export default function NavBarItem({ title, param }) {
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

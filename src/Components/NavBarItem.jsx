// Import necessary components
import Link from "next/link";
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";

// Suspense wrapper for components using useSearchParams
function SuspenseWrapper({ children }) {
  return (
    <Suspense fallback={<div>Loading Navigation...</div>}>
      {children}
    </Suspense>
  );
}

// Navigation bar item component with search parameter handling
export default function NavBarItem({ title, param }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Helper function to update search parameters
  const handleGenreChange = () => {
    setSearchParams({ genre: param });
  };

  return (
    <SuspenseWrapper>
      <Link
        className={`hover:text-amber-600 font-semibold py-2 px-4 rounded-lg 
          ${searchParams.get("genre") === param ? "bg-amber-100 text-amber-700" : ""}`}
        href={`/?genre=${param}`}
        onClick={handleGenreChange} // Update search params on click
      >
        {title}
      </Link>
    </SuspenseWrapper>
  );
}

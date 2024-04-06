'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter()
  function handleSubmit(e){
    e.preventDefault()
    router.push(`/search/${search}`)
  }
  return (
    <form className="flex justify-between px-5 border  bg-gray-500 max-w-6xl mx-auto border-gray-900  " onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search"
        className="w-full  px-4 h-14 rounded-md  bg-gray-500 placeholder-gray-800"
      />
      <button className="text-amber-600 disabled:text-gray-400" disabled={search === ""}>
        Search
      </button>
    </form>
  );
}

export default SearchBox;

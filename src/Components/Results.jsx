import Card from "./Card"

function Results({result}) {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4   gap-5">
            {result.map((res)=>(
             <Card key={res.id} res={res} />
            ))}
        </div>
    )
}

export default Results

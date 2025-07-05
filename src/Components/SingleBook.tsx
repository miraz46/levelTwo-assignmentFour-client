import { Link, useParams } from "react-router";
import { useGetSingleBooksQuery } from "../redux/api/baseApi";



const SingleBook = () => {
    const { id } = useParams();

    const { data = [], isLoading, isError } = useGetSingleBooksQuery(id as string);
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError) return <p className="text-red-600 text-center mt-10">Failed to load books.</p>;


    if (!data) {
        return <div className="text-center text-red-600 mt-10">Book not found.</div>;
    }

    const { title, author, genre, isbn, copies, available, description } = data.data;
    console.log(typeof data, data);

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow-lg mt-10">

            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>ISBN:</strong> {isbn}</p>
            <p><strong>Description:</strong> <br /> {description}</p>
            <p><strong>Copies Available:</strong> {copies}</p>
            <p>
                <strong>Status:</strong>
                <span className={`font-semibold ml-2 ${available ? "text-green-600" : "text-red-600"}`}>
                    {available ? "Available" : "Unavailable"}
                </span>
            </p>
            <div className="mt-6 flex gap-4">
                <Link to="/" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active">Go Back</button></Link>

            </div>
        </div>
    );
};

export default SingleBook;
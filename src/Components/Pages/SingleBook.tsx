import { Link, useLoaderData, useParams } from "react-router";
import type { IBook } from "../../interfaces/types";


const SingleBook = () => {

    const books = useLoaderData() as IBook[];
    const { id } = useParams();
    const bookId = Number(id);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return <div className="text-center text-red-600 mt-10">Book not found.</div>;
    }

    const { title, author, genre, isbn, copies, available, description } = book;

    const handleBorrowBook = (id: number) => {
        console.log(id);
    }
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
                <button
                    onClick={() => handleBorrowBook(bookId)}
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary"
                    disabled={copies === 0}
                >
                    {copies === 0 ? "Not Available to Borrow" : "Borrow This Book"}
                </button>
            </div>
        </div>
    );
};

export default SingleBook;
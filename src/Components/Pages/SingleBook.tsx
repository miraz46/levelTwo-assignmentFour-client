import { useLoaderData, useNavigate, useParams } from "react-router";


const SingleBook = () => {
    const Navigate = useNavigate();
    const books = useLoaderData();
    const { id } = useParams();
    const bookId = parseInt(id);
    const book = books.find(book => book.id === bookId);
    const { Title, Author, Genre, ISBN, Description, Copies, Availability } = book;

    console.log(book);

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-4">{Title}</h1>
            <p><strong>Author:</strong> {Author}</p>
            <p><strong>Genre:</strong> {Genre}</p>
            <p><strong>ISBN:</strong> {ISBN}</p>
            <p><strong>Description:</strong> <br /> {Description}</p>
            <p><strong>Copies Available:</strong> {Copies}</p>
            <p>
                <strong>Status:</strong>
                <span className={`font-semibold ml-2 ${Availability === "Available" ? "text-green-600" : "text-red-600"}`}>
                    {Availability}
                </span>
            </p>
            <div className="mt-6">
                <button
                    onClick={() => alert("Borrow functionality coming soon!")}
                    className="btn btn-primary"
                    disabled={Copies === 0}
                >
                    {Copies === 0 ? "Not Available to Borrow" : "Borrow This Book"}
                </button>
            </div>
        </div>
    );
};

export default SingleBook;
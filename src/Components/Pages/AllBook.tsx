import BookCard from "../BookCard";
import { useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from "../../interfaces/types";


const AllBook = () => {

    const { data = [], isLoading, isError } = useGetBooksQuery();
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError) return <p className="text-red-600 text-center mt-10">Failed to load books.</p>;

    return (
        <div>
            <h2 className="text-center my-4 mt-2 font-bold text-5xl">All Books</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className="text-center">
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                            <th>ISBN</th>
                            <th>Copies</th>
                            <th>Availability</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        !isLoading && data.map((book: IBook) => (<BookCard key={book._id} book={book}></BookCard>))
                    }
                </table>

            </div>

        </div>
    );
};

export default AllBook;
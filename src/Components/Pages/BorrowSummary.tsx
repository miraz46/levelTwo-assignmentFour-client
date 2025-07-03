import { useLoaderData } from "react-router";
import BookCard from "../BookCard";
import { Helmet } from "react-helmet";

const BorrowSummary = () => {
    const allBooks = useLoaderData();
    return (
         <div>
            <Helmet>
                <title>Borrow Summary</title>
            </Helmet>
            <h2 className="text-center my-4 mt-2 font-bold text-5xl">All Books</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className="text-center">
                            <th>Id</th>
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
                        allBooks.map((book, index) => (<BookCard key={index} book={book}></BookCard>))
                    }
                </table>

            </div>

        </div>
    );
};

export default BorrowSummary;
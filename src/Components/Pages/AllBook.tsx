import BookCard from "../BookCard";
import { useDeleteBookMutation, useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from "../../interfaces/types";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { toast } from "react-toastify";


const AllBook = () => {
    const { data = [], isLoading, isError } = useGetBooksQuery();
    const [deleteBook] = useDeleteBookMutation();
    // const modalId = `my_modal_${data._id}`;
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError) return <p className="text-red-600 text-center mt-10">Failed to load books.</p>;

    const handleDelete = async (_id: string) => {

        await deleteBook(_id as string);
        toast.error("Book Deleted Successfully")
    }


    return (
        <div>
            <h2 className="text-center my-4 mt-2 font-bold text-3xl  sm:text-4xl md:text-5xl">All Books</h2>
            <Helmet>All Books</Helmet>

            <div className="hidden xl:block overflow-x-auto">
                <table className="table w-full text-sm">
                    {/* head */}
                    <thead >
                        <tr className="text-center bg-neutral text-neutral-content">
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

            {/* Mobile, laptop Card View */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 xl:hidden">
                {data.map(book => (
                    <div key={book._id} className="border p-4 rounded shadow-md">
                        <h3 className="font-bold text-lg">{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Genre:</strong> {book.genre}</p>
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                        <p><strong>Copies:</strong> {book.copies}</p>
                        <p><strong>Status:</strong> {book.available ? "Available" : "Unavailable"}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <Link to={`/edit-book/${book._id}`} className="btn btn-warning btn-sm">Edit</Link>
                            <Link to={`/borrow/${book._id}`} className="btn btn-info btn-sm">Borrow</Link>
                            <button
                                className="btn btn-error btn-sm"
                                onClick={() => (document.getElementById(`del_${book._id}`) as HTMLDialogElement)?.showModal()}
                            >
                                Delete
                            </button>
                        </div>

                        {/* Delete modal (unique ID per book) */}
                        <dialog id={`del_${book._id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                    Are you sure you want to delete “{book.title}”?
                                </h3>
                                <div className="modal-action flex justify-center gap-5">
                                    <form method="dialog">
                                        <button
                                            className="btn btn-error"
                                            onClick={() => handleDelete(book._id as string)}
                                        >
                                            Yes
                                        </button>
                                    </form>
                                    <form method="dialog"><button className="btn btn-success">No</button></form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBook;
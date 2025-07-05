import { Link } from "react-router";
import { toast } from "react-toastify";
import type { IBook } from "../interfaces/types";
import { useDeleteBookMutation } from "../redux/api/baseApi";

interface BookCardProps {
    book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
    const [deleteBook] = useDeleteBookMutation();
    const { _id, title, author, genre, isbn, copies, available } = book;
    const handleDelete = async () => {

        await deleteBook(_id as string);
        toast.error("Book Deleted Successfully")
    }



    return (

        <tbody>
            <tr className="hover:bg-base-300 text-center">
                <td><Link to={`/books/${_id}`} className="text-blue-600 hover:underline">
                    {title}
                </Link></td>
                <td>{author}</td>
                <td>{genre}</td>
                <td>{isbn}</td>
                <td>{copies}</td>
                <td>{available ? "Available" : "Unavailable"}</td>
                <td className="flex gap-3 justify-center hover:bg-transparent">

                    {/* Button Edit */}
                    <Link to={`/edit-book/${_id}`}><button className="btn btn-warning">Edit Book</button></Link>
                    
                    {/* Button Borrow */}
                    <Link to={`/borrow/${_id}`}><button className="btn btn-info">Borrow Book</button></Link>
                    {/* Button Delete */}
                    <button
                        className="btn btn-error"
                        onClick={() => {
                            const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
                            modal?.showModal();
                        }}
                    >Delete Book</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure you want to delete "{title}" Book?</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action flex justify-center gap-5">
                                <form method="dialog">
                                    <button
                                        className="btn btn-error"
                                        onClick={handleDelete}
                                    >
                                        Yes
                                    </button>
                                </form>
                                <form method="dialog">
                                    <button className="btn btn-success">No</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </td>
            </tr>

        </tbody>

    );
};

export default BookCard;
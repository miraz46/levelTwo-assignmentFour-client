import { Link } from "react-router";
import { toast } from "react-toastify";


const BookCard = ({ book }) => {
    const { id, Title, Author, Genre, ISBN, Copies, Availability } = book;
    const handleDelete = (book) => {
        console.log(book);
        toast.error("Book Deleted Successfully")
    }



    return (

        <tbody>
            <tr className="hover:bg-base-300 text-center">
                <th>{id}</th>
                <Link to={`/books/${id}`} className="text-blue-600 hover:underline">
                    {Title}
                </Link>
                <td>{Author}</td>
                <td>{Genre}</td>
                <td>{ISBN}</td>
                <td>{Copies}</td>
                <td>{Availability}</td>
                <td className="flex gap-3 justify-center hover:bg-transparent">
                    {/* Button Edit */}
                    <Link to={`/edit-book/${id}`}><button className="btn btn-warning">Edit Book</button></Link>
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
                            <h3 className="font-bold text-lg">Are you sure you want to delete "{Title}" Book?</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action flex justify-center gap-5">
                                <form method="dialog">
                                    <button
                                        className="btn btn-error"
                                        onClick={() => handleDelete(book)}
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
                    {/* Button Borrow */}
                    <Link to={`/borrow/${id}`}><button className="btn btn-info">Borrow Book</button></Link>
                </td>
            </tr>

        </tbody>

    );
};

export default BookCard;
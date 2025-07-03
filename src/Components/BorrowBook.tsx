import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";


const BorrowBook = () => {

    const Navigate = useNavigate()
    const books = useLoaderData();
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const book = books.find(book => book.id === id);
    const { Copies, Availability } = book;

    const handleEditBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const quantity = form.quantity.value;
        const date = form.due_date.value;

        const borrowedBook = { quantity, date }
        toast.success("Borrow Book Successfully")
        Navigate("/")
        console.log(borrowedBook);
    }
    return (
        <div className="hero bg-base-200 min-h-[70vh] ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className="mx-auto mt-2 font-bold text-5xl">Edit Book</h2>
                    <form onSubmit={handleEditBook} className="card-body">
                        <div className="form-control">
                            {/* Quantity */}
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name="quantity" type="number" placeholder="quantity" className="input input-bordered" defaultValue={Copies} required />
                        </div>
                        {/* Due Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            <input name="due_date" type="date" placeholder="due_date" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6 flex  justify-center gap-2">
                            <Link to="/" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active">Go Back</button></Link>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-warning">Borrow Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BorrowBook;
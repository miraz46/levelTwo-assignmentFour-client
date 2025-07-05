import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useBorrowBookMutation, useGetSingleBooksQuery } from "../redux/api/baseApi";


const BorrowBook = () => {

    const navigate = useNavigate();
    const { bookId } = useParams<{ bookId: string }>();
    const { data: singleBook, isLoading, isError } = useGetSingleBooksQuery(bookId as string);
    const [borrowBook] = useBorrowBookMutation();
    if (!bookId) {
       
        return <p>Book ID not found</p>;
    }
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError || !singleBook) return <p className="text-center text-red-600 mt-10">Book not found.</p>;
    const availableCopies = singleBook.data.copies;

    const handleBorrowBook = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const quantity = parseInt(form.quantity.value);
        const dueDate = form.dueDate.value;
        if (quantity > availableCopies) {
            toast.error(`Only ${availableCopies} copies available.`)
            return
        }
        try {
            await borrowBook({ bookId, quantity, dueDate }).unwrap();
            toast.success("Book borrowed successfully");
            navigate("/borrow-summary");
        } catch (err) {
            toast.error("Failed to borrow book");
            console.error(err);
        }
    }
    return (
        <div className="hero bg-base-200 min-h-[70vh] ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className="mx-auto mt-2 font-bold text-5xl">Edit Book</h2>
                    <form onSubmit={handleBorrowBook} className="card-body">
                        <div className="form-control">
                            {/* Quantity */}
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name="quantity" type="number" placeholder="quantity" className="input input-bordered" required />
                        </div>
                        {/* Due Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            <input name="dueDate" type="date" placeholder="dueDate" className="input input-bordered" required />
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
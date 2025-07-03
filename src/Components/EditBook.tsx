import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";


const EditBook = () => {
    const Navigate = useNavigate()
    const books = useLoaderData();
    const { id } = useParams();
    const bookId = parseInt(id);
    const book = books.find(book => book.id === bookId);
    const { Title, Author, Genre, ISBN, Copies, Availability } = book;


    const handleEditBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const Title = form.title.value;
        const Author = form.author.value;
        const Genre = form.genre.value;
        const ISBN = form.isbn.value;
        const Copies = form.copies.value;

        const editedBook = { Title, Author, Genre, ISBN, Copies, Availability, }
        toast.success("Edited Book Successfully")
        Navigate("/")
        console.log(editedBook);
    }
    return (
        <div className="hero bg-base-200 min-h-[70vh] ">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className="mx-auto mt-2 font-bold text-5xl">Edit Book</h2>
                    <form onSubmit={handleEditBook} className="card-body">
                        <div className="form-control">
                            {/* Title */}
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="title" className="input input-bordered" defaultValue={Title} required />
                        </div>
                        {/* Author */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input name="author" type="text" placeholder="author" className="input input-bordered" defaultValue={Author} required />
                        </div>
                        {/* Genre */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <input name="genre" type="text" placeholder="genre" className="input input-bordered" defaultValue={Genre} required />
                        </div>
                        {/* ISBN */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ISBN</span>
                            </label>
                            <input name="isbn" type="text" placeholder="isbn" className="input input-bordered" defaultValue={ISBN} required />
                        </div>
                        {/* Copies */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Copies</span>
                            </label>
                            <input name="copies" type="number" placeholder="copies" className="input input-bordered" defaultValue={Copies} required />
                        </div>
                        {/* Availability */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability</span>
                            </label>
                            <input name="availability" type="text" placeholder="copies" className="input input-bordered" defaultValue={Availability} required />
                        </div>
                        <div className="form-control mt-6 flex  justify-center gap-2">
                            <Link to="/" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active">Go Back</button></Link>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-warning">Edit Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBook;
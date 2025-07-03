import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";


const AddBook = () => {
    const Navigate = useNavigate();
    const handleEditBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const Title = form.title.value;
        const Author = form.author.value;
        const Genre = form.genre.value;
        const ISBN = form.isbn.value;
        const Copies = form.copies.value;
        const Description = form.description.value;

        const editedBook = { Title, Author, Genre, ISBN, Description, Copies }
        toast.success("Added Book Successfully")
        Navigate("/")
        console.log(editedBook);
    }
    return (
        <div className="hero bg-base-200 min-h-[70vh] ">
            <Helmet>
                <title>Add Book</title>
            </Helmet>
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className="mx-auto mt-2 font-bold text-5xl">Add Book</h2>
                    <form onSubmit={handleEditBook} className="card-body">
                        <div className="form-control">
                            {/* Title */}
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        {/* Author */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input name="author" type="text" placeholder="author" className="input input-bordered" required />
                        </div>
                        {/* Genre */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <input name="genre" type="text" placeholder="genre" className="input input-bordered" required />
                        </div>
                        {/* ISBN */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ISBN</span>
                            </label>
                            <input name="isbn" type="text" placeholder="isbn" className="input input-bordered" required />
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name="description" type="text" placeholder="description" className="input input-bordered" required />
                        </div>
                        {/* Copies */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Copies</span>
                            </label>
                            <input name="copies" type="number" placeholder="copies" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 flex  justify-center gap-2">
                            <Link to="/" ><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active">Go Back</button></Link>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-accent">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
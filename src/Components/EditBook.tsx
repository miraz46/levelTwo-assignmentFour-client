import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useGetSingleBooksQuery, useUpdateBookMutation } from "../redux/api/baseApi";


const EditBook = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { data, isLoading, isError } = useGetSingleBooksQuery(id as string);
    const [updateBook] = useUpdateBookMutation();
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError) return <p className="text-red-600 text-center mt-10">Failed to load books.</p>;


    if (!data) {
        return <div className="text-center text-red-600 mt-10">Book not found.</div>;
    }

    const { title, author, genre, isbn, copies, description } = data.data;



    const handleEditBook = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;;
        const title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const author = form.author.value;
        const genre = form.genre.value;
        const description = form.description.value;
        const isbn = form.isbn.value;
        const copies = Number(form.copies.value);
        const available = copies > 0 ? true : false;

        const editedBook = { title, author, genre, isbn, copies, available, description }
        await updateBook({ id, ...editedBook }).unwrap();;
        toast.success("Edited Book Successfully")
        navigate("/")
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
                            <input name="title" type="text" placeholder="title" className="input input-bordered" defaultValue={title} required />
                        </div>
                        {/* Author */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input name="author" type="text" placeholder="author" className="input input-bordered" defaultValue={author} required />
                        </div>
                        {/* Genre */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <input name="genre" type="text" placeholder="genre" className="input input-bordered" defaultValue={genre} required />
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name="description" type="text" placeholder="description" className="input input-bordered" defaultValue={description} required />
                        </div>
                        {/* ISBN */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ISBN</span>
                            </label>
                            <input name="isbn" type="text" placeholder="isbn" className="input input-bordered" defaultValue={isbn} required />
                        </div>
                        {/* Copies */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Copies</span>
                            </label>
                            <input name="copies" type="number" placeholder="copies" className="input input-bordered" defaultValue={copies} required />
                        </div>
                        {/* Availability */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Availability</span>
                            </label>
                            <input name="availability" type="text" placeholder="copies" className="input input-bordered" defaultValue={available} required />
                        </div> */}
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
import { Helmet } from "react-helmet";
import { useBorrowBooksQuery } from "../../redux/api/baseApi";
import BorrowBookCard from "../BorrowBookCard";



export type BorrowSummaryItem = {
    title: string;
    isbn: string;
    totalQuantity: number;
};
const BorrowSummary = () => {
    const { data, isLoading, isError } = useBorrowBooksQuery(undefined);
    if (isLoading) return <p className="text-center mt-10">Loading…</p>;
    if (isError || !data) return <p className="text-center text-red-600 mt-10">Failed to load borrow summary.</p>;
    const books: BorrowSummaryItem[] = data.data ?? [];
    return (
        <div>
            <Helmet>
                <title>Borrow Summary</title>
            </Helmet>
            <h2 className="text-center my-4 mt-2 font-bold text-5xl">Borrow Book Summary</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className="text-center">
                            <th>Book Title</th>
                            <th>ISBN</th>
                            <th>Total Quantity Borrowed</th>

                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <BorrowBookCard key={book.isbn} book={book} />
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default BorrowSummary;
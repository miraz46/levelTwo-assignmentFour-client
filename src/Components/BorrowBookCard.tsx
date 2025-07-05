import type { BorrowSummaryItem } from "./Pages/BorrowSummary";

type Props = {
  book: BorrowSummaryItem;
};

const BorrowBookCard = ({ book }: Props) => {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <tr className="text-center">
      <td>{book.title}</td>
      <td>{book.isbn}</td>
      <td>{book.totalQuantity}</td>
    </tr>
  );
};

export default BorrowBookCard;
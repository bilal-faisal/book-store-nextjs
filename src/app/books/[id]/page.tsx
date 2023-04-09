import BookDisplay from "./Book";

async function getBook(id: string) {
  let res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  return res.json();
}

type Book = {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": string;
  available: boolean;
  error: string;
};

const id = async ({ params }: { params: { id: string } }) => {
  let id = params.id;
  let book: Book = await getBook(id);

  console.log(book.error);
  return (
    <div>
      {book.error !== undefined ? (
        "Book does not exist"
      ) : (
        <div>
            <BookDisplay book={book}/>
        </div>
      )}
    </div>
  );
};

export default id;

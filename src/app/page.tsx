import Link from "next/link";

async function getBooks() {
  let res = await fetch("https://simple-books-api.glitch.me/books"); 
  return res.json();
}

type Book = {
  id: number;
  name: string;
  type: string;
  available: string;
};

const Home = async () => {
  let books = await getBooks();
  console.log(books);
  return (
    <>
      <h1 className="mt-8 py-2 text-3xl font-semibold text-center">
        Book Store
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-8">
        {books.map(({ id, name, type, available }: Book) => {
          return (
            <div className="shadow-xl rounded-xl">
              <img
                src="https://picsum.photos/500/250"
                alt="Landscape"
                className="rounded-t-xl w-full object-cover"
              />
              <div className="p-6 bg-white rounded-b-xl">
                <h2 className="font-bold text-lg">{name}</h2>
                <p className="font-normal text-md mb-2">
                  {available ? "In Stock" : "Out of Stock"}
                </p>
                <Link href={`books/${id}`} className="text-purple-600">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;

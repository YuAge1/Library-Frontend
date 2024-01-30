export interface BookRequest{
    title: string;
    year: number;
    genre: string;
    author: string;
}

export const getAllBooks = async () => {
    const response = await fetch("https://localhost:7242/api/books/getBooks");

    return response.json();
};

export const createBook = async (bookRequest: BookRequest) => {
    await fetch("https://localhost:7242/api/books/addBook", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(bookRequest),
    });
};

export const updateBook = async (id: string, bookRequest: BookRequest) => {
    await fetch(`https://localhost:7242/api/books/update/${id}`, {
    method: "PUT",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({ id: id, ...bookRequest }),
});
};


export const deleteBook = async (id: string) => {
    await fetch(`https://localhost:7242/api/books/${id}`, {
        method: "DELETE",
    });
};
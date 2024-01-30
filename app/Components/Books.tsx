import Card from "antd/es/card/Card"
import { CardTitle } from "./CardTitle"
import Button from "antd/es/button/button"

interface Props{
    books: Book[];
    handleDelete: (id: string) => void;
    handleOpen: (book: Book) => void;
}

export const Books = ({books, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {books.map((book : Book) => (
                <Card 
                    key={book.id} 
                    title={<CardTitle title={book.title} year={book.year} genre={book.genre} author={book.author}/>} 
                    bordered={false}
                >
                    <p>{book.author}</p>
                    <div className="card__buttons">
                        <Button 
                        onClick={() => handleOpen(book)} 
                        style={{flex: 1}}
                        >
                            Редактировать
                        </Button>
                        <Button 
                        onClick={() => handleDelete(book.id)}
                        danger 
                        style={{flex: 1}}
                        >
                            Удалить
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}
import Modal from "antd/es/modal/Modal";
import { BookRequest } from "../services/books"
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";

interface Props {
    mode: Mode;
    values: Book;
    isModelOpen: boolean;
    handleCancel: () => void;
    handleCreate: (bookRequest: BookRequest) => void;
    handleUpdate: (id: string, bookRequest: BookRequest) => void;
}

export enum Mode {
    Create, 
    Edit,
}

export const CreateUpdateBook = ({
    mode,
    values,
    isModelOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
} : Props) => {
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<number>(2000);
    const [genre, setGenre] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    useEffect(() => {
        setTitle(values.title);
        setYear(values.year);
        setGenre(values.genre);
        setAuthor(values.author);
    }, [values])

    const handleOnOk = async () => {
        const bookRequest: BookRequest = {
            title,
            year,
            genre,
            author,
        };
    
        mode === Mode.Create ? handleCreate(bookRequest) : handleUpdate(values.id, bookRequest);
    }
    
    return (
        <Modal 
        title={mode === Mode.Create ? "Добавить книгу" : "Редактировать книгу"} 
        open={isModelOpen} 
        onOk={handleOnOk}
        onCancel={handleCancel}
        cancelText={"Отмена"}
        >
            <div className="book__modal">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название"
                />
                <Input
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    placeholder="Год"
                />
                <Input
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Жанр"
                />
                <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Автор"
                />
            </div>
        </Modal>
    )
};
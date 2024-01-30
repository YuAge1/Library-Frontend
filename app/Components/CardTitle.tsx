interface Props{
    title: string;
    year: number;
    genre: string;
    author: string;
}

export const CardTitle = ({title, year}: Props) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <p className="card__title">{title}</p>
            <p className="card__year">{year}</p>
        </div>
    )
}
interface ICardProps{
    src: string;
    h3: string;
    p1: string;
    p2: string;
    p3: string;
}

export default function Card({src, h3, p1, p2, p3}: ICardProps){
    return (
        <div className="card">
            <span>
            <img src={src} alt="Ícone de música" width={64} height={64} />
            </span>
            <div>
                <h3>
                    {h3}
                </h3>
                <p>
                    {p1}<strong>{p2}</strong>{p3}
                </p>
                <hr/>
            </div>
        </div>
    )
}

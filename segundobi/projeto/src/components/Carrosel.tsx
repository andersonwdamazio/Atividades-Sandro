interface ICarosselProps {
    src: string;
    star1: string;
    star2: string;
    star3: string;
    star4: string;
    star5: string;
    p1: string;
    p2: string;
    p3: string;
}

export default function Card({ src, star1, star2, star3, star4, star5, p1, p2, p3 }: ICarosselProps) {
    return (
        <div className="carousel-card">
            <img src={src} alt="Cena dos Simpsons em clima lo-fi" />
            <span className="testimony">
                <p>
                    {p1}
                </p>
            </span>
            <span className="rating">
                <img src={star1} alt="ícone estrela" width={22} height={20} />
                <img src={star2} alt="ícone estrela" width={22} height={20} />
                <img src={star3} alt="ícone estrela" width={22} height={20} />
                <img src={star4} alt="ícone estrela" width={22} height={20} />
                <img src={star5} alt="ícone estrela" width={20} height={22} />
            </span>
            <span className="names">
                <p>{p2}</p>
                <p>{p3}</p>
            </span>
        </div>
    )
}

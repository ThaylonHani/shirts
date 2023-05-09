import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json(
        {
            blouse: [
                {
                    id: 1,
                    name: "Camiseta cinza",
                    points: "6",
                    img: "/grayShirt.jpg"
                },
                {
                    id: 2,
                    name: "Blusa manga longa",
                    points: "12",
                    img: "/model.jpg"
                },
                {
                    id: 3,
                    name: "Blusa preta",
                    points: "3",
                    img: "/blackShirt.jpg"
                },
                {
                    id: 4,
                    name: "Blusa cinza",
                    points: "3",
                    img: "/fashion.jpg"

                },
                {
                    id: 5,
                    name: "Moletom preto e branco",
                    points: "24",
                    img: "/sweatshirt.jpg"
                },
                {
                    id: 6,
                    name: "Moletom preto",
                    points: "20",
                    img: "/blackSweatshirt.jpg"
                }
            ]
        }
    )
}
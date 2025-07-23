/*
import { NextResponse } from "next/server";

const url = "https://gateway.marvel.com/v1/public/characters";
const publicKey = process.env.MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const ts = Date.now().toString();
const hash = md5(ts + privateKey + publicKey);

export async function GET() {
  try {
    const res = `${url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(res);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data.data.results[0]);
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao buscar dados da Marvel.", err },
      { status: 500 }
    );
  }
}
*/
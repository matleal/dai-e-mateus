import { getData } from "@/app/services/firebase";

export async function GET(req: Request) {
  try {
    const gifts = await getData("gifts");

    return new Response(JSON.stringify(gifts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

import { getData } from "@/app/services/firebase";

export async function GET(req: Request) {
  try {
    const giftsData = await getData("gifts");

    return new Response(JSON.stringify(giftsData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

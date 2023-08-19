import { getBaseUrl } from "@/app/services/url";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let preference: CreatePreferencePayload = {
      items: [
        {
          title: body.productName,
          unit_price: parseFloat(body.productPrice),
          quantity: 1,
        },
      ],
      payer: {
        email: body.payerEmail,
        name: body.payerName,
      },
      back_urls: {
        success: `${getBaseUrl()}/pages/gifts`,
        failure: `${getBaseUrl()}/pages/gifts`,
      },
      auto_return: "approved",
      external_reference: body.productId,
    };

    const preferenceRes = (await mercadopago.preferences.create(preference))
      .body;

    console.log("preferenceRes", preferenceRes);

    return new Response(JSON.stringify(preferenceRes.init_point), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

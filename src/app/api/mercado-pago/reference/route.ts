import { getBaseUrl } from "@/app/services/url";
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let preference: any = {
      items: [
        {
          title: body.productName,
          unit_price: parseFloat(body.productPrice),
          quantity: 1,
        },
      ],
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [{ id: "ticket" }],
        installments: 12,
      },
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
      metadata: {
        payerName: body.payerName,
      },
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

import { updateDataById } from "@/app/services/firebase";

export async function POST(req: Request) {
  try {
    const notification = await req.json();

    if (
      notification.type === "payment" &&
      notification.action === "payment.created"
    ) {
      const paymentId = notification.data.id;
      const paymentDetails = await fetchPaymentDetailsFromMercadoPago(
        paymentId
      );
      const payerInfo = paymentDetails.payer;

      if (paymentDetails.status === "approved") {
        await updateDataById("gifts", paymentDetails.external_reference, {
          giver: payerInfo?.first_name + " " + payerInfo?.last_name,
          giverEmail: payerInfo?.email,
        });
      }
    }

    return new Response(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

async function fetchPaymentDetailsFromMercadoPago(paymentId: string) {
  const paymentDetails = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${process
      .env.MERCADO_PAGO_ACCESS_TOKEN!}`
  );

  return paymentDetails.json();
}

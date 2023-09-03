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
      console.log("paymentDetails", paymentDetails);

      if (
        paymentDetails.status === "approved" ||
        paymentDetails.status === "pending" ||
        paymentDetails.status === "in_process"
      ) {
        const payerName = paymentDetails.metadata.payer_name;
        console.log("Name!", payerName);
        await updateDataById("gifts", paymentDetails.external_reference, {
          giver: payerName,
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
    `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=APP_USR-7392384281194045-081710-2ece7bfe8da1d3e04c39d7ef1bb59056-181959770`
  );

  return paymentDetails.json();
}

export async function onRequestGet(context) {
  const response = await fetch(context.env.ADS_SCORECARD_SHEET, {
    redirect: "follow",
  });

  const clients = await response.json();

  return new Response(JSON.stringify(clients), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "s-maxage=3600",
    },
  });
}
export async function onRequestPost(context) {
  const body = await context.request.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": context.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(body),
  });

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
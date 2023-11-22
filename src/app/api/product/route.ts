export async function GET() {
  const response = await fetch(
    "https://xesque.rocketseat.dev/platform/1698253675111-attachment.json"
  );
  const data = await response.json();

  const products = data.products

  return Response.json({products: products});
}

interface IProduct {
  featured: boolean;
}

export async function GET() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const response = await fetch(
    "https://xesque.rocketseat.dev/platform/1698253675111-attachment.json"
  );
  const data = await response.json();

  const featuredProducts = data.products.filter(
    (product: IProduct) => product.featured
  );

  return Response.json(featuredProducts);
}

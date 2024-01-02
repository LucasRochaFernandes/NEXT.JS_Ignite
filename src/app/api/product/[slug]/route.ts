import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)

  const response = await fetch(
    'https://xesque.rocketseat.dev/platform/1698253675111-attachment.json',
  )
  const data = await response.json()

  const product = data.products.find(
    (product: { slug: string }) => product.slug === slug,
  )

  if (!product) {
    return Response.json({ message: 'Product Not Found' }, { status: 400 })
  }

  return Response.json(product)
}

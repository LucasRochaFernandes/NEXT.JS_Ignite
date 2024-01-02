import { Product } from '@/app/data/types/product'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const response = await fetch(
    'https://xesque.rocketseat.dev/platform/1698253675111-attachment.json',
  )
  const data = await response.json()

  const products: Product[] = data.products.filter((product: Product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}

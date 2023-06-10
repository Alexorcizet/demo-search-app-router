import { places } from '../../data.js'

export async function GET(req: Request) {
  return new Response(JSON.stringify(places))
}

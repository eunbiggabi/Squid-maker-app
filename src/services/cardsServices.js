import squidMakerAPI from "../config/api"

export async function getdata() {
  const response = await squidMakerAPI.get("/api/cards")
  console.log(response)
  return response.data
}

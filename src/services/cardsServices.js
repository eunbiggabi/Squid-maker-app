import squidMakerAPI from "../config/api";

export async function getdata() {
  const response = await squidMakerAPI.get("/api/cards");
  console.log(response);
  return response.data;
}

export async function getCardById(id) {
  const response = await squidMakerAPI.get(`/api/cards/${id}`);
  console.log(response);
  return response.data;
}

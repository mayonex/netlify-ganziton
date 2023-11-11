import { basicAPI } from "./core";

export const createBookingApi = async (placeId: number, reqBody: any) => {
  let url = `plans/create/${placeId}/`;

  const data = await basicAPI.post(url, reqBody).then((response) => {
    return response.data;
  });
  return data;
};

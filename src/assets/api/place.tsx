import { basicAPI } from "./core";

export const getPlaceListApi = async (business: string, location: string) => {
  let url = `/places/${business}/${location}`;

  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};

export const getPlaceApi = async (placeId: number) => {
  let url = `/places/${placeId}`;

  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};

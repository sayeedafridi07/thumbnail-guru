import { AREA_CODES } from "../data/areaCodes";

export const getAreaNameByCode = (zipCode, fallback = 'Area not found') => {
  const areas = AREA_CODES.filter(item => item.areaCode === zipCode).map(
    item => item.area,
  );

  if (areas.length > 0) {
    //   return areas.length === 1 ? areas[0] : areas;
    return areas[0];
  } else {
    return fallback; // Return the fallback if no area is found
  }
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LocationDto = {
  name: string;
  description: string;
  coordinates: Coordinates;
};

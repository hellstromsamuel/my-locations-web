type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Location = {
  id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
};

import type { Location } from "../types/Location";
import type { LocationDto } from "../types/LocationDto";

const BASE_URL = "http://localhost:3000";

export const getLocations = async (): Promise<Location[]> => {
  const response = await fetch(`${BASE_URL}/locations`);
  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  return response.json();
};

export const getLocationById = async (id: string): Promise<Location> => {
  const response = await fetch(`${BASE_URL}/locations/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch location with id ${id}`);
  }
  return response.json();
};

export const addLocation = async (location: LocationDto): Promise<Location> => {
  const response = await fetch(`${BASE_URL}/locations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  });
  if (!response.ok) {
    throw new Error("Failed to add location");
  }
  return response.json();
};

export const updateLocation = async (
  id: string,
  location: Partial<Location>
): Promise<Location> => {
  const response = await fetch(`${BASE_URL}/locations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  });
  if (!response.ok) {
    throw new Error(`Failed to update location with id ${id}`);
  }
  return response.json();
};

export const deleteLocation = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/locations/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete location with id ${id}`);
  }
};

import type { Location } from "../types/Location";

const BASE_URL = import.meta.env.VITE_LOCATIONS_API_BASE_URL;

export const getLocations = async (): Promise<Location[]> => {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  return response.json();
};

export const getLocationById = async (id: string): Promise<Location> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch location with id ${id}`);
  }
  return response.json();
};

export const putLocation = async (
  location: Partial<Location>
): Promise<Location> => {
  if (!location.id) {
    throw new Error("Location ID is required for updating");
  }

  const response = await fetch(`${BASE_URL}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  });
  if (!response.ok) {
    throw new Error(`Failed to update location with id ${location.id}`);
  }
  return response.json();
};

export const deleteLocation = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete location with id ${id}`);
  }
};

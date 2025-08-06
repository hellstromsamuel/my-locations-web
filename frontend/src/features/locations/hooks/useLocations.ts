import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../api/locationsApi";

export const queryKeyLocations: string[] = ["locations"];

function useLocations() {
  return useQuery({
    queryKey: queryKeyLocations,
    queryFn: getLocations,
  });
}

export default useLocations;

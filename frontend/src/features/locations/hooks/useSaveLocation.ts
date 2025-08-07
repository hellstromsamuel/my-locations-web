import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeyLocations } from "./useLocations";
import { putLocation } from "../api/locationsApi";
import type { Location } from "../types/Location";

function useSaveLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newLocation: Partial<Location>) =>
      putLocation(newLocation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useSaveLocation;

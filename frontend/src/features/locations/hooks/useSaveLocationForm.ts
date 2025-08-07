import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import useSaveLocation from "./useSaveLocation";
import { generateUUID } from "../../../lib/uuid";

const formSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  description: z
    .string()
    .max(500, { message: "Description must be less than 500 characters" }),
  coordinates: z.object({
    latitude: z
      .number()
      .min(-90, { message: "Latitude must be >= -90" })
      .max(90, { message: "Latitude must be <= 90" }),
    longitude: z
      .number()
      .min(-180, { message: "Longitude must be >= -180" })
      .max(180, { message: "Longitude must be <= 180" }),
  }),
});

export type SaveLocationFormValues = z.infer<typeof formSchema>;

function useSaveLocationForm(location: SaveLocationFormValues | null = null) {
  const { mutate } = useSaveLocation();

  const form = useForm<SaveLocationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: location?.id || generateUUID(),
      name: location?.name || "",
      description: location?.description || "",
      coordinates: {
        latitude: location?.coordinates.latitude || 0,
        longitude: location?.coordinates.longitude || 0,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return { form, onSubmit };
}

export default useSaveLocationForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  description: z
    .string()
    .nonempty({ message: "Description is required" })
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

type FormValues = z.infer<typeof formSchema>;

function useAddLocationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return { form, onSubmit };
}

export default useAddLocationForm;

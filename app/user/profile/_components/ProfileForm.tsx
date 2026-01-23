"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
});
type profileData = z.infer<typeof profileSchema>;

export default function ProfileForm({ user }: { user: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<profileData>({
    resolver: zodResolver(profileSchema),
    values: {
      // prefill form using values and user props
      firstName: user.firstName || "",
      lastName: user.lastName || "",
    },
  });
  const onSubmit = (data: profileData) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {user.imageUrl && (
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/" + user.imageUrl}
            alt="profile Image"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <label>First Name:</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
}

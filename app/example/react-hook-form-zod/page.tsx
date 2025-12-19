"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginForm, loginSchema } from "./schema";

//import needed from assets under app
import image2 from "@/app/assets/img2.jpeg";
//to ensure that image is bundled and available at build
import Image from "next/image";
//auto optimized image component, nextjs recommended
//use this instead of <img> tag

// export const loginSchema = z.object({
//   email: z.email({ message: "Email milena" }),
//   password: z.string().min(6, { message: "Password pugena" }),
// });

// export type loginForm = z.infer<typeof loginSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
    values: { email: "xyz", password: "abc" }, // initial
  });
  const onSubmit = async (data: loginForm) => {
    alert(data.email);
  };
  return (
    <div>
      {/* height, width optional for asset import*/}
      <Image src={image2} alt="image 2" />
      {/*height weight required for punlic, omit"public" on path/src */}
      <Image src="/images/img1.jpg" height={350} width={350} alt="image 1" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-2 max-w-xl border border-cyan-400"
      >
        <div className="mt-2">
          <label htmlFor=""> Email</label>
          <input
            {...register("email", { required: "Email hala" })}
            className="ml-4 bg-fuchsia-400"
          />
          {errors.email && ( //conditional rendering
            <span className="text-red-500 ml-5">{errors.email.message}</span>
          )}
        </div>
        <button type="submit" className="p-2 bg-green-500 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

"use client";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register, //bind input fields
    handleSubmit, //handle form submission
    formState: { errors, isSubmitting },
  } = useForm(
    { values: { email: "", password: "" } } // input states and initial
  );

  const onSubmit = async (data: any) => {
    alert(data.email);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-2 max-w-xl border"
      >
        <div className="mt-2">
          <label htmlFor=""> Username</label>
          <input
            {...register("email", { required: "Email hala" })}
            className="ml-4 bg-fuchsia-400"
          />
          {errors.email && ( //conditional rendering
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <button type="submit" className="p-2 bg-green-500">
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerUser } from "@/supabase/auth";

interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterCredentials>();
  const { mutate: signUp, isLoading, isError, error } = useMutation<
    { id: string; email: string },
    Error,
    Omit<RegisterCredentials, "confirmPassword">
  >(registerUser, {
    onSuccess: () => {
      alert("User registered successfully!");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const onSubmit = (data: RegisterCredentials) => {
    const { email, password } = data;
    signUp({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for BitBlogs</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                maxLength: { value: 20, message: "Password must not exceed 20 characters" },
              })}
              placeholder="Password"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </button>
          {isError && <p className="text-red-500 mt-4">Error: {error?.message}</p>}
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/SignIn" className="hover:underline text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

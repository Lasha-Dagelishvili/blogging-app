import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { supabase } from "../lib/connection";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  id: string;
  email?: string;
}

const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error(error.message || "Invalid email or password");
  }

  if (!data.user) {
    throw new Error("User not found");
  }

  return {
    id: data.user.id,
    email: data.user.email,
  };
};

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const { mutate: signIn, isLoading, isError, error } = useMutation<
    LoginResponse,
    Error,
    LoginCredentials
  >(loginUser, {
    onSuccess: () => {
      navigate("/")
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to BitBlogs</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          {isError && <p className="mt-4 text-red-500 text-sm">Error: {error?.message}</p>}
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Link to="#" className="hover:underline text-gray-400">
            Forgot password?
          </Link>
          <Link to="/SignUp" className="hover:underline text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

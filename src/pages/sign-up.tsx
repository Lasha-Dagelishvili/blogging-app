import React, { useState } from "react";
import { useMutation } from "react-query";
import { supabase } from "../lib/connection";
import { Link } from "react-router-dom";

interface RegisterCredentials {
  email: string;
  password: string;
}

interface RegisterResponse {
  id: number;
  email: string;
}

const registerUser = async (
  credentials: RegisterCredentials
): Promise<RegisterResponse> => {
  try {
    const { data, error } = await supabase
      .from("registration")
      .insert([
        {
          email: credentials.email,
          password: credentials.password,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      throw new Error(error.message || "Registration failed");
    }

    return data[0] as RegisterResponse;
  } catch (err) {
    console.error("Unexpected Error:", err);
    throw new Error("Unexpected error occurred during registration");
  }
};

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState<RegisterCredentials>({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate: signUp, isLoading, isError, error } = useMutation<
    RegisterResponse,
    Error,
    RegisterCredentials
  >(registerUser, {
    onSuccess: (_data) => {
      alert(`User registered successfully! Welcome,`);
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

    if (form.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signUp(form);
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for BitBlogs</h2>
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
            <div className="mb-4">
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
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading} 
              className="w-full p-2 bg-blue-500 rounded text-white hover:bg-blue-600"
            >
              {isLoading ? "Registering..." : "Sign Up"}
            </button>
            {isError && <p>Error: {error?.message}</p>}
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

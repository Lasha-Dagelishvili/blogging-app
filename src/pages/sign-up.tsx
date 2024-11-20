import { Link } from "react-router-dom";

export const SignUpPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for BitBlogs</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="••••••••"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
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
  


//   import { useMutation } from "@tanstack/react-query";
// import { supabase } from "../supabase/client"; // import the supabase client

// interface RegisterCredentials {
//   name: string;
//   email: string;
//   password: string;
// }

// interface RegisterResponse {
//   email: string;
//   name: string;
// }

// const register = async (userData: RegisterCredentials): Promise<RegisterResponse> => {
//   const { name, email, password } = userData;
  
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);

//   // Access the user information from `data` and return it
//   return { email: data?.user?.email ?? "", name }; // Safely return the user data
// };

// export const SignUpPage = () => {
//   const { mutate: signUp, isLoading, isError, error } = useMutation<
//     RegisterResponse, // Return type
//     Error,             // Error type
//     RegisterCredentials // Input type
//   >(register);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;
//     const name = (form.elements.namedItem("name") as HTMLInputElement).value;
//     const email = (form.elements.namedItem("email") as HTMLInputElement).value;
//     const password = (form.elements.namedItem("password") as HTMLInputElement).value;

//     // Pass the user data to the mutate function
//     signUp({ name, email, password });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for BitBlogs</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-2 text-sm">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
//               placeholder="John Doe"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2 text-sm">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
//               placeholder="john@example.com"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-2 text-sm">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
//               placeholder="••••••••"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="confirm-password" className="block mb-2 text-sm">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirm-password"
//               name="confirm-password"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-600"
//               placeholder="••••••••"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing up...' : 'Sign Up'}
//           </button>
//         </form>
//         {isError && <p className="text-red-500 mt-4">{error?.message}</p>}
//         <div className="flex justify-center mt-4 text-sm">
//           <p className="text-gray-400">
//             Already have an account?{" "}
//             <a href="/SignIn" className="hover:underline text-blue-500">
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

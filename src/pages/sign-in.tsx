import { Link } from "react-router-dom";

export const SignInPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to BitBlogs</h2>
          <form>
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
            <div className="mb-6">
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
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Log In
            </button>
        </form>
            <div className="flex justify-between mt-4 text-sm">
                <Link to="#" className="hover:underline  text-gray-400">
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
  


//   import { Link } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import { supabase } from "../supabase/client"; // import the supabase client

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// interface LoginResponse {
//   email: string;
// }

// const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
//   const { email, password } = credentials;

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     throw new Error(error.message); // Error handling
//   }

//   return { email: data?.user?.email ?? "" }; // Return the email from supabase response
// };

// export const SignInPage = () => {
//   const { mutate: signIn, isLoading, isError, error } = useMutation<LoginResponse, Error, LoginCredentials>(login);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const email = (e.target as HTMLFormElement).email.value;
//     const password = (e.target as HTMLFormElement).password.value;

//     signIn({ email, password }); // Pass correct type for credentials
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center">Log in to BitBlogs</h2>
//         <form onSubmit={handleSubmit}>
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
//           <div className="mb-6">
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
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Logging in...' : 'Log In'}
//           </button>
//         </form>
//         {isError && <p className="text-red-500 mt-4">{error?.message}</p>}
//         <div className="flex justify-between mt-4 text-sm">
//           <Link to="#" className="hover:underline text-gray-400">
//             Forgot password?
//           </Link>
//           <Link to="/SignUp" className="hover:underline text-blue-500">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

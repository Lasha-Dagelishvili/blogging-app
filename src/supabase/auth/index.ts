import { supabase } from "@/supabase/index";

interface RegisterCredentials {
    email: string;
    password: string;
  }

  interface LoginResponse {
    id: string;
    email?: string;
  }

  interface LoginCredentials {
    email: string;
    password: string;
  }
  
export const registerUser = async (
    credentials: RegisterCredentials
  ): Promise<{ id: string; email: string }> => {
    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    });
  
    if (error) {
      console.error("Supabase Error:", error);
      throw new Error(error.message || "Registration failed");
    }
  
    return {
      id: data.user?.id ?? "",
      email: data.user?.email ?? "",
    };
  };

  
export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
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



  export const logout = () => {
    return supabase.auth.signOut();
};

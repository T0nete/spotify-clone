import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { createContext } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

export const SupabaseContext = createContext<{ supabase: SupabaseClient } | null>(null);

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_API_KEY as string,
  );

  return <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>;
};

export default SupabaseProvider;

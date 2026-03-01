import { supabase } from "@/lib/supabase/client";

export async function getProducts() {
  const { data: Products, error } = await supabase
    .from('Products')
    .select('*')

  return {
    products: Products,
    error: error
  }
}
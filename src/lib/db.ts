import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

// TODO: add your queries/inserts/updates/deletes here
export const products = {
  async all() {
    const { data } = await supabase
      .from('products')
      .select('*')

    return data
  }
}

<script lang="ts" context="module">
  import * as db from '$lib/db'

  export async function load() {
    const products = await db.products.all()

    return {
      props: { products }
    }
  }
</script>

<script lang="ts">
  export let products
</script>

<main>
  <p>There are {products.length} products.</p>

  <nav>
    <a href="/sign-in">Sign in</a>
  </nav>
</main>

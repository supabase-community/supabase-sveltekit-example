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
  import { user } from '$lib/db'

  export let products
</script>

<main>
  <p>There are {products.length} products.</p>

  {#if $user}
    <p>You are signed in as {$user.email}</p>
    <button on:click={() => db.supabase.auth.signOut()}>Sign out</button>
  {:else}
    <nav>
      <a href="/sign-in">Sign in</a>
    </nav>
  {/if}

</main>

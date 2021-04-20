<script lang="ts">
  import Auth from 'supabase-ui-svelte'
  import { supabase } from '$lib/db'
</script>

<div class="container">
  <h1>Sign in</h1>

  <Auth supabaseClient={supabase}/>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0px auto;
  }
</style>

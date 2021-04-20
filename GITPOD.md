GitPod Setup Instructions
-----------

Before you can run the svelte-kit app you'll need to configure the enviroment variables for your database.

# Create the database

If you don't already have a supabase database, you can create one by logging in to subabase:

https://app.supabase.io/api/login

Then create the "New project" button, and follow the steps.

## Get the credentials

Once your database is created, you can find the credentials in the Settings / API page. We'll need the "url" and the "anon public key".

With Gitpod, it's better to define the environment vars on your GitPod account rather than on the filesystem in a `.dotenv` file. By avoiding the file system you can safely share a snapshot of your workspace without sharing environment vars.

GitPod provides a CLI to do this called `gp env`.

In the terminal of your workspace, run `gp env`:

```bash
# replace placeholders with your info from supabase's Settings / API page
gp env -e VITE_SUPABASE_URL=your_supabase_url VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Now close and re-open your GitPod workspace, and the environment vars will take effect and the database connection now works.

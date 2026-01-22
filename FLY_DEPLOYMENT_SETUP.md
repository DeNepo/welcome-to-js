# Fly.io Deployment Setup Instructions

## Prerequisites

1. Install Fly.io CLI if you haven't already:

   ```bash
   # On macOS with Homebrew:
   brew install flyctl

   # Or using the install script:
   curl -L https://fly.io/install.sh | sh
   ```

2. Login to your Fly.io account:
   ```bash
   flyctl auth login
   ```

## Step 1: Create the Fly.io App

Run these commands from the repository root:

```bash
# Navigate to repository (if not already there)
cd /Users/master/Documents/0-teach-code/h-h-y-f/0---hyf-be/curriculum/00-the-modules/05-welcome-to-js/00--repo-welcome-to-js

# Create the app (adjust the name if "welcome-to-js" is taken)
flyctl apps create welcome-to-js --org personal

# Allocate IP addresses
flyctl ips allocate-v4 --app welcome-to-js
flyctl ips allocate-v6 --app welcome-to-js

# Verify the app was created
flyctl apps list | grep welcome-to-js
```

## Step 2: Set Up GitHub Secret for Automated Deployment

1. Get your Fly.io API token:

   ```bash
   flyctl auth token
   ```

   Copy the token that is displayed.

2. Add the token to GitHub:
   - Go to: https://github.com/DeNepo/welcome-to-js/settings/secrets/actions
   - Click "New repository secret"
   - Name: `FLY_API_TOKEN`
   - Value: Paste the token you copied
   - Click "Add secret"

## Step 3: Test Local Docker Build (Optional)

If you have Docker installed locally, you can test the build:

```bash
# Build the Docker image
docker build -t welcome-to-js-test .

# Run it locally
docker run -p 4005:4005 welcome-to-js-test

# Test in browser
open http://localhost:4005

# Stop the container when done (Ctrl+C)
```

## Step 4: Deploy Manually (First Time)

Do an initial manual deployment to verify everything works:

```bash
# Deploy to Fly.io
flyctl deploy

# Monitor the deployment logs
flyctl logs

# Once deployed, open in browser
flyctl open

# Check the app status
flyctl status --app welcome-to-js
```

## Step 5: Verify Automated Deployment

After the manual deployment succeeds:

1. Make a small change to any file (e.g., update README.md)
2. Commit and push to main branch
3. Check GitHub Actions: https://github.com/DeNepo/welcome-to-js/actions
4. Verify the deployment workflow runs successfully

## Deployment Triggers

The app will automatically deploy when:

- You push directly to the `main` branch
- A pull request is merged to `main`
- You create a version tag (e.g., `git tag v1.0.0 && git push --tags`)
- You manually trigger the workflow from GitHub Actions

## Useful Commands

### Monitoring

```bash
# View real-time logs
flyctl logs --app welcome-to-js

# Check app status
flyctl status --app welcome-to-js

# View metrics
flyctl metrics --app welcome-to-js

# SSH into the running container
flyctl ssh console --app welcome-to-js
```

### Rollback

```bash
# List recent releases
flyctl releases --app welcome-to-js

# Rollback to a previous version
flyctl releases rollback <version-number> --app welcome-to-js
```

### Scaling

```bash
# Scale to zero (save costs when not in use)
flyctl scale count 0 --app welcome-to-js

# Scale back up
flyctl scale count 1 --app welcome-to-js

# Add more memory if needed (beyond free tier)
flyctl scale memory 512 --app welcome-to-js
```

## Troubleshooting

### If deployment fails:

1. Check the logs:

   ```bash
   flyctl logs --app welcome-to-js
   ```

2. Verify Node 18 compatibility:

   ```bash
   flyctl ssh console --app welcome-to-js
   node --version  # Should show v18.x.x
   ```

3. Test study-lenses is working:
   ```bash
   flyctl ssh console --app welcome-to-js
   npm run demo:deployed
   ```

### If health checks fail:

Edit `fly.toml` and increase the grace period:

```toml
[[http_service.checks]]
  grace_period = "30s"  # Increase from 10s
```

### If you get "app name already taken":

Choose a different app name in `fly.toml` and when running `flyctl apps create`.

## Cost Information

This deployment is configured to run within Fly.io's free tier:

- 1 shared CPU VM with 256MB RAM
- Auto-scales to zero when not in use
- Up to 160GB outbound transfer/month

## Your App URL

Once deployed, your app will be available at:
https://welcome-to-js.fly.dev?--defaults

(Replace "welcome-to-js" with your actual app name if different)

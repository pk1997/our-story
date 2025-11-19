# Deployment Guide: GitHub Pages

I've already installed the `gh-pages` tool and configured your project files. Follow these steps to get your site live!

## Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository.
2. Name it whatever you like (e.g., `love-journey` or `our-story`).
3. Make sure it's **Public** (unless you have GitHub Pro).

## Step 2: Update Configuration
I've added placeholders in two files. You need to update them with your actual details:

1.  **`vite.config.js`**:
    -   Find: `base: '/<REPO_NAME>/'`
    -   Replace `<REPO_NAME>` with your repository name (e.g., `base: '/love-journey/'`).

2.  **`package.json`**:
    -   Find: `"homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>"`
    -   Replace `<YOUR_GITHUB_USERNAME>` with your GitHub username.
    -   Replace `<REPO_NAME>` with your repository name.

## Step 3: Initialize & Push
Open your terminal (VS Code terminal is fine) and run these commands one by one:

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit changes
git commit -m "Initial commit: Love Journey Website"

# 4. Link to your GitHub repo (Replace URL with your actual repo URL)
git remote add origin https://github.com/pk1997/our-story.git

# 5. Push to main branch
git branch -M main
git push -u origin main
```

## Step 4: Deploy!
Once your code is on GitHub, run this command in your terminal to deploy:

```bash
npm run deploy
```

## Step 5: Enable GitHub Pages
1.  Go to your repository on GitHub.
2.  Click **Settings** > **Pages**.
3.  Under **Source**, ensure it says "Deploy from a branch".
4.  Under **Branch**, select `gh-pages` (this branch is created automatically by the deploy command).
5.  Click **Save**.

Your site will be live at the link shown in the settings! 🚀

## Troubleshooting: Permission Denied (403)
If you see an error like `Permission to ... denied to ...`, it means your computer is remembering an old GitHub account.

**Fix:**
Run this command to force the correct username (replace placeholders):
```bash
git remote set-url origin https://<YOUR_GITHUB_USERNAME>@github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
```
Then try pushing again. You may be asked for your password (use a Personal Access Token if you have 2FA enabled).

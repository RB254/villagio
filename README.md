# Git Workflow Guide

## For Developers: Pushing to Develop Branch

### 1. Stage Your Changes
```bash
git add .
```
This adds all your modified files to staging.

### 2. Commit Your Changes
```bash
git commit -m "Your descriptive commit message here"
```
Write a clear message describing what you changed.

### 3. Push to Develop Branch
```bash
git push origin develop
```
This pushes your commits to the `develop` branch on GitHub.

### 4. Create a Pull Request
- Go to your GitHub repository
- Click on "Pull requests" → "New pull request"
- Set base branch to `main` and compare branch to `develop`
- Add a description of your changes
- Request review from the FE Lead
- Wait for approval before merging

---

## For FE Lead: Merging to Main

### Option 1: Via GitHub (Recommended)
1. Review the pull request from the developer
2. Check the code changes
3. Click "Merge pull request" when satisfied
4. Confirm the merge
5. Delete the branch if needed

### Option 2: Via Command Line
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge develop into main
git merge develop

# Push to main
git push origin main
```

---

## Branch Protection Rules (Recommended Setup)

To enforce this workflow on GitHub:

1. Go to your repo → Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - "Require pull request reviews before merging"
   - "Require status checks to pass"
   - Restrict who can push to matching branches (add FE Lead only)

This ensures only the FE Lead can push directly to `main`, while all other developers must go through pull requests.

---

## Quick Reference

**Developers:** `develop` branch only  
**FE Lead:** Can push to both `develop` and `main`

**Check current branch:**
```bash
git branch
```

**Switch branches:**
```bash
git checkout branch-name
```

**Pull latest changes:**
```bash
git pull origin branch-name
```
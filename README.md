
If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed
Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/renzrebogio/MICI-Web.git

# Step 2: Navigate to the project directory.
cd MICI-Web

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Check the branch you're on, you must be on main before editing:
git branch

# If it shows * main → you're on main already. If not, switch with:
git checkout main

# Step 5: Make sure main is up to date. Always pull the latest code before working, to avoid conflicts:
git pull origin main

# Step 6: Start the development server with auto-reloading and an instant preview.
npm run dev

# Step 7: Make you're changes. You can now edit code, add files, etc.

 # Step 8: Stage the changes. Add modified files to the “staging area”:
git add .

# (. means add everything changed. They can also specify files, e.g. git add src/App.js.)

# Step 9:  Commit the changes. Save the staged changes with a message:
git commit -m "Update hero section with new animation"

# Step 10:  Push to origin/main. Now send you're changes up to GitHub:
git push origin main


```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

# Vestify

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

### Get Started

- Step 1: Fork this repository.
- Step 2: Create a folder on your local machine and change directory.

```bash
mkdir <folder_name> && cd <folder_name>
```

- Step 3: Initialize an empty Git repository.

```bash
git init
```

- Step 4: Set up remote origin.

```bash
git remote add origin https://github.com/<your_username>/vestify.git
```

- Step 5: Pull files from your fork.

```bash
git pull origin main
```

- Step 6: Set up remote upstream.

```bash
git remote add upstream https://github.com/miraajkadam/vestify.git
```

- Step 7: Check your remotes.

```bash
git remote -v
```

Expected output:

```bash
origin  https://github.com/<your_username>/vestify.git (fetch)
origin  https://github.com/<your_username>/vestify.git (push)
upstream        https://github.com/miraajkadam/vestify.git (fetch)
upstream        https://github.com/miraajkadam/vestify.git (push)
```

You are now set up to start contributing to this repository.

### After Setting Up

- Step 1: Update your remote fork. (**Always** before making your changes)

```bash
git fetch upstream
git merge upstream/main main
git push origin main
```

- Step 2: Write your code. Add files to staging and commit to your forked repository.

```bash
git add <your_files>
git commit -m "<commit_message>"
git push origin main
```

- Step 3: Go to your forked repository and make a pull request. Make sure to provide appropriate comments with your pull request.

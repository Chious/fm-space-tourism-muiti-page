# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🚀 Deployment to GitHub Pages

`.env` used for development

```shell
cp .env.example .env
```

you should defined `BASE_PATH` and `SITE_URL` in repo secret.

This project is configured to deploy to GitHub Pages automatically.

### Setup Instructions

1. Push your code to GitHub:

   ```sh
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. Enable GitHub Pages in your repository:

   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Build and deployment**:
     - **Source**: Select **GitHub Actions**
   - Save the settings

3. The site will be available at:
   `https://chious.github.io/fm-space-tourism-muiti-page/`

### Automatic Deployment

Every time you push to the `main` branch, the GitHub Action will automatically:

- Build your Astro site
- Deploy it to GitHub Pages

You can monitor the deployment progress in the **Actions** tab of your GitHub repository.

# EDUGamification

Learning experiences gamified.

This repository is set up as a simple GitHub Pages site that can host multiple online learning experiences from one homepage.

## Site structure

- `/index.html` is the landing page.
- `/creations/` contains each hosted activity or prototype in its own folder.
- `/creations.json` powers the homepage navigation cards.

## Add a new learning experience

1. Create a new folder inside `/creations/`, such as `/creations/module-quiz/`.
2. Add an `index.html` file and any supporting assets for that experience inside the folder.
3. Add a new entry to `/creations.json` with:
   - `title`
   - `description`
   - `category`
   - `path`
4. Commit the changes to GitHub.

## Publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the settings and wait for GitHub Pages to publish the site.

Once Pages is enabled, the homepage will act as a navigation hub for all creations you add to this repository.

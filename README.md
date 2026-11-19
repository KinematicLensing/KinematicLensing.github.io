# kinematiclensing.github.io

Website of the **Kinematic Lensing with the Roman Space Telescope** NASA Wide-Field Science Team.
Built with [Jekyll](https://jekyllrb.com/) and served by GitHub Pages at
<https://kinematiclensing.github.io>.

## Deploy

1. In the `KinematicLensing` GitHub organization, create a public repository named exactly
   **`KinematicLensing.github.io`**.
2. Push the contents of this folder to the `main` branch:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial website"
   git remote add origin https://github.com/KinematicLensing/KinematicLensing.github.io.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**, set *Source* to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. The site goes live at https://kinematiclensing.github.io
   within a minute or two.

No build tooling is needed — GitHub Pages builds Jekyll sites automatically. The only plugins
used (`jekyll-seo-tag`, `jekyll-sitemap`) are supported by GitHub Pages out of the box.

## Editing content

Most updates only touch the YAML files in `_data/`:

| What | File |
|---|---|
| Team members (name, role, affiliation, optional photo & website) | `_data/team.yml` |
| Publications (title, authors, year, journal, arXiv, DOI, tags) | `_data/publications.yml` |
| Software / repositories | `_data/software.yml` |
| News items | `_data/news.yml` |

Page text lives in `index.html` (home), `science.md`, `team.html`, `publications.html`,
`software.html` and `news.html`. Styles are in `assets/css/style.css`.

Team photos: add square images to `assets/img/team/` and set `photo: /assets/img/team/name.jpg`
for the member. Without a photo, initials are shown.

Navigation and site-wide settings (title, optional contact email) are in `_config.yml`.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

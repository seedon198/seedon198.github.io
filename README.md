# Security Conference Village Website

This repository contains the source code for a security conference village website, designed to be hosted on GitHub Pages. It provides a template that can be easily customized for various security conferences and their associated villages.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup and Development](#setup-and-development)
- [Adding New Sections/Modules](#adding-new-sectionsmodules)
- [Customization](#customization)
- [Deployment](#deployment)
- [Domain Configuration](#domain-configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows this directory structure:

. ├── CNAME ├── _config.yml ├── *.html (Various HTML pages) ├── static/ │ ├── css/ │ ├── js/ │ ├── md/ │ └── media/ └── tools/ ├── hw/ └── web/


- Root directory contains main HTML pages and configuration files.
- `static/` directory holds all static assets:
  - `css/`: Stylesheets
  - `js/`: JavaScript files
  - `md/`: Markdown content
  - `media/`: Images, audio, and other media files
- `tools/` directory contains HTML pages for various tools:
  - `hw/`: Hardware-related tools
  - `web/`: Web-based tools

## Setup and Development

1. Clone the repository:
git clone https://github.com/your-username/security-conference-village.git cd security-conference-village

2. Install Visual Studio Code (VSCode) if you haven't already.

3. Open the project in VSCode:
code .

4. Install recommended VSCode extensions:
- Live Server
- Prettier - Code formatter
- ESLint

5. To run the website locally, use the Live Server extension. Right-click on `index.html` and select "Open with Live Server".

## Adding New Sections/Modules

1. Create a new HTML file in the root directory for the new section.
2. Add corresponding CSS in `static/css/` and JavaScript in `static/js/` if needed.
3. Update the navigation menu in all HTML files to include the new section.
4. If adding a new tool, create an HTML file in the appropriate subdirectory under `tools/`.

## Customization

1. Modify `_config.yml` to update site-wide settings.
2. Edit HTML files to change content and structure.
3. Update CSS files in `static/css/` to modify styles.
4. Customize JavaScript functionality in `static/js/`.
5. Replace images and media in `static/media/` with your own assets.

## Deployment

This website is designed to be hosted on GitHub Pages:

1. Go to your GitHub repository settings.
2. Navigate to the "Pages" section.
3. Set the source branch to `main` and the folder to `/ (root)`.
4. Click "Save" to deploy your website.

GitHub will provide you with a URL where your site is published.

## Domain Configuration

To use a custom domain from Namecheap:

1. Purchase a domain from Namecheap.
2. In your GitHub repository, go to Settings > Pages.
3. Under "Custom domain", enter your domain name and save.
4. Create a `CNAME` file in your repository root with your domain name.
5. In Namecheap:
- Go to Domain List > Manage > Advanced DNS
- Add an A record pointing to GitHub's IP addresses:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- Add a CNAME record:
  - Host: www
  - Value: your-username.github.io
6. Wait for DNS changes to propagate (up to 24 hours).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

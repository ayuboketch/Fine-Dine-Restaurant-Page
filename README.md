![Screenshot 2024-08-01 at 14 11 16](https://github.com/user-attachments/assets/ff52004b-9618-420b-94ba-f8e7b3e8726d)
![Screenshot 2024-08-01 at 14 12 00](https://github.com/user-attachments/assets/b17ba282-6516-4ed9-9ef6-85e782933660)

# Fine & Dine Restaurant Page
This is a restaurant page build with webpack 

Welcome to the Fine & Dine Restaurant Page! This project showcases a dynamic restaurant website built using modern JavaScript practices and bundled with Webpack. The site features tabbed browsing to navigate between Home, Menu, About, and Contact sections.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/restaurant-page.git
   cd restaurant-page
   ```

2. Initialize the project with npm:
   ```bash
   npm init -y
   ```

3. Install the required dependencies:
   ```bash
   npm install webpack webpack-cli --save-dev
   npm install html-webpack-plugin --save-dev
   ```

## Usage

1. To start the project, run:
   ```bash
   npx webpack
   ```

2. For continuous development, you can use:
   ```bash
   npx webpack --watch
   ```

3. Open `dist/index.html` in your browser to view the project.

## Project Structure

```
restaurant-page/
├── dist/
│   └── index.html
├── src/
│   ├── index.js
│   └── index.html
├── .gitignore
├── package.json
└── webpack.config.js
```

- `dist/` - Contains the bundled output files.
- `src/` - Contains the source files.
- `index.js` - The main JavaScript file.
- `index.html` - The HTML skeleton.
- `.gitignore` - Specifies files to be ignored by Git.
- `webpack.config.js` - Configuration file for Webpack.

## Features

- **Modular JavaScript**: The project is structured using JavaScript modules for better organization and maintenance.
- **Dynamic Content**: The content of the `div#content` is generated dynamically using JavaScript functions.
- **Tabbed Navigation**: The site features tabbed navigation to switch between different sections such as Home, Menu, About, and Contact.
- **Responsive Design**: The layout is designed to be responsive and adaptive to various screen sizes.
- **CSS Animations**: Smooth transitions and animations for a better user experience.

## Technologies Used

- **HTML**: For the basic structure of the web page.
- **CSS**: For styling the web page.
- **JavaScript**: For dynamic content and interactions.
- **Webpack**: For bundling the JavaScript files and managing dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

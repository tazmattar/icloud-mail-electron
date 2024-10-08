
# iCloud Mail Electron App

## Overview

This Electron-based application is designed to provide a lightweight, desktop-friendly wrapper for iCloud Mail. It allows you to access iCloud Mail in a standalone desktop application without the need for a web browser. The app features navigation restrictions to keep you within the iCloud Mail environment and includes modifications to hide unnecessary UI elements like the quick access button.

### Key Features:
- **Direct access to iCloud Mail** in a desktop application.
- **Hides the quick access button** for a cleaner interface.
- **Prevents navigation** outside of iCloud Mail.
- **Blocks new window pop-ups** for a focused experience.

---

## Dependencies

This project relies on the following dependencies:

1. **[Node.js](https://nodejs.org/)** (v12.x or later):
   - Node.js is required to run the Electron framework and manage packages.
   - Installation instructions:
     ```bash
     # On Ubuntu/Debian-based systems:
     sudo apt update
     sudo apt install nodejs npm

     # On macOS (via Homebrew):
     brew install node

     # On Windows:
     Download and install Node.js from the [official website](https://nodejs.org/).
     ```

2. **[Electron](https://www.electronjs.org/)** (v24.x or later):
   - Electron is used to create the desktop application. You can install it via npm.
   - Installation instructions:
     ```bash
     npm install electron --save-dev
     ```

3. **[Webpack](https://webpack.js.org/)** (v5.x or later):
   - Webpack is used to bundle the app's JavaScript files for production.
   - Installation instructions:
     ```bash
     npm install --save-dev webpack webpack-cli
     ```

4. **Optional: Babel (for ES6+ support)**
   - If you use modern JavaScript (ES6+), you may want to use Babel to transpile your code.
   - Installation instructions:
     ```bash
     npm install --save-dev babel-loader @babel/core @babel/preset-env
     ```

---


## Installation

### Option 1: Download Pre-Built Executable (Recommended)

You can download the pre-built Linux version of the app from the [Releases](https://github.com/your-username/your-repo-name/releases) section.

- **Linux**: Download the `.AppImage` file.

### Option 2: Build the App Locally

If you prefer to build the app yourself, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

## Usage

After starting the app, the iCloud Mail interface will open in a desktop window. The app restricts navigation outside of iCloud Mail and blocks pop-ups from opening in new windows.

### Modifications:
- The **quick access button** (the grid icon) is hidden for a cleaner interface.
- You will not be able to navigate away from iCloud Mail (e.g., links outside the app are blocked).

---

## Contributing

Feel free to fork the repository and submit pull requests if you have suggestions or improvements.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

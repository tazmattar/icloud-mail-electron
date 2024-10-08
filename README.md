
# iCloud Mail Electron App

## Overview

This Electron-based application is designed to provide a lightweight, desktop-friendly wrapper for iCloud Mail. It allows you to access iCloud Mail in a standalone desktop application without the need for a web browser. The app features navigation restrictions to keep you within the iCloud Mail environment and includes modifications to hide unnecessary UI elements like the quick access button.

---

## Features

- **Direct access to iCloud Mail** in a desktop application.
- **Hides the quick access button** for a cleaner interface.
- **Prevents navigation** outside of iCloud Mail.
- **Blocks new window pop-ups** for a focused experience.

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the app for Linux using Webpack and Electron Builder:
   ```bash
   npm run build
   npm run dist
   ```

4. You can now run the generated `.AppImage` file:
   ```bash
   ./dist/your-app-name.AppImage
   ```



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


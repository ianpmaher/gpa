## GPA Calculator App

This app is designed to help students and educators calculate GPA based on course level, grade, and credits. Users can add multiple courses, calculate GPA in real-time, export the data to CSV or PDF, and view the GPA report as a real-time PDF directly within the browser. It also supports dark mode for a more comfortable viewing experience. Default grade point table is based on that of my employer (high school), so you can customize to your own data easily.
This project uses **React** and **Vite**.

## Getting Started

To run this app locally, follow these steps:

1. Clone or fork the repository to your local machine:
   ```bash
   git clone https://github.com/ianpmaher/gpa
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install all necessary dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Installation / Dependencies

To install the necessary dependencies, ensure you are in the directory with the `package.json` file and run:

```bash
npm install
```

### Major Dependencies:
- **react-papaparse**: For CSV export functionality.
- **@react-pdf/renderer**: For generating and viewing PDF reports.
- **Tailwind CSS**: For styling the application, including dark mode support.
- **React**: The core library used to build the user interface.
- **Radix-UI**: Various primitives and icons.

## Features

- **CSV Export**: Export the GPA data to a CSV file.
- **PDF Export**: Download the GPA data as a PDF document.
- **PDF Real-time Viewing**: View the GPA report as a real-time PDF directly within the app.
- **Dark Mode**: Toggle dark mode for a more comfortable viewing experience.

## In Development

  - CSV import
    - Hopefully able to standardize column headers. Right now will be those of various Aspen (Follett) names. 
  - Select template for Grade/Year of Graduation
    - If you know your GPA as a senior (covering 9-12), you can input that number and # credits. Then type in projected grades.

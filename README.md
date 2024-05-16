
**Text Analyzer**
================

A web application that analyzes text input and provides various statistics, including word count, character count, sentence count, paragraph count, and the longest word in the text.

**Features**
------------

* **Word Count**: Counts the number of words in the text.
* **Character Count**: Counts the number of characters in the text.
* **Sentence Count**: Counts the number of sentences in the text.
* **Paragraph Count**: Counts the number of paragraphs in the text.
* **Longest Word**: Finds the longest word in the text.

**Technologies Used**
--------------------

### Frontend

* HTML
* CSS
* typescript

### Backend

* Node.js
* Express.js
* MongoDB (for storing text data)

### Testing

* Jest (for unit testing)

**Getting Started**
-------------------

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/text-analyzer.git
```

2. **Navigate to the project directory**:

```bash
cd text-analyzer
```

3. **Install dependencies**:

```bash
npm install
```

4. **Start the server**:

```bash
npm start
```

5. **Open your web browser** and go to http://localhost:4000 to access the application.

**Usage**
--------

1. **Enter text** into the input area.
2. **Click the "Analyze Text" button** to perform the analysis.
3. **View the analysis results** displayed on the page.

**Project Structure**
--------------------

```
text-analyzer/
│
├── server.ts          // Server-side entry point
├── package.json       // npm package configuration
├── package-lock.json  // npm package lock file
│__tsconfig.json
│
├── src/               // Source code directory
│   ├── app.ts         // Application entry point
│   ├── index.html     // HTML file
│   ├── script.js      // JavaScript file
│   ├── server.js      // Server-side JavaScript file
│   ├── models/        // Data models
│   │   └── text.ts    // Text model
│   ├── routes/        // Routing configuration
│   │   └── textRoutes.ts // Text routing configuration
│   ├── services/      // Business logic
│   │   └── textService.ts // Text service
│   └── tests/         // Unit tests
│       └── textService.test.ts // Text service unit tests
│
├── node_modules/      // npm packages
│
└── README.md         // This file
```

** Bug Fixes and Improvements**
In the latest version of the Text Analyzer project, I have addressed and fixed several bugs, as well as implemented new features to enhance the user experience


**Author**
--------

Rashed


# WEB_AUT_Anton_Volkov_FINAL_TASK

## Task Summary

Automated testing script for the website:  
[https://demoqa.com/automation-practice-form](https://demoqa.com/automation-practice-form)

---

## What It Does

The test script does the following:

- Opens the practice form
- Fills in all required fields:
  - First Name: John
  - Last Name: Porkovski
  - Email: john.pork@example.com
  - Gender: Male
  - Mobile Number: 388841910
  - Date of Birth: 28 February 1930
  - Subject: Economics
  - Hobbies: Music
  - File Upload: photo.jpg
  - Address: 847 DoubleMain Street
  - State: NCR
  - City: Delhi
- Submits the form
- Validates the result modal for correct data

---

## Project Structure

```
WEB_AUT_Anton_Volkov_FINAL_TASK/
├── cypress/
│ ├── e2e/
│ │ └── finalTask.cy.js
│ ├── files/
│ │ └── photo.jpg
│ └── support/
│ └── e2e.js
├── package.json
└── README.md
```

---

## Run Instructions

> Requires Node.js and Cypress installed

```bash
npm install
npx cypress open
```

Then run `finalTask.cy.js`.

# Software Testing Requirements

This document explains how to verify the robust functionality of the portfolio project.

## 1. Unit Testing (Form Validation)
**Objective**: Ensure invalid inputs are blocked from transmission.
**Action**: 
- Open the contact form in the browser.
- Hit submit without entering any text, or enter an invalid email structure (e.g. `user@com`).
**Result**: HTML5 browser-native validation should intercept and catch empty fields and incorrect formats before the JS `fetch` code is reached.

## 2. Integration Testing (Frontend ↔️ Backend)
**Objective**: Ensure JS properly transports REST payload to the Node.js server.
**Action**: Fill the form fully and submit. Monitor the browser's Developer Tools -> Network tab.
**Result**: The payload is securely shuttled to `http://localhost:5000/contact` via POST without CORS restrictions.

## 3. Functional Testing (Form Submission Process)
**Objective**: Test the holistic user scenario end-to-end.
**Action**:
- Enter a name, email, and message.
- Click "Send Message".
**Result**: The system responds precisely: the Send button transitions to "Sending...", then immediately displays "Message sent successfully!" using a vibrant success container, finally gracefully fading away.

## 4. Black Box Testing (Input / Output Mapping)
**Objective**: Validating backend correctness through decoupled input vectors.
**Action**: Intercept requests via Postman with missing schema keys.
**Result**:
- Sending missing keys forces a `400 Bad Request` mapping to `{"error": "All fields are required"}`.

## 5. White Box Testing (Backend Logic & SQL Integration)
**Objective**: Validate `mysql2` execution integrity.
**Action**: Alter the MySQL schema logic or `INSERT INTO` mappings inside Node.js, or attempt an insertion block.
**Result**: Express's `db.query` callback successfully suppresses the hard crash, triggers the `err` object check, and safely propagates a `500 Server Error` response JSON back to the UI. Normal paths guarantee precise schema binding limits (such as INT AUTO_INCREMENT constraint integrity).

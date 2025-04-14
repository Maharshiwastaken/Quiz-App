# HTML5 Form Validation – Mini Project

This project demonstrates client-side form validation using native HTML5 attributes. It serves as a lightweight and straightforward example of how form input constraints can be applied without JavaScript.

## 📋 Features

- HTML5 form validation using attributes like:
  - `required`
  - `minlength` / `maxlength`
  - `pattern`
  - `type` (e.g., `email`, `number`)
- Instant feedback from the browser on invalid inputs
- Simple UI for demonstration purposes
- Uses Bootstrap 5 for basic styling

## 🚀 How to Run

1. Clone or download the repository.
2. Open the `index.html` file in any modern browser.
3. Try submitting the form with different inputs to see the validation in action.

## ⚠️ Limitations

> **Security Note:**  
As I have now realised after months of learning, this project uses only client-side validation and **should not** be used in production as-is.

- **No server-side validation:** All validations are done in the browser. A user can bypass these checks using browser dev tools.
- **No backend integration:** The form does not store or submit data anywhere.
- **No custom error messages:** Relies on the browser's default messages.

## ✅ When to Use This

- As a learning exercise for understanding how HTML5 validations work
- For quick mockups or front-end-only prototypes
- In static environments where no sensitive data is involved

## 🛠️ Future Improvements (Optional)

- Add JavaScript for enhanced validation and error feedback
- Implement server-side validation with PHP, Node.js, or any backend of choice
- Store form submissions in a database or use email APIs

## 🧑‍💻 Author

Your Name  
[Your GitHub Profile](https://github.com/yourusername)


### 📄 `README.md`

````markdown
# 👤 User Management Dashboard (Frontend Assessment)

This is a responsive and interactive user management dashboard built with **React**, **TypeScript**, and **SCSS** as part of a frontend engineering assessment.

It allows you to:
- Display a paginated table of users.
- View user details on selection.

- Scroll horizontally on smaller screens.
- Maintain clean UI across breakpoints.

---

## 🚀 Tech Stack

- **React**
- **TypeScript**
- **SCSS Modules**
- **TanStack Table (React Table v8)**
- **React Icons**
- **LocalStorage** (for simulating user detail selection)
- **Vite** (for fast build and development)
- **Vitest / React Testing Library** (for testing)

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/goodylove/lendsqr-fe-test.git
# Navigate to the project
cd lendsqr-fe-test

# Install dependencies
npm install
````

---

## 🧑‍💻 Development

Start the dev server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173]

---

## 🧪 Testing

Run all unit tests:

```bash
npm run vitest
```

> Tests are written with `Vitest`  and cover user login form .

---

## 🛠 Features

✅ Responsive table layout
✅ Pagination with ellipsis support (e.g. 1, 2, ..., 25, 60)
✅ Scrollable tables on smaller screens
✅ Clean and semantic SCSS styling
✅ Modular, maintainable component structure
✅ Mock data from JSON file


---


## 🚦 CI/CD

This repo includes a GitHub Actions CI workflow (`.github/workflows/ci.yml`) to:

* Run tests automatically on every `push` or `pull_request`
* Ensure code quality before merging

---

## 📄 Commit Convention

Commits follow the `conventional commits` pattern. Examples:

* `feat: add pagination logic for table`
* `fix: update folder structure`
* `chore: update dependencies`
* `test: Ensure login button enables only when email and password are filled`.

# Assignment 12 - React Component Library with Storybook

## Author

**Jordan Lerat**

Red River College Polytechnic

Full Stack Web Development Diploma


---

# Project Overview

This project is a responsive UI Component Library built using React, TypeScript, Storybook, Styled Components, Jest, React Testing Library, and Docker.

The purpose of this project is to create reusable UI components that can be tested, documented, and deployed using modern web development tools and practices.

---

# Components Included

The component library contains the following components:

* Button
* Label
* Text
* Table
* Table Header
* Table Row
* Table Cell
* Table Footer
* Dropdown
* Radio Button
* Img
* Hero Image
* Card

Each component includes:

* Responsive styling
* Default state
* Disabled state
* Storybook stories
* Unit tests

---

# Technologies Used

* React
* TypeScript
* Storybook
* Styled Components
* Jest
* React Testing Library
* Docker
* Nginx

---

# Prerequisites

Before running this project, install the following:

* Docker Desktop

Optional for local development:

* Node.js
* npm

---

# Running the Application with Docker

## Step 1 - Build the Docker Image

Open a terminal in the project root directory and run:

```bash
docker build -t lerat_jordan_coding_assignment12 .
```

## Step 2 - Run the Docker Container

Run the container using:

```bash
docker run --name lerat_jordan_coding_assignment12 -p 8083:80 lerat_jordan_coding_assignment12
```

## Step 3 - Open the Application

Open a web browser and navigate to:

```text
http://localhost:8083
```

Storybook will load and display all available UI components.

---

# Running the Application Locally

## Install Dependencies

```bash
npm install
```

## Start Storybook

```bash
npm run storybook
```

## Open Storybook

Open:

```text
http://localhost:6006
```

---

# Running Unit Tests

Run all component tests:

```bash
npm test
```

When Jest starts, press:

```text
a
```

to run all tests.

---

# Building a Production Storybook

Generate a production Storybook build:

```bash
npm run build-storybook
```

The production build will be generated in:

```text
storybook-static/
```

---

# Docker Configuration Requirements

This project satisfies the assignment requirements by:

* Using a production Storybook build
* Creating a working directory named:

```text
lerat_jordan_ui_garden
```

* Creating a container named:

```text
lerat_jordan_coding_assignment12
```

* Hosting the application on:

```text
http://localhost:8083
```

---

# Dockerfile Summary

The Dockerfile performs the following tasks:

1. Uses a Node.js image to build the application.
2. Creates the required working directory.
3. Installs project dependencies.
4. Generates a production Storybook build.
5. Uses Nginx to host the static Storybook files.
6. Exposes the application through localhost port 8083.

---

# Assignment Learning Outcomes

This project demonstrates the ability to:

* Create reusable React UI components.
* Implement responsive component design.
* Test components using Jest and React Testing Library.
* Document components using Storybook.
* Style components using Styled Components.
* Create a production-ready Docker deployment.
* Host a production build using Nginx.

---

# Repository Structure

```text
assignment-12-component-library/
│
├── .storybook/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Label/
│   │   ├── Text/
│   │   ├── Dropdown/
│   │   ├── RadioButton/
│   │   ├── Img/
│   │   ├── HeroImage/
│   │   ├── Card/
│   │   ├── Table/
│   │   ├── TableHeader/
│   │   ├── TableRow/
│   │   ├── TableCell/
│   │   └── TableFooter/
│   │
│   └── theme.ts
│
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json
```

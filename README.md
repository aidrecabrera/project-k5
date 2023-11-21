<div align="center">
  <p><img src="https://github.com/aidrecabrera/project-k5/assets/61798731/c39f502d-cf87-467a-aed9-f4b0281b7caf" /></p>
  <p>"Project K5 Progress" aims to drive climate action at the grassroots level, creating a sustainable and <br> resilient future for the Philippines. Together, we can win the race against the climate crisis.</p>
</div>

---

**Motivation.** The Philippines faces severe climate challenges, from natural disasters to rising sea levels and biodiversity loss. It's essential to bridge the gap between climate promises and effective action, especially as a signatory to The Paris Agreement.

**Empathy.** Project K5 Progress" empathizes with diverse stakeholders:
- Filipino Civil Society: They need reliable, real-time climate information for effective climate engagement.
- Public Health Authorities: Similar to the COVID-19 pandemic, climate action requires real-time data communication and a pipeline between the general public and the authorities.
- Filipino Youth: Engaging the youth is vital for a sustainable future.

**Definition.** Existing information systems lack timely, localized climate data. Misinformation on the internet exacerbates this issue, necessitating a trusted climate information system.

**Ideation.** Inspired by COVID-19 dashboards, "Project K5 Progress" creates a web app for Filipinos with:
- Real-time Climate Data
- Climate Reporting
- Community Engagement
- Youth Empowerment
- Global Climate Commitment Tracking

**Objectives**

1. Develop a user-friendly web app for monitoring, reporting, and promoting climate progress in the Philippines.
2. Provide accurate climate data for informed decision-making.
3. Empower and engage local individuals and communities, with a focus on youth involvement.

![Home](https://github.com/aidrecabrera/project-k5/assets/61798731/287e5fc8-6c93-49a3-b690-b13d22457d32)

## Tech Stack

![Tech-Stack](https://github.com/aidrecabrera/project-k5/assets/61798731/b3d9c7e9-6a62-4f11-a6e9-78a74f212d63)


The selection of our technical stack is driven by the imperative of time constraints. There is a need to ensure the timely development and deployment of a functional web application. Therefore, the project lead has chosen technologies that strike a balance between efficiency, reliability, and ease of implementation.

## Getting Started

### Prerequisites
Before you begin, make sure you have the following software and tools installed:

- [Node.js](https://nodejs.org/) - for running ReactJS.
- [Python](https://www.python.org/) - for the backend.
- [Django](https://www.djangoproject.com/) - a Python web framework.
- [MongoDB](https://www.mongodb.com/) - a NoSQL database.
- [PyMongo](https://pymongo.readthedocs.io/) - Python driver for MongoDB.

### Django Project Dependencies
To run this project, you'll need to install the following Python packages and their specified versions:

- [asgiref](https://pypi.org/project/asgiref/)==3.7.2
- [certifi](https://pypi.org/project/certifi/)==2023.7.22
- [charset-normalizer](https://pypi.org/project/charset-normalizer/)==3.2.0
- [Django](https://www.djangoproject.com/)==4.1.11
- [django-cors-headers](https://pypi.org/project/django-cors-headers/)==4.2.0
- [djangorestframework](https://pypi.org/project/djangorestframework/)==3.14.0
- [djongo](https://pypi.org/project/djongo/)==1.3.6
- [dnspython](https://pypi.org/project/dnspython/)==2.4.2
- [docopt](https://pypi.org/project/docopt/)==0.6.2
- [idna](https://pypi.org/project/idna/)==3.4
- [pipreqs](https://pypi.org/project/pipreqs/)==0.4.13
- [pymongo](https://pypi.org/project/pymongo/)==3.12.3
- [pytz](https://pypi.org/project/pytz/)==2023.3.post1
- [requests](https://pypi.org/project/requests/)==2.31.0
- [sqlparse](https://pypi.org/project/sqlparse/)==0.2.4
- [tzdata](https://pypi.org/project/tzdata/)==2023.3
- [urllib3](https://pypi.org/project/urllib3/)==2.0.5
- [yarg](https://pypi.org/project/yarg/)==0.1.9

You can use `pip` to install these packages in your Python environment:

```bash
pip install -r requirements.txt
```

### API Server
```
http://k5api.aidre.codes/swagger/
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aidrecabrera/project_k5.git
   cd project_k5
   ```
2. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```
     or
	   ```bash
     pnpm install
     ```

3. **Backend Setup:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Create a virtual environment (optional but recommended):

     ```bash
     python -m venv venv
     ```

   - Activate the virtual environment:

     - On Windows:

       ```bash
       venv\Scripts\activate
       ```

     - On macOS and Linux:

       ```bash
       source venv/bin/activate
       ```

   - Install Django and PyMongo:

     ```bash
     pip install django pymongo
     ```

   - Apply database migrations:

     ```bash
     python manage.py migrate
     ```

### Usage

1. **Frontend Development:**

   - Start the React development server:

     ```bash
     npm start or pnpm start
     ```
   - Access the frontend in your browser at `http://localhost:3000`.

2. **Backend Development:**

   - Start the Django development server:

     ```bash
     python manage.py runserver
     ```

   - Access the backend API at `http://localhost:8000`.

## Setting up Django Framework

### Installing an official release with `pip`

This is the recommended way to install Django.

1. Install [pip](https://pip.pypa.io/). The easiest is to use the [standalone pip installer](https://pip.pypa.io/en/latest/installation/). If your distribution already has **`pip`** installed, you might need to update it if it’s outdated. If it’s outdated, you’ll know because installation won’t work.
2. Take a look at [venv](https://docs.python.org/3/tutorial/venv.html). This tool provides isolated Python environments, which are more practical than installing packages systemwide. It also allows installing packages without administrator privileges. The [contributing tutorial](https://docs.djangoproject.com/en/4.2/intro/contributing/) walks through how to create a virtual environment. However, in this instance, I will use [Poetry](https://python-poetry.org/).
3. After you’ve created and activated a virtual environment, enter the command:
    
    `$ python -m pip install Django`
    

**Creating a project**

`$ django-admin startproject k5`

This will create a **`k5`** directory in the current directory.

```
k5/
    manage.py
    k5/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

**The development server**

Change into the outer **`mysite`** directory, if you haven’t already, and run the following commands:

`$ python manage.py runserver`

You’ll see the following output on the command line:

```
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
September 28, 2023 - 21:15:05
Django version 4.2.5, using settings 'k5.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

### Making the Rest API application in the project

The following command will create an application for the project that will handle the API-related transactions within the project.

`$ python manage.py startapp api`

## Setting up React Framework via ViteJS

Scaffolding the frontend with pnpm (I replaced npm due to the benefits):
`$ pnpm create vite@latest k5_frontend`

Then follow the prompts. I am using the JavaScript without the SWC.

`$ cd k5_frontend`

`$ pnpm install`

```bash
Packages: +265
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 287, reused 211, downloaded 54, added 265, done
node_modules/.pnpm/esbuild@0.18.20/node_modules/esbuild: Running postinstall script, done in 473ms

dependencies:
+ react 18.2.0
+ react-dom 18.2.0

devDependencies:
+ @types/react 18.2.23
+ @types/react-dom 18.2.8
+ @vitejs/plugin-react 4.1.0
+ eslint 8.50.0
+ eslint-plugin-react 7.33.2
+ eslint-plugin-react-hooks 4.6.0
+ eslint-plugin-react-refresh 0.4.3
+ vite 4.4.9

Done in 9.2s
```

### Installation of Tailwind CSS

Install **`tailwindcss`** and its peer dependencies, then generate **`tailwind.config.js`** and **`postcss.config.js`** files.

`pnpm install -D tailwindcss postcss autoprefixer`

```bash
Packages: +49
+++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 336, reused 312, downloaded 2, added 49, done

devDependencies:
+ autoprefixer 10.4.16
+ postcss 8.4.30
+ tailwindcss 3.3.3

Done in 3.5s
```

`pnpx tailwindcss init -p`

```bash
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

Add the paths to all of your template files in your **`tailwind.config.js`** file.

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the **`@tailwind`** directives for each of Tailwind’s layers to your **`./src/index.css`** file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

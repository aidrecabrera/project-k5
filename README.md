# Project K5 Progress

**"Project K5 Progress" aims to drive climate action at the grassroots level, creating a sustainable and resilient future for the Philippines. Together, we can win the race against the climate crisis.**

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

## Tech Stack

![Project K5 - Page 1](https://github.com/aidrecabrera/project-k5/assets/61798731/0f041640-62d2-4c4f-805b-bd15ec5ab2b2)

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

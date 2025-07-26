export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  readmeContent: string
  featured: boolean
  category: 'web' | 'ml' | 'algorithms' | 'mobile'
}

export const projectsData: Project[] = [
  {
    id: 'cvd-risk-prediction',
    title: 'CVD Risk Prediction System',
    description: 'ML-powered cardiovascular disease risk assessment application with Random Forest classifier, integrated with London-specific environmental data and responsive web interface.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'scikit-learn', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/S-Mircea/cardio-project',
    featured: true,
    category: 'ml',
    readmeContent: `# Cardiovascular Disease Risk Assessment Web App

## Overview

This project is a modern, full-stack web application for personalized cardiovascular disease (CVD) risk assessment. It combines machine learning, environmental data, and a local Llama language model (via Ollama) to provide users with both a risk score and actionable, environment-aware health advice.

Developed as a final-year Computer Science project, the app demonstrates the integration of data science, web development, and AI-powered user interaction.

---

## Features

- **CVD Risk Prediction:**  
  Users enter their health and lifestyle data, and the app predicts their 10-year risk of developing cardiovascular disease using a trained machine learning model.

- **Environmental Risk Factors:**  
  The app incorporates local environmental data (e.g., air pollution, green space) based on the user's London borough.

- **Personalized Llama AI Advice:**  
  After risk assessment, the app uses a local Llama model (via Ollama) to generate 3 practical, personalized tips for improving cardiovascular health, tailored to both the user's profile and their environment.

- **Modern Web Interface:**  
  Clean, responsive UI with clear risk visualization, key risk factors, and advice cards.

---

## Technical Implementation

### Machine Learning Model
- **Algorithm:** Random Forest Classifier
- **Features:** Health metrics, lifestyle factors, environmental data
- **Accuracy:** 85%+ prediction accuracy on test data
- **Training:** scikit-learn with comprehensive feature engineering

### Web Framework
- **Backend:** Flask with RESTful API design
- **Frontend:** Responsive HTML/CSS with JavaScript
- **Real-time Processing:** Dynamic risk calculation and visualization

### AI Integration
- **Local LLM:** Ollama integration for personalized health advice
- **Privacy-First:** All data processing happens locally
- **Contextual Advice:** Environment-aware recommendations

## Author

Mircea Serban  
BSc Computer Science, Final Year Project`
  },
  {
    id: 'euroconnect-network',
    title: 'EuroConnect Telecommunications Network',
    description: 'University project implementing Kruskal\'s algorithm to find the minimum spanning tree for optimal telecommunications cable layout between European capitals.',
    technologies: ['Kotlin', 'Graph Theory', 'Algorithms', 'Data Structures'],
    githubUrl: 'https://github.com/S-Mircea/euroconnect',
    featured: true,
    category: 'algorithms',
    readmeContent: `# EuroConnect Telecommunications Network

## Project Overview

This is a university project for **COMP 1815 JVM Programming Languages** that implements a telecommunications network optimization system for connecting European capitals. The project uses Kruskal's algorithm to find the minimum spanning tree (MST) to determine the most cost-effective way to lay telecommunications cables between European cities.

## What it does

The EuroConnect system:
- Reads distance data between European capitals from a CSV file
- Constructs a weighted graph where cities are vertices and distances are edge weights
- Applies Kruskal's minimum spanning tree algorithm to find the optimal cable layout
- Calculates the total minimum cable length required to connect all cities
- Displays the connections that should be made and their individual distances

## Technical Implementation

### Key Components

- **Main.kt**: Entry point that handles user input and orchestrates the program flow
- **Graph.kt**: Graph data structure with methods to load data from CSV and calculate MST
- **KruskalAlgorithm.kt**: Implementation of Kruskal's algorithm using Union-Find data structure
- **input.csv**: Sample data file containing distances between European capitals

### Algorithm Details

The project implements Kruskal's algorithm with:
- **Union-Find (Disjoint Set)**: Efficiently detects cycles during MST construction
- **Path Compression**: Optimizes find operations in the Union-Find structure  
- **Union by Rank**: Balances the union operations for better performance

## Educational Purpose

This project demonstrates:
- Graph theory concepts and minimum spanning trees
- Kruskal's algorithm implementation
- Union-Find data structure with optimizations
- File I/O operations in Kotlin
- Object-oriented programming principles in Kotlin

## University Information

- **Course**: COMP 1815 JVM Programming Languages
- **Institution**: University of Greenwich
- **Language**: Kotlin (JVM)`
  },
  {
    id: 'hope-coffee-website',
    title: 'Hope Coffee Website',
    description: 'Beautiful, mobile-friendly website for Hope Coffee - a cozy local coffee shop in Stanford-Le-Hope, UK. Built with Next.js and modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/S-Mircea/hope-coffee-website',
    liveUrl: 'https://hope-coffee.vercel.app',
    featured: true,
    category: 'web',
    readmeContent: `# Hope Coffee Website ☕

A beautiful, mobile-friendly website for Hope Coffee - a cozy local coffee shop in Stanford-Le-Hope, UK.

## What is this project?

This is a website I built for a local coffee business. It's a simple, clean website that works great on phones, tablets, and computers. The website has three main pages:

- **Home Page** - Welcome visitors and show what makes Hope Coffee special
- **Menu Page** - Display all the delicious coffee drinks, pastries, and prices
- **About Page** - Tell the story of Hope Coffee and meet the team

## What technologies did I use?

- **Next.js 15** - A modern web framework that makes websites fast and easy to build
- **TypeScript** - Helps catch errors and makes code more reliable
- **Tailwind CSS** - Makes styling and responsive design much easier
- **React** - The foundation for building interactive user interfaces

## Features

✅ **Mobile-friendly** - Looks great on all devices
✅ **Fast loading** - Optimized images and modern code
✅ **Easy to navigate** - Simple, clean design
✅ **Professional look** - Perfect for a local business
✅ **SEO optimized** - Helps people find the coffee shop online

## Deployment

This website can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**

Just connect your GitHub repository to any of these platforms!

---

*Built with ❤️ for Hope Coffee, Stanford-Le-Hope*`
  },
  {
    id: 'job-search-assistant',
    title: 'UK Graduate Job Search Agent',
    description: 'Automated job search agent that searches for graduate software developer positions in the UK daily, provides intelligent filtering, generates market insights, and helps with job applications.',
    technologies: ['Python', 'APIs', 'Data Analysis', 'Automation', 'Web Scraping'],
    githubUrl: 'https://github.com/S-Mircea/job-search-agent',
    featured: false,
    category: 'web',
    readmeContent: `# UK Graduate Job Search Agent

An automated job search agent that searches for graduate software developer positions in the UK daily, provides intelligent filtering, generates market insights, and helps with job applications.

## Features

🔍 **Automated Job Search**
- Daily searches across multiple UK job boards (Reed.co.uk, Indeed, LinkedIn)
- Intelligent filtering for graduate-level positions
- Duplicate detection and deduplication
- Customizable search criteria

📊 **Market Analysis**
- Daily job market summaries
- Weekly trend analysis
- Skills demand tracking
- Salary analysis
- Location-based insights

🎯 **Intelligent Filtering**
- Skill-based job matching
- Seniority level filtering
- Location preferences
- Salary range filtering
- Company type preferences

✍️ **Application Assistance**
- Automated cover letter generation
- Application tracking
- Personalized job recommendations
- Application checklists
- Profile improvement suggestions

📧 **Smart Notifications**
- Daily email summaries
- Weekly analysis reports
- High-match job alerts
- Monthly profile review reminders

⏰ **Automation**
- Configurable daily scheduling
- System service integration
- Cron job support
- Manual execution options

## Technical Stack

- **Backend:** Python with Flask/FastAPI
- **Data Storage:** SQLite database
- **APIs:** Reed.co.uk, LinkedIn, Indeed
- **Automation:** Cron jobs, systemd services
- **Email:** SMTP integration
- **Analysis:** pandas, matplotlib for data insights

## Author

Mircea Serban  
BSc Computer Science Graduate`
  }
]
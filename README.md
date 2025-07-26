# Mircea Serban - Professional Portfolio Website

A modern, responsive portfolio website built with React, Next.js, and Material-UI, showcasing my journey as a Computer Science graduate and software developer.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light mode toggle
- **Responsive Layout**: Mobile-first design that works on all devices
- **Animated Elements**: Smooth animations powered by Framer Motion
- **Dynamic Content**: Project information loaded from markdown files
- **Contact Form**: Integrated with EmailJS for direct communication
- **CV Section**: Downloadable PDF and embedded CV viewer
- **Accessibility**: WCAG compliant with proper semantic markup

## 🛠 Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **UI Framework**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Styling**: Material-UI theme system
- **Markdown Rendering**: react-markdown with syntax highlighting
- **Email Service**: EmailJS
- **Deployment**: Vercel/Netlify ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Configuration

To enable the contact form, you'll need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID'
   const templateId = 'YOUR_TEMPLATE_ID' 
   const userId = 'YOUR_USER_ID'
   ```

## 🎨 Customization

### Adding New Projects

Update the `src/data/projectsData.ts` file to add or modify projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Brief description',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true,
  category: 'web',
  readmeContent: `# Project README content here`
}
```

### Updating Personal Information

Modify the contact information and CV details in:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/CV.tsx`
- `src/components/Contact.tsx`

### Changing Colors and Theme

Update the theme configuration in `src/components/ThemeProvider.tsx`

## 📱 Sections Overview

### 🏠 Hero Section
- Professional introduction
- Profile photo
- Social links
- Call-to-action buttons

### 👤 About Section  
- Personal story and journey
- Education details
- Current role information
- Key strengths and qualities

### 💼 Projects Section
- Filterable project gallery
- Modal with detailed project information
- Markdown rendering for project documentation
- Technology tags and links

### 🛠 Skills Section
- Technical skills with proficiency levels
- Categorized skill groups
- Soft skills and certifications
- Visual progress indicators

### 📄 CV Section
- Comprehensive curriculum vitae
- Downloadable PDF version
- Professional summary
- Work experience and education

### 📞 Contact Section
- Contact form with validation
- Multiple contact methods
- Social media links
- Professional footer

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Manual Deployment

1. Build for production:
   ```bash
   npm run build
   ```

2. The built files will be in the `.next` folder

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

This is a personal portfolio website, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mircea Serban**
- Email: mirceaserban1981@gmail.com
- LinkedIn: [mircea-serbans81](https://linkedin.com/in/mircea-serbans81)
- GitHub: [S-Mircea](https://github.com/S-Mircea)

## 🙏 Acknowledgments

- University of Greenwich for the Computer Science education
- The open-source community for amazing tools and libraries
- Material-UI team for the excellent component library
- Vercel for the hosting platform

---

*Built with ❤️ using modern web technologies*
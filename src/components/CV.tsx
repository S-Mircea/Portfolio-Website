'use client'

import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Download,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Work,
  School,
  Star,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function CV() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const personalInfo = {
    name: 'Mircea Serban',
    title: 'Software Developer & Computer Science Graduate',
    email: 'mirceaserban1981@gmail.com',
    phone: '+44 7466363145',
    location: 'Stanford-Le-Hope, UK SS170FL',
    linkedin: 'linkedin.com/in/mircea-serbans81',
    github: 'github.com/S-Mircea',
  }

  const education = {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'University of Greenwich, London',
    period: 'September 2021 - July 2025',
    classification: 'First Class Honours Expected',
    coursework: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Machine Learning',
      'Database Systems',
    ],
  }

  const experience = [
    {
      title: 'Data Entry Clerk',
      company: 'Iron Mountain, Basildon, Essex',
      period: 'June 2024 - Present',
      description: [
        'Process and digitize business documents using specialized data management systems with high accuracy',
        'Perform data validation and quality assurance ensuring compliance with information governance standards',
      ],
    },
    {
      title: 'Quality Inspector',
      company: 'Hyundai, Tilbury, Essex',
      period: 'February 2024 - December 2024',
      description: [
        'Execute comprehensive pre-delivery quality inspections ensuring compliance with automotive standards',
        'Collaborate with engineering teams to identify and resolve technical issues',
      ],
    },
    {
      title: 'Delivery Driver & Customer Service Representative',
      company: 'Various Industries, Basildon, Essex',
      period: 'November 2021 - March 2024',
      description: [
        'Developed exceptional time management skills while maintaining full-time studies',
        'Demonstrated strong work ethic balancing demanding work schedule with academic excellence',
      ],
    },
  ]

  const keyProjects = [
    {
      title: 'CVD Risk Prediction System',
      technologies: ['Python', 'Flask', 'Machine Learning', 'scikit-learn'],
      description: 'ML-powered cardiovascular disease risk assessment application with Random Forest classifier',
    },
    {
      title: 'EuroConnect Telecommunications Network',
      technologies: ['Kotlin', 'Graph Theory', 'Algorithms'],
      description: 'Implemented Kruskal\'s minimum spanning tree algorithm for optimal telecommunications cable layout',
    },
    {
      title: 'Hope Coffee Website',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Beautiful, mobile-friendly website for local coffee business',
    },
  ]

  const skills = {
    programming: ['Python', 'Java', 'Kotlin', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    frameworks: ['Flask', 'React', 'Next.js', 'Tailwind CSS', 'scikit-learn', 'pandas', 'numpy'],
    tools: ['Git', 'GitHub', 'Azure DevOps', 'VS Code', 'IntelliJ IDEA'],
    databases: ['SQL', 'MySQL', 'PostgreSQL', 'AWS', 'Vercel', 'RESTful APIs'],
  }

  const certifications = [
    'IBM Python for Data Science (PY0101EN)',
    'Scientific Computing with Python',
    'Microsoft Office Specialist',
    'CEFR English C1 Level',
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv/Mircea-Serban-CV.pdf'
    link.download = 'Mircea-Serban-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Box
      id="cv"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Curriculum Vitae
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
                Comprehensive overview of my professional background, education, and achievements
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                onClick={handleDownload}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(45deg, #64b5f6, #42a5f5)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #42a5f5, #1e88e5)',
                  },
                }}
              >
                Download CV (PDF)
              </Button>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={4}>
              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <Card sx={{ mb: 3, p: 3 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Avatar
                        src="/images/profile-photo.png"
                        alt={personalInfo.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: `3px solid ${theme.palette.primary.main}`,
                        }}
                      />
                      <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                        {personalInfo.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {personalInfo.title}
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email sx={{ mr: 2, color: 'text.secondary' }} />
                        <Typography variant="body2">{personalInfo.email}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone sx={{ mr: 2, color: 'text.secondary' }} />
                        <Typography variant="body2">{personalInfo.phone}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ mr: 2, color: 'text.secondary' }} />
                        <Typography variant="body2">{personalInfo.location}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinkedIn sx={{ mr: 2, color: 'text.secondary' }} />
                        <Typography variant="body2" component="a" href={`https://${personalInfo.linkedin}`} target="_blank">
                          {personalInfo.linkedin}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <GitHub sx={{ mr: 2, color: 'text.secondary' }} />
                        <Typography variant="body2" component="a" href={`https://${personalInfo.github}`} target="_blank">
                          {personalInfo.github}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <Card sx={{ mb: 3, p: 3 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ backgroundColor: theme.palette.primary.main, mr: 2 }}>
                        <School />
                      </Avatar>
                      <Typography variant="h6" fontWeight={600}>
                        Education
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                      {education.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {education.institution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {education.period}
                    </Typography>
                    <Chip
                      label={education.classification}
                      color="primary"
                      size="small"
                      icon={<Star />}
                      sx={{ mb: 2 }}
                    />

                    <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
                      Key Coursework:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {education.coursework.map((course) => (
                        <Chip
                          key={course}
                          label={course}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={itemVariants}>
                <Card sx={{ p: 3 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                      Certifications
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {certifications.map((cert) => (
                        <Chip
                          key={cert}
                          label={cert}
                          variant="outlined"
                          size="small"
                          sx={{ justifyContent: 'flex-start' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={8}>
              {/* Professional Summary */}
              <motion.div variants={itemVariants}>
                <Card sx={{ mb: 3, p: 4 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                      Professional Summary
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      Computer Science graduate with expertise in full-stack development, 
                      machine learning, and software engineering best practices. Proficient 
                      in Python, Java, Kotlin, and modern web technologies with hands-on 
                      experience in agile development and version control. Combines strong 
                      analytical problem-solving skills with practical industry experience 
                      in quality assurance and data management. Seeking to leverage technical 
                      expertise to drive innovation in software development teams.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Professional Experience */}
              <motion.div variants={itemVariants}>
                <Card sx={{ mb: 3, p: 4 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ backgroundColor: theme.palette.secondary.main, mr: 2 }}>
                        <Work />
                      </Avatar>
                      <Typography variant="h5" fontWeight={600}>
                        Professional Experience
                      </Typography>
                    </Box>

                    {experience.map((job, index) => (
                      <Box key={index} sx={{ mb: index < experience.length - 1 ? 4 : 0 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                          {job.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                          {job.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {job.period}
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          {job.description.map((item, itemIndex) => (
                            <Typography key={itemIndex} variant="body2" sx={{ mb: 1, position: 'relative' }}>
                              • {item}
                            </Typography>
                          ))}
                        </Box>
                        {index < experience.length - 1 && <Divider sx={{ mt: 3 }} />}
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Projects */}
              <motion.div variants={itemVariants}>
                <Card sx={{ mb: 3, p: 4 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                      Key Projects
                    </Typography>

                    {keyProjects.map((project, index) => (
                      <Box key={index} sx={{ mb: index < keyProjects.length - 1 ? 3 : 0 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                          {project.title}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              color="primary"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                        {index < keyProjects.length - 1 && <Divider sx={{ mt: 3 }} />}
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technical Skills */}
              <motion.div variants={itemVariants}>
                <Card sx={{ p: 4 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                      Technical Skills
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                          Programming Languages
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {skills.programming.map((skill) => (
                            <Chip key={skill} label={skill} size="small" />
                          ))}
                        </Box>

                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                          Frameworks & Libraries
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {skills.frameworks.map((skill) => (
                            <Chip key={skill} label={skill} size="small" />
                          ))}
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                          Development Tools
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {skills.tools.map((skill) => (
                            <Chip key={skill} label={skill} size="small" />
                          ))}
                        </Box>

                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                          Databases & Cloud
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {skills.databases.map((skill) => (
                            <Chip key={skill} label={skill} size="small" />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
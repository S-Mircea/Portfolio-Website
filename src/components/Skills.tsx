'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Code,
  Web,
  Storage,
  Cloud,
  School,
  Psychology,
  Groups,
  Build,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  color: string
  skills: Array<{
    name: string
    level: number
    description?: string
  }>
}

export default function Skills() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      color: '#2196f3',
      skills: [
        { name: 'Python', level: 90, description: 'Data Science, ML, Web Development' },
        { name: 'Java', level: 85, description: 'OOP, Enterprise Applications' },
        { name: 'Kotlin', level: 80, description: 'JVM Development, Android' },
        { name: 'JavaScript/TypeScript', level: 85, description: 'Modern Web Development' },
        { name: 'SQL', level: 80, description: 'Database Design & Queries' },
        { name: 'HTML5/CSS3', level: 85, description: 'Responsive Web Design' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Web />,
      color: '#4caf50',
      skills: [
        { name: 'React/Next.js', level: 85, description: 'Modern React Development' },
        { name: 'Flask', level: 80, description: 'Python Web Framework' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS' },
        { name: 'Material-UI', level: 80, description: 'React Component Library' },
        { name: 'scikit-learn', level: 75, description: 'Machine Learning' },
        { name: 'pandas/numpy', level: 80, description: 'Data Analysis' },
      ],
    },
    {
      title: 'Development Tools',
      icon: <Build />,
      color: '#ff9800',
      skills: [
        { name: 'Git/GitHub', level: 85, description: 'Version Control' },
        { name: 'VS Code', level: 90, description: 'Primary IDE' },
        { name: 'IntelliJ IDEA', level: 80, description: 'Java/Kotlin Development' },
        { name: 'Azure DevOps', level: 70, description: 'CI/CD Pipelines' },
        { name: 'Docker', level: 65, description: 'Containerization' },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: <Storage />,
      color: '#9c27b0',
      skills: [
        { name: 'MySQL/PostgreSQL', level: 80, description: 'Relational Databases' },
        { name: 'AWS', level: 70, description: 'Cloud Services' },
        { name: 'Vercel', level: 85, description: 'Deployment Platform' },
        { name: 'RESTful APIs', level: 80, description: 'API Design & Integration' },
      ],
    },
  ]

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Communication',
    'Critical Thinking',
    'Attention to Detail',
    'Project Management',
    'Agile Development',
    'Quality Assurance',
  ]

  const certifications = [
    { name: 'IBM Python for Data Science', issuer: 'IBM' },
    { name: 'Scientific Computing with Python', issuer: 'FreeCodeCamp' },
    { name: 'Microsoft Office Specialist', issuer: 'Microsoft' },
    { name: 'CEFR English C1 Level', issuer: 'Cambridge' },
  ]

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

  const SkillCard = ({ category }: { category: SkillCategory }) => (
    <motion.div variants={itemVariants}>
      <Card
        sx={{
          height: '100%',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              sx={{
                backgroundColor: category.color,
                mr: 2,
                width: 48,
                height: 48,
              }}
            >
              {category.icon}
            </Avatar>
            <Typography variant="h6" fontWeight={600}>
              {category.title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {category.skills.map((skill) => (
              <Box key={skill.name}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight={500}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: category.color,
                      borderRadius: 3,
                    },
                  }}
                />
                {skill.description && (
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                    {skill.description}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
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
                Skills & Expertise
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                A comprehensive overview of my technical skills and professional competencies
              </Typography>
            </Box>
          </motion.div>

          {/* Technical Skills */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {skillCategories.map((category) => (
              <Grid item xs={12} md={6} key={category.title}>
                <SkillCard category={category} />
              </Grid>
            ))}
          </Grid>

          {/* Soft Skills & Certifications */}
          <Grid container spacing={3}>
            {/* Soft Skills */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          backgroundColor: '#e91e63',
                          mr: 2,
                          width: 48,
                          height: 48,
                        }}
                      >
                        <Groups />
                      </Avatar>
                      <Typography variant="h6" fontWeight={600}>
                        Soft Skills
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {softSkills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          sx={{
                            borderColor: '#e91e63',
                            color: '#e91e63',
                            '&:hover': {
                              backgroundColor: 'rgba(233, 30, 99, 0.1)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Certifications */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          backgroundColor: '#ff5722',
                          mr: 2,
                          width: 48,
                          height: 48,
                        }}
                      >
                        <School />
                      </Avatar>
                      <Typography variant="h6" fontWeight={600}>
                        Certifications
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {certifications.map((cert) => (
                        <Box key={cert.name}>
                          <Typography variant="body2" fontWeight={500}>
                            {cert.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {cert.issuer}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
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
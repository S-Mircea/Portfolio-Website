'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import {
  School,
  WorkHistory,
  LocationOn,
  DateRange,
} from '@mui/icons-material'

export default function About() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const certifications = [
    'IBM Python for Data Science',
    'Scientific Computing with Python',
    'Microsoft Office Specialist',
    'CEFR English C1 Level',
  ]

  const personalQualities = [
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Communication',
    'Critical Thinking',
  ]

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
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
                About Me
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Passionate Computer Science graduate transitioning into the tech industry
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Left Column - Personal Story */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      My Journey
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                      At 44, I made a bold decision to pursue my passion for technology and 
                      enrolled in a Computer Science degree at the University of Greenwich. 
                      This journey represents not just a career change, but a lifelong dream 
                      finally realized.
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                      Throughout my studies, I've combined academic excellence with real-world 
                      experience, working in various roles while maintaining a First Class Honours 
                      trajectory. My background in quality assurance, data management, and 
                      logistics has given me a unique perspective on problem-solving and 
                      attention to detail.
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
                      I specialize in full-stack development with a particular interest in 
                      machine learning applications. My projects demonstrate my ability to 
                      integrate complex algorithms with user-friendly interfaces, always 
                      keeping the end-user experience at the forefront.
                    </Typography>

                    {/* Personal Qualities */}
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Strengths
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {personalQualities.map((quality) => (
                        <Chip
                          key={quality}
                          label={quality}
                          variant="outlined"
                          sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: `${theme.palette.primary.main}15`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Right Column - Education & Certifications */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Education */}
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            mr: 2,
                          }}
                        >
                          <School />
                        </Avatar>
                        <Typography variant="h6" fontWeight={600}>
                          Education
                        </Typography>
                      </Box>
                      
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        BSc Computer Science
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        University of Greenwich, London
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        September 2021 - July 2025
                      </Typography>
                      <Chip
                        label="First Class Honours Expected"
                        color="primary"
                        size="small"
                        sx={{ mb: 2 }}
                      />
                      
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        Key Coursework:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Data Structures & Algorithms, Software Engineering, 
                        Machine Learning, Database Systems
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Current Role */}
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            backgroundColor: theme.palette.secondary.main,
                            mr: 2,
                          }}
                        >
                          <WorkHistory />
                        </Avatar>
                        <Typography variant="h6" fontWeight={600}>
                          Current Role
                        </Typography>
                      </Box>
                      
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Data Entry Clerk
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Iron Mountain, Basildon
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        June 2024 - Present
                      </Typography>
                      <Typography variant="body2">
                        Processing business documents with specialized data management 
                        systems while ensuring high accuracy and compliance standards.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            backgroundColor: theme.palette.success.main,
                            mr: 2,
                          }}
                        >
                          <LocationOn />
                        </Avatar>
                        <Typography variant="h6" fontWeight={600}>
                          Location
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        Stanford-Le-Hope, UK
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Available for roles in London and surrounding areas. 
                        Open to remote and hybrid opportunities.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            backgroundColor: theme.palette.warning.main,
                            mr: 2,
                          }}
                        >
                          <DateRange />
                        </Avatar>
                        <Typography variant="h6" fontWeight={600}>
                          Certifications
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {certifications.map((cert) => (
                          <Chip
                            key={cert}
                            label={cert}
                            variant="outlined"
                            size="small"
                            sx={{
                              justifyContent: 'flex-start',
                              '& .MuiChip-label': {
                                fontSize: '0.75rem',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import { Download, Email, GitHub, LinkedIn } from '@mui/icons-material'

export default function Hero() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          overflow: 'hidden',
        }}
      >
        {/* Floating Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              borderRadius: '50%',
              background: theme.palette.mode === 'dark'
                ? 'rgba(100, 181, 246, 0.1)'
                : 'rgba(255, 255, 255, 0.2)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: 4,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            {/* Left Side - Text Content */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? 'h2' : 'h1'}
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #64b5f6, #f48fb1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                  }}
                >
                  Mircea Serban
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? 'h5' : 'h4'}
                  sx={{
                    fontWeight: 500,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  Software Developer & Computer Science Graduate
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    maxWidth: 600,
                  }}
                >
                  Passionate about full-stack development, machine learning, and creating 
                  innovative solutions. BSc Computer Science graduate from University of Greenwich 
                  with expertise in Python, Java, Kotlin, and modern web technologies.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Email />}
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      background: 'linear-gradient(45deg, #64b5f6, #42a5f5)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #42a5f5, #1e88e5)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    onClick={() => scrollToSection('cv')}
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}15`,
                      },
                    }}
                  >
                    View CV
                  </Button>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <motion.a
                    href="https://github.com/S-Mircea"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 181, 246, 0.2)',
                        },
                      }}
                    >
                      <GitHub />
                    </Box>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/mircea-serbans81"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: 'rgba(100, 181, 246, 0.1)',
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 181, 246, 0.2)',
                        },
                      }}
                    >
                      <LinkedIn />
                    </Box>
                  </motion.a>
                </Box>
              </motion.div>
            </Box>

            {/* Right Side - Profile Photo */}
            <Box
              sx={{
                flex: isMobile ? 'none' : 0.4,
                display: 'flex',
                justifyContent: 'center',
                order: isMobile ? -1 : 1,
              }}
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
              >
                <Avatar
                  src="/images/profile-photo.png"
                  alt="Mircea Serban"
                  sx={{
                    width: isMobile ? 250 : 350,
                    height: isMobile ? 250 : 350,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 20px 40px rgba(100, 181, 246, 0.3)'
                      : '0 20px 40px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => scrollToSection('about')}
      >
        <Box
          sx={{
            width: 2,
            height: 30,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1,
            opacity: 0.7,
          }}
        />
      </motion.div>
    </Box>
  )
}
'use client'

import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Snackbar,
  Avatar,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Send,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  })

  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'mirceaserban1981@gmail.com',
      href: 'mailto:mirceaserban1981@gmail.com',
      color: '#2196f3',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+44 7466363145',
      href: 'tel:+447466363145',
      color: '#4caf50',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: 'Stanford-Le-Hope, UK',
      href: '#',
      color: '#ff9800',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'mircea-serbans81',
      href: 'https://linkedin.com/in/mircea-serbans81',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'S-Mircea',
      href: 'https://github.com/S-Mircea',
      color: '#333',
    },
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const userId = 'YOUR_USER_ID' // Replace with your EmailJS user ID

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mircea Serban',
      }

      // Uncomment when you have EmailJS configured
      // await emailjs.send(serviceId, templateId, templateParams, userId)

      // For demo purposes, simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSnackbar({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        severity: 'error',
      })
    } finally {
      setLoading(false)
    }
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
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                  color: 'white',
                }}
              >
                Get In Touch
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Ready to start your next project? I'd love to hear from you. 
                Send me a message and I'll respond as soon as possible.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: 'white',
                    }}
                  >
                    Let's Connect
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.7,
                      mb: 4,
                    }}
                  >
                    I'm always interested in new opportunities, collaborations, 
                    or just having a chat about technology. Whether you have a 
                    project in mind or want to discuss potential opportunities, 
                    feel free to reach out!
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      <Box
                        component={item.href !== '#' ? 'a' : 'div'}
                        href={item.href !== '#' ? item.href : undefined}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          cursor: item.href !== '#' ? 'pointer' : 'default',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateX(10px)',
                          },
                        }}
                      >
                        <Avatar
                          sx={{
                            backgroundColor: item.color,
                            mr: 2,
                            width: 48,
                            height: 48,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {item.label}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: 'text.primary',
                      }}
                    >
                      Send Message
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            error={!!errors.name}
                            helperText={errors.name}
                            disabled={loading}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            error={!!errors.email}
                            helperText={errors.email}
                            disabled={loading}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            value={formData.subject}
                            onChange={handleInputChange('subject')}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            disabled={loading}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange('message')}
                            error={!!errors.message}
                            helperText={errors.message}
                            disabled={loading}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={loading}
                            startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                            sx={{
                              py: 1.5,
                              borderRadius: 2,
                              background: 'linear-gradient(45deg, #64b5f6, #42a5f5)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #42a5f5, #1e88e5)',
                              },
                            }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              textAlign: 'center',
              mt: 8,
              pt: 4,
              borderTop: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              © 2025 Mircea Serban. Built with React, Next.js, and Material-UI.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Snackbar for form feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
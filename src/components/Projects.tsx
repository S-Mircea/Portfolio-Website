'use client'

import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tab,
  Tabs,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  GitHub,
  Launch,
  Close,
  Code,
  Web,
  Psychology,
  AccountTree,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { projectsData, Project } from '@/data/projectsData'

const categoryIcons = {
  web: <Web />,
  ml: <Psychology />,
  algorithms: <AccountTree />,
  mobile: <Code />,
}

const categoryColors = {
  web: '#2196f3',
  ml: '#ff9800',
  algorithms: '#4caf50',
  mobile: '#9c27b0',
}

export default function Projects() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'algorithms', label: 'Algorithms' },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
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

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 30px rgba(100, 181, 246, 0.3)'
              : '0 8px 30px rgba(0, 0, 0, 0.2)',
          },
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
        onClick={() => handleProjectClick(project)}
      >
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                p: 1,
                borderRadius: 2,
                backgroundColor: categoryColors[project.category],
                color: 'white',
                mr: 2,
              }}
            >
              {categoryIcons[project.category]}
            </Box>
            <Typography variant="h6" component="h3" fontWeight={600}>
              {project.title}
            </Typography>
            {project.featured && (
              <Chip
                label="Featured"
                color="primary"
                size="small"
                sx={{ ml: 'auto' }}
              />
            )}
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.technologies.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }}
              />
            ))}
            {project.technologies.length > 4 && (
              <Chip
                label={`+${project.technologies.length - 4} more`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.secondary,
                }}
              />
            )}
          </Box>
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            size="small"
            startIcon={<Code />}
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(project)
            }}
          >
            View Details
          </Button>
          {project.githubUrl && (
            <Button
              size="small"
              startIcon={<GitHub />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              size="small"
              startIcon={<Launch />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  )

  return (
    <Box
      id="projects"
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
                My Projects
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                A collection of projects showcasing my skills in full-stack development, 
                machine learning, and algorithm implementation
              </Typography>
            </Box>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Tabs
                value={selectedCategory}
                onChange={(_, newValue) => setSelectedCategory(newValue)}
                variant={isMobile ? 'scrollable' : 'standard'}
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab
                    key={category.value}
                    label={category.label}
                    value={category.value}
                  />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 800,
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            overflow: 'auto',
          }}
        >
          {selectedProject && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 3,
                  borderBottom: 1,
                  borderColor: 'divider',
                  position: 'sticky',
                  top: 0,
                  bgcolor: 'background.paper',
                  zIndex: 1,
                }}
              >
                <Typography variant="h5" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <Close />
                </IconButton>
              </Box>
              
              <Box sx={{ p: 3 }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code: ({ node, inline, className, children, ...props }: any) => {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={theme.palette.mode === 'dark' ? vscDarkPlus : prism}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      )
                    },
                  }}
                >
                  {selectedProject.readmeContent}
                </ReactMarkdown>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}
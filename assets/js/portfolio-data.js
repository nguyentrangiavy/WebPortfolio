// Mock data based on CV information
const portfolioData = {
  // Personal Information
  personalInfo: {
    name: "NGUYỄN TRẦN GIA VỸ",
    title: "Backend Developer",
    email: "vy.ntg2304@gmail.com",
    phone: "090-685-3650",
    address: "Bình Chánh Ward, Hồ Chí Minh City",
    profileImage: "assets/img/profile/avatar-square.png",
    about: "Backend Developer with 2+ years of experience in Python (Django, FastAPI), skilled in building RESTful APIs and microservices. Experienced in ERP and B2B2C projects.",
    language: "Aptis - B1"
  },

  // Skills
  skills: {
    languages: ["Python", "Node.js"],
    frameworks: ["Django", "Express.js", "FastAPI"],
    databases: ["MySQL", "MariaDB"],
    architecture: ["RESTful API", "Microservices"],
    tools: ["Docker", "GitHub"],
    integrations: ["Chat", "Notifications", "Email", "SMS", "OCR", "Google Review", "Payment systems"]
  },

  // Education
  education: {
    degree: "Bachelor of Information Technology",
    university: "HOA SEN UNIVERSITY",
    period: "2018-2023",
    gpa: "3.16"
  },

  // Experience
  experience: [
    {
      id: "excellent-nodes",
      company: "EXCELLENT NODES",
      period: "2023-2025",
      position: "Backend Developer",
      projects: [
        {
          id: "aios-link",
          name: "AIOS Link",
          description: "Mobile app for social networking and event management",
          technologies: ["Python", "FastAPI"],
          features: ["Friend connection", "event creation/management", "user notifications"]
        },
        {
          id: "qrsound",
          name: "QRSound",
          description: "Advertisement recognition app from audio clips",
          technologies: ["Python", "Django REST Framework", "Librosa"],
          features: ["Audio recording", "sound analysis", "ad recognition pipeline"]
        }
      ]
    },
    {
      id: "bizbookly",
      company: "Bizbookly",
      period: "2023-2025",
      position: "Backend Developer",
      description: "Salon booking management system with ERP integration",
      technologies: ["Python", "Django REST Framework"],
      features: ["Booking", "POS", "Inventory", "Marketplace", "CRM", "HRM", "Promotion", "Billing", "Reporting"]
    },
    {
      id: "vape",
      company: "Vape",
      period: "2023-2025",
      position: "Backend Developer",
      description: "B2B2C retail and online sales platform with ERP integration",
      technologies: ["Python", "Django REST Framework"],
      features: ["POS", "Inventory", "Marketplace", "CRM", "HRM", "Promotion", "Billing", "Reporting"]
    },
    {
      id: "chatbot",
      company: "Chatbot Project",
      period: "2023-2025",
      position: "Backend Developer",
      description: "Predefined Q&A chatbot",
      technologies: ["Python", "Django REST Framework"],
      features: ["Question-answering API", "conversation flow", "admin-configurable responses"]
    },
    {
      id: "hrmex",
      company: "HRMEX",
      period: "2023-2025",
      position: "Backend Developer",
      description: "Internal HR management and attendance tracking system",
      technologies: ["Python", "FastAPI"],
      features: ["Attendance tracking", "employee management", "role-based access"]
    }
  ]
};

// Portfolio Projects Data
const portfolioProjects = {
  "aios-link": {
    id: "aios-link",
    title: "AIOS Link - Social Networking Platform",
    category: "development",
    description: "A comprehensive mobile application for social networking and event management, built with Python and FastAPI. The platform enables users to connect with friends, create and manage events, and receive real-time notifications.",
    longDescription: "AIOS Link is a sophisticated social networking platform that revolutionizes how people connect and organize events. Built with modern backend technologies, it provides a seamless experience for users to build their social networks and manage their social activities efficiently.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "WebSocket"],
    features: [
      "Real-time friend connections and social graph management",
      "Event creation, management, and RSVP system",
      "Push notifications for social interactions",
      "User profile management with privacy controls",
      "Activity feed with social interactions",
      "Mobile-optimized REST API"
    ],
    images: [
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-2.webp",
      "assets/img/portfolio/portfolio-4.webp"
    ],
    date: "September 2024",
    client: "Excellent Nodes",
    website: "https://aios-link.example.com",
    challenge: "The main challenge was building a scalable social networking backend that could handle real-time interactions and complex social graph relationships while maintaining high performance.",
    solution: "Implemented a microservices architecture using FastAPI with Redis for caching and WebSocket for real-time features. Used PostgreSQL with optimized queries for social graph operations.",
    stats: {
      users: "10K+",
      events: "5K+",
      uptime: "99.9%"
    }
  },

  "qrsound": {
    id: "qrsound",
    title: "QRSound - Audio Advertisement Recognition",
    category: "development",
    description: "An innovative application that recognizes advertisements from audio clips using advanced machine learning techniques. Built with Python, Django REST Framework, and Librosa for audio processing.",
    longDescription: "QRSound represents a breakthrough in audio recognition technology, enabling automatic detection and identification of advertisements from audio content. The system processes audio clips in real-time and provides detailed analytics about detected advertisements.",
    technologies: ["Python", "Django REST Framework", "Librosa", "TensorFlow", "PostgreSQL", "Celery"],
    features: [
      "Real-time audio recording and processing",
      "Advanced sound analysis using machine learning",
      "Advertisement recognition pipeline with high accuracy",
      "Audio fingerprinting technology",
      "RESTful API for audio processing services",
      "Analytics dashboard for recognition results"
    ],
    images: [
      "assets/img/portfolio/portfolio-10.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    date: "August 2024",
    client: "Excellent Nodes",
    website: "https://qrsound.example.com",
    challenge: "The primary challenge was developing accurate audio recognition algorithms that could identify advertisements from various audio sources with high precision and low latency.",
    solution: "Implemented a sophisticated audio processing pipeline using Librosa for feature extraction and TensorFlow for machine learning models. Used Celery for background processing to handle large audio files.",
    stats: {
      accuracy: "95%",
      processingTime: "< 2s",
      audioSources: "100+"
    }
  },

  "bizbookly": {
    id: "bizbookly",
    title: "Bizbookly - Salon Management System",
    category: "development",
    description: "A comprehensive salon booking management system with full ERP integration. Built with Python and Django REST Framework, providing complete business management solutions for salon owners.",
    longDescription: "Bizbookly is a complete business management solution designed specifically for salon owners. It integrates booking management, point-of-sale systems, inventory tracking, and customer relationship management into a single, powerful platform.",
    technologies: ["Python", "Django REST Framework", "MySQL", "React", "Redis", "Stripe API"],
    features: [
      "Advanced booking system with calendar management",
      "Point-of-sale (POS) system with payment processing",
      "Inventory management with automated reordering",
      "Marketplace integration for service promotion",
      "Customer relationship management (CRM)",
      "Human resource management (HRM)",
      "Promotional campaign management",
      "Comprehensive billing and reporting system"
    ],
    images: [
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-7.webp"
    ],
    date: "July 2024",
    client: "Bizbookly Inc.",
    website: "https://bizbookly.example.com",
    challenge: "Creating a unified system that handles multiple business operations while maintaining data consistency and providing real-time updates across all modules.",
    solution: "Designed a modular Django application with separate apps for each business function, using Django REST Framework for API consistency and Redis for real-time data synchronization.",
    stats: {
      salons: "500+",
      bookings: "50K+",
      revenue: "$2M+"
    }
  },

  "vape-platform": {
    id: "vape-platform",
    title: "Vape - B2B2C Retail Platform",
    category: "development",
    description: "A comprehensive B2B2C retail and online sales platform with full ERP integration. Built with Python and Django REST Framework, serving both business customers and end consumers.",
    longDescription: "Vape is a sophisticated e-commerce platform that serves both business-to-business (B2B) and business-to-consumer (B2C) markets. The platform provides comprehensive retail management solutions with advanced ERP integration.",
    technologies: ["Python", "Django REST Framework", "MySQL", "Vue.js", "Docker", "AWS"],
    features: [
      "Multi-channel POS system for retail operations",
      "Advanced inventory management with real-time tracking",
      "Integrated marketplace for product listing and sales",
      "Customer relationship management (CRM) system",
      "Human resource management (HRM) module",
      "Dynamic promotional campaign management",
      "Comprehensive billing and financial reporting",
      "Analytics dashboard for business insights"
    ],
    images: [
      "assets/img/portfolio/portfolio-8.webp",
      "assets/img/portfolio/portfolio-1.webp",
      "assets/img/portfolio/portfolio-2.webp"
    ],
    date: "June 2024",
    client: "Vape Corporation",
    website: "https://vape-platform.example.com",
    challenge: "Building a scalable platform that could handle both B2B and B2C operations while maintaining separate business logic and user experiences for different customer types.",
    solution: "Implemented a multi-tenant architecture with role-based access control, using Django's built-in user management and custom middleware for business logic separation.",
    stats: {
      businesses: "1000+",
      products: "50K+",
      transactions: "100K+"
    }
  },

  "chatbot-system": {
    id: "chatbot-system",
    title: "Intelligent Q&A Chatbot System",
    category: "development",
    description: "A sophisticated predefined Q&A chatbot system with configurable responses and conversation flow management. Built with Python and Django REST Framework.",
    longDescription: "This intelligent chatbot system provides automated customer support through predefined Q&A interactions. The system features an admin panel for configuring responses and managing conversation flows dynamically.",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "NLTK", "WebSocket"],
    features: [
      "Predefined question-answering API with high accuracy",
      "Configurable conversation flow management",
      "Admin panel for response customization",
      "Natural language processing for query understanding",
      "Multi-language support",
      "Real-time chat interface with WebSocket"
    ],
    images: [
      "assets/img/portfolio/portfolio-4.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    date: "May 2024",
    client: "Tech Solutions Inc.",
    website: "https://chatbot-system.example.com",
    challenge: "Creating an intelligent system that could understand various question formats and provide accurate responses while being easily configurable by non-technical administrators.",
    solution: "Implemented a flexible response system using NLTK for natural language processing and a dynamic configuration system that allows admins to update responses without code changes.",
    stats: {
      queries: "1M+",
      accuracy: "92%",
      responseTime: "< 1s"
    }
  },

  "hrmex": {
    id: "hrmex",
    title: "HRMEX - HR Management System",
    category: "development",
    description: "A comprehensive internal HR management and attendance tracking system built with Python and FastAPI. Designed for efficient employee management and workforce analytics.",
    longDescription: "HRMEX is a modern HR management system that streamlines internal human resource operations. It provides comprehensive attendance tracking, employee management, and role-based access control for organizations of all sizes.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "React", "Docker"],
    features: [
      "Real-time attendance tracking with biometric integration",
      "Comprehensive employee profile management",
      "Role-based access control and permissions",
      "Leave management and approval workflows",
      "Performance tracking and evaluation system",
      "Automated payroll calculation and reporting"
    ],
    images: [
      "assets/img/portfolio/portfolio-7.webp",
      "assets/img/portfolio/portfolio-8.webp",
      "assets/img/portfolio/portfolio-1.webp"
    ],
    date: "April 2024",
    client: "HRMEX Solutions",
    website: "https://hrmex.example.com",
    challenge: "Building a secure system that could handle sensitive employee data while providing real-time attendance tracking and comprehensive HR management features.",
    solution: "Implemented FastAPI for high-performance API endpoints with JWT authentication, PostgreSQL for data integrity, and Docker for consistent deployment across environments.",
    stats: {
      employees: "10K+",
      attendanceRecords: "1M+",
      systemUptime: "99.8%"
    }
  }
};

// Services Data
const servicesData = {
  "backend-development": {
    id: "backend-development",
    title: "Backend Development",
    description: "Professional backend development services using Python, Django, and FastAPI. Specialized in building scalable RESTful APIs and microservices architecture.",
    icon: "bi-server",
    features: [
      "RESTful API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Third-party Integrations",
      "Performance Optimization"
    ],
    technologies: ["Python", "Django", "FastAPI", "MySQL", "PostgreSQL", "Redis"],
    process: [
      {
        step: "01",
        title: "Requirement Analysis",
        description: "Thorough analysis of project requirements and technical specifications to ensure optimal solution design."
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "Design scalable and maintainable backend architecture using modern best practices and patterns."
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Implementation of backend services with comprehensive testing and code quality assurance."
      },
      {
        step: "04",
        title: "Deployment & Maintenance",
        description: "Production deployment with monitoring, maintenance, and ongoing support services."
      }
    ],
    duration: "2-8 weeks",
    teamSize: "1-3 developers",
    delivery: "Weekly progress reports",
    support: "24/7 technical support",
    images: [
      "assets/img/services/services-7.webp",
      "assets/img/services/services-2.webp",
      "assets/img/services/services-8.webp"
    ]
  },

  "api-integration": {
    id: "api-integration",
    title: "API Integration Services",
    description: "Expert API integration services for connecting your applications with third-party services including payment systems, communication platforms, and business tools.",
    icon: "bi-plug",
    features: [
      "Payment Gateway Integration",
      "Social Media API Integration",
      "Communication Services (SMS, Email)",
      "Cloud Service Integration",
      "Data Synchronization",
      "Real-time Notifications"
    ],
    technologies: ["REST APIs", "GraphQL", "Webhooks", "OAuth", "JWT", "WebSocket"],
    process: [
      {
        step: "01",
        title: "API Analysis",
        description: "Analysis of third-party APIs and integration requirements to determine the best integration approach."
      },
      {
        step: "02",
        title: "Integration Planning",
        description: "Planning the integration architecture with error handling, retry mechanisms, and monitoring."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Development of robust integration solutions with comprehensive error handling and logging."
      },
      {
        step: "04",
        title: "Testing & Monitoring",
        description: "Thorough testing and implementation of monitoring systems for reliable API integrations."
      }
    ],
    duration: "1-4 weeks",
    teamSize: "1-2 developers",
    delivery: "Daily progress updates",
    support: "Integration support & troubleshooting",
    images: [
      "assets/img/services/services-11.webp",
      "assets/img/services/services-2.webp",
      "assets/img/services/services-7.webp"
    ]
  },

  "erp-development": {
    id: "erp-development",
    title: "ERP System Development",
    description: "Custom ERP system development for business process automation, inventory management, and comprehensive business operations management.",
    icon: "bi-building-gear",
    features: [
      "Inventory Management",
      "Customer Relationship Management",
      "Human Resource Management",
      "Financial Management",
      "Reporting & Analytics",
      "Multi-location Support"
    ],
    technologies: ["Python", "Django", "MySQL", "React", "Docker", "AWS"],
    process: [
      {
        step: "01",
        title: "Business Analysis",
        description: "Comprehensive analysis of business processes and requirements for ERP system design."
      },
      {
        step: "02",
        title: "System Design",
        description: "Design of modular ERP system architecture with scalable and maintainable components."
      },
      {
        step: "03",
        title: "Module Development",
        description: "Development of individual ERP modules with integration capabilities and user-friendly interfaces."
      },
      {
        step: "04",
        title: "Training & Support",
        description: "User training, system deployment, and ongoing support for optimal ERP system utilization."
      }
    ],
    duration: "3-6 months",
    teamSize: "3-5 developers",
    delivery: "Bi-weekly demos",
    support: "Full training & support",
    images: [
      "assets/img/services/services-8.webp",
      "assets/img/services/services-11.webp",
      "assets/img/services/services-2.webp"
    ]
  }
};

// Utility functions
function getProjectById(id) {
  return portfolioProjects[id] || null;
}

function getServiceById(id) {
  return servicesData[id] || null;
}

function getAllProjects() {
  return Object.values(portfolioProjects);
}

function getAllServices() {
  return Object.values(servicesData);
}

function getProjectsByCategory(category) {
  return Object.values(portfolioProjects).filter(project => project.category === category);
}

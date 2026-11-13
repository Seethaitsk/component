export const projectTokens = [
  {
    id: 'customer-portal',
    name: 'Customer Portal & Web App',
    category: 'Enterprise SaaS',
    tagline: 'SysCorp standard enterprise experience for customer-facing dashboards and authentication.',
    figmaFrame: {
      fileKey: 'SysCorpDS',
      nodeId: '01:100',
      frameName: 'Customer Portal / Brand Kit v2.4',
      frameUrl: 'https://www.figma.com/design/SysCorpDS/SysCorp-Enterprise-Kit?node-id=01-100',
    },
    brand: {
      primary: '#1a5cdd',
      primaryHover: '#1449b2',
      primaryTint: '#ebf2ff',
      primaryText: '#ffffff',
      darkSurface: '#0d1220',
      darkSidebar: '#0d1220',
      cardSurface: '#ffffff',
      border: '#e2e8f0',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
    geometry: {
      radius: 'rounded-2xl',
      radiusPx: '16px',
      buttonRadius: 'rounded-xl',
      badgeRadius: 'rounded-full',
      cardRadius: 'rounded-2xl',
      density: 'Standard (16px base padding)',
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      headingWeight: 'font-extrabold',
      bodyWeight: 'font-normal',
      codeFont: 'JetBrains Mono, monospace',
    },
    associatedComponents: ['primary-button', 'navbar', 'card', 'modal', 'input-field', 'data-table'],
    tailwindConfig: `// tailwind.config.js - Customer Portal Theme
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebf2ff',
          500: '#2d6ef5',
          600: '#1a5cdd', // Primary
          700: '#1449b2',
        },
        navy: {
          950: '#0d1220',
        },
      },
      borderRadius: {
        'portal': '16px',
      },
    },
  },
};`,
    cssVariables: `:root {
  --sys-brand-primary: #1a5cdd;
  --sys-brand-hover: #1449b2;
  --sys-brand-tint: #ebf2ff;
  --sys-surface-dark: #0d1220;
  --sys-radius-card: 16px;
  --sys-radius-btn: 12px;
  --sys-font-main: 'Inter', sans-serif;
}`,
  },
  {
    id: 'betting-hub',
    name: 'Sports & Game Arena',
    category: 'Gaming & Sportsbook',
    tagline: 'High-contrast, real-time gaming environment with live neon multipliers and rapid action states.',
    figmaFrame: {
      fileKey: 'SportsbookDS',
      nodeId: '11:77',
      frameName: 'Sports & Game Arena / Match Center v3.1',
      frameUrl: 'https://www.figma.com/design/SysCorpDS/SysCorp-Enterprise-Kit?node-id=11-77',
    },
    brand: {
      primary: '#10b981', // Neon green / Emerald
      primaryHover: '#059669',
      primaryTint: '#ecfdf5',
      primaryText: '#0a0e17',
      darkSurface: '#0a0e17', // Deep obsidian
      darkSidebar: '#0f172a',
      cardSurface: '#151b2e',
      border: '#1e293b',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#f43f5e',
    },
    geometry: {
      radius: 'rounded-xl',
      radiusPx: '12px',
      buttonRadius: 'rounded-xl',
      badgeRadius: 'rounded-md',
      cardRadius: 'rounded-2xl',
      density: 'Compact Rapid-Bet (10px padding)',
    },
    typography: {
      fontFamily: 'JetBrains Mono, Inter, sans-serif',
      headingWeight: 'font-black',
      bodyWeight: 'font-medium',
      codeFont: 'JetBrains Mono, monospace',
    },
    associatedComponents: ['odds-card', 'badge', 'card', 'primary-button', 'data-table'],
    tailwindConfig: `// tailwind.config.js - Sports & Game Arena Theme
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          500: '#10b981', // Neon pulse
          600: '#059669',
          900: '#064e3b',
        },
        obsidian: {
          950: '#0a0e17',
          900: '#151b2e',
        },
      },
      borderRadius: {
        'bet': '12px',
      },
    },
  },
};`,
    cssVariables: `:root {
  --sys-brand-primary: #10b981;
  --sys-brand-hover: #059669;
  --sys-brand-tint: #ecfdf5;
  --sys-surface-dark: #0a0e17;
  --sys-radius-card: 16px;
  --sys-radius-btn: 12px;
  --sys-font-main: 'JetBrains Mono', sans-serif;
}`,
  },
  {
    id: 'creative-agency',
    name: 'SysCorp Creative Studio',
    category: 'Design & Agency Portfolio',
    tagline: 'Vibrant modern aesthetic with bold electric violet accents, soft curves, and generous whitespace.',
    figmaFrame: {
      fileKey: 'CreativeStudioDS',
      nodeId: '08:34',
      frameName: 'Creative Studio / Portfolio Tokens v2.0',
      frameUrl: 'https://www.figma.com/design/SysCorpDS/SysCorp-Enterprise-Kit?node-id=08-34',
    },
    brand: {
      primary: '#8b5cf6', // Electric violet
      primaryHover: '#7c3aed',
      primaryTint: '#f5f3ff',
      primaryText: '#ffffff',
      darkSurface: '#09090b', // Zinc black
      darkSidebar: '#18181b',
      cardSurface: '#ffffff',
      border: '#e4e4e7',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
    geometry: {
      radius: 'rounded-3xl',
      radiusPx: '24px',
      buttonRadius: 'rounded-2xl',
      badgeRadius: 'rounded-full',
      cardRadius: 'rounded-3xl',
      density: 'Spacious Editorial (24px padding)',
    },
    typography: {
      fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
      headingWeight: 'font-extrabold',
      bodyWeight: 'font-normal',
      codeFont: 'JetBrains Mono, monospace',
    },
    associatedComponents: ['image-gallery', 'card', 'navbar', 'footer', 'primary-button'],
    tailwindConfig: `// tailwind.config.js - Creative Studio Theme
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          500: '#a78bfa',
          600: '#8b5cf6', // Electric Violet
          700: '#7c3aed',
        },
        zinc: {
          950: '#09090b',
        },
      },
      borderRadius: {
        'studio': '24px',
      },
    },
  },
};`,
    cssVariables: `:root {
  --sys-brand-primary: #8b5cf6;
  --sys-brand-hover: #7c3aed;
  --sys-brand-tint: #f5f3ff;
  --sys-surface-dark: #09090b;
  --sys-radius-card: 24px;
  --sys-radius-btn: 16px;
  --sys-font-main: 'Plus Jakarta Sans', sans-serif;
}`,
  },
  {
    id: 'cloudops-telemetry',
    name: 'DevOps & Telemetry Console',
    category: 'Cloud Engineering & Infrastructure',
    tagline: 'Information-dense, low-distraction telemetry layout designed for site reliability engineers.',
    figmaFrame: {
      fileKey: 'DevOpsDS',
      nodeId: '15:40',
      frameName: 'DevOps Telemetry / Control Panel v1.8',
      frameUrl: 'https://www.figma.com/design/SysCorpDS/SysCorp-Enterprise-Kit?node-id=15-40',
    },
    brand: {
      primary: '#06b6d4', // Teal Cyan
      primaryHover: '#0891b2',
      primaryTint: '#ecfeff',
      primaryText: '#0f172a',
      darkSurface: '#0f172a', // Slate 900
      darkSidebar: '#020617',
      cardSurface: '#1e293b',
      border: '#334155',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#f43f5e',
    },
    geometry: {
      radius: 'rounded-md',
      radiusPx: '6px',
      buttonRadius: 'rounded-md',
      badgeRadius: 'rounded',
      cardRadius: 'rounded-lg',
      density: 'Ultra-Compact (8px padding)',
    },
    typography: {
      fontFamily: 'Fira Code, Inter, monospace',
      headingWeight: 'font-bold',
      bodyWeight: 'font-normal',
      codeFont: 'Fira Code, monospace',
    },
    associatedComponents: ['data-table', 'alert', 'badge', 'modal', 'card'],
    tailwindConfig: `// tailwind.config.js - DevOps Telemetry Theme
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          500: '#06b6d4', // Teal Cyan
          600: '#0891b2',
        },
        slate: {
          950: '#020617',
        },
      },
      borderRadius: {
        'console': '6px',
      },
    },
  },
};`,
    cssVariables: `:root {
  --sys-brand-primary: #06b6d4;
  --sys-brand-hover: #0891b2;
  --sys-brand-tint: #ecfeff;
  --sys-surface-dark: #0f172a;
  --sys-radius-card: 8px;
  --sys-radius-btn: 6px;
  --sys-font-main: 'Fira Code', monospace;
}`,
  },
  {
    id: 'fintech-admin',
    name: 'Corporate Banking & Admin',
    category: 'Fintech & Security',
    tagline: 'Sober, trustworthy financial layout with deep forest emerald tones, strict compliance borders, and high contrast.',
    figmaFrame: {
      fileKey: 'FinTechDS',
      nodeId: '20:12',
      frameName: 'Fintech Vault / Admin Console v4.0',
      frameUrl: 'https://www.figma.com/design/SysCorpDS/SysCorp-Enterprise-Kit?node-id=20-12',
    },
    brand: {
      primary: '#059669', // Deep Forest Emerald
      primaryHover: '#047857',
      primaryTint: '#f0fdf4',
      primaryText: '#ffffff',
      darkSurface: '#111827',
      darkSidebar: '#030712',
      cardSurface: '#ffffff',
      border: '#d1d5db',
      success: '#059669',
      warning: '#d97706',
      danger: '#dc2626',
    },
    geometry: {
      radius: 'rounded-lg',
      radiusPx: '8px',
      buttonRadius: 'rounded-lg',
      badgeRadius: 'rounded-md',
      cardRadius: 'rounded-xl',
      density: 'Structured Administrative (12px padding)',
    },
    typography: {
      fontFamily: 'IBM Plex Sans, Inter, sans-serif',
      headingWeight: 'font-bold',
      bodyWeight: 'font-normal',
      codeFont: 'IBM Plex Mono, monospace',
    },
    associatedComponents: ['contact-form', 'input-field', 'data-table', 'primary-button', 'card'],
    tailwindConfig: `// tailwind.config.js - Fintech Banking Theme
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669', // Forest Emerald
          700: '#047857',
        },
      },
      borderRadius: {
        'fintech': '8px',
      },
    },
  },
};`,
    cssVariables: `:root {
  --sys-brand-primary: #059669;
  --sys-brand-hover: #047857;
  --sys-brand-tint: #f0fdf4;
  --sys-surface-dark: #111827;
  --sys-radius-card: 12px;
  --sys-radius-btn: 8px;
  --sys-font-main: 'IBM Plex Sans', sans-serif;
}`,
  },
];

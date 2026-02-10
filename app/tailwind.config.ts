import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,html}', './index.html'],
  theme: {
    colors: {
      ref: {
        color: {
          sangria: {
            50: 'var(--ref-color-sangria-50)',
            100: 'var(--ref-color-sangria-100)',
            200: 'var(--ref-color-sangria-200)',
            300: 'var(--ref-color-sangria-300)',
            400: 'var(--ref-color-sangria-400)',
            500: 'var(--ref-color-sangria-500)',
            600: 'var(--ref-color-sangria-600)',
            700: 'var(--ref-color-sangria-700)',
            800: 'var(--ref-color-sangria-800)',
            900: 'var(--ref-color-sangria-900)',
            950: 'var(--ref-color-sangria-950)',
          },
          'gold-drop': {
            50: 'var(--ref-color-gold-drop-50)',
            100: 'var(--ref-color-gold-drop-100)',
            200: 'var(--ref-color-gold-drop-200)',
            300: 'var(--ref-color-gold-drop-300)',
            400: 'var(--ref-color-gold-drop-400)',
            500: 'var(--ref-color-gold-drop-500)',
            600: 'var(--ref-color-gold-drop-600)',
            700: 'var(--ref-color-gold-drop-700)',
            800: 'var(--ref-color-gold-drop-800)',
            900: 'var(--ref-color-gold-drop-900)',
            950: 'var(--ref-color-gold-drop-950)',
          },
          'golden-fizz': {
            50: 'var(--ref-color-golden-fizz-50)',
            100: 'var(--ref-color-golden-fizz-100)',
            200: 'var(--ref-color-golden-fizz-200)',
            300: 'var(--ref-color-golden-fizz-300)',
            400: 'var(--ref-color-golden-fizz-400)',
            500: 'var(--ref-color-golden-fizz-500)',
            600: 'var(--ref-color-golden-fizz-600)',
            700: 'var(--ref-color-golden-fizz-700)',
            800: 'var(--ref-color-golden-fizz-800)',
            900: 'var(--ref-color-golden-fizz-900)',
            950: 'var(--ref-color-golden-fizz-950)',
          },
          'chathams-blue': {
            50: 'var(--ref-color-chathams-blue-50)',
            100: 'var(--ref-color-chathams-blue-100)',
            200: 'var(--ref-color-chathams-blue-200)',
            300: 'var(--ref-color-chathams-blue-300)',
            400: 'var(--ref-color-chathams-blue-400)',
            500: 'var(--ref-color-chathams-blue-500)',
            600: 'var(--ref-color-chathams-blue-600)',
            700: 'var(--ref-color-chathams-blue-700)',
            800: 'var(--ref-color-chathams-blue-800)',
            900: 'var(--ref-color-chathams-blue-900)',
            950: 'var(--ref-color-chathams-blue-950)',
          },
          lima: {
            50: 'var(--ref-color-lima-50)',
            100: 'var(--ref-color-lima-100)',
            200: 'var(--ref-color-lima-200)',
            300: 'var(--ref-color-lima-300)',
            400: 'var(--ref-color-lima-400)',
            500: 'var(--ref-color-lima-500)',
            600: 'var(--ref-color-lima-600)',
            700: 'var(--ref-color-lima-700)',
            800: 'var(--ref-color-lima-800)',
            900: 'var(--ref-color-lima-900)',
            950: 'var(--ref-color-lima-950)',
          },
          tapa: {
            50: 'var(--ref-color-tapa-50)',
            100: 'var(--ref-color-tapa-100)',
            200: 'var(--ref-color-tapa-200)',
            300: 'var(--ref-color-tapa-300)',
            400: 'var(--ref-color-tapa-400)',
            500: 'var(--ref-color-tapa-500)',
            600: 'var(--ref-color-tapa-600)',
            700: 'var(--ref-color-tapa-700)',
            800: 'var(--ref-color-tapa-800)',
            900: 'var(--ref-color-tapa-900)',
            950: 'var(--ref-color-tapa-950)',
          },
          jumbo: {
            50: 'var(--ref-color-jumbo-50)',
            100: 'var(--ref-color-jumbo-100)',
            200: 'var(--ref-color-jumbo-200)',
            300: 'var(--ref-color-jumbo-300)',
            400: 'var(--ref-color-jumbo-400)',
            500: 'var(--ref-color-jumbo-500)',
            600: 'var(--ref-color-jumbo-600)',
            700: 'var(--ref-color-jumbo-700)',
            800: 'var(--ref-color-jumbo-800)',
            900: 'var(--ref-color-jumbo-900)',
            950: 'var(--ref-color-jumbo-950)',
          },
          'pale-sky': {
            50: 'var(--ref-color-pale-sky-50)',
            100: 'var(--ref-color-pale-sky-100)',
            200: 'var(--ref-color-pale-sky-200)',
            300: 'var(--ref-color-pale-sky-300)',
            400: 'var(--ref-color-pale-sky-400)',
            500: 'var(--ref-color-pale-sky-500)',
            600: 'var(--ref-color-pale-sky-600)',
            700: 'var(--ref-color-pale-sky-700)',
            800: 'var(--ref-color-pale-sky-800)',
            900: 'var(--ref-color-pale-sky-900)',
            950: 'var(--ref-color-pale-sky-950)',
          },
        },
      },

      sem: {
        color: {
          feedback: {
            success: 'var(--sem-color-feedback-success)',
            'on-success': 'var(--sem-color-feedback-on-success)',
            info: 'var(--sem-color-feedback-info)',
            'on-info': 'var(--sem-color-feedback-on-info)',
            warning: 'var(--sem-color-feedback-warning)',
            'on-warning': 'var(--sem-color-feedback-on-warning)',
            error: 'var(--sem-color-feedback-error)',
            'on-error': 'var(--sem-color-feedback-on-error)',
            danger: 'var(--sem-color-feedback-danger)',
            'on-danger': 'var(--sem-color-feedback-on-danger)',
          },

          interactive: {
            primary: {
              muted: 'var(--sem-color-interactive-primary-muted)',
              default: 'var(--sem-color-interactive-primary-default)',
              emphasis: 'var(--sem-color-interactive-primary-emphasis)',
              on: 'var(--sem-color-interactive-on-primary)',
            },
            secondary: {
              muted: 'var(--sem-color-interactive-secondary-muted)',
              default: 'var(--sem-color-interactive-secondary-default)',
              emphasis: 'var(--sem-color-interactive-secondary-emphasis)',
              on: 'var(--sem-color-interactive-on-secondary)',
            },
            tertiary: {
              muted: 'var(--sem-color-interactive-tertiary-muted)',
              default: 'var(--sem-color-interactive-tertiary-default)',
              emphasis: 'var(--sem-color-interactive-tertiary-emphasis)',
              on: 'var(--sem-color-interactive-on-tertiary)',
            },
          },

          canvas: {
            primary: 'var(--sem-color-canvas-primary)',
            secondary: 'var(--sem-color-canvas-secondary)',
          },

          container: {
            primary: 'var(--sem-color-container-primary)',
            secondary: 'var(--sem-color-container-secondary)',
          },

          content: {
            primary: 'var(--sem-color-content-primary)',
            secondary: 'var(--sem-color-content-secondary)',
            tertiary: 'var(--sem-color-content-tertiary)',
            disabled: 'var(--sem-color-content-disabled)',
            placeholder: 'var(--sem-color-content-placeholder)',
          },
        },
      },
    },
    screens: {
      sm: { raw: '(min-width: var(--sem-size-web-breakpoint-sm))' },
      md: { raw: '(min-width: var(--sem-size-web-breakpoint-md))' },
      lg: { raw: '(min-width: var(--sem-size-web-breakpoint-lg))' },
      xl: { raw: '(min-width: var(--sem-size-web-breakpoint-xl))' },
      '2xl': { raw: '(min-width: var(--sem-size-web-breakpoint-2xl))' },
    },
    spacing: {
      /* CONTAINER → inside */
      'sem-container-inside-none': 'var(--sem-space-container-inside-none)',
      'sem-container-inside-xs': 'var(--sem-space-container-inside-xs)',
      'sem-container-inside-sm': 'var(--sem-space-container-inside-sm)',
      'sem-container-inside-md': 'var(--sem-space-container-inside-md)',
      'sem-container-inside-lg': 'var(--sem-space-container-inside-lg)',

      /* CONTAINER → inset */
      'sem-container-inset-none': 'var(--sem-space-container-inset-none)',
      'sem-container-inset-xs': 'var(--sem-space-container-inset-xs)',
      'sem-container-inset-sm': 'var(--sem-space-container-inset-sm)',
      'sem-container-inset-md': 'var(--sem-space-container-inset-md)',
      'sem-container-inset-lg': 'var(--sem-space-container-inset-lg)',

      /* CONTAINER → stack */
      'sem-container-stack-sm': 'var(--sem-space-container-stack-sm)',
      'sem-container-stack-md': 'var(--sem-space-container-stack-md)',
      'sem-container-stack-lg': 'var(--sem-space-container-stack-lg)',

      /* CONTAINER → border */
      'sem-container-border-none': 'var(--sem-space-container-border-none)',
      'sem-container-border-sm': 'var(--sem-space-container-border-sm)',
      'sem-container-border-md': 'var(--sem-space-container-border-md)',
      'sem-container-border-lg': 'var(--sem-space-container-border-lg)',

      /* INTERACTIVE → inset */
      'sem-interactive-inset-none': 'var(--sem-space-interactive-inset-none)',
      'sem-interactive-inset-sm': 'var(--sem-space-interactive-inset-sm)',
      'sem-interactive-inset-md': 'var(--sem-space-interactive-inset-md)',
      'sem-interactive-inset-lg': 'var(--sem-space-interactive-inset-lg)',

      /* INTERACTIVE → inside */
      'sem-interactive-inside-none': 'var(--sem-space-interactive-inside-none)',
      'sem-interactive-inside-xs': 'var(--sem-space-interactive-inside-xs)',
      'sem-interactive-inside-sm': 'var(--sem-space-interactive-inside-sm)',
      'sem-interactive-inside-md': 'var(--sem-space-interactive-inside-md)',
      'sem-interactive-inside-lg': 'var(--sem-space-interactive-inside-lg)',

      /* INTERACTIVE → stack */
      'sem-interactive-stack-sm': 'var(--sem-space-interactive-stack-sm)',
      'sem-interactive-stack-md': 'var(--sem-space-interactive-stack-md)',
      'sem-interactive-stack-lg': 'var(--sem-space-interactive-stack-lg)',

      /* INTERACTIVE → border */
      'sem-interactive-border-none': 'var(--sem-space-interactive-border-none)',
      'sem-interactive-border-sm': 'var(--sem-space-interactive-border-sm)',
      'sem-interactive-border-md': 'var(--sem-space-interactive-border-md)',
      'sem-interactive-border-lg': 'var(--sem-space-interactive-border-lg)',
    },
    borderRadius: {
      /* INTERACTIVE RADII */
      'sem-interactive-none': 'var(--sem-border-interactive-radius-none)',
      'sem-interactive-sm': 'var(--sem-border-interactive-radius-sm)',
      'sem-interactive-md': 'var(--sem-border-interactive-radius-md)',
      'sem-interactive-lg': 'var(--sem-border-interactive-radius-lg)',
      'sem-interactive-xl': 'var(--sem-border-interactive-radius-xl)',
      'sem-interactive-pill': 'var(--sem-border-interactive-radius-pill)',

      /* CONTAINER RADII */
      'sem-container-none': 'var(--sem-border-container-radius-none)',
      'sem-container-sm': 'var(--sem-border-container-radius-sm)',
      'sem-container-md': 'var(--sem-border-container-radius-md)',
      'sem-container-lg': 'var(--sem-border-container-radius-lg)',
      'sem-container-xl': 'var(--sem-border-container-radius-xl)',
      'sem-container-pill': 'var(--sem-border-container-radius-pill)',
    },
    borderWidth: {
      /* INTERACTIVE WIDTHS */
      'sem-interactive-none': 'var(--sem-border-interactive-width-none)',
      'sem-interactive-sm': 'var(--sem-border-interactive-width-sm)',
      'sem-interactive-md': 'var(--sem-border-interactive-width-md)',
      'sem-interactive-lg': 'var(--sem-border-interactive-width-lg)',

      /* CONTAINER WIDTHS */
      'sem-container-none': 'var(--sem-border-container-width-none)',
      'sem-container-sm': 'var(--sem-border-container-width-sm)',
      'sem-container-md': 'var(--sem-border-container-width-md)',
      'sem-container-lg': 'var(--sem-border-container-width-lg)',
    },
    boxShadow: {
      /* INTERACTIVE */
      'sem-interactive-elevation-1':
        'var(--sem-interactive-box-shadow-elevation-1)',
      'sem-interactive-elevation-2':
        'var(--sem-interactive-box-shadow-elevation-2)',

      /* CONTAINER */
      'sem-container-elevation-2':
        'var(--sem-interactive-container-elevation-2)',
      'sem-container-elevation-3':
        'var(--sem-interactive-container-elevation-3)',
      'sem-container-elevation-4':
        'var(--sem-interactive-container-elevation-4)',
    },
    outlineOffset: {
      /* INTERACTIVE */
      'sem-interactive-none': 'var(--sem-border-interactive-spacing-none)',
      'sem-interactive-sm': 'var(--sem-border-interactive-spacing-sm)',
      'sem-interactive-md': 'var(--sem-border-interactive-spacing-md)',
      'sem-interactive-lg': 'var(--sem-border-interactive-spacing-lg)',

      /* CONTAINER */
      'sem-container-none': 'var(--sem-border-container-spacing-none)',
      'sem-container-sm': 'var(--sem-border-container-spacing-sm)',
      'sem-container-md': 'var(--sem-border-container-spacing-md)',
      'sem-container-lg': 'var(--sem-border-container-spacing-lg)',
    },
    outlineWidth: {
      /* INTERACTIVE */
      'sem-interactive-none': 'var(--sem-border-interactive-width-none)',
      'sem-interactive-sm': 'var(--sem-border-interactive-width-sm)',
      'sem-interactive-md': 'var(--sem-border-interactive-width-md)',
      'sem-interactive-lg': 'var(--sem-border-interactive-width-lg)',

      /* CONTAINER */
      'sem-container-none': 'var(--sem-border-container-width-none)',
      'sem-container-sm': 'var(--sem-border-container-width-sm)',
      'sem-container-md': 'var(--sem-border-container-width-md)',
      'sem-container-lg': 'var(--sem-border-container-width-lg)',
    },
    lineHeight: {
      /* TITLE */
      'sem-text-title-line-height': 'var(--sem-text-title-line-height)',

      /* BODY */
      'sem-text-body-line-height': 'var(--sem-text-body-line-height)',

      /* HELPER */
      'sem-text-helper-line-height': 'var(--sem-text-helper-line-height)',
    },
    fontWeight: {
      /* TITLE */
      'sem-text-title-font-weight-muted':
        'var(--sem-text-title-font-weight-muted)',
      'sem-text-title-font-weight-default':
        'var(--sem-text-title-font-weight-default)',
      'sem-text-title-font-weight-emphasis':
        'var(--sem-text-title-font-weight-emphasis)',

      /* BODY */
      'sem-text-body-font-weight-muted':
        'var(--sem-text-body-font-weight-muted)',
      'sem-text-body-font-weight-default':
        'var(--sem-text-body-font-weight-default)',
      'sem-text-body-font-weight-emphasis':
        'var(--sem-text-body-font-weight-emphasis)',

      /* HELPER */
      'sem-text-helper-font-weight-muted':
        'var(--sem-text-helper-font-weight-muted)',
      'sem-text-helper-font-weight-default':
        'var(--sem-text-helper-font-weight-default)',
      'sem-text-helper-font-weight-emphasis':
        'var(--sem-text-helper-font-weight-emphasis)',
    },
    fontSize: {
      /* TITLE */
      'sem-text-title-font-size-sm': 'var(--sem-text-title-font-size-sm)',
      'sem-text-title-font-size-md': 'var(--sem-text-title-font-size-md)',
      'sem-text-title-font-size-lg': 'var(--sem-text-title-font-size-lg)',
      'sem-text-title-font-size-xl': 'var(--sem-text-title-font-size-xl)',
      'sem-text-title-font-size-2xl': 'var(--sem-text-title-font-size-2xl)',

      /* BODY */
      'sem-text-body-font-size-sm': 'var(--sem-text-body-font-size-sm)',
      'sem-text-body-font-size-md': 'var(--sem-text-body-font-size-md)',
      'sem-text-body-font-size-lg': 'var(--sem-text-body-font-size-lg)',
      'sem-text-body-font-size-xl': 'var(--sem-text-body-font-size-xl)',
      'sem-text-body-font-size-2xl': 'var(--sem-text-body-font-size-2xl)',

      /* HELPER */
      'sem-text-helper-font-size-sm': 'var(--sem-text-helper-font-size-sm)',
      'sem-text-helper-font-size-md': 'var(--sem-text-helper-font-size-md)',
      'sem-text-helper-font-size-lg': 'var(--sem-text-helper-font-size-lg)',
    },
    fontFamily: {
      'sem-text-title-font-family': 'var(--sem-text-title-font-family)',
      'sem-text-body-font-family': 'var(--sem-text-body-font-family)',
      'sem-text-helper-font-family': 'var(--sem-text-helper-font-family)',
    },
  },
  /**
   * Tailwind doesn't have good typography design token support. So, we have to manually
   * create utilities for our typography tokens.
   */
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* ────────────────────────────────
         * TITLE TYPOGRAPHY
         * ──────────────────────────────── */
        '.text-sem-text-title-typography-sm': {
          font: 'var(--sem-text-title-typography-sm)',
        },
        '.text-sem-text-title-typography-md': {
          font: 'var(--sem-text-title-typography-md)',
        },
        '.text-sem-text-title-typography-lg': {
          font: 'var(--sem-text-title-typography-lg)',
        },
        '.text-sem-text-title-typography-xl': {
          font: 'var(--sem-text-title-typography-xl)',
        },
        '.text-sem-text-title-typography-2xl': {
          font: 'var(--sem-text-title-typography-2xl)',
        },

        /* ────────────────────────────────
         * BODY TYPOGRAPHY
         * ──────────────────────────────── */
        '.text-sem-text-body-typography-sm': {
          font: 'var(--sem-text-body-typography-sm)',
        },
        '.text-sem-text-body-typography-md': {
          font: 'var(--sem-text-body-typography-md)',
        },
        '.text-sem-text-body-typography-lg': {
          font: 'var(--sem-text-body-typography-lg)',
        },
        '.text-sem-text-body-typography-xl': {
          font: 'var(--sem-text-body-typography-xl)',
        },
        '.text-sem-text-body-typography-2xl': {
          font: 'var(--sem-text-body-typography-2xl)',
        },

        /* ────────────────────────────────
         * HELPER TYPOGRAPHY
         * ──────────────────────────────── */
        '.text-sem-text-helper-typography-sm': {
          font: 'var(--sem-text-helper-typography-sm)',
        },
        '.text-sem-text-helper-typography-md': {
          font: 'var(--sem-text-helper-typography-md)',
        },
        '.text-sem-text-helper-typography-lg': {
          font: 'var(--sem-text-helper-typography-lg)',
        },
      });
    }),
  ],
};

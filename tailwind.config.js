module.exports = Object.assign({
    theme: {
      extend: {
        colors: {
          bg: 'var(--bg)', paper: 'var(--paper)', ink: 'var(--ink)', muted: 'var(--muted)', line: 'var(--line)',
          forest: 'var(--forest)', forestink: 'var(--forest-ink)', forestmuted: 'var(--forest-muted)',
          mint: 'var(--mint)', mintink: 'var(--mint-ink)', apricot: 'var(--apricot)', apricotsoft: 'var(--apricot-soft)'
        },
        fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
        maxWidth: { site: '76rem' }
      }
    }
  }, { content: ['./src/**/*.jsx'] });

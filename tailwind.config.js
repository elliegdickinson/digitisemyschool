module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', cream: 'var(--cream)', paper: 'var(--paper)', ink: 'var(--ink)', muted: 'var(--muted)', line: 'var(--line)',
        forest: 'var(--forest)', forestdeep: 'var(--forest-deep)', forestink: 'var(--forest-ink)', forestmuted: 'var(--forest-muted)',
        sage: 'var(--sage)', sagedeep: 'var(--sage-deep)', apricot: 'var(--apricot)', apricotdeep: 'var(--apricot-deep)', apricotsoft: 'var(--apricot-soft)'
      },
      fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
      maxWidth: { site: '80rem' }
    }
  }
};

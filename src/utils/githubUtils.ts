const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#663399',
  SCSS: '#CF649A',
  Python: '#3776AB',
  Java: '#B07219',
  'C#': '#239120',
  PHP: '#777BB4',
  Go: '#00ADD8',
  Ruby: '#CC342D',
};

export const getLanguageColor = (language?: string | null) => {
  const defaultColor = '#6C757D'
  if (!language) return defaultColor;

  return languageColors[language] ?? defaultColor;
}
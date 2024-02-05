
// update document theme
const updateDocTheme = () => {
  // set dark mode as default
  const isNoThemeChosen = !localStorage.getItem('theme');
  const isCurrentThemeDark = localStorage.getItem('theme') === 'dark';
  
  // set document theme
  if (
    isNoThemeChosen ||
    isCurrentThemeDark 
    // || window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export default updateDocTheme;
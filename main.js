// Automatically add 'dark' class if the user prefers dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

// Optional: Toggle dark mode manually (if you want a button for users to toggle it)
const toggleDarkMode = () => {
  const currentClass = document.documentElement.classList.contains('dark');
  if (currentClass) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
};

// Example usage: You can call this function from a button
// <button onclick="toggleDarkMode()">Toggle Dark Mode</button>


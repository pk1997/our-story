/**
 * Helper function to get the correct path for assets on GitHub Pages.
 * It prepends the base URL (from vite.config.js) to the asset path.
 * 
 * @param {string} path - The absolute path to the asset (e.g., "/assets/image.png")
 * @returns {string} - The correct path including base URL
 */
export const getAssetUrl = (path) => {
  // Remove leading slash if present to avoid double slashes with BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

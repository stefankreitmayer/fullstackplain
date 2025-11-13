const path = require('path');

function getRelativePath(filePath, workspaceDir) {
  // Handle both absolute and relative paths
  const normalized = path.normalize(filePath);
  const workspaceIndex = normalized.indexOf(workspaceDir + path.sep);
  
  if (workspaceIndex !== -1) {
    // Extract the part after workspace directory
    const afterWorkspace = normalized.substring(workspaceIndex + workspaceDir.length + 1);
    return afterWorkspace;
  }
  
  // Fallback: try simple string replacement
  return filePath.replace(new RegExp(`^.*${workspaceDir}[\\/]`), '');
}

module.exports = {
  // Frontend files
  'frontend/src/**/*.{ts,tsx,js,jsx,json,css,md}': (filenames) => {
    const relativeFiles = filenames.map(f => getRelativePath(f, 'frontend'));
    
    return [
      `prettier --write ${filenames.join(' ')}`,
      `sh -c "cd frontend && eslint --fix ${relativeFiles.join(' ')}"`,
    ];
  },
  // Backend files
  'backend/src/**/*.{ts,js,json}': (filenames) => {
    const relativeFiles = filenames.map(f => getRelativePath(f, 'backend'));
    
    return [
      `prettier --write ${filenames.join(' ')}`,
      `sh -c "cd backend && eslint --fix ${relativeFiles.join(' ')}"`,
    ];
  },
  // Shared files (only prettier, no eslint)
  'shared/src/**/*.{ts,json}': (filenames) => {
    return [`prettier --write ${filenames.join(' ')}`];
  },
};


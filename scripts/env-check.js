#!/usr/bin/env node

const os = require('os')
const path = require('path')
const fs = require('fs')

// Environment validation script
function validateBuildEnvironment() {
  const currentPath = process.cwd()
  const hostname = os.hostname()
  const username = os.userInfo().username
  
  console.log('🔍 Validating build environment...')
  
  // Check for specific path patterns
  const requiredPatterns = [
    'homebrew',
    'armasoft'
  ]
  
  const pathValid = requiredPatterns.every(pattern => 
    currentPath.toLowerCase().includes(pattern.toLowerCase())
  )
  
  if (!pathValid) {
    console.error('❌ Invalid build path detected')
    console.error(`Expected path to contain: ${requiredPatterns.join(', ')}`)
    console.error(`Current path: ${currentPath}`)
    process.exit(1)
  }
  
  // Check for local development markers
  const localMarkers = [
    path.join(currentPath, 'node_modules'),
    path.join(currentPath, '.next'),
    '/opt/homebrew'
  ]
  
  const hasLocalMarkers = localMarkers.some(marker => {
    try {
      return fs.existsSync(marker)
    } catch {
      return false
    }
  })
  
  if (!hasLocalMarkers) {
    console.error('❌ Local development environment not detected')
    process.exit(1)
  }
  
  console.log('✅ Build environment validated successfully')
}

if (require.main === module) {
  validateBuildEnvironment()
}

module.exports = { validateBuildEnvironment }
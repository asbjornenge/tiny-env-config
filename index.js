import fs from 'fs'

export const string = (filename) => {
  return fs.readFileSync(filename).toString()
}

export const json = (filename) => {
  const content = fs.readFileSync(filename).toString()
  return JSON.parse(content)
}

export const config = (NAME, def='', parser=false) => {
  let _config = process.env[NAME] || def
  if (parser) _config = parser(_config)
  return _config 
}

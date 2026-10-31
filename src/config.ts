export const profile = {
  name: 'Prince Yadav',
  location: 'Deoria, Uttar Pradesh, India',
  education: 'B.Tech in Computer Science',
  university: 'Babu Banarasi Das University',
  period: '2024–2028',
  email: 'princeyadavji68@gmail.com',
  github: 'https://github.com/princeyadaav',
  linkedin: 'https://www.linkedin.com/in/prince-yadaav/',
  resume: '',
}

export const externalLinkLabel = (url: string, fallback: string) =>
  url ? fallback : `${fallback} (configure link)`

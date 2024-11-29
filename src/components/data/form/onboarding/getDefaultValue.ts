'use client'

const getDefaultValues = () => {
  const user = JSON.parse(window.localStorage.getItem('user')!)

  return {
    aboutMe: user.aboutMe || '',
    birthDate: new Date(user.birthDate) || '',
    address: {
      street: user.street || '',
      city: user.city || '',
      state: user.state || '',
      zip: user.zip || '',
    },
  }
}

export { getDefaultValues }

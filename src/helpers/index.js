const formatCountryName = (value) => {
  // value = "Korea (Democratic People's Republic of)"
  // value = "Tanzania, United Republic of" - IMPLEMENT
  if (!value) return ''
  return value.replace(/(.*)\s\((.*)\)/, '$2 $1')
}

export default { formatCountryName }
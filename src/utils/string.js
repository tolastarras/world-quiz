export const formatCountryName = value => value
  .replace(/\(.* part\)|the former \w+\s/, '')
  .replace(/(.*),\s(.*)/, '$2 $1')
  .replace(/(.*)\s\((.*)\)/, '$2 $1')

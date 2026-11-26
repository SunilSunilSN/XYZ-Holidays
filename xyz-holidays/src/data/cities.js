const cityFiles = import.meta.glob('./cities/*.json', {
  eager: true
})

export const cities = Object.values(cityFiles)
  .map((file) => file.default)
  .filter((city) => city.active)
  .sort((a, b) => a.name.localeCompare(b.name))

export const getFeaturedCities = () => {
  return cities.filter((city) => city.featured)
}

export const getCityById = (id) => {
  return cities.find((city) => city.id === id)
}

export const getAllPackages = () => {
  return cities.flatMap((city) =>
    (city.packages || [])
      .filter((pkg) => pkg.active)
      .map((pkg) => ({
        ...pkg,
        cityId: city.id,
        cityName: city.name,
        country: city.country
      }))
  )
}

export const getFeaturedPackages = () => {
  return getAllPackages().filter((pkg) => pkg.featured)
}

export const getPackageById = (id) => {
  return getAllPackages().find((pkg) => pkg.id === id)
}

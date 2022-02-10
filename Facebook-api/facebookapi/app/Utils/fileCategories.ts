const fileCategories = ['avatar', 'post'] as const

typeof FileCategory = typeof fileCategories[number]

export { fileCategories, FileCategory }
export default {
  name: 'color',
  description: 'Choose only one',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [
      { value: 'darkBlue', title: 'Dark Blue' },
      { value: 'lightBlue', title: 'Light Blue' },
      { value: 'red', title: 'Red' },
      { value: 'green', title: 'Green' },
      { value: 'gold', title: 'Gold' },
      { value: 'tan', title: 'Tan' },
    ]
  }
}
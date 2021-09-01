
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum ea animi similique dolore praesentium officia sequi, velit non excepturi ex nostrum asperiores officiis! Facere soluta mollitia porro deserunt exercitationem.'

const populateNews = async ({ NewsService }) => {
  for (let i = 0; i < 100; i++) {
    await NewsService.create({
      title: `Title ${i}`,
      description: 'description',
      content,
      author: `Rubén ${i}`
    })
  }
}

module.exports = populateNews

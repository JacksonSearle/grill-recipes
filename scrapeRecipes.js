const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://www.thepioneerwoman.com/food-cooking/meals-menus/g32188535/best-grilling-recipes/';

async function scrapeRecipes() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const recipes = [];

    // Each recipe is inside a <section> with a specific structure
    $('section[data-journey-listicle-slide="true"]').each((i, section) => {
      const title = $(section).find('h2.css-n814eu.e16kmapv8').text().trim();

      const url = $(section)
        .find('a.body-link.css-h51t3b.emevuu60')
        .attr('href');

      const img = $(section)
        .find('img')
        .first()
        .attr('src');

      if (title && url && img) {
        recipes.push({ title, url, img });
      }
    });

    fs.writeFileSync('public/recipes.json', JSON.stringify(recipes, null, 2));
    console.log(`✅ Scraped ${recipes.length} recipes successfully!`);
  } catch (error) {
    console.error('❌ Error scraping recipes:', error.message);
  }
}

scrapeRecipes();

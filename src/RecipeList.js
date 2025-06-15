import { useState, useEffect } from 'react';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(
        'https://api.allorigins.win/raw?url=https://www.thepioneerwoman.com/food-cooking/meals-menus/g32188535/best-grilling-recipes/'
      );
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const items = Array.from(doc.querySelectorAll('##\\3.100 Best Grilling Recipes to Get You Excited for Summer li')).slice(0, 50);
      const parsed = items.map(li => {
        const anchor = li.querySelector('a');
        const title = anchor.textContent.trim();
        const url = anchor.href;
        return { title, url };
      });
      setRecipes(parsed);
    };

    fetchRecipes();
  }, []);

  return recipes;
}

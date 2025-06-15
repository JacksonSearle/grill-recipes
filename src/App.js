import React, { useState } from 'react';
import recipes from './recipes';

function App() {
  const [recipe, setRecipe] = useState(null);

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setRecipe(recipes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Grill & Smoking Recipes</h1>
      <button onClick={getRandomRecipe} style={styles.button}>
        Get a Recipe
      </button>

      {recipe && (
        <div style={styles.recipeCard}>
          <h2>{recipe.name}</h2>
          <p><strong>Description:</strong> {recipe.description}</p>
          <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
          <p><strong>Temperature:</strong> {recipe.temperature}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
  },
  recipeCard: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    textAlign: 'left',
  },
};

export default App;

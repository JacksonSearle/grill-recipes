import { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const getRandomRecipe = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setSelected(random);
  };

  return (
    <div style={styles.container}>
      <h1>Random Grill & Smoking Recipe</h1>
      <button onClick={getRandomRecipe} style={styles.button}>Get a Recipe</button>

      {selected && (
        <div style={styles.card}>
          <h2>{selected.title}</h2>
          <img src={selected.img} alt={selected.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
          <p><a href={selected.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a></p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial', textAlign: 'center', padding: '50px', background: '#f5f5f5', minHeight: '100vh' },
  button: { marginTop: 20, fontSize: '1.2rem', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ff5722', color: '#fff', border: 'none', borderRadius: '8px' },
  card: { marginTop: 30, padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'inline-block', textAlign: 'left' }
};

export default App;

export default function RandomRecipe({ recipes }) {
  if (!recipes.length) return <p>Loading recipes...</p>;

  const random = recipes[Math.floor(Math.random() * recipes.length)];
  return (
    <div style={styles.card}>
      <h2>{random.title}</h2>
      <a href={random.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}

const styles = {
  card: {
    marginTop: 30,
    padding: 20,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'inline-block',
    textAlign: 'left',
  },
};

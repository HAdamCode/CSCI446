import './App.css';

function App() {
  return (
    <div>
      <body>
        <h1>Pokemon Cards</h1>
        <form id="postData">
            <input type="text" name="text" placeholder="Enter a Pokemon name..." />
            <br />
            <button class="button" type="submit">Add</button>
          </form>
        <div id="pokemon-container"></div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}

export default App;

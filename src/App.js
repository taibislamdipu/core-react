import { useEffect, useState } from 'react';
import './App.css';


function App() {

  // const nayoks = ['James', 'George', 'William', 'Thomas', 'Peter', 'Thomas']

  // const nayoks = [
  //   { name: 'James' },
  //   { name: 'George' },
  //   { name: 'William' },
  //   { name: 'Thomas' },
  //   { name: 'Peter' }
  // ]

  const [nayoks, setNayoks] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])

  console.log(nayoks);

  // const { results } = nayoks;


  return (
    <div className="App">

      <MovieCount></MovieCount>

      {/* <Nayok name="James"></Nayok>
      <Nayok name="George"></Nayok>
      <Nayok name="William"></Nayok>
      <Nayok name="Thomas"></Nayok> */}


      {
        nayoks && nayoks.hasOwnProperty('results') &&
        nayoks.results.map(item => <Nayok name={item.name} ></Nayok>)
      }

      <header className="App-header">

      </header>
    </div>


  );

  function Nayok(props) {

    const style = {
      border: '3px solid purple',
      margin: '10px',
    }

    console.log('props', props);

    const { title, first, last } = props.name;

    return (
      <div style={style}>
        <h2>Ami Nayok {`${title} ${first} ${last}`}</h2>
        <p>I have done 5 movies</p>
      </div>
    )
  }

  function MovieCount() {

    const [counts, setCounts] = useState(0);

    // console.log(counts, setCounts);

    return (
      <div>
        <button onClick={() => setCounts(counts + 1)}>Add Movie</button>
        <h2>Total Movie : {counts}</h2>
      </div>
    )
  }



}

export default App;

import './Header.css';
import reactCoreConcepts from '../assets/react-core-concepts.png';

const reactDescriptions = ['Core', 'Crucial', 'Fundamental'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(reactDescriptions.length)]} React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

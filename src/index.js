import "./styles.css";

const title = document.getElementById('autotext');
const text = 'C\'est cool je fait une animation';

const play = () =>{
  title.innerHTML = text;
}

play();
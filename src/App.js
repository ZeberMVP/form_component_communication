import './App.css';
import Head from './components/Head';
import Form from './components/Form';
import Card from './components/Card';
import {useState} from 'react';
import {userContext} from './context/userContext';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [age, setAge] = useState("");

  const login = (name, email, img, age) => {
    setName(name); 
    setEmail(email); 
    setImg(img); 
    setAge(age);
  };
  const logout = () => {
    setName(""); 
    setEmail(""); 
    setImg(""); 
    setAge("");}

  const data = {
    name,
    email,
    img,
    age,
    login,
    logout
  }

  return (
    <div className="App">
        <userContext.Provider value={data}>
          <Head />
          <Form />
          <Card />
        </userContext.Provider>
    </div>
  );
}

export default App;

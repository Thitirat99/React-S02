import Hello from "./assets/Hello"
import Contact from "./assets/Contact"
import Counter from "./assets/Counter"

function App() {
  const helloData = [
    {name : "John", message : "How are you?"},  
    {name : "Paul", message : "Do you eat?"},
  ]
  return (
    <div>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="Anirach@gmail.com" phone="123-456-7890" />
    </div>
   
  )
}

export default App

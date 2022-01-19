import { Rnd } from 'react-rnd';
import logo from './logo.svg';
import './App.css';

function App() {
return (
<div className="App">

<Rnd
default={{
x: 0,
y: 0,
width: 320,
height: 200,
}}
>
<div className="conversation">
Conversation 1
</div>  
</Rnd>

<Rnd
default={{
x: 100,
y: 100,
width: 320,
height: 200,
}}
>
<div className="conversation">
Conversation 2
</div>  
</Rnd>

</div>
);
}

export default App;

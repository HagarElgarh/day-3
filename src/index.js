import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";


// ReactDOM.render(<App />, document.querySelector('#root'))

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector("#root")
  )

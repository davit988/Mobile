import { RouterProvider } from 'react-router-dom'
import './Style/App.css'
import { router } from './routes/routes'



function App() {

  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App

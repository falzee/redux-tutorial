import './App.css'
import { CakeView } from './fitur/cake/cakeView'
import { IceCreamView } from './fitur/icecream/iceCreamView'
import { UserView } from './fitur/user/userView'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
import emojipedia from '../emojipedia.js'
import Entry from './Entry'

function App(){
  return (
    <div>
      <h1>EMOJIS</h1>
    <div className='dictionary'>{emojipedia.map(item=><Entry id={item.id} name={item.name} icon={item.emoji} meaning={item.meaning}/>)}</div>

    </div>
  )
}

export default App;
const names=['John','James','Jacob','Jane']
const word =['Congragulations' , 'React is awesome' ]

const hello  = (
  <div className='card'>
<h1>Hello  World</h1>

<ol>{names.map((a,index)=> <li key={index} className={index === 0 ? 'first': index === 1 ? 'second': index === 2 ? 'third':' '}>{a}</li>)}</ol>

<h2>{word[0]}</h2>
<h3>{word[1]}</h3>
</div>
)

ReactDOM.render(hello,document.getElementById('example'))
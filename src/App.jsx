import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>DockPilot Webhook Test</h1>
      <p style={{ color: '#00ff88', fontSize: '1.2rem', fontWeight: 'bold' }}>
        v2.0 - Auto Deploy Worked!
      </p>
      <div style={{ margin: '2rem 0' }}>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            background: '#00ff88',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Count is {count}
        </button>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and push to GitHub to test the auto-deploy!
      </p>
    </div>
  )
}

export default App

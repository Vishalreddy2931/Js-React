import './App.css'
import UserTable from './components/UserTable'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">React Assignment</p>
        <h1>API Integration with a Custom Hook</h1>
        <p className="hero-text">
          This page fetches live user data from a public API and displays it through a reusable hook.
        </p>
      </section>

      <UserTable />
    </main>
  )
}

export default App

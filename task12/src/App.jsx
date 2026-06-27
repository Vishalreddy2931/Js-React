import { useEffect, useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error(`API Error: ${response.status}`)
        const data = await response.json()
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No user data found')
        }
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Unexpected error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="app-shell">
      <header className="page-header">
        <h1>Task 12 - User Directory</h1>
        <p>Fetched from JSONPlaceholder with error handling</p>
      </header>
      <main>
        <UserTable users={users} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App

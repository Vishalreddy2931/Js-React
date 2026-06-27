import useFetchData from '../hooks/useFetchData'

const UserTable = () => {
  const { data: users, loading, error } = useFetchData(
    'https://jsonplaceholder.typicode.com/users'
  )

  if (loading) {
    return <div className="status-card">Loading users...</div>
  }

  if (error) {
    return <div className="status-card error">{error}</div>
  }

  return (
    <section className="table-card">
      <div className="table-header">
        <div>
          <p className="eyebrow">API Integration Task</p>
          <h2>User Directory</h2>
        </div>
        <span className="count-pill">{users.length} users</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                    {user.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UserTable

import './UserTable.css'

function UserTable({ users, loading, error }) {
  if (loading) {
    return (
      <div className="status-box">
        <div className="spinner"></div>
        <p>Loading user data...</p>
      </div>
    )
  }

  if (error) {
    return <div className="status-box">{error}</div>
  }

  return (
    <div className="container">
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable

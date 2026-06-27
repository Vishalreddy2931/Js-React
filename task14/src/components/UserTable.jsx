import './UserTable.css'

function UserTable({ users, loading, error }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading user data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>Error Loading Users</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (!users || users.length === 0) {
    return (
      <div className="empty-container">
        <p>No users found.</p>
      </div>
    )
  }

  return (
    <div className="table-container">
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
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>{user.phone}</td>
              <td>
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable

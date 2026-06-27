import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './pages.css'

function Profile() {
  const { userProfile, setUserProfile, cartItems } = useContext(CartContext)
  const totalOrders = userProfile.orderHistory?.length || 0

  return (
    <div className="page-container">
      <h1>My Profile</h1>

      <div className="profile-layout">
        <section className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-info">
            <div className="info-item">
              <label>Name:</label>
              <p>{userProfile.name}</p>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <p>{userProfile.email}</p>
            </div>
            <div className="info-item">
              <label>Phone:</label>
              <p>{userProfile.phone}</p>
            </div>
            <div className="info-item">
              <label>Address:</label>
              <p>{userProfile.address}</p>
            </div>
          </div>
          <button className="edit-btn">Edit Profile</button>
        </section>

        <section className="profile-section">
          <h2>Account Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Orders</h3>
              <p className="stat-number">{totalOrders}</p>
            </div>
            <div className="stat-card">
              <h3>Items in Cart</h3>
              <p className="stat-number">{cartItems.length}</p>
            </div>
            <div className="stat-card">
              <h3>Loyalty Points</h3>
              <p className="stat-number">2,450</p>
            </div>
            <div className="stat-card">
              <h3>Member Since</h3>
              <p className="stat-number">2024</p>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <h2>Recent Orders</h2>
          {totalOrders === 0 ? (
            <p className="empty-message">No orders yet. Start shopping!</p>
          ) : (
            <div className="orders-list">
              {userProfile.orderHistory?.map((order, idx) => (
                <div key={idx} className="order-item">
                  <p>Order #{order.id}</p>
                  <p>{order.date}</p>
                  <p>${order.total}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="profile-section">
          <h2>Account Settings</h2>
          <div className="settings-list">
            <div className="setting-item">
              <span>Notifications</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="setting-item">
              <span>Newsletter</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="setting-item">
              <span>2-Factor Authentication</span>
              <input type="checkbox" />
            </div>
            <div className="setting-item">
              <span>Privacy Mode</span>
              <input type="checkbox" />
            </div>
          </div>
          <button className="save-settings-btn">Save Settings</button>
        </section>
      </div>
    </div>
  )
}

export default Profile

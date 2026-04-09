function Notif({ notifications }) {
  return (
    <div style={{ margin: '12px 0' }}>
      {notifications > 0 ? (
        <p style={{ color: '#e5c07b' }}>
           Vous avez {notifications} notification(s)
        </p>
      ) : null}
    </div>
  );
}

export default Notif;
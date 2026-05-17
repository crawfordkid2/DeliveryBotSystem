function App() {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <h2>Robo Delivery Service</h2>

        <div style={styles.navLinks}>
          <span>Home</span>
          <span>Orders</span>
          <span>Tracking</span>
          <span>Support</span>
        </div>
      </nav>

      <main style={styles.hero}>
        <h1 style={styles.title}>
          Autonomous Delivery Across Spokane
        </h1>

        <p style={styles.subtitle}>
          Fast, scalable, and intelligent robotic delivery services.
        </p>

        <button style={styles.button}>
          Create Delivery Order
        </button>
      </main>

      <section style={styles.grid}>
        <DashboardCard
          title="Active Robots"
          value="42"
        />

        <DashboardCard
          title="Orders Today"
          value="128"
        />

        <DashboardCard
          title="Completed Deliveries"
          value="3,421"
        />

        <DashboardCard
          title="System Status"
          value="Operational"
        />
      </section>
    </div>
  )
}

function DashboardCard({ title, value }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>

      <p style={styles.cardValue}>
        {value}
      </p>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, #0f172a, #111827)",
    color: "white",
    fontFamily: "Arial",
    padding: "2rem"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4rem"
  },

  navLinks: {
    display: "flex",
    gap: "1.5rem",
    color: "#cbd5e1"
  },

  hero: {
    textAlign: "center",
    marginBottom: "4rem",
    maxWidth: "900px",
    marginInline: "auto"
  },
  
  title: {
    fontSize: "clamp(2rem, 6vw, 4rem)",
    marginBottom: "1rem",
    lineHeight: "1.1"
  },

  subtitle: {
    fontSize: "1.2rem",
    color: "#cbd5e1",
    marginBottom: "2rem"
  },

  button: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: "10px",
    fontSize: "1rem",
    cursor: "pointer"
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem"
  },

  card: {
    backgroundColor: "#1e293b",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #334155"
  },

  cardValue: {
    fontSize: "2rem",
    fontWeight: "bold"
  }
}

export default App
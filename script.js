/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* BODY */
body {
  background: #0f0f0f;
  color: #eaeaea;
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* HEADER */
header {
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-weight: 600;
  font-size: 18px;
}

nav a {
  color: #aaa;
  text-decoration: none;
  margin-left: 20px;
  transition: 0.3s;
}

nav a:hover {
  color: #fff;
}

/* HERO */
.hero {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h2 {
  font-size: 48px;
  font-weight: 600;
}

.hero p {
  color: #aaa;
  margin: 10px 0 20px;
}

/* BUTTON */
.btn {
  padding: 10px 20px;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  background: #fff;
  color: #000;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
}

/* SECTION */
section {
  padding: 80px 50px;
  max-width: 900px;
  margin: auto;
}

h3 {
  margin-bottom: 20px;
  font-weight: 600;
}

/* PROJECT */
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #333;
  padding: 20px;
  transition: 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  border-color: #fff;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  color: #777;
}
import styles from "./App.module.scss";
import logo from './assets/CanyonLogo.png';

function App() {
  return (
    <div className={styles.App}>
      <header>
      <img
          id="logo"
          src={logo}
          alt=''
        />
        <h1>Grand Canyon Adventures</h1>
      </header>
      <main>
        <p>
          This is an example of a website with some accessibility issues. Use
          the tools we learnt about in the course to debug the issues and answer
          the questions in the workbook.
        </p>
        <p>
          To return to the <em> Web Design Accessibility</em> course on Udemy
          click on the following link: 
          <a href="https://www.udemy.com/course/web-accessibility/">
            {" "}
            Go to the Udemy course
          </a>
        </p>
        <h2>Pictures of the Canyon</h2>

        {/* add aria-label */}
        <section className={styles.imgSection}>
          <figure>
            <img
              src="https://xmeltrut.github.io/accessibility-project/images/horseshoe-bend.jpg"
              alt="a small river streaming around a red rock in the shape of a horsehoe"
            />
            <figcaption>Horsehoe bend</figcaption>
          </figure>
          <figure>
            <img
              src="https://xmeltrut.github.io/accessibility-project/images/grand-canyon-sunset.jpg"
              alt=""
            />
            <figcaption>Grand Canyon at sunset</figcaption>
          </figure>
        </section>
      </main>
      <section className={styles.linksSection}>
        <h3>Related links</h3>
        <ul>
          <li>
            <a href="https://www.nps.gov/grca/index.htm">
              {" "}
              U.S. National Parks Service
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Grand_Canyon"> Wikipedia</a>
          </li>
          <li>
            <a href="https://www.grandcanyon.org/"> Grand Canyon Conservancy</a>
          </li>
        </ul>
      </section>
      <form action="get">
        <h3>Join our newsletter</h3>
        <div className={styles.info}>
        <label htmlFor="user-email">Email:</label>
        <input type="email" name="user-email" id="user-email" /></div>
        <button type="submit">Join newsletter</button>
      </form>
    </div>
  );
}

export default App;

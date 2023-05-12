import styles from "./App.module.scss";
import logo from "./assets/CanyonLogo.png";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <img id="logo" src={logo} alt="" />
        <h1>Grand Canyon Adventures</h1>
      </header>
      <main>
        <p>
          This is the website's example from the Web Design Accessibility Udemy
          course that had some accessibility issues. I used the tools we learnt
          about in the course to debug the issues:
          <ul>
            <li>Unclear link and button text</li>
            <li>Headings not in order</li>
            <li>
              Insufficient color contrast between the caption text/button text
              and their backgrounds
            </li>
            <li>
              Alt attribute text:
              <ol>
                <li>-Reduntand on first image</li>
                <li>-Missing on second image</li>
              </ol>
            </li>
            <li>Links too close together</li>
            <li>Unlabelled form input</li>
          </ul>
        </p>
        <section className={styles.fontInfo}>
          <p>This font family is also accessible. </p>
          <p>
            Looking at the counter, the negative space inside the letters, we
            can clearly dinstict the<em> 'c'</em> from the <em>'e'</em> and from
            the <em>'o'</em>.
          </p>
          <p>
            The same is for <em>'0'</em> <em> 'O'</em> and <em>'C'</em>.{" "}
          </p>
          <p>
            It's also easy to distinguish <em>'6'</em> from <em>'9'</em>,
            <em>'i'</em> from <em>'!'</em> and <em>'g'</em> from <em>'9'</em>.{" "}
          </p>
          <p>
            The differences among <em>'1'</em>, <em>'l'</em> and <em>'I'</em>{" "}
            are relevant too.
          </p>
          <p>
            And finally the <em>'rn'</em> is shaped so that it can not be
            mistaken by <em>'m'</em>.
          </p>
        </section>
        <p>
          To return to the <em> Web Design Accessibility</em> course on Udemy
          click on the following link:
          <a href="https://www.udemy.com/course/web-accessibility/">
            Go to the Udemy course
          </a>
        </p>
        <h2>Pictures of the Canyon</h2>

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
          <input type="email" name="user-email" id="user-email" />
        </div>
        <button type="submit">Join newsletter</button>
      </form>
    </div>
  );
}

export default App;

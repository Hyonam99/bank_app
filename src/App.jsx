import styles from "./style";
import {
  NavBar,
  Billing,
  Business,
  CardDeal,
  Client,
  CTA,
  Footer,
  Hero,
  Statistics,
  Testimonials,
} from "./components/component-exports";

const App = () => (
  <div className="bg-primary w-full">
    <div
      className={`sticky blue__gradient__light top-0 z-[400] ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Statistics />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFirst}>
        <img src="/images/day-logo.png" alt="Logo" className={styles.logo} />
        <p>
          Your Transformation is our passion & We are your personal trainers,
          trained nutritionist, your supplement experts, your health coach, your
          support group We Provide technology ut tools great explorers of the
          truth, the masters of human happiness need burn fat, build become your
          best self.
        </p>
        <button>READ MORE</button>
      </div>
      <div className={styles.footerSecond}>
        <h4 className={styles.title}>
          QUICK <span>LINKS</span>
        </h4>
        <div className={styles.quickLinks}>
          <ul>
            <li>News & Tips</li>
            <li>About Us</li>
            <li>Trademark</li>
            <li>Latest Events</li>
          </ul>
          <ul>
            <li>Vision and Direction</li>
            <li>Get Offers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <h4 className={styles.title}>
          POPULAR <span>TAGS</span>
        </h4>
        <div className={styles.tags}>
          <button>Flights</button>
          <button>Car hire</button>
          <button>Trains</button>
          <button>Ticketing Guide</button>
          <button>Cruise</button>
        </div>
      </div>
      <div className={styles.footerThird}>
        <h4 className={styles.title}>
          RECENT <span>NEWS</span>
        </h4>
        {[...Array(3)].map((e, i) => (
          <div key={i} className={styles.post}>
            <img src="/images/post-icon.png" alt="Post Icon" />
            <div>
              <p className={styles.postTitle}>
                STOP GETTING ANNOYED IF YOU WANT.
              </p>
              <p className={styles.postDate}>April, 15 2018</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerFourth}>
        <h4 className={styles.title}>
          CONTACT <span>US</span>
        </h4>
        <div className={styles.contacts}>
          <div>
            <p>📞</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div>
            <p>📧</p>
            <p>Email: Hello@sakatran.com</p>
          </div>
          <div>
            <p>📍</p>
            <p>Address: Tyche collins, 09 Downtown, Victoria, Australia</p>
          </div>
        </div>
        <h4 className={styles.title}>
          SUBSCRIBE <span>US</span>
        </h4>
        <div className={styles.subscribeForm}>
          <p>Find out latest news and discounts:</p>
          <div className={styles.subscribeInput}>
            <input type="text" placeholder="E_mail" />
            <button className={styles.submitIcon}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

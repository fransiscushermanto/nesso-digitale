import Link from "next/link";

import { cx } from "@styled-system/css";
import { Logo } from "@/components/shapes";

import { Facebook, Google, Instagram, Twitter } from "./shapes";
import { footerCss } from "./styles";
import { NAV_MENUS } from "../constants";

const Footer = () => {
  return (
    <footer className={cx("footer", "container", footerCss)}>
      <div className="inner-footer">
        <section className="footer__profile">
          <Link
            href="/"
            className="footer__profile__logo"
            aria-label="nesso digitale"
          >
            <Logo />
          </Link>
          <p className="footer__profile__motto">
            Costruiamo soluzioni digitali che semplificano il lavoro, un
            progetto alla volta.
          </p>
          <ul className="footer__profile__socials">
            <li>
              <Link
                rel="noopener noreferrer"
                href="https://google.com"
                target="__blank"
                aria-label="Follow us on Google"
              >
                <Google />
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href="https://facebook.com"
                target="__blank"
                aria-label="Follow us on Facebook"
              >
                <Facebook />
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href="https://twitter.com"
                target="__blank"
                aria-label="Follow us on Twitter"
              >
                <Twitter />
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                href="https://instagram.com"
                target="__blank"
                aria-label="Follow us on Instagram"
              >
                <Instagram />
              </Link>
            </li>
          </ul>
        </section>
        <section className="footer__menus">
          <h3>Menus</h3>
          <ul className="footer__menus__list">
            {NAV_MENUS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer__contact">
          <h3>Contatti</h3>

          <div className="footer__contact__detail">
            <Link href="mailto:Support@mail.com">Support@mail.com</Link>
            <address>
              Modulo LTD, Golden Plaza, 7 Nile Street, Cairo EG2R 6DA
            </address>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

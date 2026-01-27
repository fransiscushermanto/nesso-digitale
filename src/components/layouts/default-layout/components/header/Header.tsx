"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cx } from "@styled-system/css";
import { LogoSimple } from "@/components/shapes";
import { Button } from "@/components/elements";

import { NAV_MENUS } from "../constants";
import { headerCss } from "./styles";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={cx("header", "container", headerCss)}>
      <nav className="nav">
        <Link className="nav__brand" href="/" aria-label="Home">
          <LogoSimple />
        </Link>
        <ul className="nav__menu">
          {NAV_MENUS.map(({ href, label }) => (
            <li key={href} className="nav__menu-item">
              {pathname === href && (
                <span className="bullet" aria-hidden="true">
                  &#8226;
                </span>
              )}
              <Link
                href={href}
                className="nav__menu-item__link"
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          type="link"
          href="/contatti"
          className="contact-btn"
          variant="outline"
        >
          Contatti
        </Button>
      </nav>
    </header>
  );
};

export default Header;

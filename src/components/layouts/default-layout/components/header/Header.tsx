"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDisclosure, useIsMobile } from "@/hooks";
import { cx } from "@styled-system/css";
import { LogoSimple } from "@/components/shapes";
import { Button } from "@/components/elements";

import { NAV_MENUS } from "../constants";
import { headerCss } from "./styles";
import { Hamburger } from "./shapes";
import { MobileMenuDrawer } from "./components";

const Header = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile(1024);

  const { isOpen, onOpen, onClose } = useDisclosure({
    onOpen: () => {
      document.body.style.overflow = "hidden";
    },
    onClose: () => {
      document.body.style.overflow = "unset";
    },
  });

  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);

  return (
    <header className={cx("header", "container", headerCss)}>
      <nav className="nav">
        <Link className="nav__brand" href="/" aria-label="Home">
          <LogoSimple />
        </Link>

        {isMobile ? (
          <Button
            onClick={onOpen}
            variant="outline"
            icon
            className="mobile-menu-toggle"
            aria-label="Toggle menu drawer"
          >
            <Hamburger />
          </Button>
        ) : (
          <>
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
          </>
        )}
      </nav>
      <MobileMenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        currentPathname={pathname}
      />
    </header>
  );
};

export default Header;

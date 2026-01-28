import Link from "next/link";

import { cx } from "@styled-system/css";
import { Button } from "@/components/elements";

import { NAV_MENUS } from "../../../constants";
import { Close } from "../../shapes";
import type { MobileMenuDrawerProps } from "./types";
import { mobileMenuDrawerCss } from "./styles";

const MobileMenuDrawer = (props: MobileMenuDrawerProps) => {
  const { isOpen, onClose, currentPathname } = props;

  return (
    isOpen && (
      <div className={cx("mobile-menu-drawer", mobileMenuDrawerCss)}>
        <Button onClick={onClose} variant="outline" icon className="close-btn">
          <Close />
        </Button>
        <ul className="menu-list">
          {NAV_MENUS.map(({ href, label }) => (
            <li key={href} className="menu-list__item">
              {currentPathname === href && (
                <span className="bullet" aria-hidden="true">
                  &#8226;
                </span>
              )}
              <Link
                href={href}
                className="nav__menu-item__link"
                aria-current={currentPathname === href ? "page" : undefined}
                onClick={onClose}
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
          onClick={onClose}
        >
          Contatti
        </Button>
      </div>
    )
  );
};

export default MobileMenuDrawer;

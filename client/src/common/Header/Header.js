import React from "react";

import { IconContext } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import styles from "./Header.module.scss";

const Header = () => {
  const iconSize = "3rem";

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.stackWrapper}>
          <IconContext.Provider
            value={{
              color: "#e95a2c",
              className: "global-class-name",
              size: iconSize,
            }}
          >
            <div className={styles.iconWrapper}>
              <FaHtml5 />
            </div>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "#4793f1",
              className: "global-class-name",
              size: iconSize,
            }}
          >
            <div className={styles.iconWrapper}>
              <FaCss3Alt />
            </div>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "#fae04b",
              className: "global-class-name",
              size: iconSize,
            }}
          >
            <div className={styles.iconWrapper}>
              <IoLogoJavascript />
            </div>
          </IconContext.Provider>
        </div>

        <div className={styles.iconLabel}>HTML, CSS & JS</div>
      </div>

      <i className={`${styles.arrowIcon} gg-arrow-long-right`}></i>

      <div>
        <IconContext.Provider
          value={{
            color: "#65daf9",
            className: "global-class-name",
            size: iconSize,
          }}
        >
          <div className={styles.iconWrapper}>
            <FaReact />
          </div>
        </IconContext.Provider>

        <div className={styles.iconLabel}>React</div>
      </div>

      <i className={`${styles.arrowIcon} gg-arrow-long-right`}></i>

      <div>
        <IconContext.Provider
          value={{
            color: "#60a051",
            className: "global-class-name",
            size: iconSize,
          }}
        >
          <div className={styles.iconWrapper}>
            <FaNodeJs />
          </div>
        </IconContext.Provider>

        <div className={styles.iconLabel}>Node</div>
      </div>

      <i className={`${styles.arrowIcon} gg-arrow-long-right`}></i>

      <div>
        <IconContext.Provider
          value={{
            color: "#f25335",
            className: "global-class-name",
            size: iconSize,
          }}
        >
          <div className={styles.iconWrapper}>
            <FaGitAlt />
          </div>

          <div className={styles.iconLabel}>GIT</div>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;

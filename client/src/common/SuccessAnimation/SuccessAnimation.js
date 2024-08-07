import React from "react";

import styles from "./SuccessAnimation.module.scss";

class SuccessAnimation extends React.Component {
  renderAnimation = () => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
        className={styles.svgCustom}
      >
        <circle
          className={`${styles.path} ${styles.circle}`}
          fill="none"
          stroke="rgb(3,125,80)"
          strokeWidth="6"
          strokeMiterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        <polyline
          className={`${styles.path} ${styles.check}`}
          fill="none"
          stroke="rgb(3,125,80)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
    );
  };

  render() {
    return <>{this.renderAnimation()}</>;
  }
}

export default SuccessAnimation;

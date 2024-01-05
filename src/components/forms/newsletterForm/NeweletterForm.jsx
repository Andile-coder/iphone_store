import React from "react";
import styles from "./newsletterForm.module.scss";
const NeweletterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <form>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Full Name"
              aria-autocomplete="false"
            />
          </div>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Email" autoComplete="false" />
          </div>

          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NeweletterForm;

import clsx from "clsx";

function MenuIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "stroke-1",
        isActive ? "stroke-[#004E64]" : "stroke-black/25"
      )}
    >
      <path
        d="M13 1.5H3C1.89543 1.5 1 2.39543 1 3.5V13.5C1 14.6046 1.89543 15.5 3 15.5H13C14.1046 15.5 15 14.6046 15 13.5V3.5C15 2.39543 14.1046 1.5 13 1.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 1.5H25C23.8954 1.5 23 2.39543 23 3.5V13.5C23 14.6046 23.8954 15.5 25 15.5H35C36.1046 15.5 37 14.6046 37 13.5V3.5C37 2.39543 36.1046 1.5 35 1.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35 23.5H25C23.8954 23.5 23 24.3954 23 25.5V35.5C23 36.6046 23.8954 37.5 25 37.5H35C36.1046 37.5 37 36.6046 37 35.5V25.5C37 24.3954 36.1046 23.5 35 23.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 23.5H3C1.89543 23.5 1 24.3954 1 25.5V35.5C1 36.6046 1.89543 37.5 3 37.5H13C14.1046 37.5 15 36.6046 15 35.5V25.5C15 24.3954 14.1046 23.5 13 23.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function NotificationIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="38"
      height="43"
      viewBox="0 0 38 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "stroke-1",
        isActive ? "stroke-[#004E64]" : "stroke-black/25"
      )}
    >
      <path
        d="M15.536 39.5C15.8871 40.108 16.392 40.6129 17.0001 40.964C17.6081 41.315 18.2979 41.4998 19 41.4998C19.7021 41.4998 20.3919 41.315 20.9999 40.964C21.608 40.6129 22.1129 40.108 22.464 39.5M1.524 28.152C1.26273 28.4384 1.09031 28.7945 1.02771 29.177C0.965117 29.5596 1.01504 29.9521 1.17142 30.3068C1.32779 30.6615 1.58387 30.9631 1.90851 31.1749C2.23316 31.3868 2.61236 31.4997 3 31.5H35C35.3876 31.5001 35.7669 31.3876 36.0917 31.1762C36.4166 30.9648 36.673 30.6635 36.8298 30.309C36.9866 29.9546 37.037 29.5622 36.9749 29.1796C36.9128 28.797 36.7409 28.4407 36.48 28.154C33.82 25.412 31 22.498 31 13.5C31 10.3174 29.7357 7.26516 27.4853 5.01472C25.2349 2.76428 22.1826 1.5 19 1.5C15.8174 1.5 12.7652 2.76428 10.5147 5.01472C8.26429 7.26516 7 10.3174 7 13.5C7 22.498 4.178 25.412 1.524 28.152Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function CartIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "stroke-1",
        isActive ? "stroke-[#004E64]" : "stroke-black/25"
      )}
    >
      <path
        d="M1.09999 1.59998H5.09999L10.42 26.44C10.6151 27.3497 11.1213 28.1629 11.8514 28.7397C12.5815 29.3164 13.4898 29.6207 14.42 29.6H33.98C34.8903 29.5985 35.7729 29.2865 36.482 28.7156C37.1911 28.1447 37.6842 27.349 37.88 26.46L41.18 11.6H7.23999M15 39.5C15 40.6045 14.1046 41.5 13 41.5C11.8954 41.5 11 40.6045 11 39.5C11 38.3954 11.8954 37.5 13 37.5C14.1046 37.5 15 38.3954 15 39.5ZM37 39.5C37 40.6045 36.1045 41.5 35 41.5C33.8954 41.5 33 40.6045 33 39.5C33 38.3954 33.8954 37.5 35 37.5C36.1045 37.5 37 38.3954 37 39.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ListIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="38"
      height="27"
      viewBox="0 0 38 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "stroke-1",
        isActive ? "stroke-[#004E64]" : "stroke-black/25"
      )}
    >
      <path
        d="M1 13.5H1.02M1 25.5H1.02M1 1.5H1.02M11 13.5H37M11 25.5H37M11 1.5H37"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ProfileIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="34"
      height="39"
      viewBox="0 0 34 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "stroke-1",
        isActive ? "stroke-[#004E64]" : "stroke-black/25"
      )}
    >
      <path
        d="M17 21.5C22.5228 21.5 27 17.0228 27 11.5C27 5.97715 22.5228 1.5 17 1.5C11.4772 1.5 7 5.97715 7 11.5C7 17.0228 11.4772 21.5 17 21.5ZM17 21.5C21.2435 21.5 25.3131 23.1857 28.3137 26.1863C31.3143 29.1869 33 33.2565 33 37.5M17 21.5C12.7565 21.5 8.68687 23.1857 5.68629 26.1863C2.68571 29.1869 1 33.2565 1 37.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { MenuIcon, NotificationIcon, CartIcon, ListIcon, ProfileIcon };

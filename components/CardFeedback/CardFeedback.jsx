import React from 'react';
import styles from './CardFeedback.module.scss'

function CardFeedback(props) {
  let gradeStars = [];
  let star = (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00739 0.72562C8.08257 0.496011 8.40738 0.496011 8.48256 0.725621L10.0397 5.48129C10.0733 5.58402 10.1692 5.6535 10.2773 5.6535H15.3122C15.5548 5.6535 15.6552 5.96438 15.4584 6.10629L11.3884 9.04066C11.3001 9.10432 11.2631 9.2178 11.297 9.32125L12.8524 14.0715C12.9277 14.3015 12.6649 14.4937 12.4686 14.3521L8.39118 11.4124C8.30388 11.3495 8.18608 11.3495 8.09877 11.4124L4.02136 14.3521C3.82505 14.4937 3.56226 14.3015 3.63756 14.0715L5.19294 9.32125C5.22681 9.2178 5.18986 9.10432 5.10156 9.04066L1.03156 6.10629C0.834735 5.96438 0.935121 5.6535 1.17777 5.6535H6.21266C6.32076 5.6535 6.41661 5.58402 6.45025 5.48129L8.00739 0.72562Z"
        fill="#FBB040"
      />
    </svg>
  );

  for(let i = 0; i < props.grade; i++)
    gradeStars.push(star);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.person}>
          <img
            className={styles.img}
            src="img/FeedBack/1.png"
            alt="Person img"
          />
          <div className={styles.info}>
            <p className={styles.name}>{props.person}</p>
            <p className={styles.location}>{props.location}</p>
          </div>
        </div>
        <div className={styles.grade}>
          {gradeStars}
        </div>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default CardFeedback;
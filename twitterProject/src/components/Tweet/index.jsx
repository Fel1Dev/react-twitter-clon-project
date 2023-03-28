import styles from "./styles.module.css";
import React, { useState } from "react";

import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";

export const Tweet = ({ name, username, children }) => {
    const [likes, setLikes] = useState(0);
    const [rt, setRts] = useState(0);
    const [comments, setComments] = useState(0);

    const handleLikeClick = () => {
        setLikes((prevState) => {
            if (prevState) {
                return 0;
            }
            return 1;
        });
    };

    const handleRtClick = () => {
        setRts((prevState) => {
            if (prevState) {
                return 0;
            }
            return 1;
        });
    };

    return (
        <article className={styles.tweet}>
            <div className={styles.header}>
                <img src="https://picsum.photos/150" alt="profile picture" className="img-default"/>
                <div className={styles.container}>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.gray}>@{name}</span>
                    <span className={styles.gray}>20h</span>
                    <button>...</button>
                </div>
            </div>
            <div className={styles.children}>{children}</div>
            <div className={styles.footer}>
                <ul className={styles.list}>
                    <li><button onClick={handleLikeClick} ><FaHeart /></button><span>{likes}</span></li>
                    <li><button onClick={handleRtClick}><FaRetweet /></button><span>{rt}</span></li>
                    <li>
                        <button onClick={() => setComments((prevState) => prevState + 1)}>
                            <FaComment />
                        </button>
                        <span>{comments}</span>
                    </li>
                </ul>
            </div>
        </article>
    );
};

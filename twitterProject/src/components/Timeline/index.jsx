import React from "react";
import styles from "./styles.module.css"

import { PublishTweet } from "../PublishTweet"
import { Tweet } from "../Tweet"

export const Timeline = () => {
    
    return (
        <div className={styles.timeline}>
            <PublishTweet></PublishTweet>
            <Tweet username="JuanDC" name="Juan David">
                <p>Cuerpo del Tweet</p>
            </Tweet>
            <Tweet username="LeoC0de" name="Leonardo esponosa">
                <p>Hola Mundooo</p>
                <img src="https://picsum.photos/500" alt="" />
            </Tweet>
            <Tweet username="Fel1Dev" name="Andres Torres">
                <p>Tweet final</p>
                <img src="https://picsum.photos/400" alt="" />
            </Tweet>
        </div>
    )
}
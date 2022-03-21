import React, {useState, useEffect, useCallback } from "react";

const emojis = ['🍌', '🏋️‍♂️', '💻', '🦧', '👨‍🦰', '🌴', '🌊', '🌎', '🥝', '🏕', '🏔', '🎨', '📚']

const EmojiCycle = () => {
    const [newEmoji, setnewEmoji] = useState("👋");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * emojis.length);
        setnewEmoji(emojis[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return(
        <h6>{newEmoji}</h6>
    )
}

export default EmojiCycle;
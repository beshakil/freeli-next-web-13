"use client";
import Image from 'next/image';
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const PerMsgEmoji = ({ setPerMsgEmoji }) => {
    return (
        <OutsideClickHandler onOutsideClick={() => setPerMsgEmoji(false)}>
            <div className="reactionContainer">
                <span role="img" aria-label="thumbsup"><Image src="/media/images/reaction/like.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="love"><Image src="/media/images/reaction/love.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="joy"><Image src="/media/images/reaction/care.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="haha"><Image src="/media/images/reaction/haha.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="wow"><Image src="/media/images/reaction/wow.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="sad"><Image src="/media/images/reaction/sad.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="angry"><Image src="/media/images/reaction/angry.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="ask"><Image src="/media/images/reaction/ask.webp" alt="img" width={30} height={30} /></span>
                <span role="img" aria-label="tick"><Image src="/media/images/reaction/tick.webp" alt="img" width={30} height={30} /></span>
            </div>
        </OutsideClickHandler>
    );
};

export default PerMsgEmoji;



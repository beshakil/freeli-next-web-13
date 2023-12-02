import Image from 'next/image';
import React from 'react';

const EmojiContainer = () => {
    return (
        <div className="msgReactionContainer">
            <div className='msgReaction'>
                <span role="img" aria-label="thumbsup"><Image src="/media/images/reaction/like.webp" alt="img" width={25} height={25} /></span>
                <span class="msgReactionCounter">1</span>
            </div>
            <div className='msgReaction'>
            <span role="img" aria-label="love"><Image src="/media/images/reaction/love.webp" alt="img" width={25} height={25} /></span>
                <span class="msgReactionCounter">1</span>
            </div>
        </div>
    );
};

export default EmojiContainer;
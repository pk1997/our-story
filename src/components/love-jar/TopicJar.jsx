import React from 'react';
import { getUnreadCount } from './messages';

const TopicJar = ({ topic, openedIds, onClick }) => {
    const unreadCount = getUnreadCount(topic.id, openedIds);
    const totalCount = topic.messages.length;

    return (
        <div className="topic-jar" onClick={() => onClick(topic.id)}>
            <div className="jar-icon-container">
                <span className="jar-emoji">{topic.emoji}</span>
            </div>
            <span className="jar-label">{topic.name}</span>
            <span className="jar-count">
                {unreadCount === 0 ? 'All opened ✨' : `${unreadCount}/${totalCount} letters`}
            </span>
        </div>
    );
};

export default TopicJar;

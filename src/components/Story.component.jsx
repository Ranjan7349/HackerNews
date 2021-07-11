import React from 'react';
import moment from 'moment';
import '../styles/story.styles.css'

const Story = ({sino,title,score,by,time,descendants,url}) => {
    const date = moment(time).format('YYYYMMDD');
    const hour = moment(date, "YYYYMMDD").fromNow();
    return (
        <div className="story">
            <span>{`${sino}.`}&nbsp;</span>
            <span className="header" onClick={() => window.open(url, '_blank')}>
                {title}
            </span><br />
            <span className="details">{`${score} points by ${by} ${hour} | ${descendants} comment`}</span>
        </div>
    )
}

export default Story;
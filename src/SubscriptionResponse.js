import React from 'react';
import './SubscriptionResponse.css'; 

const SubscriptionResponse = ({ message }) => {
    if (!Array.isArray(message)) {
        return (
            <div className="subscription-response-card">
                <div className="subscription-response-content">
                    <div className="card-body">
                        <p className="card-text">{message}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {message.map((item, index) => (
                <div key={index} className="subscription-response-card">
                    <div className="subscription-response-content">
                        <div className="card-body">
                            <a href={item.URL} className="card-title btn btn-primary">{item.Title}</a>
                            <p className="card-text">Published Date: {item['Published Date']}</p>
                            {item.Author && <p className="card-text">Author: {item.Author}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SubscriptionResponse;
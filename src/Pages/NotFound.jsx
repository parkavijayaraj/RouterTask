import React from 'react';

const NotFound = () => {
    return (
        <div>
           <img src="data:image/png;base64,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" alt="pageNotImage" />
        </div>
    );
};

export default NotFound;
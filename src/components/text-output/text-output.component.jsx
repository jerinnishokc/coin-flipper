import React from 'react';

const TextOutput = ({flips, heads, tails}) => {
    // const {flips, heads, tails} = props;
    return (
        <div>
            Out of {flips} flips, there have been {heads} heads and {tails} tails !!!    
        </div>
    );
}; 

export default TextOutput;
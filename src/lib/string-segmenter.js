// Browser-friendly implementation of sentence splitting
export function splitBySentence(text) {
    // Use Intl.Segmenter if available (modern browsers)
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter('en', { granularity: 'sentence' });
        return segmenter.segment(text);
    }

    // Fallback implementation for older browsers
    // This regex handles common abbreviations and sentence endings
    const regex = /[^.!?]+(?:[.!?]+(?:[\s\n]+|$))/g;
    const matches = text.match(regex) || [];
    
    return {
        [Symbol.iterator]() {
            let index = 0;
            return {
                next() {
                    if (index < matches.length) {
                        return {
                            value: { segment: matches[index++].trim() },
                            done: false
                        };
                    }
                    return { done: true };
                }
            };
        }
    };
} 
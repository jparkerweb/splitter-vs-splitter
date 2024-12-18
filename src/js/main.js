import sentencize from '@stdlib/nlp-sentencize';
import { splitBySentence } from '../lib/string-segmenter.js';

const textArea = document.getElementById('input-text');
const submitButton = document.getElementById('submit-btn');
const stdlibOutput = document.getElementById('stdlib-output');
const segmenterOutput = document.getElementById('segmenter-output');
const stdlibCount = document.getElementById('stdlib-count');
const segmenterCount = document.getElementById('segmenter-count');

// Function to generate a random pastel color
function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
}

function processWithStdlib(text) {
    try {
        const sentences = sentencize(text);
        return sentences;
    } catch (error) {
        console.error('Stdlib processing error:', error);
        return ['Error processing text'];
    }
}

function processWithSegmenter(text) {
    try {
        const sentences = [];
        for (const { segment } of splitBySentence(text)) {
            if (segment.trim().length > 0) {
                sentences.push(segment.trim());
            }
        }
        return sentences;
    } catch (error) {
        console.error('Segmenter processing error:', error);
        return ['Error processing text'];
    }
}

function createColoredSentences(sentences, colors) {
    return sentences.map((sentence, index) => {
        const backgroundColor = colors[index];
        return `<span style="display: block; background-color: ${backgroundColor}; margin: 4px 0; padding: 4px;">${sentence}</span>`;
    }).join('');
}

function updateSentenceCount(count, element) {
    element.textContent = `${count} sentence${count === 1 ? '' : 's'}`;
}

function updateOutputs() {
    const text = textArea.value;
    
    // Get sentences from both processors
    const stdlibSentences = processWithStdlib(text);
    const segmenterSentences = processWithSegmenter(text);
    
    // Generate colors for the maximum number of sentences
    const maxSentences = Math.max(stdlibSentences.length, segmenterSentences.length);
    const colors = Array.from({ length: maxSentences }, () => generatePastelColor());
    
    // Create colored output for both sets of sentences
    stdlibOutput.innerHTML = createColoredSentences(stdlibSentences, colors);
    segmenterOutput.innerHTML = createColoredSentences(segmenterSentences, colors);

    // Update sentence counts
    updateSentenceCount(stdlibSentences.length, stdlibCount);
    updateSentenceCount(segmenterSentences.length, segmenterCount);
}

// Add event listener to the submit button
submitButton.addEventListener('click', updateOutputs);

// Also allow Enter key in textarea to trigger update
textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        updateOutputs();
    }
}); 
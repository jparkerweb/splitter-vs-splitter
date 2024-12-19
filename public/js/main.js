const textArea = document.getElementById('input-text');
const submitButton = document.getElementById('submit-btn');
const stdlibOutput = document.getElementById('stdlib-output');
const sentenceParseOutput = document.getElementById('sentence-parse-output');
const stdlibCount = document.getElementById('stdlib-count');
const sentenceParseCount = document.getElementById('sentence-parse-count');

function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
}

function createColoredSentences(sentences, colors) {
    // Ensure sentences is an array
    const sentenceArray = Array.isArray(sentences) ? sentences : [sentences];
    
    return sentenceArray
        .filter(sentence => sentence && typeof sentence === 'string')
        .map((sentence, index) => {
            const backgroundColor = colors[index];
            return `<span style="display: block; background-color: ${backgroundColor}; margin: 4px 0; padding: 4px;">${sentence}</span>`;
        })
        .join('');
}

function updateSentenceCount(count, element) {
    element.textContent = `${count} sentence${count === 1 ? '' : 's'}`;
}

async function updateOutputs() {
    const text = textArea.value;
    
    try {
        const response = await fetch('/api/process-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) throw new Error('Network response was not ok');
        
        const { stdlibSentences, sentenceParseSentences } = await response.json();
        
        // Ensure we have arrays
        const stdlibArray = Array.isArray(stdlibSentences) ? stdlibSentences : [text];
        const parseArray = Array.isArray(sentenceParseSentences) ? sentenceParseSentences : [text];
        
        // Generate colors for the maximum number of sentences
        const maxSentences = Math.max(stdlibArray.length, parseArray.length);
        const colors = Array.from({ length: maxSentences }, () => generatePastelColor());
        
        // Create colored output for both sets of sentences
        stdlibOutput.innerHTML = createColoredSentences(stdlibArray, colors);
        sentenceParseOutput.innerHTML = createColoredSentences(parseArray, colors);

        // Update sentence counts
        updateSentenceCount(stdlibArray.length, stdlibCount);
        updateSentenceCount(parseArray.length, sentenceParseCount);
    } catch (error) {
        console.error('Error:', error);
        stdlibOutput.innerHTML = sentenceParseOutput.innerHTML = '<span class="error">Error processing text</span>';
    }
}

submitButton.addEventListener('click', updateOutputs);

textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        updateOutputs();
    }
}); 
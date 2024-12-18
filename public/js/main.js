const textArea = document.getElementById('input-text');
const submitButton = document.getElementById('submit-btn');
const stdlibOutput = document.getElementById('stdlib-output');
const segmenterOutput = document.getElementById('segmenter-output');
const stdlibCount = document.getElementById('stdlib-count');
const segmenterCount = document.getElementById('segmenter-count');

function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
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
        
        const { stdlibSentences, segmenterSentences } = await response.json();
        
        // Generate colors for the maximum number of sentences
        const maxSentences = Math.max(stdlibSentences.length, segmenterSentences.length);
        const colors = Array.from({ length: maxSentences }, () => generatePastelColor());
        
        // Create colored output for both sets of sentences
        stdlibOutput.innerHTML = createColoredSentences(stdlibSentences, colors);
        segmenterOutput.innerHTML = createColoredSentences(segmenterSentences, colors);

        // Update sentence counts
        updateSentenceCount(stdlibSentences.length, stdlibCount);
        updateSentenceCount(segmenterSentences.length, segmenterCount);
    } catch (error) {
        console.error('Error:', error);
        stdlibOutput.innerHTML = segmenterOutput.innerHTML = '<span class="error">Error processing text</span>';
    }
}

submitButton.addEventListener('click', updateOutputs);

textArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        updateOutputs();
    }
}); 
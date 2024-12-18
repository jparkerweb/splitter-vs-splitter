import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sentencize from '@stdlib/nlp-sentencize';
import { splitBySentence } from 'string-segmenter';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.post('/api/process-text', async (req, res) => {
  try {
    const { text } = req.body;
    
    // Process with stdlib
    const stdlibSentences = sentencize(text);

    // Process with segmenter
    const segmenterSentences = [];
    for (const { segment } of splitBySentence(text)) {
      if (segment.trim().length > 0) {
        segmenterSentences.push(segment.trim());
      }
    }

    res.json({
      stdlibSentences,
      segmenterSentences
    });
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({ error: 'Error processing text' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
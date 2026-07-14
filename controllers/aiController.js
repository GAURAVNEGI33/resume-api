exports.generateBullets = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  res.status(200).json({ result: text + ' (improved)' });
};

exports.generateSummary = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  res.status(200).json({ result: text + ' (summarized)' });
};

exports.rewriteText = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  res.status(200).json({ result: text + ' (rewritten)' });
};

exports.applyPrompt = (req, res) => {
  const { text, instruction } = req.body;
  if (!text || !instruction) return res.status(400).json({ error: 'Text and instruction required' });
  res.status(200).json({ result: text + ' (modified as per: ' + instruction + ')' });
};

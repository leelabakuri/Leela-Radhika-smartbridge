
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let complaints = [
  { id: 1, title: 'Road damage near sector 5', status: 'Pending' },
  { id: 2, title: 'Street lights not working', status: 'In Progress' },
];

app.get('/complaints', (req, res) => {
  res.json(complaints);
});

app.post('/complaints', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const newComplaint = {
    id: complaints.length + 1,
    title,
    status: 'Pending',
  };
  complaints.push(newComplaint);
  res.json(newComplaint);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

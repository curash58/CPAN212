import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the lab!');
});

// name
router.get('/name', (req, res) => {
  res.send('Arsen Valeev');
});

// greeting
router.get('/greeting', (req, res) => {
  res.send('Arsen, Student Number: 01649413');
});

// add
router.get('/add/:x/:y', (req, res) => {
  const num1 = parseFloat(req.params.x);
  const num2 = parseFloat(req.params.y);
  res.send(`Result: ${num1 + num2}`);
});

// calculate
router.get('/calculate/:x/:y/:operation', (req, res) => {
  const num1 = parseFloat(req.params.x);
  const num2 = parseFloat(req.params.y);
  const operation = req.params.operation;

  let result = 0;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'You are not allowed to devide by zero';
      break;
    case '**':
      result = num1 ** num2;
      break;
    default:
      return res.send('Invalid Operation.');
  }

  res.send(`Result: ${result}`);
});

export default router;
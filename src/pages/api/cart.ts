import type { NextApiRequest, NextApiResponse } from 'next';

let cart: any[] = []; // Temporary in-memory cart data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      // Add item to cart
      const item = req.body;
      cart.push(item);
      res.status(200).json(item);
      break;
    case 'DELETE':
      // Remove item from cart
      const { item_id } = req.query;
      cart = cart.filter(item => item.item_id !== Number(item_id));
      res.status(200).json({ message: 'Item removed' });
      break;
    case 'PATCH':
      // Update item in cart
      const { id } = req.query;
      const { amount } = req.body;
      cart = cart.map(item =>
        item.id === Number(id)
          ? { ...item, amount }
          : item
      );
      res.status(200).json({ message: 'Item updated' });
      break;
    default:
      res.setHeader('Allow', ['POST', 'DELETE', 'PATCH']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
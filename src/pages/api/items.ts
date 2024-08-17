

import type { NextApiRequest, NextApiResponse } from 'next';

const items = [
  {
    id: 1,
    title: 'SG Phoenix Xtreme Cricket Bat',
    price: 5600,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8XPWJ9sSFo6e1qhzyBW8IRWF-La3aahOzYD9BINouX_t197byWRjBy5u7jrxoQlR7m7PcpUY7wCXJvFUpXvZkiJeKNW0YdhemIo_vx1ct0mRrtJF9OvIt&usqp=CAE'
  },
  {
    id: 2,
    title: 'New Balance English Willow',
    price: 4600,
    img: 'https://m.media-amazon.com/images/I/31V3BUU4uSL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 3,
    title: 'SS Kw0200 Kashmir Willow',
    price: 8000,
    img: 'https://m.media-amazon.com/images/I/71DFREX3jWL._SX569_.jpg'
  },
  {
    id: 4,
    title: 'AK GM Diamond Kashmir Willow',
    price: 11000,
    img: 'https://m.media-amazon.com/images/I/31T0q6tZFOL.jpg'
  },
  {
    id: 5,
    title: 'SG Scorer Kashmir Willow',
    price: 5500,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8XPWJ9sSFo6e1qhzyBW8IRWF-La3aahOzYD9BINouX_t197byWRjBy5u7jrxoQlR7m7PcpUY7wCXJvFUpXvZkiJeKNW0YdhemIo_vx1ct0mRrtJF9OvIt&usqp=CAE'
  },
  {
    id: 6,
    title: 'Grey Nicholls English Willow',
    price: 8500,
    img: 'https://m.media-amazon.com/images/I/41uuNoHwoWL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 7,
    title: 'Kookaburra Cricket Bat',
    price: 10500,
    img: 'https://m.media-amazon.com/images/I/31iMSNDHjZL._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 8,
    title: 'DSC English Willow',
    price: 12000,
    img: 'https://m.media-amazon.com/images/I/414dWw05D9L._SX300_SY300_QL70_FMwebp_.jpg'
  },
  {
    id: 9,
    title: 'CEAT Rohit Sharma Edition',
    price: 8000,
    img: 'https://m.media-amazon.com/images/I/41Z9QaAVyaL._SX569_.jpg'
  },
  {
    id: 10,
    title: 'MRF Virat Kohli Edition',
    price: 8600,
    img: 'https://m.media-amazon.com/images/I/61BwtMAKHCL._SX569_.jpg'
  },
  {
    id: 11,
    title: 'Prokick Stellar Kashmir Willow',
    price: 12000,
    img: 'https://m.media-amazon.com/images/I/61ga5yUGaCL._SX569_.jpg'
  },
  {
    id: 12,
    title: 'SS Super Power KW Bat Grade 5',
    price: 15600,
    img: 'https://m.media-amazon.com/images/I/71DFREX3jWL._SX569_.jpg'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(items);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import slugify from 'slugify';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/create-product', (req, res) => {
  const { title, price, description, imageUrl } = req.body;
  const slug = slugify(title, { lower: true });

  const contentDir = path.join(process.cwd(), 'products');
  try {
    if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

    const filename = title.toLowerCase().replace(/\s+/g, '-') + '.mdx';
    const filePath = path.join(contentDir, filename);

    const fileContent = 
`---
title: "${title}"
price: ${price}
image: "${imageUrl}"
date: "${new Date().toISOString()}"
slug: "${slug}"
description: ${description}
---   
`;

    fs.writeFileSync(filePath, fileContent);
    res.json({ success: true, message: 'Produto criado com sucesso!' });
  } catch (error) {
    console.log(error);
  }
  
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));

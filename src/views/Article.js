import React from 'react';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '1 day',
  },
  {
    title: 'Live React',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '3 days',
  },
  {
    title: 'You do not know JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    articleUrl: 'https://youtube.com',
    created: '5 days',
  },
];

const Article = () => (
  <CardSection type="article">
    {articles.map((item) => (
      <Card
        type="article"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </CardSection>
);
export default Article;

import React from 'react';
import CardSection from 'templates/CardSection';
import Card from 'components/molecules/Card/Card';
import { articles } from './articlesData';

const Articles = () => (
  <CardSection type="article">
    {articles.map(({ articleUrl, content, created, id, title }) => (
      <Card
        id={id}
        type="article"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </CardSection>
);
export default Articles;

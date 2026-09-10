/* eslint-disable @typescript-eslint/no-explicit-any */
import NewsArticle from './NewsArticle';
import styles from './NewsList.module.css';

import { getNews } from '@/lib/cms';

export default async function NewsList() {
  const newsList = getNews();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {newsList.map((news: any, index: number) => (
          <NewsArticle
            key={news.id || index}
            indexNumber={news.indexNumber}
            title={news.title}
            subtitle={news.subtitle}
            paragraphs={news.paragraphs}
            imageSrc={news.imageSrc}
            personName={news.personName}
            personRole={news.personRole}
          />
        ))}
      </div>
    </section>
  );
}

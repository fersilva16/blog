import type { CollectionEntry } from 'astro:content';
import { config } from '../../config';
import { DateTime } from 'luxon';

export const post = (props: CollectionEntry<'blog'>) => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        padding: '6% 8%',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '12px', margin: 0, fontWeight: 300 }}>
            {config.SITE_URL}
          </p>
          <p style={{ fontSize: '72px', fontWeight: 700, margin: 0 }}>
            {props.data.title}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <p>
            {DateTime.fromJSDate(props.data.pubDate).toFormat('yyyy-MM-dd')}
          </p>
        </div>
      </div>
    </div>
  );
};

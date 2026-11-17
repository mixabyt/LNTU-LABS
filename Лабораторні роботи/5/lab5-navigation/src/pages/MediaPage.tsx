import { useState } from 'react';
import campusUrl from '../assets/campus.jpg';
import ExtraImage from '../components/ExtraImage';

const EXTERNAL_IMAGE = 'https://picsum.photos/id/1048/800/450';
const VIDEO_ID = 'Tn6-PIqc4UM';

export default function MediaPage() {
  const [externalFailed, setExternalFailed] = useState(false);

  return (
    <section>
      <h1>Зображення і відео</h1>

      {/* 1. Локальне зображення зі статичним імпортом */}
      <figure>
        <img src={campusUrl} alt="Ілюстрація навчального корпусу" />
        <figcaption>Локальний файл із src/assets (статичний імпорт).</figcaption>
      </figure>

      {/* 2. Зображення із зовнішнього джерела */}
      <figure>
        {externalFailed ? (
          <p role="alert">
            Зовнішнє зображення недоступне. <a href={EXTERNAL_IMAGE}>Відкрити джерело</a>
          </p>
        ) : (
          <img
            src={EXTERNAL_IMAGE}
            alt="Фотографія міського пейзажу"
            onError={() => setExternalFailed(true)}
          />
        )}
        <figcaption>
          Джерело: <a href="https://picsum.photos/">Lorem Picsum</a> (фото з Unsplash, вільна ліцензія).
        </figcaption>
      </figure>

      {/* 3. Зображення з динамічним імпортом після натискання */}
      <ExtraImage />

      {/* 4. Вбудоване відео */}
      <h2>Відео</h2>
      <iframe
        className="video-frame"
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
        title="React in 100 Seconds"
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
      <p>
        <a
          href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Відкрити відео на YouTube
        </a>{' '}
        (джерело: канал Fireship).
      </p>
    </section>
  );
}

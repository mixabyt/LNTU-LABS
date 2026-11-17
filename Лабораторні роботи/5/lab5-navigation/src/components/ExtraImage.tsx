import { useState } from 'react';

export default function ExtraImage() {
  const [url, setUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLoad() {
    setIsLoading(true);
    setError('');
    try {
      // Динамічний імпорт виконується лише після натискання кнопки
      const imageModule = await import('../assets/detail.jpg');
      setUrl(imageModule.default);
    } catch {
      setError('Не вдалося отримати ресурс. Спробуйте ще раз.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <h2>Додаткове зображення</h2>
      <button
        type="button"
        onClick={handleLoad}
        disabled={isLoading || url !== null}
      >
        {isLoading ? 'Завантаження…' : 'Показати зображення'}
      </button>
      {error && <p role="alert">{error}</p>}
      {url !== null && (
        <img
          src={url}
          alt="Двері аудиторії 204 навчального корпусу"
          onError={() => {
            setUrl(null);
            setError('Файл отримано, але зображення не відобразилося.');
          }}
        />
      )}
    </section>
  );
}

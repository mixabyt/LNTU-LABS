import Heading from './components/Heading';
import Subject from './components/Subject';

export default function App() {
  return (
    <main className="page">
      <Heading
        firstName="Максим"
        lastName="Кухарчук"
        group="ІПЗ-43"
      />
      <section aria-labelledby="subjects-title">
        <h2 id="subjects-title">Мої дисципліни</h2>
        <div className="subjects">
          <Subject
            subjectName="Кросплатформна розробка на React Native"
            description="Компоненти, стан, навігація та робота з даними в мобільних застосунках."
            credits={5}
            semester={7}
            teacher="Кафедра програмної інженерії"
          />
          <Subject
            subjectName="Розробка мобільних застосунків на Flutter"
            description="Віджети, керування станом і робота з мережею у Flutter."
            credits={5}
            semester={7}
            teacher="Кафедра програмної інженерії"
          />
          <Subject
            subjectName="Серверна розробка на Go"
            description="HTTP-сервери, робота з базами даних і конкурентність у Go."
            credits={4}
            semester={7}
          />
          <Subject
            subjectName="Проєктування баз даних"
            description="Моделювання даних, нормалізація та SQL-запити."
            credits={4}
            semester={7}
          />
        </div>
      </section>
    </main>
  );
}

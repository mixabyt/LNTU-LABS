type SubjectProps = {
  subjectName: string;
  description: string;
  credits: number;
  semester: number;
  teacher?: string;
};

export default function Subject({
  subjectName,
  description,
  credits,
  semester,
  teacher,
}: SubjectProps) {
  return (
    <article className="subject">
      <h3>{subjectName}</h3>
      <p>{description}</p>
      <p>Кредити ЄКТС: {credits}</p>
      <p>Семестр: {semester}</p>
      <p>Викладач: {teacher ?? 'Уточнюється'}</p>
    </article>
  );
}

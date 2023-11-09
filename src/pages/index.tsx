export default function Home() {
  const sections = ['Applied', 'Interviewing', 'Offers', 'Rejected']

  return (
    <main>
      <h1 className="flex justify-center p-4 outline-1 outline-dashed text-3xl">
        Scheduler
      </h1>
      {sections.map((title) => (
        <h2
          key={title}
          className="flex outline-1 outline-dashed outline-red-300"
        >
          {title}
        </h2>
      ))}
    </main>
  )
}

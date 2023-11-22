import { AR_One_Sans } from 'next/font/google'
import SectionHeader from '../components/sectionHeader'

const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  variable: '--font-ar-one-sans'
})

export default function Home() {
  const sections = ['Applied', 'Interviewing', 'Offers', 'Rejected']

  return (
    <main>
      <h1
        className={`${arOneSans.variable} flex justify-center p-4 outline-1 outline-dashed text-3xl`}
      >
        Scheduler
      </h1>
      {sections.map((title) => (
        <SectionHeader
          key={title}
          className="flex outline-1 outline-dashed outline-red-300"
          title={title}
        >
          {title}
        </SectionHeader>
      ))}
    </main>
  )
}

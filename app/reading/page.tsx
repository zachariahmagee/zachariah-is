import Image from 'next/image'


export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Currently Reading</h1>
      <Book
        title="Words of Radiance"
        series="The Stormlight Archive"
        author="Brandon Sanderson"
        img="/books/wordsofradiance.jpg"
        link="https://www.goodreads.com/book/show/17332218-words-of-radiance"
      />

      <h1 className="font-semibold text-2xl mt-8 mb-8 tracking-tighter">Book Recommendations</h1>

      <Book
        title="Red Rising"
        series="Red Rising Saga"
        author="Pierce Brown"
        img="/books/redrising.jpg"
        link="https://www.goodreads.com/book/show/15839976-red-rising"
      />

      <p></p>
    </section>
  )
}

interface BookProps {
  title: string;
  series?: string;
  author: string;
  description?: string;
  img?: string;
  link?: string;
}

function Book({ title, author, description, img, link }: BookProps) {

  return (
    <div className="flex border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      {img && (
        <div className="w-36 h-auto mr-4">
          <Image
            src={img}
            alt={`${title} cover`}
            width={150}
            height={220}
            className="rounded-md object-cover"
          />
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <h3 className="text-md text-gray-600 mt-1">by {author}</h3>
          {description && <p className="text-gray-700 mt-3">{description}</p>}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-600 hover:underline font-medium"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  )
}

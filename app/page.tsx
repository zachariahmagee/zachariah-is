import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, my name is Zach
      </h1>
      <p className="mb-4">
        {`or Zachariah, a software developer, new dad, and generally curious guy. 
          This is my website where I share my thoughts, document my process, and showcase projects.
        `}
      </p>
      <p>
        {/* add something about my particular interests and/or technologies i use*/}
      </p>
      <p>
        Whether you're a fellow developer or a potential collaborator,
        I hope you'll find something valuable here. Feel free to check out my {' '}
        <Link href='/portfolio' className="text-grey-500 underline hover:text-blue-700">projects</Link>
        {' '} or dive into the {' '}
        <Link href='/blog' className="text-grey-500 underline hover:text-blue-700">latest posts</Link>.
        If you're interested in working together, don't hesitate to {' '}
        <Link href='/contact' className="text-grey-500 underline hover:text-blue-700">contact me</Link>.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <Image src='/bellingham_sketch.jpeg' width={600} height={300} alt='Sketch of the Bellingham, Washington Public Transportation Bus Station' />
    </section>
  )
}

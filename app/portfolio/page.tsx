import Link from "next/link"
import Image from "next/image"

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <p>Welcome to my projects showcase! Here, you'll find a collection of my work spanning software development, data visualization, and other creative solutions. Each project reflects my passion for innovation, problem solving, and continous learning.</p>
      <h2 className="font-semibold text-2xl mt-8 mb-8 tracking-tighter">
        <Link href="/portfolio/cereal-plotter">Serial Plotter</Link>
      </h2>
      <Image src="/cereal/scrolling.png" width={900} height={300} alt="Serial plotting application with two scrolling waves" />
      <p>
        The Serial Plotter is a multi-platform desktop application designed for visualizing data over serial connections.
        It supports a variety of plot types, including Cartesian, Polar, and Scatter, along with multiple plotting modes and display effects.
        Users have fine-grained control over every aspect of the plot— from axis ranges and labeling to colors and more.
        Configuration is flexible, with options to adjust settings through the user interface or via serial commands.
      </p>
      <br />
      <p>
        Additional features include the ability to capture screenshots, record screen sessions, and save incoming data to CSV files.
        The app also supports live markers for peak finding and in-depth data analysis.
        <Link href="/portfolio/cereal-plotter" className="text-grey-500 underline hover:text-blue-700">Find out more.</Link>
      </p>
      <br></br>
      <p>This section is under development!</p>
    </section>
  )
}  

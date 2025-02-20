import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Serial Plotter
      </h1>
      <p>Below is a selection of screenshots highlighting many of the application’s features.</p>

      <p>This first example shows multiple stacked plots with the properties panel on the left, where users can modify and configure every aspect of each plot.</p>

      <Image src='/cereal/multiple-properties.png' width={400} height={300} alt='Multiple stacked plots with properties panel' />
      <br />
      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">Live Markers</h2>
      <p>
        This example demonstrates the use of peak finding and spanning markers. The threshold for peak detection can be adjusted directly on the plot.
      </p>
      <div className='flex flex-row'>
        <Image src='/cereal/markers.png' width={300} height={200} alt='Peak finding markers on a plot' />
        <Image src='/cereal/spanning-markers.png' width={300} height={200} alt='Spanning markers on a plot' />
      </div>
      <br />
      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">Display Modes</h2>
      <p>
        Display modes provide alternative ways to visualize data. <strong>Spectrogram</strong> maps amplitude to color, with each frame displayed as a row of colors. Users can adjust the color range by clicking and dragging the min/max values on the left-hand side of the plot. <strong>Persistence</strong> mode shows complete frames of data fading over time, allowing for dynamic visualization.
      </p>
      <div className="flex flex-row">
        <Image src='/cereal/spectrogram.png' width={300} height={200} alt='Spectrogram display mode' />
        <Image src='/cereal/persistence.png' width={300} height={200} alt='Persistence display mode' />
      </div>
      <br />
      <h2 className="mb-4 text-2xl font-semibold tracking-tighter">Plot Types</h2>
      <p>
        The application supports three plot types: <strong>Cartesian</strong>, <strong>Polar</strong>, and <strong>Scatter</strong>.
        <ul>
          <li><strong>Cartesian:</strong> Plots a single user-defined vertical value with an auto-incrementing horizontal value.</li>
          <li><strong>Polar:</strong> Plots either both user-defined rho (radial) and theta (angular) values, or a single user-defined rho value with an auto-incrementing theta value.</li>
          <li><strong>Scatter:</strong> Plots user-defined horizontal and vertical values on a Cartesian grid.</li>
        </ul>
      </p>
      <div className='flex flex-row'>
        <Image src='/cereal/scatter.png' width={300} height={200} alt='Scatter plot example' />
        <Image src='/cereal/polar.png' width={300} height={200} alt='Polar plot example' />
      </div>
      <Image src='/cereal/scrolling.png' width={600} height={300} alt='Two sine waves scrolling within the serial plotting application' />
    </section>
  )
}


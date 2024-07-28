/* eslint-disable react/no-unescaped-entities */
"use client"; // This directive must be at the top of the file

import Paragraph from '@/components/paragrap';
import Navbar from '../components/Navbar';
import Header from '@/components/Header';
import List from '@/components/List';
import SectionTitle from '@/components/sectiontitle';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>BUILDING TOGETHER</h1>
      </header>
     
      <main className="main-content">
      <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='bg-yellow-100 rounded-2xl p-4'>
            <SectionTitle title="Introduction" />
            <Paragraph>
              It is time to construct an alternative approach to solving the housing crisis.
            </Paragraph>
          </div>

          <div>
            <SectionTitle title="Current Challenges" />
            <Paragraph>
              The State continues to face a serious challenge in order to achieve its target of delivering 10,000 social homes in addition to a significant number of affordable homes each year. However, a fast and effective solution exists in an alternative home-building approach.
            </Paragraph>
          </div>

          <div>
            <SectionTitle title="Proposed Solution" />
            <Paragraph>
              An alternative model that embraces innovative and modern methods of construction whereby the majority of building takes place off-site in a factory setting would lead to significantly more social and affordable homes being built both faster, and more cost effectively.
            </Paragraph>
          </div>

          <div>
            <SectionTitle title="Benefits of Off-Site Construction" />
            <Paragraph>
              Recent studies have shown that the adoption of modern construction methods can lead to homes being built up to 60% faster and reduce the need for on-site labour by more than 70%, resulting in more effective delivery outcomes.
            </Paragraph>
            <List items={[
              "Faster construction times",
              "Reduced on-site labour",
              "Higher quality homes",
              "Cost efficiency",
              "Improved carbon footprint",
            ]} />
          </div>

          <div>
            <SectionTitle title="Implementation Strategy" />
            <Paragraph>
              Coupling the savings in the hard costs of building with improvements in the soft and indirect costs such as taxes and levies, in addition to streamlining the public bidding process as well as harmonising designs and standards, would lead to the delivery of social and affordable, high-quality, energy efficient, three-bed homes for less than €250,000 each.
            </Paragraph>
          </div>

          <div>
            <SectionTitle title="Conclusion" />
            <Paragraph>
              With the ingredients for an alternative, builder-led solution to the housing crisis at the government's disposal, now is the time to move beyond the current debate and commence a large-scale public-sector house building programme which leverages off-site construction techniques.
            </Paragraph>
          </div>
        </div>
      </main>
    </div>
        {/* Add more content as needed */}
      </main>
      <style jsx>{`
        .header {
          background-image: url('/mainlineimage.jpg'); // Add your image path here
          background-size: cover;
          background-position: center;
          height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 3rem;
          font-weight: bold;
        }
        .main-content {
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}

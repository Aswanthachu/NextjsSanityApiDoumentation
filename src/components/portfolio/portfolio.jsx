import { client } from "@/utils/configSanity";

import {PortableText} from '@portabletext/react'

async function getData() {
  const query = `*[_type == 'pet']`;
  const data = await client.fetch(query);
  return data;
}

const Portfolio = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Portfolio</h1>
      {data.map((doc,index)=>(
        <div key={index}>
          <p className="text-3xl">{doc.name}</p>
          <PortableText value={doc?.description}/>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

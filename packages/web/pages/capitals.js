import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            name capital emoji
          }
        }
      `,
    });

    return {
      props: {
        countries: data.countries,
      },
   };
}

export default function Capitals({countries}) {
    return (
        <>
        <h1>Capitals</h1>
        <div>
          <ul>
            {countries.map((country, index) => (
              <li key={index} id={index}>{country.emoji} {country.name} 👉 {country.capital}</li>
            ))}
          </ul>
          </div>
        </>
      );
}

export interface GameListItem {
  
  name: string;
  description: string;
  categories : string[],
  heroImage: {
      url: string;
      title: string;
  };
}

export interface AssetListItem {
  
  name: string;
  description: string;
  categories : string[],
  heroImage: {
      url: string;
      title: string;
  };
}




const gqlAllGamesQuery = `
query gamesList {
  gameCollection {
    items {
      
      name
      categories
      description
      heroImage {
        url
        title
      }
    }
  }
}
`;


const accessToken = "qkASI9drx016V-uee-Bb8FNA-buT5yQ69wIxL2gMzEc"
const spaceId = "70u7je8xer59"


const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`;

const getAllGames = async (): Promise<GameListItem[]> => {
try {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query: gqlAllGamesQuery }),
  });

  // Log the complete response from the Contentful API
  console.log("Response from Contentful API:", response);
  const responseBody = await response.json();
  console.log("Response Body from Contentful API:", responseBody);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const body = responseBody.data;

  if (!body?.gameCollection?.items) {
    throw new Error("No items found in the response");
  }

  const games: GameListItem[] = body.gameCollection.items.map((item: any) => ({
   
    name: item.name,
    description: item.description,
    categories: item.categories,
    heroImage: 
    {
      url: item.heroImage.url,
      title: item.heroImage.title,
    },
  }));
  

  console.log("Games fetched:", games);
  return games;
} catch (error) {
  console.error("Error fetching games:", error);
  return [];
}
};

const contentfulService = {
getAllGames,
};

export default contentfulService;

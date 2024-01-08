
export interface GameListItem {
  
    name: string;
    description: string;
    categories : string[],
    heroImage: {
        url: string;
        title: string;
    };
  }
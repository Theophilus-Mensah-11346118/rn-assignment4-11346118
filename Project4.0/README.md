# rn-assignment4-11346118
Components

- CardComponent.tsx:
    - Usage: Used to display a single card with image, title, subtitle, price, and location.
    - Props:
        - image: string (required)
        - title: string (required)
        - subtitle: string (required)
        - price: string (required)
        - location: string (required)
    - Example:

tsx
import React from 'react';
import CardComponent from './CardComponent';

const App = () => {
  return (
    <CardComponent
      image="image_url"
      title="Card Title"
      subtitle="Card Subtitle"
      price="Card Price"
      location="Card Location"
    />
  );
};

- ListComponent.tsx:
    - Usage: Used to display a list of items with title.
    - Props:
        - title: string (required)
    - Example:

tsx
import React from 'react';
import ListComponent from './ListComponent';

const App = () => {
  return <ListComponent title="List Item Title" />;
};

- HomePage.tsx:
    - Usage: Used to display the home page with header, search bar, featured jobs, and popular jobs.
    - Props: None
    - Example:

tsx
import React from 'react';
import HomePage from './HomePage';

const App = () => {
  return <HomePage />;
};

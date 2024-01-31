# Project Title - Movie Explorer

This project is a responsive web application built with React and TypeScript. It's designed to adapt its layout to both desktop and mobile viewports, ensuring a seamless user experience across all devices. The mobile design is enriched and optimized to provide an app-like experience, enhancing usability and interaction on smaller screens. This adaptability makes the application accessible and user-friendly, regardless of the device used to access it.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strict syntactical superset of JavaScript, adding optional static typing.

## Folder Structure

The project follows a specific folder structure to make the codebase easier to navigate and maintain. Each feature of the application has its own directory, which contains all the related components and hooks functions. This modular structure promotes separation of concerns and makes it easier to find and update specific parts of the codebase, providing a better understanding of the functionality of each part of the application.

## Project Structure

This project is designed with a user-friendly interface and consists of several key components:

### Home Page

The home page serves as the entry point to the application. It's designed with user-friendliness in mind and includes several key components:

- **Header**: The header is prominently placed at the top of the home page. It includes the title of the application.

- **User Navigation Menu**: The navigation menu provides links to different sections of the application. This could include links to favourite movies and Home page of the app. The navigation menu ensures that users can easily move around the application without getting lost.

- **Search Bar**: The search bar is a powerful tool that enhances the user experience by allowing for the easy discovery of movies. When a user enters a movie title into the search bar, the application fetches data from a third-party API and returns a list of matching results. This feature allows users to find specific movies without having to manually browse through the entire movie catalog.

### Movie Details Page

The Movie Details page is a key component of the application that provides an in-depth view of a specific movie. This page is accessed when a user clicks on a movie poster from the search results on the Home Page, and they are seamlessly redirected to the detailed view of that movie. Here's what this page entails:

- **Poster**: The movie's poster, which was initially clicked on the Home Page, continues to play a significant role here by providing a recognizable visual cue for the user.

- **Movie Information**: The page displays a plethora of movie-specific information such as the release date, original language, duration, and the list of actors. This detailed information provides the user with a comprehensive understanding of the movie, helping them to make an informed decision about whether to watch it or not.

- **Navigation**: The transition from the search results on the Home Page to the Movie Details page is smooth, keeping the user within the application's environment and maintaining a consistent user experience.

This detailed view, powered by data fetched from a third-party API, enhances the application's functionality by providing users with a wealth of information at their fingertips.

### Favourites Page

The Favourites Page is a dedicated space within the application where users can view their personally curated list of favourite movies. This feature allows users to easily access and manage movies they have marked as favourites. Here's what this page offers:

- **Favourite Movies List**: This is a dynamic list that displays all the movies a user has marked as favourites. Each entry in the list includes the movie title and poster, and clicking on an entry will take the user to the detailed view of that movie.

- **Add/Remove Favourites**: The ability to add or remove favourite movies is integrated into the search results on the Home Page. When browsing the search results, users can easily mark a movie as a favourite, which will then appear on their Favourites Page. Similarly, users can remove a movie from their favourites list, and it will be immediately removed from the Favourites Page.

- **Easy Access**: The Favourites Page is readily accessible from the User Navigation Menu, allowing users to quickly view their favourite movies at any time.

The Favourites Page provides a personalized user experience, enabling users to keep track of the movies they love most and access them at their convenience.

## Key Features

- **Styled Components**: This project uses Styled Components, which is a library that utilizes tagged template literals to style components.

- **Fetch API**: This project uses the Fetch API for all REST API calls. The Fetch API provides a powerful and flexible method of fetching resources from servers. It's built into modern browsers, eliminating the need for additional dependencies to make HTTP requests.

- **Reusable Components, Hooks, Types, Utils**: The project follows best practices for code reusability. Commonly used elements are abstracted into reusable components, reducing code duplication. Custom hooks are used to handle logic that can be shared across multiple components. TypeScript types and interfaces are defined once and used wherever needed, ensuring consistency across the codebase.Utility functions are used to handle common tasks that are used in multiple places in the application. These functions are abstracted into a 'utils' file or directory, making them easy to test, reuse, and manage. This approach helps to keep the code DRY (Don't Repeat Yourself), making it more readable and maintainable.

**PWA (Progressive Web App)**: Although fundamentally a web application, this project leverages Progressive Web App (PWA) technology to deliver an enhanced user experience. The PWA implementation allows users to add the application to their home screen for quick and easy access, similar to a native app. The application also uses service workers to cache important files and assets, enabling faster load times and offline capabilities. Despite being a web application, the PWA design ensures a smooth, app-like user experience, with fast page loads, seamless navigation, and responsive layout that adapts to any screen size. This implementation significantly improves the application's performance, reliability, and overall user experience.

**Image Handling**: The application implements efficient image handling to ensure a seamless user experience. When an image is being loaded, it is displayed as soon as it's successfully fetched. However, network issues or errors can sometimes prevent an image from loading correctly. To handle such scenarios, the application uses a fallback image. If there's an error in loading the actual image, the fallback image is displayed instead. This ensures that users always have visual feedback and are never left with blank spaces where images should be. This approach enhances the robustness of the application and contributes to a more consistent user experience.

**Configurable Interface Texts**: To improve maintainability and flexibility, we have introduced a configuration file to manage all the interface texts within our application. This configuration file contains all the labels, button texts, error messages, tooltips, and other interface texts used within the application.This approach simplifies the process of updating interface texts and ensures consistency throughout the application. Even though our application is currently designed for a single language, having a centralized configuration file allows us to quickly make changes in one place without needing to sift through the entire codebase. This results in a more manageable and efficient development process.

## State Management

- **Context API**: This project uses React's Context API for state management. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for sharing global data that many components need to access, such as user authentication information or theme settings. In this project, the Context API is used to share data between components, showcasing the ability to handle state in a more complex React application.

- **Redux Toolkit**: The application utilizes Redux Toolkit to efficiently manage the state of the movie data. Redux Toolkit simplifies the Redux setup and makes it easier to handle complex state changes. In this application, it is used for fetching movies, retrieving movie details, and managing the overall state of these data points. With Redux Toolkit, the state of the application is predictable and easier to debug, resulting in a more reliable application. It also optimizes performance by minimizing unnecessary re-renders, providing a smoother user experience.

## Error Handling

- **Error Boundary**: This project uses Error Boundaries provided by React for better error handling. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

- **Error Handler**: An error handler function is incorporated into the application to manage and log errors. When an error occurs, the error handler function captures it and logs it to the console. This allows developers to quickly identify and address issues as they arise. By centralizing error handling, the application becomes more robust and easier to debug, improving overall code quality and reliability.

## Performance Optimization

- **React.lazy**: This project uses `React.lazy` for code splitting by route. `React.lazy` function lets you render a dynamic import as a regular component. It helps to load components lazily as they are rendered, which can significantly improve performance in larger apps.

- **Loading Component**: A loading spinner is displayed while components are being lazily loaded. This provides a better user experience by giving visual feedback during potentially long loading times.

- **Debounce Search**: For performance optimization, our application incorporates the debounce technique in the search functionality. This means that the application will wait until a certain amount of time has passed without the user typing anything in the search bar before sending the search request. This reduces the number of requests sent to the server, thus improving the application's performance and providing a smoother user experience.

## Testing

The application has been thoroughly tested using Jest and React Testing Library to ensure the reliability and stability of its features. Unit tests have been written for major functionalities such as fetching movies from the third-party API, managing state with Redux Toolkit, handling images, and user interactions like adding and removing movies from favourites.

## Newly Added Features

**Infinite Scrolling**: Our application now features infinite scrolling. This allows users to scroll through a vast amount of content without any performance degradation. As users scroll down, more content is loaded automatically, providing a seamless user experience.

**Scroll To Top**: We have added a scroll-to-top button for quick navigation. With a single click, users can scroll back to the top of the page. This feature is especially useful for long pages.

**Toast Notification**: Our application uses toast notifications to provide immediate feedback to the user. For instance, when a movie is added to or removed from the favourites, a toast notification pops up to confirm the action. This feature enhances the user experience by providing clear and immediate feedback.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the command `git clone https://github.com/BharathiMathi/movie-app.git`.

2. **Navigate to the Project Directory**: Use the command `cd movie-app` to navigate into the project directory in the terminal.

3. **Install Dependencies**: Run the command `npm install` to install all the necessary project dependencies.

4. **Start the Development Server**: Run the command `npm start` to start the development server. The application should now be running on `http://localhost:3000` (or the port specified in your environment).

5. **Run Test Cases**: To run the test cases, use the command `npm test`. This will initiate the test runner and run all the test cases for the application.

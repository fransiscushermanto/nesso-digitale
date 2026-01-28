# Nesso Digitale

This is a submission for the project.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd nesso-digitale
    ```
2.  **Install dependencies:**
    ```bash
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Technical Decisions & Trade-offs

This section outlines the key technical decisions and trade-offs made during the development of this project.

### Design Principle: Separation of Concerns (SoC)

- **Decision:** I use SoC to make the project maintainable and scalable. With this pattern, we have all layer separate by it's own usecase.
- **Trade-offs:** The files and folders can be bloated when the project grows.

### Styling: Panda CSS

- **Decision:** I used Panda CSS for styling, which allows for type-safe and maintainable CSS-in-JS. It integrates seamlessly with Next.js and provides a great developer experience.
- **Trade-offs:** Panda CSS is a relatively new library, so the community and resources are not as extensive as more established styling solutions like Tailwind CSS or Emotion.

### Assumptions

Most of the design value, I use `clamp` to handle the responsiveness. I calculate the value by using the `max` and `min` value and also `max` and `min` screen size.

By using `clamp`, we don't need to rely on `breakpoints` because it hurt so much when we need to specify every breakpoints to adjust something like `font-size`. Using `clamp` also benefits us by having a proportional size of `font-size` and other sizes base on the design given. Let's say we design in 1440px screen with the title size is 32px, we will get the proportion size of 32px in screen below 1440px.

- **Header**

  - I simplify the logo by only using the icon and remove the text `Nesso Digitale` to spare the space
  - I put a background behind the nav to make a constrast between page content and header when the page is scrolled down
  - I hide the contact button and the menu in the center when screen size below `1024px`. I assume it's tablet below that and It will have the same design with mobile.
  - In mobile screen, I show the hamburger button as menu toggler and it will open the menu drawer that contain the menu and contact button
    <br>

- **Sections**
  Each section is wrapped using `SectionContainer` that already has the default styling and also need to be passed the name
  <br>

  Most of the sections that has title and description aligned horizontally will be arranged vertically on mobile screen
  <br>

  I named each section as below:

  - **Introduction**
  - **AboutUs**
    - On mobile screen, I make the orientation vertical
  - **Services**
    - I make the card horizontally scrollable
  - **Portfolio**
    - On mobile screen, I make the slider orientation vetical and also make all the text align center
  - **Results**
    - On mobile screen, I keep all the position but make the orientation vertical
  - **Solutions**
    - On mobile screen, I make the cards scrollable horizontally
  - **Consult**

  All sections exclude the first section (Introducton) will be dynamically imported to enhance `TBT` (Total Blocking Time), `TTI` (Time to Interactive), and `LCP` (Largest Contentful Paint) score. This method will make the next compiler to separate each section to small chunk that result in smaller package size and all of them can be downloaded in paralel. By splitting code, the browser has less "work" to do in one go. Instead of one massive 500ms block of JavaScript execution, it might do five 50ms blocks. This keeps the page responsive to user clicks.
  <br>

- **Footer**
  - On mobile and tablet screen, I make the orientation become vertical so it has space for the text and menu.

---

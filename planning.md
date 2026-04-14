# Portfolio Purpose and Audience
The purpose of this portofolio is to share information about gaming GPUs generations. It should contain a breif history of the company, key points about the specific generation and specs of different GPU models from AMD, Nvidia, and Intel. It will also have a page with news.

The target audience are people all around the world that want to learn about GPUs generations. The design of the website is simple, easy to read with a few images and to navigate. 

# Site Structure
## Site Map
```
Website Structure:
├── index.html (Home page)
├── pageNvidia.html (Nvidia page)
├── pageAMD.html (AMD information page)
├── pageIntel.html (Intel information page)
└── news.html (News related to GPUs)
```

All pages share the same navigation structure and link to each other.

## Navigation Structure
The navigation will be located in the middle top of the page and contain 5 links: 

1. Home -> index.html
2. Nvidia -> nvidia.html 
3. AMD -> amd.html
4. Intel -> intel.html
5. News -> news.html

The link text inside the navigation will be highlited in bold to indicate users on what page they are.

The logo of the website, when clicked will link to home page.

I chose this navigation layout because it is widely used and easy to understand, users can easly find what they need. 

# Color Scheme
## Color scheme:
Primary colors: Dark Purple (#1F0037) - I like it

Secondary colors: 
- Dark Red (#6D1425)
- Dark Green (#0A4A33)
- Dark Blue (#003356)

Background color: Gradiend with the colors from above that fades to black. Each page has a different color

Text color: Very light purple (#d2c6db)

The dark red, green and blue are close to the colors that AMD, Nvidia and Intel use as their primary color. The main color dark purple, I chose it because it makes the text easier to read and gives a feeling appropriate for a information website.

## Typography
Logo: 'Atomic Age', serif
Text font: 'Inconsolata' serif

I'm using web fonts from google.

I chose the text font Inconsolata because it is easly readable by users and Atomic Age for logo because it looks very different from the text font

# Design Principles
## How I plan to apply the 4 design principles
- Contrast: Headings will be larger than text paragraphs. All cards on the page will have a backgrond shadow to make them stand out. Buttons will have a border to make them stand out 

- Repetition: Same navigation bar on every page. All cards on the page have a heading, paragraph, and a button. Color scheme consistent throughout the page.

- Alignment: All content will be center-aligned in a max-width container. Navigation items will be evenly spaced and right-aligned. The logo will be left-aligned.

- Proximity: All info cards will be grouped in a box. Contents of each box will have clear spacing between items.

# Page Layouts
## Wireframe sketches
### Desktop layout:
![img](./images/website-sketches/index-sketch.png)
![img](./images/website-sketches/main-layout-other-pages-sketch.png)
![img](./images/website-sketches/modal-design-sketch.png)
### Mobile layout:
![img](./images/website-sketches/mobile-index-sketch.png)
#### Mobile menu layout:
![img](./images/website-sketches/mobile-menu-sketch.png)

## Wireframe annotations
Header and navigation:
- Inside the header is the name of the website the navigation bar for the website and centered in the middle of the page

Main content area:
- The main content is orgonized in a box that has a max width and is centered in the middle of the website

Footer area:
- The footer contains the copyright notice with contact information.

Responsive considerations:
- Inside the header only the name of the website will appear and it will be alligned to the left and to the right a burger menu to display the navigation links which will be alligned vertically across the screen
- The main section will no longer be a box and the contents will stack verically
- Footer contents will stack vertically

# Technical Planning
## HTML Elements to use
- Table: Inside each info card to display the model of the GPU and release date
- Form: On every page at the bottom for users to submit feedback
- Article: Is the info card that contains different elemets: heading, paragraph, button, and link, found on Nvidia, AMD and Intel page.
- Semantic sections: Each page will have header (site logo + nav), main (content), sections (topic areas), articles (info cards), footer (copyright + form)
- Images: Inside of some articles(cards) found at the top below the heading
- Special characters: copyright symbol and times symbol (&times;) used for close button of each card

## CSS properties to be implemented:
I'll use Flexbox for:
- Navigation bar: Horizontal flex row on pc and column on mobile with space-between
- Each card : Vertical flex column with align items in the center and paragraph growing to push button to the bottom

I'll use Grid for:
- Cards layout: 3-column grid, becomes 2 columns on smaller screenns and 1 column on mobile
- Body layout: to separate the header, main and footer

Other CSS techniques:
- Responsive: Media queries at 850px for tablet, 450px for mobile
- Cards: border-radius, box-shadow for depth
- Hover effects: Cards change color, box-shadow for buttons

# Content Planning
- Text: Write about every GPU generation (AMD, Nvidia, Intel)
- Images: From the wikipedia page for each generation (free to use, no credit required but I will credit them)
- Data: GPU release dates and key improvements each generation

# Content Sources
- Text, images, data from Wikipedia

# Development Tools
Text editor: [Visual Studio Code](https://code.visualstudio.com/)

Browser for testing: Chrome, Edge, Firefox, Brave

Version control: Git + GitHub

Wireframing tool: [draw.io](https://draw.io/)

Color selection tool: [Coolors](https://coolors.co/)

I chose these tools because they are widely used.

# Evolution of HTML and CSS
When HTML (HyperText Markup Language) was first released in 1993, it only had support for displaying text and links. 
- In 1995, HTML 2 introduced support for images, forms and tables. 
- In Jan. 1997, HTML 3 introduced support for CSS 1 (Cascading Style Sheets) and JavaScript. 
- In Dec. 1997, HTML 4 incouraged the use of CSS and introduced new semantic elements
- In 2014, HTML 5 introduced support for audio, video, SVGs and responsive web design with media queries, etc.. This is the version that is still updated and used in 2025

Source: Wikipedia Contributors (2018). HTML. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/HTML.

CSS (Cascading Style Sheets) is used to style HTML. 
- In 1996, CSS 1 introduced support for font properties, color of elements, text attributes, alignment of elements, margins, borders and padding.
- In 1998, CSS 2 added new capabilities such as absolute, relative, and fixed positioning of elements
- Work on CSS 3 started around 1999 and is still evolving in 2025. CSS 3 was divided into serveral separate modules. Each module adding new capabilities such as Flexbox, CSS Grid, media queries, gradients, etc., or extending features from CSS 2 to preserve backward compatibility.

Source: Wikipedia Contributors (2020). CSS. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/CSS.
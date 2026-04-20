# [Project](https://crepsoog.github.io/web-authoring-project-Eduard-Duica)

## Project Overview
I built a website showcasing all GPU generations from AMD, Nvidia, and Intel. It includes five pages: a landing page, Nvidia page, AMD page, Intel page and News page. The site uses dark purple as the main color and dark red, green, and blue for the AMD, Nvidia, and Intel page insipired by the colors that these companies use as their primary colors. It is designed for people who want to learn about different GPU generations.

The landing page explains what a GPU is and has 3 buttons that link to other pages. Users can navigate all pages using the navigation located at the top right on the page. Each page has cards with buttons that when pressed open a box that has all the contents for the topic. Navigation is consistent across all pages for easy movement.

## Page Descriptions
### Home Page
The home page contains info about what a GPU is and what it does and it has 3 differently colored button that you can use to navigate to Nvidia, AMD and Intel page.

### Nvidia Page
The Nvidia page has a brief history about the company and on it you can find multiple cards that contain information about different GPUs. The latest GPU generation is the first card on the page and the oldest GPU generation is on the last card on the page

### AMD Page
The AMD page has a brief history about the company and on it you can find multiple cards that contain information about different GPUs. The latest GPU generation is the first card on the page and the oldest GPU generation is on the last card on the page

### Intel Page
The Intel page has a brief history about the company and on it you can find multiple cards that contain information about different GPUs. The latest GPU generation is the first card on the page and the oldest GPU generation is on the last card on the page

### News Page
The News page is about news related to AMD, Nvidia, and Intel and on it you can find multiple cards that contain information about latest articles. The latest one is the first card on the page.

## Technical Implementation

### Key HTML techniques used:
- Semantic structure: Every page uses header, nav, main, sections, footer for clear structure
- Tables: GPU models and release dates tables for generations that still get support 
- Forms: Contact form on every page with text inputs, email input, textarea, checkbox, and submit button
- Images: Alt text describes each photo for accessibility

Each page follows same structure: header with logo and nav bar, main content divided into semantic sections, footer with credits and contact. Code is indented consistently.

### CSS
- Global styles first (colors, fonts)
- Layout styles (container, flexbox for cards and nav)
- Component styles (buttons, cards)
- Page-specific styles
- Media queries for responsive design at end

### Key CSS techniques:
- Flexbox for navigation bar
- CSS Grid for AMD, Nvidia, and Intel page layout (3 columns on desktop, 2 on tablet, one on mobile)
- Hover effects on cards (shadow)
- Border-radius and box-shadow for cards
- Media queries at 850px and 450px for responsive design

### CSS Flexbox
- Navigation: flex container with space-between for even spacing
- Info cards: flex direction column
- Footer: flex row with space-between for left and right content

### CSS Grid
- AMD, Nvidia, and Intel page: Three-column grid with gap
- Body layout: to separate the header, main and footer

### Responsive Design
- Desktop (>850px): Navigation horizontal, info cards in 3 columns layout
- Tablet (850px-450px): Navigation wraped in a hamburger manu, info cards in 2 columns  
- Mobile (<450px): everything single column
- All text remains readable, tap targets are large enough for touch

## Design Choices
### Color scheme:
Primary colors: Dark Purple (#1F0037) - I like it

Secondary colors: 
- Dark Red (#6D1425)
- Dark Green (#0A4A33)
- Dark Blue (#003356)

Background color: Gradiend with the colors from above that fades to black. Each page has a different color

Text color: Very light purple (#d2c6db)

The dark red, green and blue are close to the colors that AMD, Nvidia and Intel use as their primary color. The main color dark purple, I chose it because it makes the text easier to read and gives a feeling appropriate for a information website.

### Typography
Logo: 'Atomic Age', serif
Text font: 'Inconsolata' serif

I'm using web fonts from google.

I chose the text font Inconsolata because it is easly readable by users and Atomic Age for logo because it looks very different from the text font

# Design Principles
## How I applied the 4 design principles
- Contrast: Headings are larger than text paragraphs. All cards on the page have a backgrond shadow to make them stand out. Buttons have a border to make them stand out 

- Repetition: Same navigation bar on every page. All cards on the page have a heading, paragraph, and a button. Color scheme consistent throughout the page.

- Alignment: All content is center-aligned in a max-width container. Navigation items are evenly spaced and right-aligned. The logo is left-aligned.

- Proximity: All info cards will be grouped in a box. Contents of each box will have clear spacing between items.

## Content

### Content Sources
- Only Wikipedia

### Credits

- Images:
    - A GB200 die with Blackwell processors - By 极客湾Geekerwan, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=149199498
    - Nvidia GeForce RTX 2080 (TU104 | Turing) (Package | Close-Up) - By Fritzchens Fritz - https://www.flickr.com/photos/130561288@N04/50867016268/, CC0, https://commons.wikimedia.org/w/index.php?curid=104363371
    - Die shot of the RX 5500 XT's RDNA GPU - By Fritzchens Fritz - https://www.flickr.com/photos/130561288@N04/49523073911/, CC0, https://commons.wikimedia.org/w/index.php?curid=95747565
    - An Intel Arc A770 16 GB, the highest-end desktop GPU from Intel's first generation Alchemist GPUs, with a Rubik's Cube for scale - By Telaneo - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=128182813
    - An Intel Arc Battlemage B580 Limited Edition graphics card with its box and inner box as background - By Jiahwang - Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=172341750


- Text/Information:
    - https://en.wikipedia.org/wiki/Nvidia
    - https://en.wikipedia.org/wiki/List_of_Nvidia_graphics_processing_units
    - https://en.wikipedia.org/wiki/AMD
    - https://en.wikipedia.org/wiki/List_of_AMD_graphics_processing_units
    - https://en.wikipedia.org/wiki/Intel_Arc

- Fonts:
    - https://fonts.google.com/specimen/Inconsolata
    - https://fonts.google.com/specimen/Atomic+Age

## Navigation

Type: Horizontal bar at the top of every page to the right. Hamburger menu on mobile.

Links: 
1. Home -> index.html
2. Nvidia -> nvidia.html 
3. AMD -> amd.html
4. Intel -> intel.html
5. News -> news.html

The link text inside the navigation will be highlited in bold to indicate users on what page they are.

The logo of the website, when clicked will link to home page.

I chose this navigation layout because it is widely used and easy to understand, users can easly find what they need. 



## Viewing the Site
### Repository Structure
```
web-authoring-project-Eduard-Duica/
├── images/
    ├── generations-images/
        ├── 500px-AI助手能帮我超频？COMPUTEX_NV展区体验_(极客湾Geekerwan)_07.png
        500px-AMD@7nm@RDNA_1th_gen@Navi14@Radeon_RX_5500_XT@215-0932396@_DSCx5_poly@macro.jpg
        500px-AMD@14nm@GCN_4th_gen@Polaris_11@Radeon_RX_460@1628_NAA2Y.1_215-0895088_DSCx4_polysilicon_layer@5x.jpg
        500px-Intel_Arc_A770_with_Rubik's_Cube-2.jpg
        500px-Intel_Arc_Battlemage_B580_Limited_Edition.jpg
        └── 500px-Nvidia@12nm@Turing@TU104@GeForce_RTX_2080@S_TAIWAN_1841A1_PKYN44.000_TU104-400-A1_DSCx3.jpg
    └── website-sketches/
        ├── index-sketch.png
        ├── main-layout-other-pages-sketch.png
        ├── mobile-index-sketch.png
        ├── mobile-menu-sketch.png
        └── modal-design-sketch.png
├── index.html (Home page)
├── pageNvidia.html (Nvidia page)
├── pageAMD.html (AMD information page)
├── pageIntel.html (Intel information page)
├── news.html (News related to GPUs)
├── style.css
├── script.js
├── planning.md
├── README.md
└── maintenance.md
```

### How to View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/CrePsooG/web-authoring-project-Eduard-Duica.git
   ```

2. Navigate to the folder:
   ```bash
   cd web-authoring-project-Eduard-Duica
   ```

3. Open in browser:
   - Double-click `index.html`, or
   - Use a local server if you prefer

### Live Site

**GitHub Pages URL:** https://crepsoog.github.io/web-authoring-project-Eduard-Duica

**Repository URL:**  https://github.com/CrePsooG/web-authoring-project-Eduard-Duica


## Development Process
Started by creating HTML structure for all pages with navigation. Added CSS for layout and colors. Then added content page by page. Tested after each page. Finally refined styling and tested responsiveness.

## Testing

Browsers tested:
- Chrome 147 (Windows): All pages work perfectly
- Firefox 148 (Windows): All pages work perfectly
- Edge 146 (Windows): All pages work perfectly

Responsive Testing - Screen sizes tested:

Desktop (1920x1080): Good layout, 3-column info cards
Laptop (1366x768): Good layout, 3-column info cards
Tablet (768x1024): 2-column layout works well, navigation hamburger menu works well
Mobile (375x667): Single column, navigation hamburger menu works well, all content readable

## Reflection
- I got much better at using semantic HTML.
- Grid finally clicked for me when building the info cards.
- I learned that less is more - my first version was too busy. Consistent spacing matters more than I thought. Choosing a color scheme that actually works together was harder than expected. Learned about color contrast for readability.

## Overall reflection on this project
The hardest part was when I started from an empty html page but it got easy once I had the basic structure made.
I leaned to keep things simple and how colors work togheder. I had a lot of fun creating the website and I hope in the future I will build better websites.

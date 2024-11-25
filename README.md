
# Madil Careers Platform 
![Madil Logo](src/img/foto.png)

## Overview
Madil Careers Platform is a modern and responsive web application designed to connect exceptional talent with visionary organizations. This platform offers a variety of features, including career coaching, recruitment services, and HR consulting, all tailored to meet unique needs.

## Features
- **Multi-language support:** English and Portuguese (PT) translations available.
- **Dynamic navigation bar:** Includes sections for Home, About Us, Services, Partners, Testimonials, and Contact.
- **Customizable components:** Fully modularized components for scalability and ease of maintenance.
- **Responsive design:** Optimized for both desktop and mobile users.
- **Animations:** Smooth transitions and animations powered by `framer-motion`.
- **Icons:** Visual elements provided by `lucide-react`.
- **Stylized layouts:** Built with `Tailwind CSS` for modern and responsive designs.

## Tech Stack
- **Frontend Framework:** React
- **State Management:** React Hooks
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Animations:** framer-motion
- **Icons:** lucide-react
- **Internationalization (i18n):** `react-i18next` for multilingual support
- **Build Tool:** Vite

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navbar with language switcher
│   │   ├── Footer.tsx       # Footer with links and contact information
│   │   ├── PartnersSlider.tsx  # Animated slider for showcasing partners
│   ├── pages/
│   │   ├── Home.tsx         # Home page
│   │   ├── About.tsx        # About Us page
│   │   ├── Services.tsx     # Services page
│   ├── translations/
│   │   ├── en.json          # English translations
│   │   ├── pt.json          # Portuguese translations
│   ├── img/
│   │   ├── logo.jpg         # Company logo
│   ├── App.tsx              # Main application file
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/
├── README.md                # Project documentation
```

## How to Run the Project
### Prerequisites
- Node.js (version 14 or above)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lanroo/madilcarreiras.git
   cd madilcarreiras
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:
   ```text
   http://localhost:5173
   ```

### Build for Production
To create a production build, run:
```bash
npm run build
# or
yarn build
```

## Deployment
This project can be deployed to platforms like Vercel, Netlify, or any static hosting provider that supports single-page applications (SPA).

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request with your improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


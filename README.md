# Alien Numeral Converter

A web application that converts Alien numerals to integers using a special symbol system.

![Alien Numeral Converter](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- ✅ Convert Alien numerals to integers
- ✅ Interactive input validation
- ✅ Symbol reference guide
- ✅ Example conversions with explanations
- ✅ Responsive design
- ✅ Real-time conversion

## 🔢 Symbol Values

| Symbol | Value |
|--------|-------|
| A      | 1     |
| B      | 5     |
| Z      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| R      | 1000  |

## 📏 Subtraction Rules

- **A** can be placed before **B** (5) and **Z** (10) to make 4 and 9
- **Z** can be placed before **L** (50) and **C** (100) to make 40 and 90
- **C** can be placed before **D** (500) and **R** (1000) to make 400 and 900

## 💡 Examples

| Input    | Output | Explanation                           |
|----------|--------|---------------------------------------|
| AAA      | 3      | A + A + A = 1 + 1 + 1 = 3            |
| AB       | 4      | A before B = 5 - 1 = 4               |
| LBAAA    | 58     | L + B + A + A + A = 50 + 5 + 1 + 1 + 1 = 58 |
| RCRZCAB  | 1994   | R + (C-R) + (Z-C) + A-B = 1000 + 900 + 90 + 4 |

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React** - UI library with hooks
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/np789/alien-numeral-converter.git
cd alien-numeral-converter

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Open (http://localhost:3000) in your browser

## Project Structure
alien-numeral-converter/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── alien-numeral-converter.tsx
├── lib/
│   └── utils.ts
└── README.md

## 🎯 How It Works

The conversion algorithm:

1. **Iterate** through the input string from left to right
2. **Compare** each symbol with the next symbol
3. **Subtract** current value if it's smaller than the next value
4. **Add** current value otherwise
5. **Return** the total sum

## 🚀 Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Naphat Yawilerng** - [np789](https://github.com/np789)

## 🙏 Acknowledgments

- Inspired by Roman numeral systems
- Built with modern web technologies
- UI components from shadcn/ui

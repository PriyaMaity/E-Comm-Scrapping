# 💻 E-Commerce Website Scrapping

This Node.js project scrapes laptop product data from [WebScraper.io's laptop section](https://webscraper.io/test-sites/e-commerce/static/computers/laptops), processes the data using Cheerio, and exports the results into an Excel file (`products.xlsx`).

✅ [Click here to view the Excel file](https://docs.google.com/spreadsheets/d/1FtTOA7hbVJT2lVQpjG1EvZ0jvgDrwkOO/edit?usp=drive_link&ouid=103782996883313644008&rtpof=true&sd=true)

---

## 🧰 Tools & Libraries Used

- **axios** – To fetch the HTML content from the target site.
- **cheerio** – To parse and extract data from the HTML using jQuery-like syntax.
- **xlsx** – To convert the extracted product data into an Excel spreadsheet.

---

## 📦 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install Dependencies**

```bash
npm install axios cheerio xlsx
```

---

## 🚀 How to Use

Run the scraper with the following command:

```bash
node index.js
```

This will:

- Scrape product name, price, availability, and rating from the website.
- Clean column headers by removing spaces (e.g., `ProductName` instead of `Product Name`).
- Generate a file called `products.xlsx` in the root of your project directory.

---

✅ You can view the generated Excel file here:  
🔗 [products.xlsx on Google Drive](https://docs.google.com/spreadsheets/d/1FtTOA7hbVJT2lVQpjG1EvZ0jvgDrwkOO/edit?usp=drive_link&ouid=103782996883313644008&rtpof=true&sd=true)

---

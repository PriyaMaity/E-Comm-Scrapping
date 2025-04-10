const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const URL =
  "https://webscraper.io/test-sites/e-commerce/static/computers/laptops";

async function scrapeData() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    const products = [];

    $(".thumbnail").each((i, el) => {
      const productName = $(el).find(".title").attr("title")?.trim() || "N/A";
      const price = $(el).find(".price").text().trim() || "N/A";
      const availability = "In Stock";
      const ratingCount = $(el).find(
        ".ratings p:nth-of-type(2) .glyphicon-star"
      ).length;
      const productRating = ratingCount > 0 ? ratingCount : "N/A";

      products.push({
        "Product Name": productName,
        Price: price,
        Availability: availability,
        "Product Rating": productRating,
      });
    });

    if (products.length === 0) {
      console.warn("No products were found. Please check the selectors.");
      return;
    }

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(products);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Products");
    xlsx.writeFile(workbook, "products.xlsx");

    console.log(
      `✅ Successfully scraped ${products.length} products and saved to products.xlsx`
    );
  } catch (error) {
    console.error("Error during scraping:", error.message);
  }
}

scrapeData();

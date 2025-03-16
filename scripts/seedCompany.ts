import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const companies = [
  {
    id: "1",
    symbol: "RELIANCE",
    price: 1247.40,
    logoSrc: "https://source.unsplash.com/random/200x200?oil",
    productSrc: "https://source.unsplash.com/random/300x200?refinery",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Reliance Industries Limited" },
      summaryProfile: {
        sector: "Energy",
        industry: "Oil & Gas Integrated",
        fullTimeEmployees: "195,618",
        website: "https://www.ril.com",
        address1: "Maker Chambers IV",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400021",
        country: "India",
        phone: "+91-22-2278-5000",
        longBusinessSummary: "Reliance Industries Limited operates in the oil, petrochemicals, retail, and telecommunications sectors in India and globally."
      },
      financialData: {
        ebitda: { fmt: "1.2T" },
        totalCash: { fmt: "3.5T" },
        totalDebt: { fmt: "2.8T" },
        currentPrice: { fmt: "1247.40" },
        returnOnAssets: { fmt: "7.8%" },
        returnOnEquity: { fmt: "15.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "Mukesh Ambani", relation: "Chairman & MD", positionDirect: { fmt: "49.14%" } }
        ]
      }
    }
  },
  {
    id: "2",
    symbol: "HDFCBANK",
    price: 1705.80,
    logoSrc: "https://source.unsplash.com/random/200x200?bank",
    productSrc: "https://source.unsplash.com/random/300x200?finance",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "HDFC Bank Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "141,579",
        website: "https://www.hdfcbank.com",
        address1: "HDFC Bank House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400013",
        country: "India",
        phone: "+91-22-6652-1000",
        longBusinessSummary: "HDFC Bank Limited provides various banking and financial services to individuals and businesses in India."
      },
      financialData: {
        ebitda: { fmt: "800B" },
        totalCash: { fmt: "1.5T" },
        totalDebt: { fmt: "200B" },
        currentPrice: { fmt: "1705.80" },
        returnOnAssets: { fmt: "12.4%" },
        returnOnEquity: { fmt: "25.3%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sashidhar Jagdishan", relation: "CEO & MD", positionDirect: { fmt: "1.24%" } }
        ]
      }
    }
  },
  {
    id: "3",
    symbol: "TCS",
    price: 3456.25,
    logoSrc: "https://source.unsplash.com/random/200x200?technology",
    productSrc: "https://source.unsplash.com/random/300x200?software",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Tata Consultancy Services Limited" },
      summaryProfile: {
        sector: "Technology",
        industry: "Information Technology Services",
        fullTimeEmployees: "592,195",
        website: "https://www.tcs.com",
        address1: "9th Floor, Nirmal Building",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400021",
        country: "India",
        phone: "+91-22-6778-9999",
        longBusinessSummary: "Tata Consultancy Services Limited provides IT services, consulting, and business solutions worldwide."
      },
      financialData: {
        ebitda: { fmt: "450B" },
        totalCash: { fmt: "650B" },
        totalDebt: { fmt: "50B" },
        currentPrice: { fmt: "3456.25" },
        returnOnAssets: { fmt: "22.5%" },
        returnOnEquity: { fmt: "42.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Rajesh Gopinathan", relation: "CEO", positionDirect: { fmt: "0.02%" } }
        ]
      }
    }
  },
  {
    id: "4",
    symbol: "INFY",
    price: 1478.60,
    logoSrc: "https://source.unsplash.com/random/200x200?coding",
    productSrc: "https://source.unsplash.com/random/300x200?programming",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Infosys Limited" },
      summaryProfile: {
        sector: "Technology",
        industry: "Information Technology Services",
        fullTimeEmployees: "335,186",
        website: "https://www.infosys.com",
        address1: "Electronics City, Hosur Road",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560100",
        country: "India",
        phone: "+91-80-2852-0261",
        longBusinessSummary: "Infosys Limited provides consulting, technology, and outsourcing services in North America, Europe, India, and internationally."
      },
      financialData: {
        ebitda: { fmt: "350B" },
        totalCash: { fmt: "450B" },
        totalDebt: { fmt: "30B" },
        currentPrice: { fmt: "1478.60" },
        returnOnAssets: { fmt: "19.8%" },
        returnOnEquity: { fmt: "38.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Salil Parekh", relation: "CEO & MD", positionDirect: { fmt: "0.01%" } }
        ]
      }
    }
  },
  {
    id: "5",
    symbol: "ICICIBANK",
    price: 945.75,
    logoSrc: "https://source.unsplash.com/random/200x200?banking",
    productSrc: "https://source.unsplash.com/random/300x200?atm",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "ICICI Bank Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "110,532",
        website: "https://www.icicibank.com",
        address1: "ICICI Bank Towers",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400051",
        country: "India",
        phone: "+91-22-2653-1414",
        longBusinessSummary: "ICICI Bank Limited provides various banking products and services in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "600B" },
        totalCash: { fmt: "1.2T" },
        totalDebt: { fmt: "180B" },
        currentPrice: { fmt: "945.75" },
        returnOnAssets: { fmt: "11.2%" },
        returnOnEquity: { fmt: "23.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sandeep Bakhshi", relation: "CEO & MD", positionDirect: { fmt: "0.05%" } }
        ]
      }
    }
  },
  {
    id: "6",
    symbol: "HINDUNILVR",
    price: 2567.30,
    logoSrc: "https://source.unsplash.com/random/200x200?consumer",
    productSrc: "https://source.unsplash.com/random/300x200?products",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Hindustan Unilever Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Household & Personal Products",
        fullTimeEmployees: "21,000",
        website: "https://www.hul.co.in",
        address1: "Unilever House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400099",
        country: "India",
        phone: "+91-22-3983-0000",
        longBusinessSummary: "Hindustan Unilever Limited manufactures and sells home care, beauty and personal care, and foods and refreshment products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "80B" },
        totalDebt: { fmt: "20B" },
        currentPrice: { fmt: "2567.30" },
        returnOnAssets: { fmt: "18.5%" },
        returnOnEquity: { fmt: "35.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sanjiv Mehta", relation: "Chairman & MD", positionDirect: { fmt: "0.01%" } }
        ]
      }
    }
  },
  {
    id: "7",
    symbol: "BHARTIARTL",
    price: 876.45,
    logoSrc: "https://source.unsplash.com/random/200x200?telecom",
    productSrc: "https://source.unsplash.com/random/300x200?mobile",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Bharti Airtel Limited" },
      summaryProfile: {
        sector: "Communication Services",
        industry: "Telecom Services",
        fullTimeEmployees: "23,500",
        website: "https://www.airtel.in",
        address1: "Bharti Crescent",
        city: "New Delhi",
        state: "Delhi",
        zip: "110037",
        country: "India",
        phone: "+91-11-4666-6100",
        longBusinessSummary: "Bharti Airtel Limited provides telecommunications services worldwide."
      },
      financialData: {
        ebitda: { fmt: "350B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "1.5T" },
        currentPrice: { fmt: "876.45" },
        returnOnAssets: { fmt: "5.2%" },
        returnOnEquity: { fmt: "12.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sunil Bharti Mittal", relation: "Chairman", positionDirect: { fmt: "27.19%" } }
        ]
      }
    }
  },
  {
    id: "8",
    symbol: "KOTAKBANK",
    price: 1823.55,
    logoSrc: "https://source.unsplash.com/random/200x200?finance",
    productSrc: "https://source.unsplash.com/random/300x200?bank",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Kotak Mahindra Bank Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "73,869",
        website: "https://www.kotak.com",
        address1: "27BKC, C 27",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400051",
        country: "India",
        phone: "+91-22-6166-0001",
        longBusinessSummary: "Kotak Mahindra Bank Limited provides commercial banking products and services in India."
      },
      financialData: {
        ebitda: { fmt: "250B" },
        totalCash: { fmt: "800B" },
        totalDebt: { fmt: "120B" },
        currentPrice: { fmt: "1823.55" },
        returnOnAssets: { fmt: "10.5%" },
        returnOnEquity: { fmt: "22.3%" }
      },
      insiderHolders: {
        holders: [
          { name: "Uday Kotak", relation: "MD & CEO", positionDirect: { fmt: "25.98%" } }
        ]
      }
    }
  },
  {
    id: "9",
    symbol: "ASIANPAINT",
    price: 3245.80,
    logoSrc: "https://source.unsplash.com/random/200x200?paint",
    productSrc: "https://source.unsplash.com/random/300x200?colors",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Asian Paints Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Specialty Chemicals",
        fullTimeEmployees: "7,800",
        website: "https://www.asianpaints.com",
        address1: "Asian Paints House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400093",
        country: "India",
        phone: "+91-22-6218-1000",
        longBusinessSummary: "Asian Paints Limited manufactures, sells, and distributes paints, coatings, products related to home décor, bath fittings, and provides related services in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "10B" },
        currentPrice: { fmt: "3245.80" },
        returnOnAssets: { fmt: "16.8%" },
        returnOnEquity: { fmt: "32.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Amit Syngle", relation: "CEO & MD", positionDirect: { fmt: "0.01%" } }
        ]
      }
    }
  },
  {
    id: "10",
    symbol: "AXISBANK",
    price: 1056.70,
    logoSrc: "https://source.unsplash.com/random/200x200?bank",
    productSrc: "https://source.unsplash.com/random/300x200?credit",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Axis Bank Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "85,815",
        website: "https://www.axisbank.com",
        address1: "Axis House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400025",
        country: "India",
        phone: "+91-22-2425-2525",
        longBusinessSummary: "Axis Bank Limited provides various banking and financial services to individuals and corporations in India."
      },
      financialData: {
        ebitda: { fmt: "280B" },
        totalCash: { fmt: "950B" },
        totalDebt: { fmt: "150B" },
        currentPrice: { fmt: "1056.70" },
        returnOnAssets: { fmt: "9.8%" },
        returnOnEquity: { fmt: "20.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Amitabh Chaudhry", relation: "CEO & MD", positionDirect: { fmt: "0.02%" } }
        ]
      }
    }
  },
  {
    id: "11",
    symbol: "MARUTI",
    price: 10245.60,
    logoSrc: "https://source.unsplash.com/random/200x200?car",
    productSrc: "https://source.unsplash.com/random/300x200?automobile",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Maruti Suzuki India Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        fullTimeEmployees: "17,721",
        website: "https://www.marutisuzuki.com",
        address1: "Plot No. 1, Nelson Mandela Road",
        city: "New Delhi",
        state: "Delhi",
        zip: "110070",
        country: "India",
        phone: "+91-11-4678-1000",
        longBusinessSummary: "Maruti Suzuki India Limited manufactures, purchases, sells, and exports automobiles and automobile parts in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "450B" },
        totalDebt: { fmt: "30B" },
        currentPrice: { fmt: "10245.60" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "18.7%" }
      },
      insiderHolders: {
        holders: [
          { name: "Kenichi Ayukawa", relation: "MD & CEO", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "12",
    symbol: "SBIN",
    price: 678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?bank",
    productSrc: "https://source.unsplash.com/random/300x200?banking",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "State Bank of India" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "245,652",
        website: "https://www.sbi.co.in",
        address1: "State Bank Bhavan",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400021",
        country: "India",
        phone: "+91-22-2274-0841",
        longBusinessSummary: "State Bank of India provides various banking products and services to individuals, commercial enterprises, corporates, public bodies, and institutional customers in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "1.1T" },
        totalCash: { fmt: "4.5T" },
        totalDebt: { fmt: "500B" },
        currentPrice: { fmt: "678.90" },
        returnOnAssets: { fmt: "8.2%" },
        returnOnEquity: { fmt: "17.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Dinesh Kumar Khara", relation: "Chairman", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "13",
    symbol: "BAJFINANCE",
    price: 7123.45,
    logoSrc: "https://source.unsplash.com/random/200x200?finance",
    productSrc: "https://source.unsplash.com/random/300x200?loan",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Bajaj Finance Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Credit Services",
        fullTimeEmployees: "35,676",
        website: "https://www.bajajfinserv.in/finance",
        address1: "Akurdi",
        city: "Pune",
        state: "Maharashtra",
        zip: "411035",
        country: "India",
        phone: "+91-20-3057-4151",
        longBusinessSummary: "Bajaj Finance Limited provides various financial services in India."
      },
      financialData: {
        ebitda: { fmt: "180B" },
        totalCash: { fmt: "250B" },
        totalDebt: { fmt: "1.2T" },
        currentPrice: { fmt: "7123.45" },
        returnOnAssets: { fmt: "4.5%" },
        returnOnEquity: { fmt: "23.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sanjiv Bajaj", relation: "Chairman", positionDirect: { fmt: "0.09%" } }
        ]
      }
    }
  },
  {
    id: "14",
    symbol: "HCLTECH",
    price: 1245.30,
    logoSrc: "https://source.unsplash.com/random/200x200?tech",
    productSrc: "https://source.unsplash.com/random/300x200?computer",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "HCL Technologies Limited" },
      summaryProfile: {
        sector: "Technology",
        industry: "Information Technology Services",
        fullTimeEmployees: "219,325",
        website: "https://www.hcltech.com",
        address1: "Plot No. 3A, Sector 126",
        city: "Noida",
        state: "Uttar Pradesh",
        zip: "201304",
        country: "India",
        phone: "+91-120-6125-000",
        longBusinessSummary: "HCL Technologies Limited provides information technology (IT) services and solutions worldwide."
      },
      financialData: {
        ebitda: { fmt: "180B" },
        totalCash: { fmt: "220B" },
        totalDebt: { fmt: "25B" },
        currentPrice: { fmt: "1245.30" },
        returnOnAssets: { fmt: "15.8%" },
        returnOnEquity: { fmt: "28.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "C Vijayakumar", relation: "CEO", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "15",
    symbol: "SUNPHARMA",
    price: 1178.65,
    logoSrc: "https://source.unsplash.com/random/200x200?pharma",
    productSrc: "https://source.unsplash.com/random/300x200?medicine",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Sun Pharmaceutical Industries Limited" },
      summaryProfile: {
        sector: "Healthcare",
        industry: "Drug Manufacturers",
        fullTimeEmployees: "37,517",
        website: "https://www.sunpharma.com",
        address1: "Sun House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400069",
        country: "India",
        phone: "+91-22-4324-4324",
        longBusinessSummary: "Sun Pharmaceutical Industries Limited researches, develops, manufactures, and markets pharmaceutical formulations and active pharmaceutical ingredients in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "110B" },
        totalCash: { fmt: "80B" },
        totalDebt: { fmt: "40B" },
        currentPrice: { fmt: "1178.65" },
        returnOnAssets: { fmt: "9.8%" },
        returnOnEquity: { fmt: "17.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Dilip Shanghvi", relation: "MD", positionDirect: { fmt: "9.60%" } }
        ]
      }
    }
  },
  {
    id: "16",
    symbol: "TATAMOTORS",
    price: 789.45,
    logoSrc: "https://source.unsplash.com/random/200x200?automobile",
    productSrc: "https://source.unsplash.com/random/300x200?car",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Tata Motors Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        fullTimeEmployees: "73,608",
        website: "https://www.tatamotors.com",
        address1: "Bombay House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400001",
        country: "India",
        phone: "+91-22-6665-8282",
        longBusinessSummary: "Tata Motors Limited designs, develops, manufactures, and sells a range of automotive vehicles."
      },
      financialData: {
        ebitda: { fmt: "350B" },
        totalCash: { fmt: "450B" },
        totalDebt: { fmt: "1.3T" },
        currentPrice: { fmt: "789.45" },
        returnOnAssets: { fmt: "5.2%" },
        returnOnEquity: { fmt: "15.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "N Chandrasekaran", relation: "Chairman", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "17",
    symbol: "WIPRO",
    price: 456.75,
    logoSrc: "https://source.unsplash.com/random/200x200?software",
    productSrc: "https://source.unsplash.com/random/300x200?technology",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Wipro Limited" },
      summaryProfile: {
        sector: "Technology",
        industry: "Information Technology Services",
        fullTimeEmployees: "231,671",
        website: "https://www.wipro.com",
        address1: "Doddakannelli",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560035",
        country: "India",
        phone: "+91-80-2844-0011",
        longBusinessSummary: "Wipro Limited operates as an information technology, consulting, and business process services company worldwide."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "280B" },
        totalDebt: { fmt: "20B" },
        currentPrice: { fmt: "456.75" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "20.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Azim Premji", relation: "Founder Chairman", positionDirect: { fmt: "73.02%" } }
        ]
      }
    }
  },
  {
    id: "18",
    symbol: "ADANIPORTS",
    price: 876.30,
    logoSrc: "https://source.unsplash.com/random/200x200?port",
    productSrc: "https://source.unsplash.com/random/300x200?shipping",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Adani Ports and Special Economic Zone Limited" },
      summaryProfile: {
        sector: "Industrials",
        industry: "Marine Ports & Services",
        fullTimeEmployees: "5,000",
        website: "https://www.adaniports.com",
        address1: "Adani Corporate House",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380059",
        country: "India",
        phone: "+91-79-2656-5555",
        longBusinessSummary: "Adani Ports and Special Economic Zone Limited provides port and logistics services in India."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "80B" },
        totalDebt: { fmt: "450B" },
        currentPrice: { fmt: "876.30" },
        returnOnAssets: { fmt: "7.5%" },
        returnOnEquity: { fmt: "18.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "Gautam Adani", relation: "Chairman", positionDirect: { fmt: "65.13%" } }
        ]
      }
    }
  },
  {
    id: "19",
    symbol: "ULTRACEMCO",
    price: 8765.40,
    logoSrc: "https://source.unsplash.com/random/200x200?cement",
    productSrc: "https://source.unsplash.com/random/300x200?construction",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "UltraTech Cement Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Building Materials",
        fullTimeEmployees: "22,598",
        website: "https://www.ultratechcement.com",
        address1: "B Wing, Ahura Centre",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400013",
        country: "India",
        phone: "+91-22-2926-7000",
        longBusinessSummary: "UltraTech Cement Limited manufactures and sells cement and cement related products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "150B" },
        totalCash: { fmt: "70B" },
        totalDebt: { fmt: "250B" },
        currentPrice: { fmt: "8765.40" },
        returnOnAssets: { fmt: "8.5%" },
        returnOnEquity: { fmt: "16.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "Kumar Mangalam Birla", relation: "Chairman", positionDirect: { fmt: "0.04%" } }
        ]
      }
    }
  },
  {
    id: "20",
    symbol: "TITAN",
    price: 3456.80,
    logoSrc: "https://source.unsplash.com/random/200x200?jewelry",
    productSrc: "https://source.unsplash.com/random/300x200?watch",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Titan Company Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Luxury Goods",
        fullTimeEmployees: "8,208",
        website: "https://www.titancompany.in",
        address1: "No. 3, SIPCOT Industrial Complex",
        city: "Hosur",
        state: "Tamil Nadu",
        zip: "635126",
        country: "India",
        phone: "+91-80-6704-7000",
        longBusinessSummary: "Titan Company Limited manufactures and sells watches, jewelry, eyewear, and other accessories in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "30B" },
        totalDebt: { fmt: "15B" },
        currentPrice: { fmt: "3456.80" },
        returnOnAssets: { fmt: "14.5%" },
        returnOnEquity: { fmt: "25.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "C K Venkataraman", relation: "MD", positionDirect: { fmt: "0.01%" } }
        ]
      }
    }
  },
  {
    id: "21",
    symbol: "BAJAJFINSV",
    price: 1678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?insurance",
    productSrc: "https://source.unsplash.com/random/300x200?financial",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Bajaj Finserv Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Insurance",
        fullTimeEmployees: "16,349",
        website: "https://www.bajajfinserv.in",
        address1: "Bajaj Auto Limited Complex",
        city: "Pune",
        state: "Maharashtra",
        zip: "411035",
        country: "India",
        phone: "+91-20-6610-7458",
        longBusinessSummary: "Bajaj Finserv Limited operates as a holding company for the businesses providing financial services in India."
      },
      financialData: {
        ebitda: { fmt: "220B" },
        totalCash: { fmt: "350B" },
        totalDebt: { fmt: "1.5T" },
        currentPrice: { fmt: "1678.90" },
        returnOnAssets: { fmt: "3.8%" },
        returnOnEquity: { fmt: "18.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sanjiv Bajaj", relation: "Chairman & MD", positionDirect: { fmt: "0.12%" } }
        ]
      }
    }
  },
  {
    id: "22",
    symbol: "NESTLEIND",
    price: 23456.75,
    logoSrc: "https://source.unsplash.com/random/200x200?food",
    productSrc: "https://source.unsplash.com/random/300x200?chocolate",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Nestle India Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Packaged Foods",
        fullTimeEmployees: "7,890",
        website: "https://www.nestle.in",
        address1: "Nestle House",
        city: "Gurgaon",
        state: "Haryana",
        zip: "122002",
        country: "India",
        phone: "+91-124-3940-000",
        longBusinessSummary: "Nestle India Limited manufactures, markets, and sells food products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "35B" },
        totalCash: { fmt: "25B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "23456.75" },
        returnOnAssets: { fmt: "22.5%" },
        returnOnEquity: { fmt: "45.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Suresh Narayanan", relation: "Chairman & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "23",
    symbol: "TATASTEEL",
    price: 145.60,
    logoSrc: "https://source.unsplash.com/random/200x200?steel",
    productSrc: "https://source.unsplash.com/random/300x200?metal",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Tata Steel Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Steel",
        fullTimeEmployees: "73,448",
        website: "https://www.tatasteel.com",
        address1: "Bombay House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400001",
        country: "India",
        phone: "+91-22-6665-8282",
        longBusinessSummary: "Tata Steel Limited manufactures and sells steel products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "280B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "750B" },
        currentPrice: { fmt: "145.60" },
        returnOnAssets: { fmt: "6.5%" },
        returnOnEquity: { fmt: "15.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "T V Narendran", relation: "CEO & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "24",
    symbol: "POWERGRID",
    price: 245.30,
    logoSrc: "https://source.unsplash.com/random/200x200?electricity",
    productSrc: "https://source.unsplash.com/random/300x200?power",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Power Grid Corporation of India Limited" },
      summaryProfile: {
        sector: "Utilities",
        industry: "Utilities - Regulated Electric",
        fullTimeEmployees: "9,511",
        website: "https://www.powergridindia.com",
        address1: "B-9, Qutab Institutional Area",
        city: "New Delhi",
        state: "Delhi",
        zip: "110016",
        country: "India",
        phone: "+91-11-2656-0112",
        longBusinessSummary: "Power Grid Corporation of India Limited transmits power through the transmission systems and operates in the power transmission business in India."
      },
      financialData: {
        ebitda: { fmt: "180B" },
        totalCash: { fmt: "50B" },
        totalDebt: { fmt: "1.3T" },
        currentPrice: { fmt: "245.30" },
        returnOnAssets: { fmt: "5.8%" },
        returnOnEquity: { fmt: "17.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "K Sreekant", relation: "Chairman & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "25",
    symbol: "NTPC",
    price: 178.45,
    logoSrc: "https://source.unsplash.com/random/200x200?energy",
    productSrc: "https://source.unsplash.com/random/300x200?power",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "NTPC Limited" },
      summaryProfile: {
        sector: "Utilities",
        industry: "Utilities - Independent Power Producers",
        fullTimeEmployees: "19,203",
        website: "https://www.ntpc.co.in",
        address1: "NTPC Bhawan, SCOPE Complex",
        city: "New Delhi",
        state: "Delhi",
        zip: "110003",
        country: "India",
        phone: "+91-11-2436-0100",
        longBusinessSummary: "NTPC Limited generates and sells electricity in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "350B" },
        totalCash: { fmt: "80B" },
        totalDebt: { fmt: "1.8T" },
        currentPrice: { fmt: "178.45" },
        returnOnAssets: { fmt: "4.2%" },
        returnOnEquity: { fmt: "14.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Gurdeep Singh", relation: "Chairman & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "26",
    symbol: "ONGC",
    price: 234.50,
    logoSrc: "https://source.unsplash.com/random/200x200?oil",
    productSrc: "https://source.unsplash.com/random/300x200?gas",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Oil and Natural Gas Corporation Limited" },
      summaryProfile: {
        sector: "Energy",
        industry: "Oil & Gas E&P",
        fullTimeEmployees: "28,479",
        website: "https://www.ongcindia.com",
        address1: "Deendayal Urja Bhawan",
        city: "New Delhi",
        state: "Delhi",
        zip: "110070",
        country: "India",
        phone: "+91-11-2675-2000",
        longBusinessSummary: "Oil and Natural Gas Corporation Limited explores for, develops, and produces crude oil and natural gas in India."
      },
      financialData: {
        ebitda: { fmt: "450B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "350B" },
        currentPrice: { fmt: "234.50" },
        returnOnAssets: { fmt: "7.5%" },
        returnOnEquity: { fmt: "15.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Arun Kumar Singh", relation: "Chairman & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "27",
    symbol: "GRASIM",
    price: 2145.30,
    logoSrc: "https://source.unsplash.com/random/200x200?textile",
    productSrc: "https://source.unsplash.com/random/300x200?fabric",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Grasim Industries Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Building Materials",
        fullTimeEmployees: "25,927",
        website: "https://www.grasim.com",
        address1: "Aditya Birla Centre",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400030",
        country: "India",
        phone: "+91-22-6652-5000",
        longBusinessSummary: "Grasim Industries Limited operates in fibre, yarn, pulp, cement, chemicals, and financial services businesses in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "45B" },
        totalDebt: { fmt: "180B" },
        currentPrice: { fmt: "2145.30" },
        returnOnAssets: { fmt: "6.8%" },
        returnOnEquity: { fmt: "14.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Kumar Mangalam Birla", relation: "Chairman", positionDirect: { fmt: "0.05%" } }
        ]
      }
    }
  },
  {
    id: "28",
    symbol: "ADANIENT",
    price: 2345.60,
    logoSrc: "https://source.unsplash.com/random/200x200?energy",
    productSrc: "https://source.unsplash.com/random/300x200?infrastructure",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Adani Enterprises Limited" },
      summaryProfile: {
        sector: "Industrials",
        industry: "Conglomerates",
        fullTimeEmployees: "23,000",
        website: "https://www.adanienterprises.com",
        address1: "Adani Corporate House",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380059",
        country: "India",
        phone: "+91-79-2656-5555",
        longBusinessSummary: "Adani Enterprises Limited operates as an incubator for Adani Group's new business ventures in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "180B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "450B" },
        currentPrice: { fmt: "2345.60" },
        returnOnAssets: { fmt: "5.2%" },
        returnOnEquity: { fmt: "15.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Gautam Adani", relation: "Chairman", positionDirect: { fmt: "73.87%" } }
        ]
      }
    }
  },
  {
    id: "29",
    symbol: "DRREDDY",
    price: 5678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?pharmaceutical",
    productSrc: "https://source.unsplash.com/random/300x200?medicine",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Dr. Reddy's Laboratories Limited" },
      summaryProfile: {
        sector: "Healthcare",
        industry: "Drug Manufacturers",
        fullTimeEmployees: "24,000",
        website: "https://www.drreddys.com",
        address1: "8-2-337, Road No. 3",
        city: "Hyderabad",
        state: "Telangana",
        zip: "500034",
        country: "India",
        phone: "+91-40-4900-2900",
        longBusinessSummary: "Dr. Reddy's Laboratories Limited operates as an integrated pharmaceutical company worldwide."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "15B" },
        currentPrice: { fmt: "5678.90" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "18.7%" }
      },
      insiderHolders: {
        holders: [
          { name: "G V Prasad", relation: "Co-Chairman & MD", positionDirect: { fmt: "1.32%" } }
        ]
      }
    }
  },
  {
    id: "30",
    symbol: "COALINDIA",
    price: 345.60,
    logoSrc: "https://source.unsplash.com/random/200x200?coal",
    productSrc: "https://source.unsplash.com/random/300x200?mining",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Coal India Limited" },
      summaryProfile: {
        sector: "Energy",
        industry: "Thermal Coal",
        fullTimeEmployees: "248,550",
        website: "https://www.coalindia.in",
        address1: "Coal Bhawan",
        city: "Kolkata",
        state: "West Bengal",
        zip: "700156",
        country: "India",
        phone: "+91-33-2324-6526",
        longBusinessSummary: "Coal India Limited produces and sells coal in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "280B" },
        totalCash: { fmt: "350B" },
        totalDebt: { fmt: "50B" },
        currentPrice: { fmt: "345.60" },
        returnOnAssets: { fmt: "15.8%" },
        returnOnEquity: { fmt: "28.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Pramod Agrawal", relation: "Chairman & MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "31",
    symbol: "INDUSINDBK",
    price: 1456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?bank",
    productSrc: "https://source.unsplash.com/random/300x200?banking",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "IndusInd Bank Limited" },
      summaryProfile: {
        sector: "Financial Services",
        industry: "Banks",
        fullTimeEmployees: "32,276",
        website: "https://www.indusind.com",
        address1: "8th Floor, Tower 1",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400013",
        country: "India",
        phone: "+91-22-6641-2200",
        longBusinessSummary: "IndusInd Bank Limited provides commercial banking products and services in India."
      },
      financialData: {
        ebitda: { fmt: "120B" },
        totalCash: { fmt: "450B" },
        totalDebt: { fmt: "80B" },
        currentPrice: { fmt: "1456.70" },
        returnOnAssets: { fmt: "8.5%" },
        returnOnEquity: { fmt: "16.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sumant Kathpalia", relation: "MD & CEO", positionDirect: { fmt: "0.02%" } }
        ]
      }
    }
  },
  {
    id: "32",
    symbol: "JSWSTEEL",
    price: 789.30,
    logoSrc: "https://source.unsplash.com/random/200x200?steel",
    productSrc: "https://source.unsplash.com/random/300x200?metal",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "JSW Steel Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Steel",
        fullTimeEmployees: "14,078",
        website: "https://www.jsw.in/steel",
        address1: "JSW Centre",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400063",
        country: "India",
        phone: "+91-22-4286-1000",
        longBusinessSummary: "JSW Steel Limited manufactures and sells iron and steel products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "180B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "650B" },
        currentPrice: { fmt: "789.30" },
        returnOnAssets: { fmt: "6.8%" },
        returnOnEquity: { fmt: "15.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sajjan Jindal", relation: "Chairman & MD", positionDirect: { fmt: "0.12%" } }
        ]
      }
    }
  },
  {
    id: "33",
    symbol: "DIVISLAB",
    price: 3456.80,
    logoSrc: "https://source.unsplash.com/random/200x200?laboratory",
    productSrc: "https://source.unsplash.com/random/300x200?pharma",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Divi's Laboratories Limited" },
      summaryProfile: {
        sector: "Healthcare",
        industry: "Drug Manufacturers",
        fullTimeEmployees: "14,000",
        website: "https://www.divislabs.com",
        address1: "1-72/23(P)/DIVIS/303",
        city: "Hyderabad",
        state: "Telangana",
        zip: "500032",
        country: "India",
        phone: "+91-40-2378-1200",
        longBusinessSummary: "Divi's Laboratories Limited manufactures and sells generic active pharmaceutical ingredients and intermediates for pharmaceutical companies worldwide."
      },
      financialData: {
        ebitda: { fmt: "28B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "3456.80" },
        returnOnAssets: { fmt: "18.5%" },
        returnOnEquity: { fmt: "22.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Murali K. Divi", relation: "MD", positionDirect: { fmt: "29.32%" } }
        ]
      }
    }
  },
  {
    id: "34",
    symbol: "BRITANNIA",
    price: 4567.80,
    logoSrc: "https://source.unsplash.com/random/200x200?biscuit",
    productSrc: "https://source.unsplash.com/random/300x200?food",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Britannia Industries Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Packaged Foods",
        fullTimeEmployees: "4,500",
        website: "https://www.britannia.co.in",
        address1: "5/1A, Hungerford Street",
        city: "Kolkata",
        state: "West Bengal",
        zip: "700017",
        country: "India",
        phone: "+91-33-2287-2439",
        longBusinessSummary: "Britannia Industries Limited manufactures and sells various food products primarily in India."
      },
      financialData: {
        ebitda: { fmt: "25B" },
        totalCash: { fmt: "18B" },
        totalDebt: { fmt: "8B" },
        currentPrice: { fmt: "4567.80" },
        returnOnAssets: { fmt: "16.8%" },
        returnOnEquity: { fmt: "32.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Varun Berry", relation: "MD", positionDirect: { fmt: "0.01%" } }
        ]
      }
    }
  },
  {
    id: "35",
    symbol: "CIPLA",
    price: 1234.50,
    logoSrc: "https://source.unsplash.com/random/200x200?medicine",
    productSrc: "https://source.unsplash.com/random/300x200?pharmaceutical",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Cipla Limited" },
      summaryProfile: {
        sector: "Healthcare",
        industry: "Drug Manufacturers",
        fullTimeEmployees: "23,000",
        website: "https://www.cipla.com",
        address1: "Cipla House",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400008",
        country: "India",
        phone: "+91-22-2482-6000",
        longBusinessSummary: "Cipla Limited manufactures and sells pharmaceutical and consumer healthcare products worldwide."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "15B" },
        currentPrice: { fmt: "1234.50" },
        returnOnAssets: { fmt: "10.5%" },
        returnOnEquity: { fmt: "16.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Umang Vohra", relation: "MD & Global CEO", positionDirect: { fmt: "0.02%" } }
        ]
      }
    }
  },
  {
    id: "36",
    symbol: "EICHERMOT",
    price: 3456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?motorcycle",
    productSrc: "https://source.unsplash.com/random/300x200?bike",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Eicher Motors Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        fullTimeEmployees: "14,000",
        website: "https://www.eichermotors.com",
        address1: "3rd Floor, Select Citywalk",
        city: "New Delhi",
        state: "Delhi",
        zip: "110017",
        country: "India",
        phone: "+91-124-4415-600",
        longBusinessSummary: "Eicher Motors Limited manufactures and sells motorcycles, commercial vehicles, and related parts and accessories in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "35B" },
        totalCash: { fmt: "80B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "3456.70" },
        returnOnAssets: { fmt: "15.8%" },
        returnOnEquity: { fmt: "25.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Siddhartha Lal", relation: "MD", positionDirect: { fmt: "0.43%" } }
        ]
      }
    }
  },
  {
    id: "37",
    symbol: "TECHM",
    price: 1234.50,
    logoSrc: "https://source.unsplash.com/random/200x200?technology",
    productSrc: "https://source.unsplash.com/random/300x200?digital",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Tech Mahindra Limited" },
      summaryProfile: {
        sector: "Technology",
        industry: "Information Technology Services",
        fullTimeEmployees: "151,173",
        website: "https://www.techmahindra.com",
        address1: "Gateway Building",
        city: "Pune",
        state: "Maharashtra",
        zip: "411006",
        country: "India",
        phone: "+91-20-6601-8100",
        longBusinessSummary: "Tech Mahindra Limited provides information technology (IT) services and solutions to various industries worldwide."
      },
      financialData: {
        ebitda: { fmt: "80B" },
        totalCash: { fmt: "120B" },
        totalDebt: { fmt: "15B" },
        currentPrice: { fmt: "1234.50" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "22.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "C P Gurnani", relation: "MD & CEO", positionDirect: { fmt: "0.05%" } }
        ]
      }
    }
  },
  {
    id: "38",
    symbol: "APOLLOHOSP",
    price: 5678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?hospital",
    productSrc: "https://source.unsplash.com/random/300x200?healthcare",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Apollo Hospitals Enterprise Limited" },
      summaryProfile: {
        sector: "Healthcare",
        industry: "Healthcare Facilities",
        fullTimeEmployees: "73,000",
        website: "https://www.apollohospitals.com",
        address1: "19, Bishop Gardens",
        city: "Chennai",
        state: "Tamil Nadu",
        zip: "600086",
        country: "India",
        phone: "+91-44-2829-3333",
        longBusinessSummary: "Apollo Hospitals Enterprise Limited owns and operates hospitals, diagnostic clinics, dispensing pharmacies, and consultancy services in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "35B" },
        totalCash: { fmt: "25B" },
        totalDebt: { fmt: "45B" },
        currentPrice: { fmt: "5678.90" },
        returnOnAssets: { fmt: "8.5%" },
        returnOnEquity: { fmt: "18.2%" }
      },
      insiderHolders: {
        holders: [
          { name: "Prathap C Reddy", relation: "Founder & Chairman", positionDirect: { fmt: "3.89%" } }
        ]
      }
    }
  },
  {
    id: "39",
    symbol: "HEROMOTOCO",
    price: 3456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?motorcycle",
    productSrc: "https://source.unsplash.com/random/300x200?scooter",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Hero MotoCorp Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        fullTimeEmployees: "8,599",
        website: "https://www.heromotocorp.com",
        address1: "The Grand Plaza",
        city: "New Delhi",
        state: "Delhi",
        zip: "110070",
        country: "India",
        phone: "+91-11-4604-4100",
        longBusinessSummary: "Hero MotoCorp Limited manufactures and sells motorcycles, scooters, and spare parts in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "150B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "3456.70" },
        returnOnAssets: { fmt: "15.8%" },
        returnOnEquity: { fmt: "22.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Pawan Munjal", relation: "Chairman & CEO", positionDirect: { fmt: "13.19%" } }
        ]
      }
    }
  },
  {
    id: "40",
    symbol: "DABUR",
    price: 567.80,
    logoSrc: "https://source.unsplash.com/random/200x200?ayurveda",
    productSrc: "https://source.unsplash.com/random/300x200?herbal",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Dabur India Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Household & Personal Products",
        fullTimeEmployees: "7,000",
        website: "https://www.dabur.com",
        address1: "Dabur Tower",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        zip: "201002",
        country: "India",
        phone: "+91-120-3962-100",
        longBusinessSummary: "Dabur India Limited manufactures and sells consumer care products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "18B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "567.80" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "22.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Mohit Burman", relation: "Chairman", positionDirect: { fmt: "0.40%" } }
        ]
      }
    }
  },
  {
    id: "41",
    symbol: "PIDILITIND",
    price: 2345.60,
    logoSrc: "https://source.unsplash.com/random/200x200?adhesive",
    productSrc: "https://source.unsplash.com/random/300x200?glue",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Pidilite Industries Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Specialty Chemicals",
        fullTimeEmployees: "7,000",
        website: "https://www.pidilite.com",
        address1: "Regent Chambers",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400021",
        country: "India",
        phone: "+91-22-2835-7000",
        longBusinessSummary: "Pidilite Industries Limited manufactures and sells adhesives, sealants, and construction chemicals in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "25B" },
        totalCash: { fmt: "30B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "2345.60" },
        returnOnAssets: { fmt: "15.8%" },
        returnOnEquity: { fmt: "25.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "M B Parekh", relation: "Executive Chairman", positionDirect: { fmt: "8.58%" } }
        ]
      }
    }
  },
  {
    id: "42",
    symbol: "HAVELLS",
    price: 1456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?electrical",
    productSrc: "https://source.unsplash.com/random/300x200?appliance",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Havells India Limited" },
      summaryProfile: {
        sector: "Industrials",
        industry: "Electrical Equipment & Parts",
        fullTimeEmployees: "6,500",
        website: "https://www.havells.com",
        address1: "QRG Towers",
        city: "Noida",
        state: "Uttar Pradesh",
        zip: "201301",
        country: "India",
        phone: "+91-120-4771-000",
        longBusinessSummary: "Havells India Limited manufactures and sells electrical and power distribution equipment in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "18B" },
        totalCash: { fmt: "25B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "1456.70" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "22.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Anil Rai Gupta", relation: "Chairman & MD", positionDirect: { fmt: "40.84%" } }
        ]
      }
    }
  },
  {
    id: "43",
    symbol: "GODREJCP",
    price: 1234.50,
    logoSrc: "https://source.unsplash.com/random/200x200?consumer",
    productSrc: "https://source.unsplash.com/random/300x200?products",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Godrej Consumer Products Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Household & Personal Products",
        fullTimeEmployees: "11,000",
        website: "https://www.godrejcp.com",
        address1: "Godrej One",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400079",
        country: "India",
        phone: "+91-22-2519-4416",
        longBusinessSummary: "Godrej Consumer Products Limited manufactures and sells personal and household care products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "22B" },
        totalCash: { fmt: "15B" },
        totalDebt: { fmt: "25B" },
        currentPrice: { fmt: "1234.50" },
        returnOnAssets: { fmt: "10.5%" },
        returnOnEquity: { fmt: "18.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Nisaba Godrej", relation: "Executive Chairperson", positionDirect: { fmt: "3.07%" } }
        ]
      }
    }
  },
  {
    id: "44",
    symbol: "MARICO",
    price: 567.80,
    logoSrc: "https://source.unsplash.com/random/200x200?oil",
    productSrc: "https://source.unsplash.com/random/300x200?coconut",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Marico Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Household & Personal Products",
        fullTimeEmployees: "2,400",
        website: "https://www.marico.com",
        address1: "Grande Palladium",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400013",
        country: "India",
        phone: "+91-22-6648-0480",
        longBusinessSummary: "Marico Limited manufactures and sells consumer products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "15B" },
        totalCash: { fmt: "18B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "567.80" },
        returnOnAssets: { fmt: "18.5%" },
        returnOnEquity: { fmt: "35.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Harsh Mariwala", relation: "Chairman", positionDirect: { fmt: "12.04%" } }
        ]
      }
    }
  },
  {
    id: "45",
    symbol: "SIEMENS",
    price: 3456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?engineering",
    productSrc: "https://source.unsplash.com/random/300x200?industrial",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Siemens Limited" },
      summaryProfile: {
        sector: "Industrials",
        industry: "Specialty Industrial Machinery",
        fullTimeEmployees: "9,600",
        website: "https://www.siemens.co.in",
        address1: "Birla Aurora",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400098",
        country: "India",
        phone: "+91-22-3967-7000",
        longBusinessSummary: "Siemens Limited provides technology-based solutions to industries, infrastructure, and cities in India."
      },
      financialData: {
        ebitda: { fmt: "22B" },
        totalCash: { fmt: "45B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "3456.70" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "18.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Sunil Mathur", relation: "MD & CEO", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "46",
    symbol: "BOSCHLTD",
    price: 23456.70,
    logoSrc: "https://source.unsplash.com/random/200x200?automotive",
    productSrc: "https://source.unsplash.com/random/300x200?engineering",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Bosch Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Parts",
        fullTimeEmployees: "7,500",
        website: "https://www.bosch.in",
        address1: "Hosur Road",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560030",
        country: "India",
        phone: "+91-80-6752-2315",
        longBusinessSummary: "Bosch Limited manufactures and sells automotive products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "18B" },
        totalCash: { fmt: "45B" },
        totalDebt: { fmt: "2B" },
        currentPrice: { fmt: "23456.70" },
        returnOnAssets: { fmt: "10.5%" },
        returnOnEquity: { fmt: "15.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Soumitra Bhattacharya", relation: "MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "47",
    symbol: "COLPAL",
    price: 2345.60,
    logoSrc: "https://source.unsplash.com/random/200x200?toothpaste",
    productSrc: "https://source.unsplash.com/random/300x200?dental",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Colgate-Palmolive (India) Limited" },
      summaryProfile: {
        sector: "Consumer Defensive",
        industry: "Household & Personal Products",
        fullTimeEmployees: "2,500",
        website: "https://www.colgatepalmolive.co.in",
        address1: "Colgate Research Centre",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400099",
        country: "India",
        phone: "+91-22-6709-5050",
        longBusinessSummary: "Colgate-Palmolive (India) Limited manufactures and markets oral care, personal care, home care, and skin care products in India."
      },
      financialData: {
        ebitda: { fmt: "18B" },
        totalCash: { fmt: "25B" },
        totalDebt: { fmt: "1B" },
        currentPrice: { fmt: "2345.60" },
        returnOnAssets: { fmt: "25.8%" },
        returnOnEquity: { fmt: "45.5%" }
      },
      insiderHolders: {
        holders: [
          { name: "Ram Raghavan", relation: "MD", positionDirect: { fmt: "0.00%" } }
        ]
      }
    }
  },
  {
    id: "48",
    symbol: "BERGEPAINT",
    price: 678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?paint",
    productSrc: "https://source.unsplash.com/random/300x200?color",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Berger Paints India Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Specialty Chemicals",
        fullTimeEmployees: "3,500",
        website: "https://www.bergerpaints.com",
        address1: "Berger House",
        city: "Kolkata",
        state: "West Bengal",
        zip: "700017",
        country: "India",
        phone: "+91-33-2249-9724",
        longBusinessSummary: "Berger Paints India Limited manufactures and sells paints and coatings in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "12B" },
        totalCash: { fmt: "8B" },
        totalDebt: { fmt: "5B" },
        currentPrice: { fmt: "678.90" },
        returnOnAssets: { fmt: "12.5%" },
        returnOnEquity: { fmt: "22.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Kuldip Singh Dhingra", relation: "Chairman", positionDirect: { fmt: "21.44%" } }
        ]
      }
    }
  },
  {
    id: "49",
    symbol: "BAJAJ-AUTO",
    price: 5678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?motorcycle",
    productSrc: "https://source.unsplash.com/random/300x200?bike",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Bajaj Auto Limited" },
      summaryProfile: {
        sector: "Consumer Cyclical",
        industry: "Auto Manufacturers",
        fullTimeEmployees: "10,500",
        website: "https://www.bajajauto.com",
        address1: "Mumbai-Pune Road",
        city: "Pune",
        state: "Maharashtra",
        zip: "411035",
        country: "India",
        phone: "+91-20-6610-6000",
        longBusinessSummary: "Bajaj Auto Limited manufactures and sells motorcycles, three-wheelers, and quadricycles in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "55B" },
        totalCash: { fmt: "180B" },
        totalDebt: { fmt: "2B" },
        currentPrice: { fmt: "5678.90" },
        returnOnAssets: { fmt: "18.5%" },
        returnOnEquity: { fmt: "25.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "Rajiv Bajaj", relation: "MD", positionDirect: { fmt: "0.05%" } }
        ]
      }
    }
  },
  {
    id: "50",
    symbol: "SHREECEM",
    price: 25678.90,
    logoSrc: "https://source.unsplash.com/random/200x200?cement",
    productSrc: "https://source.unsplash.com/random/300x200?construction",
    yahooStockV2Summary: {
      price: { regularMarketTime: Math.floor(Date.now() / 1000), longName: "Shree Cement Limited" },
      summaryProfile: {
        sector: "Basic Materials",
        industry: "Building Materials",
        fullTimeEmployees: "6,500",
        website: "https://www.shreecement.com",
        address1: "Bangur Nagar",
        city: "Beawar",
        state: "Rajasthan",
        zip: "305901",
        country: "India",
        phone: "+91-1462-228-101",
        longBusinessSummary: "Shree Cement Limited manufactures and sells cement and related products in India and internationally."
      },
      financialData: {
        ebitda: { fmt: "45B" },
        totalCash: { fmt: "35B" },
        totalDebt: { fmt: "25B" },
        currentPrice: { fmt: "25678.90" },
        returnOnAssets: { fmt: "10.5%" },
        returnOnEquity: { fmt: "15.8%" }
      },
      insiderHolders: {
        holders: [
          { name: "H M Bangur", relation: "MD", positionDirect: { fmt: "0.09%" } }
        ]
      }
    }
  }
];

async function main() {
  console.log(`Starting to seed ${companies.length} companies...`);
  
  for (const company of companies) {
    await prisma.company.upsert({
      where: { symbol: company.symbol },
      update: company,
      create: company,
    });
    console.log(`Seeded company: ${company.symbol}`);
  }
  
  console.log(`Seeding completed successfully.`);
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

console.log("This script will seed 50 Indian companies to your database.");
console.log("Make sure your Prisma schema has a Company model with the appropriate fields.");
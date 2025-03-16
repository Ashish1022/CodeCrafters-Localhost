import { Company } from "@prisma/client";

interface CompanyDetailsProps {
  foundCompany: Company;
}

type FinancialData = {
  [key: string]: { fmt?: string } | undefined;
};

export type InsiderHolder = {
  holders: {
    name: string;
    relation: string;
    positionDirect?: { fmt?: string };
  }[];
};

const CompanyDetails = ({ foundCompany }: CompanyDetailsProps) => {
  const targetData = foundCompany?.yahooStockV2Summary || {};
  const insiderHolders: InsiderHolder = targetData?.insiderHolders || { holders: [] };
  const financialData: FinancialData = targetData?.financialData || {};
  const overview = targetData?.price || {};
  const summary = targetData?.summaryProfile || {};

  const regularTime = overview?.regularMarketTime
    ? new Date(overview.regularMarketTime * 1000).toUTCString()
    : "N/A";

  const address = `${summary?.address1 || "N/A"}, ${summary?.city || "N/A"}, ${summary?.state || "N/A"}, ${summary?.zip || "N/A"}`;

  const headers = [
    "Sector", "Industry", "Fulltime Employees", "Website", "Address",
    "Summary", "Ebitda", "TotalCash", "TotalDebt", "QuickRatio", "CurrentPrice",
    "CurrentRatio", "DebtToEquity", "FreeCashflow", "GrossMargin", "TotalRevenue",
    "EbitdaMargins", "ProfitMargins", "RevenueGrowth", "EarningsGrowth", "ReturnOnAssets",
    "ReturnOnEquity", "TargetLowPrice", "RevenuePerShare", "TargetHighPrice", "TargetMeanPrice",
    "OperatingMargins", "OperatingCashflow", "TargetMedianPrice", "TotalCashPerShare",
    "RecommendationMean", "NumberOfAnalystOpinions", "Name", "Role", "Shares", "Company",
    "Zip", "City", "Phone", "State", "Country", "Industry", "Sector", "Description",
  ];

  const data = [
    summary?.sector || "N/A",
    summary?.industry || "N/A",
    summary?.fullTimeEmployees || "N/A",
    summary?.website || "N/A",
    address,
    summary?.longBusinessSummary || "N/A",
    financialData?.ebitda?.fmt || "N/A",
    financialData?.totalCash?.fmt || "N/A",
    financialData?.totalDebt?.fmt || "N/A",
    financialData?.quickRatio?.fmt || "N/A",
    financialData?.currentPrice?.fmt || "N/A",
    financialData?.currentRatio?.fmt || "N/A",
    financialData?.debtToEquity?.fmt || "N/A",
    financialData?.freeCashflow?.fmt || "N/A",
    financialData?.grossMargins?.fmt || "N/A",
    financialData?.totalRevenue?.fmt || "N/A",
    financialData?.ebitdaMargins?.fmt || "N/A",
    financialData?.profitMargins?.fmt || "N/A",
    financialData?.revenueGrowth?.fmt || "N/A",
    financialData?.earningsGrowth?.fmt || "N/A",
    financialData?.returnOnAssets?.fmt || "N/A",
    financialData?.returnOnEquity?.fmt || "N/A",
    financialData?.targetLowPrice?.fmt || "N/A",
    financialData?.revenuePerShare?.fmt || "N/A",
    financialData?.targetHighPrice?.fmt || "N/A",
    financialData?.targetMeanPrice?.fmt || "N/A",
    financialData?.operatingMargins?.fmt || "N/A",
    financialData?.operatingCashflow?.fmt || "N/A",
    financialData?.targetMedianPrice?.fmt || "N/A",
    financialData?.totalCashPerShare?.fmt || "N/A",
    financialData?.recommendationMean?.fmt || "N/A",
    financialData?.numberOfAnalystOpinions?.fmt || "N/A",
    overview?.longName || "N/A",
    summary?.zip || "N/A",
    summary?.city || "N/A",
    summary?.phone || "N/A",
    summary?.state || "N/A",
    summary?.country || "N/A",
  ];

  return (
    <>
      <div>
        <h1>Updated at {regularTime}</h1>
        <div className="pt-8 pb-2 text-xl font-semibold border-b border-muted-foreground/30">
          Company Overview
        </div>
        <div className="px-4 py-6 space-y-2">
          {headers.slice(0, 5).map((item, index) => (
            <div key={index} className="flex gap-4">
              <p className="w-[150px]">{item}</p>
              <p className="max-w-[500px] max-h-[200px] overflow-auto font-semibold">{data[index]}</p>
            </div>
          ))}
          <div className="pt-6 leading-6">{data[5]}</div>
        </div>
      </div>
      <div className="pb-8">
        <div className="pt-4 pb-2 text-xl font-semibold border-b border-muted-foreground/30">Financial Data</div>
        <div className="flex justify-between">
          <div className="w-full px-4 py-6 space-y-2">
            <div className="font-semibold">Valuation</div>
            {headers.slice(6, 15).map((item, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-muted-foreground">{item}</p>
                <p className="font-semibold">{data[index + 6]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-2 text-xl font-semibold border-b border-muted-foreground/30">Top Stakeholders</div>
      <div className="flex flex-wrap justify-between px-4 pb-6">
        {insiderHolders.holders.map((item, index) => (
          <div key={index} className="border border-muted-foreground/30 p-4 w-[30%] space-y-2 mt-6 rounded-lg">
            <p className="font-semibold">{item.name}</p>
            <div className="flex gap-2">
              <p className="">Role</p>
              <p className="font-semibold">{item.relation}</p>
            </div>
            <div className="flex gap-2">
              <p className="">Shares</p>
              {item.positionDirect?.fmt ? <p className="font-semibold">{item.positionDirect.fmt}</p> : <p>No public information available</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompanyDetails;

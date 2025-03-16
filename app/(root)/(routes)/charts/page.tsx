"use client"

import React, { useState, useEffect } from "react";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend
} from "recharts";

const Charts = () => {
  
  interface LiveData {
    time: string;
    price: number;
    volume: number;
  }

  const [liveData, setLiveData] = useState<LiveData[]>([]);
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [timeframe, setTimeframe] = useState("1D");
  
  const stocks = [
    { symbol: "TITAN", name: "TITAN" },
    { symbol: "SBI", name: "SBI Corp." },
    { symbol: "JSW", name: "JSW Corp." },
    { symbol: "Ultratech", name: "Ultratech Inc." },
    { symbol: "Dabur", name: "Dabur Ltd." }
  ];


  const timeframes = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

 
  useEffect(() => {
 
    let basePrice;
    switch(selectedStock) {
      case "AAPL": basePrice = 207; break;
      case "MSFT": basePrice = 399; break;
      case "NVDA": basePrice = 838; break;
      case "GOOGL": basePrice = 154; break;
      case "AMZN": basePrice = 185; break;
      default: basePrice = 200;
    }

 
    const initialData = [];
    const dataPoints = timeframe === "1D" ? 24 : 
                      timeframe === "1W" ? 7 : 
                      timeframe === "1M" ? 30 : 
                      timeframe === "3M" ? 90 : 
                      timeframe === "1Y" ? 12 : 5;
    
    const volatility = 0.02; 
    
    for (let i = 0; i < dataPoints; i++) {
      const change = basePrice * volatility * (Math.random() - 0.5);
      basePrice += change;
      
      let label;
      if (timeframe === "1D") {
        label = `${i}:00`;
      } else if (timeframe === "1W") {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        label = days[i % 7];
      } else if (timeframe === "1M" || timeframe === "3M") {
        label = `Day ${i+1}`;
      } else if (timeframe === "1Y") {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        label = months[i % 12];
      } else {
        label = `Year ${2023 + i}`;
      }
      
      initialData.push({
        time: label,
        price: basePrice,
        volume: Math.floor(Math.random() * 10000000) + 1000000,
      });
    }
    
    setLiveData(initialData);
    
  
    const interval = setInterval(() => {
      setLiveData(prevData => {
        const newData = [...prevData];
        const lastPoint = newData[newData.length - 1];
        const change = lastPoint.price * volatility * (Math.random() - 0.5);
        newData[newData.length - 1] = {
          ...lastPoint,
          price: lastPoint.price + change,
          volume: Math.floor(Math.random() * 10000000) + 1000000,
        };
        return newData;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [selectedStock, timeframe]);

  
  const priceChange = liveData.length > 1 
    ? liveData[liveData.length - 1].price - liveData[0].price 
    : 0;
  
  const percentChange = liveData.length > 1 
    ? (priceChange / liveData[0].price) * 100 
    : 0;


  const volumeData = liveData.map(item => ({
    time: item.time,
    volume: item.volume
  }));

  
  const marketDistribution = [
    { name: "Technology", value: 45 },
    { name: "Healthcare", value: 20 },
    { name: "Finance", value: 15 },
    { name: "Consumer", value: 10 },
    { name: "Energy", value: 10 }
  ];
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200">
            📊 Live Market Charts
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-400 mb-2">Select Stock</label>
              <select 
                className="w-full md:w-48 bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
              >
                {stocks.map(stock => (
                  <option key={stock.symbol} value={stock.symbol}>{stock.symbol} - {stock.name}</option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-400 mb-2">Timeframe</label>
              <div className="flex space-x-2">
                {timeframes.map(tf => (
                  <button
                    key={tf}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      timeframe === tf 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() => setTimeframe(tf)}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">{selectedStock}</h2>
              <p className="text-gray-400">{stocks.find(s => s.symbol === selectedStock)?.name}</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-3xl font-bold text-white">
                Rs. {liveData.length ? liveData[liveData.length - 1].price.toFixed(2) : "0.00"}
              </p>
              <p className={`text-lg font-medium ${percentChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                {percentChange >= 0 ? "+" : ""}{priceChange.toFixed(2)} ({percentChange.toFixed(2)}%)
              </p>
            </div>
          </div>

         
          <div className="bg-gray-900/50 p-4 rounded-xl">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={liveData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={['auto', 'auto']} />
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#94a3b8' }}
                  formatter={(value) => [`Rs. ${(value as number).toFixed(2)}`, 'Price']}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#8884d8" 
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2, fill: '#1f2937' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">📊 Trading Volume</h2>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={volumeData}>
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                    labelStyle={{ color: '#94a3b8' }}
                    formatter={(value) => [`${(Number(value)/1000000).toFixed(2)}M`, 'Volume']}
                  />
                  <Bar dataKey="volume" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">🍰 Market Distribution</h2>
            <div className="bg-gray-900/50 p-4 rounded-xl">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {marketDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                    formatter={(value) => [`${value}%`, 'Market Share']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">📈 Market Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-700/30">
              <p className="text-gray-400">RSI (Relative Strength Index)</p>
              <p className="text-3xl font-bold text-blue-300">62.4</p>
              <p className="text-sm text-gray-400 mt-1">Neutral</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-700/30">
              <p className="text-gray-400">MACD</p>
              <p className="text-3xl font-bold text-green-300">+1.24</p>
              <p className="text-sm text-gray-400 mt-1">Bullish</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-700/30">
              <p className="text-gray-400">Bollinger Bands</p>
              <p className="text-3xl font-bold text-purple-300">Expanding</p>
              <p className="text-sm text-gray-400 mt-1">Increased Volatility</p>
            </div>
          </div>
        </div>

       
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">📰 Live Market News</h2>
          <div className="space-y-4">
            <div className="bg-gray-700/50 p-4 rounded-md hover:bg-gray-700/70 transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-white">Fed Signals Potential Rate Cut in Coming Months</h3>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Federal Reserve officials indicated they could begin cutting interest rates in the coming months if inflation continues to cool.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md hover:bg-gray-700/70 transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-white">{selectedStock} Reports Strong Quarterly Earnings</h3>
                <span className="text-xs text-gray-400">5h ago</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">The company beat analyst expectations with revenue growth of 12% year-over-year.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md hover:bg-gray-700/70 transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-white">Tech Sector Leads Market Rally</h3>
                <span className="text-xs text-gray-400">8h ago</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Technology stocks are leading today's market rally, with semiconductor companies showing particularly strong gains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;

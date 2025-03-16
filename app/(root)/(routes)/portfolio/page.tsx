"use client"

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Portfolio = () => {
  
  const portfolio = [
    { symbol: "AAPL", predictedPrice: 205.42, actualPrice: 207.12, accuracy: 98 },
    { symbol: "MSFT", predictedPrice: 412.35, actualPrice: 398.89, accuracy: 95 },
    { symbol: "NVDA", predictedPrice: 824.68, actualPrice: 838.21, accuracy: 97 },
    { symbol: "GOOGL", predictedPrice: 176.89, actualPrice: 154.32, accuracy: 85 },
    { symbol: "AMZN", predictedPrice: 183.56, actualPrice: 185.12, accuracy: 99 }
  ];

  
  const sentiments = [
    { symbol: "AAPL", sentiment: "Bullish", confidence: 88 },
    { symbol: "MSFT", sentiment: "Bullish", confidence: 92 },
    { symbol: "NVDA", sentiment: "Bullish", confidence: 95 },
    { symbol: "GOOGL", sentiment: "Bearish", confidence: 76 },
    { symbol: "AMZN", sentiment: "Bullish", confidence: 82 }
  ];

  
  const futurePredictions = [
    { date: "Mar 2025", predictedPrice: 32500 },
    { date: "Apr 2025", predictedPrice: 33200 },
    { date: "May 2025", predictedPrice: 34100 },
    { date: "Jun 2025", predictedPrice: 33800 },
    { date: "Jul 2025", predictedPrice: 35400 },
    { date: "Aug 2025", predictedPrice: 36700 },
    { date: "Sep 2025", predictedPrice: 38200 }
  ];

  
  const riskAnalysis = [
    { symbol: "AAPL", risk: "Low" },
    { symbol: "MSFT", risk: "Low" },
    { symbol: "NVDA", risk: "Medium" },
    { symbol: "GOOGL", risk: "Medium" },
    { symbol: "AMZN", risk: "High" }
  ];

  
  const totalValue = portfolio.reduce((sum, stock) => sum + stock.actualPrice, 0);
  
  
  const averageAccuracy = (portfolio.reduce((sum, stock) => sum + stock.accuracy, 0) / portfolio.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-200">
            📊 AI Stock Portfolio
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
       
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Portfolio Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-700/30">
              <p className="text-gray-400">Tracked Stocks</p>
              <p className="text-3xl font-bold text-blue-300">{portfolio.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-700/30">
              <p className="text-gray-400">Total Value</p>
              <p className="text-3xl font-bold text-green-300">Rs. {totalValue.toFixed(2)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-700/30">
              <p className="text-gray-400">AI Accuracy</p>
              <p className="text-3xl font-bold text-purple-300">{averageAccuracy}%</p>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">📈 AI Predictions vs. Actual</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700/50">
                  <th className="p-4 text-left text-gray-300">Stock</th>
                  <th className="p-4 text-left text-gray-300">Predicted Price</th>
                  <th className="p-4 text-left text-gray-300">Actual Price</th>
                  <th className="p-4 text-left text-gray-300">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((stock, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors">
                    <td className="p-4 font-medium text-blue-300">{stock.symbol}</td>
                    <td className="p-4 text-gray-300">Rs. {stock.predictedPrice.toFixed(2)}</td>
                    <td className="p-4 text-gray-300">Rs. {stock.actualPrice.toFixed(2)}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium 
                        ${stock.accuracy >= 95 ? "bg-green-900/50 text-green-300 border border-green-700/30" : 
                          stock.accuracy >= 90 ? "bg-blue-900/50 text-blue-300 border border-blue-700/30" : 
                          "bg-red-900/50 text-red-300 border border-red-700/30"}`}>
                        {stock.accuracy}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">📈 Portfolio Growth</h2>
          <div className="bg-gray-900/50 p-4 rounded-xl">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={futurePredictions}>
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#94a3b8' }}
                  formatter={(value) => [`Rs. ${value}`, 'Predicted Value']}
                />
                <Line 
                  type="monotone" 
                  dataKey="predictedPrice" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#8b5cf6' }}
                  activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2, fill: '#1f2937' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

     
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🧠 Stock Sentiment Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700/50">
                  <th className="p-4 text-left text-gray-300">Stock</th>
                  <th className="p-4 text-left text-gray-300">Sentiment</th>
                  <th className="p-4 text-left text-gray-300">Confidence Score</th>
                  <th className="p-4 text-left text-gray-300">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {sentiments.map((stock, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors">
                    <td className="p-4 font-medium text-blue-300">{stock.symbol}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded ${stock.sentiment === "Bullish" ? "bg-green-900/50 text-green-300 border border-green-700/30" : "bg-red-900/50 text-red-300 border border-red-700/30"}`}>
                        {stock.sentiment === "Bullish" ? "📈 Bullish" : "📉 Bearish"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${stock.sentiment === "Bullish" ? "bg-green-900/50" : "bg-red-900/50"}`} 
                          style={{ width: `${stock.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{stock.confidence}%</span>
                    </td>
                    <td className="p-4 text-sm">
                      {stock.sentiment === "Bullish" && stock.confidence > 80 ? "Strong Buy" : 
                       stock.sentiment === "Bullish" ? "Buy" : 
                       stock.confidence > 80 ? "Strong Sell" : "Sell"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">⚠️ Risk & Volatility Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700/50">
                    <th className="p-4 text-left text-gray-300">Stock</th>
                    <th className="p-4 text-left text-gray-300">Risk Level</th>
                    <th className="p-4 text-left text-gray-300">Volatility</th>
                  </tr>
                </thead>
                <tbody>
                  {riskAnalysis.map((stock, index) => (
                    <tr key={index} className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <td className="p-4 font-medium text-blue-300">{stock.symbol}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded 
                          ${stock.risk === "High" ? "bg-red-900/50 text-red-300 border border-red-700/30" : 
                            stock.risk === "Medium" ? "bg-yellow-900/50 text-yellow-300 border border-yellow-700/30" : 
                            "bg-green-900/50 text-green-300 border border-green-700/30"}`}>
                          {stock.risk === "High" ? "🔴 High" : 
                            stock.risk === "Medium" ? "🟡 Medium" : 
                            "🟢 Low"}
                        </span>
                      </td>
                      <td className="p-4">
                        {stock.risk === "High" ? "23.4%" : 
                         stock.risk === "Medium" ? "15.7%" : 
                         "8.2%"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-xl">
              <h3 className="text-lg font-medium mb-2 text-gray-300">Risk Breakdown</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 inline-block bg-red-900/50 rounded-full mr-2"></span>
                  <span className="text-gray-300">High Risk (20%)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 inline-block bg-yellow-900/50 rounded-full mr-2"></span>
                  <span className="text-gray-300">Medium Risk (40%)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 inline-block bg-green-900/50 rounded-full mr-2"></span>
                  <span className="text-gray-300">Low Risk (40%)</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-sm text-gray-400">Portfolio Risk Score: <span className="font-bold">6.4/10</span></p>
                <p className="text-xs text-gray-500 mt-1">Based on market volatility and AI predictions</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🤖 AI Investment Strategy</h2>
          <div className="bg-gray-700/50 p-4 rounded-md mb-3">
            <h3 className="font-medium text-blue-300">Market Outlook</h3>
            <p className="text-sm text-gray-400 mt-1">Based on current data, the AI model predicts a <span className="font-bold text-green-300">bullish trend</span> over the next 3 months with 82% confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-green-700/50 p-4 rounded-md">
              <h3 className="font-medium text-green-300">Top Buy</h3>
              <p className="text-lg font-bold">NVDA</p>
              <p className="text-xs text-gray-400">Expected growth: 12.4%</p>
            </div>
            <div className="bg-red-700/50 p-4 rounded-md">
              <h3 className="font-medium text-red-300">Consider Selling</h3>
              <p className="text-lg font-bold">GOOGL</p>
              <p className="text-xs text-gray-400">Bearish indicators</p>
            </div>
            <div className="bg-purple-700/50 p-4 rounded-md">
              <h3 className="font-medium text-purple-300">AI Allocation Tip</h3>
              <p className="text-sm">Consider increasing tech exposure by 5-10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
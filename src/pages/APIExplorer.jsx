import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApiExplorer = () => {
  const [apiKey, setApiKey] = useState('');
  const [website, setWebsite] = useState('');
  const [format, setFormat] = useState('JSON');
  const [parameters, setParameters] = useState([
    { name: '/location', value: '', type: 'string', description: '' },
    { name: '/keyword', value: '', type: 'string', description: '' },
    { name: '/checkin_date', value: '', type: 'date', description: '' },
    { name: '/checkout_date', value: '', type: 'date', description: '' },
    { name: '/guest', value: '', type: 'int', description: '' },
    { name: '/room', value: '', type: 'int', description: '' },
    { name: '/price', value: '', type: 'int', description: '' },
    { name: '/stars', value: '', type: 'string', description: '' },
    { name: '/amenities', value: '', type: 'string', description: '' },
  ]);

  const [response, setResponse] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [responseHeader, setResponseHeader] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowResponse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResponseCode("200");
      setResponseHeader("200 OK");
      setResponse({
        data: [
          {
            id: 1,
            name: "Bangkok Grand Hotel",
            location: "Bangkok, Thailand",
            price: 200,
            rating: 4.5,
            amenities: ["WiFi", "Pool", "Gym"]
          },
          {
            id: 2,
            name: "Chiang Mai Garden Resort",
            location: "Chiang Mai, Thailand",
            price: 150,
            rating: 4.2,
            amenities: ["Breakfast", "Free Parking"]
          }
        ]
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleParameterChange = (index, value) => {
    const newParameters = [...parameters];
    newParameters[index].value = value;
    setParameters(newParameters);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl border-2 border-gray-300 w-full max-w-6xl p-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-blue-600">API Explorer</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">API Explorer</h1>

        {/* API Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">Your API Key</label>
            <input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">Website Referrer</label>
            <input
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Enter your website URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <input
              id="format"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Parameters Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 border-b">Parameters</th>
                <th className="text-left px-4 py-2 border-b">Value</th>
                <th className="text-left px-4 py-2 border-b">Type</th>
                <th className="text-left px-4 py-2 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {parameters.map((param, index) => (
                <tr key={param.name} className="border-t">
                  <td className="px-4 py-2">{param.name}</td>
                  <td className="px-4 py-2">
                    <input
                      value={param.value}
                      onChange={(e) => handleParameterChange(index, e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </td>
                  <td className="px-4 py-2 text-blue-600">{param.type}</td>
                  <td className="px-4 py-2">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show Response Button */}
        <div className="text-center mb-8">
          <button 
            onClick={handleShowResponse}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Show Response"}
          </button>
        </div>

        {/* API Response */}
        {responseCode && (
          <>
            <div className="mb-6 text-center">
              <h3 className="text-base font-semibold text-gray-700 mb-2">Call</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs break-all">
                http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-700 mb-2">Response Code</h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs">
                  {responseCode}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-700 mb-2">Response Header</h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs">
                  {responseHeader}
                </div>
              </div>
            </div>

            {response && (
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-700 mb-2">Response Body</h3>
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg text-sm overflow-auto max-h-[400px] text-left">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ApiExplorer;

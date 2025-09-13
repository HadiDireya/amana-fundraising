import React from 'react';

// --- DATA: In a real Next.js app, this would come from getStaticProps or an API call ---
// Expanded to include full details from the original dataset and placeholder causes to match the stats.
const fundraisingData = {
  "message": "Amana Fundraising causes data retrieved successfully",
  "company_info": {
    "name": "Amana Fundraising",
    "founded": "2020",
    "headquarters": "Amman, Jordan",
    "industry": "Non-Profit Fundraising",
    "description": "Leading fundraising platform connecting donors with impactful causes across the Middle East, specializing in education, agriculture, and small business initiatives that create lasting change in communities."
  },
  "fundraising_stats": {
    "total_causes": 8,
    "active_causes": 7,
    "total_raised": 706640,
    "total_goal": 970000,
    "average_completion_rate": 74,
    "top_category": "Education",
    "total_donors": 359,
    "average_donation": 1923
  },
  "causes": [
    {
      "id": 1,
      "title": "Digital Classroom Initiative for Gaza Schools",
      "category": "Education",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Providing laptops, tablets, and internet connectivity to 500 students in Gaza.",
      "image_url": "https://placehold.co/600x400/3498db/ffffff?text=Education+For+Gaza",
      "location": { "city": "Gaza", "country": "Palestine" },
      "metrics": {
        "goal_amount": 75000,
        "raised_amount": 52340,
        "percentage_funded": 70,
        "donor_count": 37,
        "days_remaining": 32
      },
      "impact_metrics": { "beneficiaries": 500, "metric_description": "students will gain access to digital learning tools" }
    },
    {
      "id": 2,
      "title": "Vocational Training Center for Jordanian Youth",
      "category": "Education",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Establishing a modern vocational training center in Zarqa for 200 unemployed youth.",
      "image_url": "https://placehold.co/600x400/2ecc71/ffffff?text=Youth+Skills",
      "location": { "city": "Zarqa", "country": "Jordan" },
      "metrics": {
        "goal_amount": 120000,
        "raised_amount": 89500,
        "percentage_funded": 75,
        "donor_count": 50,
        "days_remaining": 49
      },
      "impact_metrics": { "beneficiaries": 200, "metric_description": "youth will gain technical skills for employment" }
    },
    {
      "id": 3,
      "title": "Sustainable Farming in the Jordan Valley",
      "category": "Agriculture",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Drought-resistant seeds and modern irrigation for 100 local farms.",
      "image_url": "https://placehold.co/600x400/f1c40f/ffffff?text=Farming",
      "location": { "city": "Jordan Valley", "country": "Jordan" },
      "metrics": {
        "goal_amount": 90000,
        "raised_amount": 63000,
        "percentage_funded": 70,
        "donor_count": 45,
        "days_remaining": 60
      },
      "impact_metrics": { "beneficiaries": 100, "metric_description": "farms will increase crop yield by 30%" }
    },
    {
      "id": 4,
      "title": "Micro-Loans for Women Entrepreneurs",
      "category": "Small Business",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Empowering female-led startups with seed funding and business mentorship.",
      "image_url": "https://placehold.co/600x400/9b59b6/ffffff?text=Startups",
      "location": { "city": "Amman", "country": "Jordan" },
      "metrics": {
        "goal_amount": 150000,
        "raised_amount": 125000,
        "percentage_funded": 83,
        "donor_count": 82,
        "days_remaining": 45
      },
      "impact_metrics": { "beneficiaries": 50, "metric_description": "women-led businesses will be launched" }
    },
    {
      "id": 5,
      "title": "Clean Water Access for Rural Villages",
      "category": "Health",
      "status": "Active",
      "urgency_level": "High",
      "short_description": "Installing water purification systems in 10 villages across the region.",
      "image_url": "https://placehold.co/600x400/1abc9c/ffffff?text=Clean+Water",
      "location": { "city": "Rural Area", "country": "Palestine" },
      "metrics": {
        "goal_amount": 60000,
        "raised_amount": 31000,
        "percentage_funded": 52,
        "donor_count": 61,
        "days_remaining": 70
      },
      "impact_metrics": { "beneficiaries": 5000, "metric_description": "people will have access to clean drinking water" }
    },
    {
      "id": 6,
      "title": "Winter Aid for Refugee Families",
      "category": "Humanitarian",
      "status": "Active",
      "urgency_level": "Critical",
      "short_description": "Providing warm clothing, blankets, and heating fuel for displaced families.",
      "image_url": "https://placehold.co/600x400/34495e/ffffff?text=Winter+Aid",
      "location": { "city": "Various", "country": "Middle East" },
      "metrics": {
        "goal_amount": 100000,
        "raised_amount": 95000,
        "percentage_funded": 95,
        "donor_count": 150,
        "days_remaining": 15
      },
      "impact_metrics": { "beneficiaries": 1000, "metric_description": "families will receive essential winter supplies" }
    },
     {
      "id": 7,
      "title": "Orphan Sponsorship Program",
      "category": "Social Welfare",
      "status": "Active",
      "urgency_level": "Medium",
      "short_description": "Providing education, healthcare, and support for orphaned children.",
      "image_url": "https://placehold.co/600x400/e74c3c/ffffff?text=Child+Care",
      "location": { "city": "Amman", "country": "Jordan" },
      "metrics": {
        "goal_amount": 250000,
        "raised_amount": 150000,
        "percentage_funded": 60,
        "donor_count": 98,
        "days_remaining": 120
      },
      "impact_metrics": { "beneficiaries": 250, "metric_description": "children will receive comprehensive care" }
    },
    {
      "id": 8,
      "title": "Rebuilding Homes in Conflict Zones",
      "category": "Reconstruction",
      "status": "Completed",
      "urgency_level": "Low",
      "short_description": "Funding the reconstruction of homes damaged by conflict.",
      "image_url": "https://placehold.co/600x400/7f8c8d/ffffff?text=Rebuilding",
      "location": { "city": "Gaza", "country": "Palestine" },
      "metrics": {
        "goal_amount": 125000,
        "raised_amount": 125000,
        "percentage_funded": 100,
        "donor_count": 123,
        "days_remaining": 0
      },
      "impact_metrics": { "beneficiaries": 40, "metric_description": "families will have their homes rebuilt" }
    }
  ]
};


// --- Helper Components & Icons ---

const DollarSignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 8v1m0-6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m-4.5-5a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
);

const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ChartPieIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);

const TagIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


// --- UI Components ---

const StatCard = ({ icon, title, value, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className={`p-3 rounded-full bg-${color}-100`}>{icon}</div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const CauseCard = ({ cause }) => {
    const { title, short_description, image_url, metrics, location, category, urgency_level, impact_metrics } = cause;
    const formattedRaised = metrics.raised_amount.toLocaleString();
    const formattedGoal = metrics.goal_amount.toLocaleString();

    const urgencyStyles = {
        'High': 'bg-red-100 text-red-800',
        'Medium': 'bg-yellow-100 text-yellow-800',
        'Low': 'bg-gray-100 text-gray-800',
        'Critical': 'bg-red-200 text-red-900 font-bold animate-pulse',
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
            <div className="relative">
                <img className="w-full h-56 object-cover" src={image_url} alt={title} />
                <span className={`absolute top-4 left-4 text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full ${urgencyStyles[urgency_level] || 'bg-gray-200 text-gray-800'}`}>
                    {urgency_level} Urgency
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        {category}
                    </span>
                    <span className="text-xs text-gray-500">{location.city}, {location.country}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-base mb-4 flex-grow">{short_description}</p>
                 <div className="text-sm text-gray-700 bg-gray-100 rounded-lg p-3 my-4">
                    <strong>Impact:</strong> {impact_metrics.beneficiaries.toLocaleString()} {impact_metrics.metric_description}
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-green-600">${formattedRaised} Raised</span>
                        <span className="text-sm font-medium text-gray-500">{metrics.percentage_funded}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${metrics.percentage_funded}%` }}></div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center border-t border-b py-3 my-4">
                    <div>
                        <p className="font-bold text-lg text-gray-800">{metrics.donor_count}</p>
                        <p className="text-xs text-gray-500">Donors</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-gray-800">${formattedGoal}</p>
                        <p className="text-xs text-gray-500">Goal</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-gray-800">{metrics.days_remaining}</p>
                        <p className="text-xs text-gray-500">Days Left</p>
                    </div>
                </div>
                
                <button className={`w-full font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${metrics.percentage_funded >= 100 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                    {metrics.percentage_funded >= 100 ? 'Fully Funded' : 'Donate Now'}
                </button>
            </div>
        </div>
    );
};

// --- Main Page Component ---

export default function AmanaFundraisingPage() {
    const { company_info, fundraising_stats, causes } = fundraisingData;
    const activeCauses = causes.filter(c => c.status === 'Active');

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto px-4 py-8 md:py-12">
                
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">{company_info.name}</h1>
                    <p className="max-w-3xl mx-auto text-gray-600">{company_info.description}</p>
                </header>

                {/* Stats Section */}
                <section className="mb-16">
                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Impact at a Glance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StatCard 
                            icon={<DollarSignIcon />}
                            title="Total Raised"
                            value={`$${fundraising_stats.total_raised.toLocaleString()}`}
                            color="green"
                        />
                         <StatCard 
                            icon={<TargetIcon />}
                            title="Fundraising Goal"
                            value={`$${fundraising_stats.total_goal.toLocaleString()}`}
                            color="purple"
                        />
                        <StatCard 
                            icon={<UsersIcon />}
                            title="Total Donors"
                            value={fundraising_stats.total_donors.toLocaleString()}
                            color="blue"
                        />
                        <StatCard 
                            icon={<DocumentTextIcon />}
                            title="Active Causes"
                            value={fundraising_stats.active_causes}
                            color="yellow"
                        />
                        <StatCard 
                            icon={<ChartPieIcon />}
                            title="Avg. Completion"
                            value={`${fundraising_stats.average_completion_rate}%`}
                            color="indigo"
                        />
                        <StatCard 
                            icon={<TagIcon />}
                            title="Top Category"
                            value={fundraising_stats.top_category}
                            color="pink"
                        />
                    </div>
                </section>

                {/* Causes Section */}
                <main>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Active Causes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {activeCauses.map(cause => (
                            <CauseCard key={cause.id} cause={cause} />
                        ))}
                    </div>
                </main>

                {/* Footer */}
                <footer className="text-center mt-16 text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {company_info.name}. All Rights Reserved.</p>
                    <p>Founded {company_info.founded} | {company_info.headquarters}</p>
                </footer>
            </div>
        </div>
    );
}


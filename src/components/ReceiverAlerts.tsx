export function ReceiverAlerts() {
    const alerts = [
        { id: '1', type: 'Critical', title: 'Cardiac Arrest', loc: '742 Evergreen Terrace', dist: '0.8 miles', time: '02:14' },
        { id: '2', type: 'High', title: 'Building Fire', loc: '1200 Industrial Way', dist: '2.4 miles', time: '05:45' },
        { id: '3', type: 'Medium', title: 'Welfare Check', loc: '45 Oak Street', dist: '1.2 miles', time: '08:20' },
    ];

    const typeColor = (type: string) => {
        if (type === 'Critical') return 'bg-red-100 text-red-700 border-red-200';
        if (type === 'High') return 'bg-orange-100 text-orange-700 border-orange-200';
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    };

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">3 Active Alerts</h2>
            <div className="space-y-4">
                {alerts.map(alert => (
                    <div key={alert.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex justify-between text-xs font-bold mb-2">
                            <span className={`px-2 py-0.5 rounded border ${typeColor(alert.type)}`}>{alert.type.toUpperCase()}</span>
                            <span className="text-gray-500">{alert.time} ELAPSED</span>
                        </div>
                        <h3 className="font-bold text-lg">{alert.title.toUpperCase()}</h3>
                        <p className="text-sm text-gray-600 mb-4">📍 {alert.loc} • {alert.dist}</p>
                        
                        <div className="flex gap-2">
                             <button className="flex-grow bg-red-600 text-white font-bold py-2 rounded">ACCEPT</button>
                             <button className="px-4 border border-gray-300 rounded">ⓘ</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

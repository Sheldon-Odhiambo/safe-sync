import { ClipboardList } from 'lucide-react';

export function AdminAuditLogs() {
  const logs = [
    { id: 'LOG-001', sender: 'Naivas Store #442', receiver: 'Unit 42', time: '14:20', duration: '4m 12s', status: 'Resolved' },
    { id: 'LOG-002', sender: 'Naivas Store #101', receiver: 'Unit 08', time: '13:50', duration: '6m 05s', status: 'Resolved' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ClipboardList /> Audit Logs</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Log ID</th>
            <th className="p-2">Sender</th>
            <th className="p-2">Receiver</th>
            <th className="p-2">Time</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id} className="border-b">
              <td className="p-2 font-mono text-sm">{log.id}</td>
              <td className="p-2">{log.sender}</td>
              <td className="p-2">{log.receiver}</td>
              <td className="p-2">{log.time}</td>
              <td className="p-2">{log.duration}</td>
              <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{log.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

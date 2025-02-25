import { Home, Files, Search, GitBranch, PlayCircle, Extensions, Settings } from 'lucide-react';

export default function VSCodeSidebar() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-16 flex flex-col items-center py-4 bg-gray-800 border-r border-gray-700">
        <IconButton icon={<Files size={24} />} label="Explorer" />
        <IconButton icon={<Search size={24} />} label="Search" />
        <IconButton icon={<GitBranch size={24} />} label="Source Control" />
        <IconButton icon={<PlayCircle size={24} />} label="Run & Debug" />
        <IconButton icon={<Extensions size={24} />} label="Extensions" />
        <div className="mt-auto">
          <IconButton icon={<Settings size={24} />} label="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-950">
        <h1 className="text-xl font-bold">VS Code Sidebar Clone</h1>
        <p className="text-gray-400">This is the main content area.</p>
      </div>
    </div>
  );
}

function IconButton({ icon, label }) {
  return (
    <div
      className="flex flex-col items-center p-3 hover:bg-gray-700 cursor-pointer"
      title={label}
    >
      {icon}
      <span className="text-xs mt-2">{label}</span>
    </div>
  );
}

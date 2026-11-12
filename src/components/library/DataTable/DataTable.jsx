'use client';

import React, { useState, useMemo } from 'react';

export default function DataTable({
  columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ],
  data = [
    { id: 'USR-01', name: 'Sophia Hayes', role: 'Lead Architect', status: 'Active' },
    { id: 'USR-02', name: 'Liam Vance', role: 'Frontend Engineer', status: 'Active' },
    { id: 'USR-03', name: 'Emma Watson', role: 'UI/UX Designer', status: 'Offline' },
    { id: 'USR-04', name: 'Noah Miller', role: 'DevOps Specialist', status: 'Active' },
    { id: 'USR-05', name: 'Olivia Dunn', role: 'Product Manager', status: 'Reviewing' },
  ],
  striped = true,
  searchable = true,
  className = '',
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const filteredData = useMemo(() => {
    let result = [...data];
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(q))
      );
    }
    if (sortConfig.key) {
      result.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [data, searchTerm, sortConfig]);

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {searchable && (
        <div className="flex justify-between items-center gap-4">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search records..."
            aria-label="Search data table"
            className="w-full max-w-xs rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          <span className="text-xs text-slate-500 shrink-0">
            {filteredData.length} of {data.length} records
          </span>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50/75 text-xs uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={`px-4 py-3 font-semibold ${
                    col.sortable ? 'cursor-pointer select-none hover:text-indigo-600 dark:hover:text-indigo-400' : ''
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.label}</span>
                    {col.sortable && (
                      <span className="text-[10px] opacity-70">
                        {sortConfig.key === col.key ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-slate-400">
                  No matching records found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className={`transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/60 ${
                    striped && idx % 2 === 1 ? 'bg-slate-50/40 dark:bg-slate-800/20' : ''
                  }`}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


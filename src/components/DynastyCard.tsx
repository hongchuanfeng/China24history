"use client";

import Link from "next/link";
import { Dynasty } from "@/data/dynasties";

interface DynastyCardProps {
  dynasty: Pick<Dynasty, 'id' | 'name' | 'startYear' | 'endYear' | 'description' | 'notableEmperors'> & {
    duration: string;
  };
}

export default function DynastyCard({ dynasty }: DynastyCardProps) {
  const formatYear = (year: number) => {
    return year > 0 ? `公元${year}年` : `公元前${Math.abs(year)}年`;
  };

  return (
    <Link href={`/dynasty/${dynasty.id}`}>
      <div className="dynasty-card relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer overflow-hidden group">
        {/* 装饰性背景 */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-100 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity" />

        {/* 朝代名称 */}
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <span className="seal text-xs px-2 py-1 rounded">{dynasty.name}</span>
        </h2>

        {/* 时间范围和国祚 */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="font-medium">
            {dynasty.startYear > 0 ? dynasty.startYear : Math.abs(dynasty.startYear) + " BCE"} —
            {dynasty.endYear > 0 ? dynasty.endYear : Math.abs(dynasty.endYear) + " BCE"}
          </span>
          <span className="text-red-600 font-medium">
            国祚 {Math.abs(dynasty.endYear - dynasty.startYear)} 年
          </span>
        </div>

        {/* 描述 */}
        <p className="text-gray-700 leading-relaxed line-clamp-3 text-sm">
          {dynasty.description}
        </p>

        {/* 皇帝列表 */}
        {dynasty.notableEmperors && dynasty.notableEmperors.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">重要皇帝</h3>
            <div className="space-y-2">
              {dynasty.notableEmperors.slice(0, 3).map((emperor, index) => (
                <div key={index} className="text-xs text-gray-600">
                  <span className="font-medium text-gray-800">{emperor.name}</span>
                  <span className="text-gray-400 mx-1">·</span>
                  <span>{emperor.reign}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 悬停提示 */}
        <div className="mt-4 text-red-800 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          查看详情
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

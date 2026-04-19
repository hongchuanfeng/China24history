import { notFound } from "next/navigation";
import { dynasties } from "@/data/dynasties";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// 生成静态参数
export function generateStaticParams() {
  return dynasties.map((dynasty) => ({
    id: dynasty.id,
  }));
}

export default async function DynastyPage({ params }: PageProps) {
  const { id } = await params;
  const dynasty = dynasties.find((d) => d.id === id);

  if (!dynasty) {
    notFound();
  }

  const formatYear = (year: number) => {
    return year > 0 ? `公元${year}年` : `公元前${Math.abs(year)}年`;
  };

  // 将皇帝事件转换为时间轴事件格式
  const emperorEvents =
    dynasty.allEmperors?.map((emperor) => {
      // 解析在位时间，格式如："1368年-1398年" 或 "约公元前2070年-前2025年"
      const reignStr = emperor.reign.replace(/[约]/g, "").trim();
      const parts = reignStr.split(/[–-]/);

      if (parts.length < 2) return [];

      const parseYear = (str: string): number => {
        // 检查是否包含"前"或"BCE"
        const isBCE = str.includes("前") || str.includes("BCE") || str.includes("公元前");
        // 提取所有数字
        const numbers = str.match(/\d+/g);
        if (!numbers || numbers.length === 0) return NaN;
        const year = parseInt(numbers[0]);
        return isBCE ? -year : year;
      };

      const startYear = parseYear(parts[0]);
      const endYear = parseYear(parts[1]);

      const events: Array<{
        year: number;
        title: string;
        description: string;
        type: "emperor";
      }> = [];

      if (!isNaN(startYear)) {
        events.push({
          year: startYear,
          title: `${emperor.name} 登基`,
          description: `${emperor.name} 即位为帝`,
          type: "emperor",
        });
      }

      if (!isNaN(endYear)) {
        events.push({
          year: endYear,
          title: `${emperor.name} 驾崩/退位`,
          description: `${emperor.name} 结束在位`,
          type: "emperor",
        });
      }

      return events;
    }).flat() || [];

  // 合并重大事件和皇帝事件，按时间排序
  const allEvents = [
    ...(dynasty.keyEvents || []).map((event) => ({
      ...event,
      type: "event" as const,
    })),
    ...emperorEvents,
  ].sort((a, b) => a.year - b.year);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* 英雄区域 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-red-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          {/* 返回按钮 */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回时间轴
          </Link>

          {/* 朝代标题 */}
          <div className="text-center">
            <div className="inline-block seal text-3xl md:text-4xl px-8 py-3 mb-4">
              {dynasty.name}
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-4 text-amber-100">
              {dynasty.startYear > 0 ? dynasty.startYear : Math.abs(dynasty.startYear) + " BCE"}
              {" — "}
              {dynasty.endYear > 0 ? dynasty.endYear : Math.abs(dynasty.endYear) + " BCE"}
            </div>
            <p className="text-lg text-amber-50 max-w-3xl mx-auto leading-relaxed">
              {dynasty.description}
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧：基本信息 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 朝代信息卡片 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  基本信息
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-gray-500 text-sm">国号</dt>
                    <dd className="text-lg font-semibold">{dynasty.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-sm">存在时间</dt>
                    <dd className="text-lg font-semibold">
                      {formatYear(dynasty.startYear)} - {formatYear(dynasty.endYear)}
                    </dd>
                  </div>
                  {dynasty.capital && (
                    <div>
                      <dt className="text-gray-500 text-sm">都城</dt>
                      <dd className="text-lg font-semibold">{dynasty.capital}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-500 text-sm">享国</dt>
                    <dd className="text-lg font-semibold">
                      {Math.abs(dynasty.endYear - dynasty.startYear)} 年
                    </dd>
                  </div>
                </dl>
              </div>

              {/* 著名皇帝 */}
              {dynasty.notableEmperors && dynasty.notableEmperors.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    著名皇帝
                  </h3>
                  <div className="space-y-4">
                    {dynasty.notableEmperors.map((emperor, idx) => (
                      <div key={idx} className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-bold text-gray-800">{emperor.name}</h4>
                        <p className="text-sm text-gray-500 mb-1">{emperor.reign}</p>
                        <p className="text-sm text-gray-600">{emperor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 著名将领 */}
              {dynasty.notableGenerals && dynasty.notableGenerals.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3-6h-6.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    著名将领
                  </h3>
                  <div className="space-y-4">
                    {dynasty.notableGenerals.map((general, idx) => (
                      <div key={idx} className="border-l-4 border-amber-500 pl-4">
                        <h4 className="font-bold text-gray-800">{general.name}</h4>
                        <p className="text-sm text-amber-600 mb-1">{general.era}</p>
                        <p className="text-sm text-gray-600">{general.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 著名宰相/名臣 */}
              {dynasty.notableOfficials && dynasty.notableOfficials.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    著名宰相/名臣
                  </h3>
                  <div className="space-y-4">
                    {dynasty.notableOfficials.map((official, idx) => (
                      <div key={idx} className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-bold text-gray-800">{official.name}</h4>
                        <p className="text-sm text-green-600 mb-1">{official.era}</p>
                        <p className="text-sm text-gray-600">{official.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 右侧：重大事件时间线 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-red-100">
                <h3 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-2">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  重大事件
                </h3>

                {allEvents.length > 0 ? (
                  <div className="relative">
                    {/* 垂直时间线 */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-amber-400 to-red-400 hidden md:block" />

                    <div className="space-y-8">
                      {allEvents.map((event, idx) => (
                        <div key={idx} className="relative pl-12 md:pl-16">
                          {/* 时间点圆圈 */}
                          <div className={`absolute left-0 top-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white shadow-lg hidden md:flex ${
                            event.type === "emperor"
                              ? "bg-gradient-to-br from-amber-500 to-amber-700"
                              : "bg-gradient-to-br from-red-500 to-red-700"
                          }`}>
                            {idx + 1}
                          </div>

                          {/* 事件卡片 */}
                          <div className={`rounded-lg p-5 border hover:shadow-md transition-shadow ${
                            event.type === "emperor"
                              ? "bg-gradient-to-r from-amber-50/50 to-white border-amber-100"
                              : "bg-gradient-to-r from-amber-50/50 to-white border-amber-100"
                          }`}>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <span className={`inline-block text-xs px-3 py-1 rounded ${
                                event.type === "emperor"
                                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white seal"
                                  : "seal"
                              }`}>
                                {formatYear(event.year)}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                              {event.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">暂无重大事件记录</p>
                )}
              </div>
            </div>
          </div>

          {/* 相关朝代导航 */}
          <div className="mt-12 pt-8 border-t border-red-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">相关朝代</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-full text-sm font-medium transition-colors"
              >
                查看全部
              </Link>
              {dynasties
                .filter((d) => d.id !== dynasty.id)
                .slice(0, 6)
                .map((d) => (
                  <Link
                    key={d.id}
                    href={`/dynasty/${d.id}`}
                    className="px-4 py-2 bg-white hover:bg-amber-50 border border-amber-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

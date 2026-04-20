"use client";

import { dynasties } from "@/data/dynasties";
import DynastyCard from "@/components/DynastyCard";

export default function Home() {
  // 计算时间轴的中点（用于视觉平衡）
  const midPoint = Math.floor(dynasties.length / 2);

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* 装饰背景 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="seal text-2xl px-6 py-2">中国24史</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-800 bg-clip-text text-transparent">
                传道AI之中国24史
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              五千年的文明积淀，二十四朝的兴衰更替。在这里，您将穿越时空，探索中华文明的源远流长。
            </p>
          </div>

          {/* 时间轴标题 */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              历史时间轴
            </h2>
            <p className="text-gray-500">点击朝代查看详细信息</p>
          </div>

          {/* 时间轴布局 */}
          <div className="relative">
            {/* 中央时间线 */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-amber-500 to-red-600" />

            {/* 朝代卡片列表 - 单列布局 */}
            <div className="space-y-6 lg:space-y-8">
              {dynasties.map((dynasty, index) => {
                return (
                  <div
                    key={dynasty.id}
                    className="relative pl-8 md:pl-16"
                  >
                    {/* 时间轴连接点 */}
                    <div className="absolute left-4 md:left-8 top-8 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2" />

                    {/* 朝代卡片 */}
                    <DynastyCard
                      dynasty={{
                        ...dynasty,
                        duration: `${dynasty.startYear > 0 ? '+' + dynasty.startYear : dynasty.startYear}年 — ${dynasty.endYear > 0 ? '+' + dynasty.endYear : dynasty.endYear}年`,
                      }}
                    />

                    {/* 朝代年份标识（辅助显示） */}
                    <div className="mt-3 text-center">
                      <span className="inline-block seal text-xs px-3 py-1">
                        {dynasty.startYear > 0 ? dynasty.startYear : Math.abs(dynasty.startYear) + " BCE"}
                        {" — "}
                        {dynasty.endYear > 0 ? dynasty.endYear : Math.abs(dynasty.endYear) + " BCE"}
                        {" | "}
                        国祚 {Math.abs(dynasty.endYear - dynasty.startYear)} 年
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 简介区域 */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">关于中国24史</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              "中国24史"并非指二十四个独立的历史，而是中国历代官修正史的总称。从《史记》到《明史》，二十四部史书记载了从上古黄帝时代到明朝末年长达四千余年的中华文明史。
            </p>
            <p className="mb-4">
              本网站按时间轴方式系统地呈现中国历史上的各个朝代，从夏、商、周到秦、汉、唐，再到宋、元、明、清，让您一目了然地了解每个朝代的起止时间、重要事件和杰出人物。
            </p>
            <p>
              传道AI致力于用现代科技传承中华优秀传统文化，让历史知识触手可及。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

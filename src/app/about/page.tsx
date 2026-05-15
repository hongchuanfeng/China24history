export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">关于我们</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">传道AI · 让历史触手可及</p>
        </div>

        {/* 项目介绍 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-800">传道AI之中国24史</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              我们是一个致力于传播中华优秀传统文化的在线平台。"中国24史"项目由传道AI团队开发和维护，旨在以现代、直观的方式向全球华人及对中国历史文化感兴趣的朋友们介绍中国悠久的历史。
            </p>
            <p>
              中华文明是世界上延续时间最长的文明之一，五千年历史积淀了无数智慧与精神财富。然而，浩如烟海的历史文献对许多人来说门槛较高。我们的使命是用现代技术手段降低历史学习的门槛，让每个人都能轻松理解和欣赏中国历史的魅力。
            </p>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { number: "5000+", label: "年历史跨度", icon: "📜" },
            { number: "24", label: "部正史收录", icon: "📚" },
            { number: "10+", label: "个朝代更替", icon: "🏛️" },
            { number: "100+", label: "位历史人物", icon: "👤" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-red-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-red-700 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 核心价值 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </span>
            核心价值
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "传承文化",
                desc: "致力于中华优秀传统文化的传承与传播，让历史智慧薪火相传",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
              },
              {
                title: "普惠大众",
                desc: "降低历史学习门槛，让每个人都能轻松了解中华文明的博大精深",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                title: "开放共享",
                desc: "所有内容免费向公众开放，知识共享是我们的坚定承诺",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50/50 to-amber-50/50 rounded-xl p-6 border border-red-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 网站特色 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            网站特色
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "时间轴展示",
                desc: "按时间顺序清晰呈现24朝代的更替，从上古时期到明清末年，脉络清晰，一目了然",
                icon: "📅",
              },
              {
                title: "详细信息",
                desc: "每个朝代包含重大历史事件、著名帝王将相、文化名人等丰富内容",
                icon: "📖",
              },
              {
                title: "响应式设计",
                desc: "完美适配PC端、平板和移动端设备，随时随地畅享历史之旅",
                icon: "📱",
              },
              {
                title: "免费开放",
                desc: "所有内容免费向公众开放，无需注册即可浏览学习",
                icon: "🎁",
              },
              {
                title: "持续更新",
                desc: "团队持续完善内容，不断添加新的历史资料和人物介绍",
                icon: "🔄",
              },
              {
                title: "学术严谨",
                desc: "内容参考权威史料，确保历史信息的准确性和可信度",
                icon: "✅",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50/30 transition-colors">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 发展历程 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            发展历程
          </h2>
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-amber-500" />
            
            <div className="space-y-8">
              {[
                { year: "2024", event: "项目启动", desc: "传道AI团队正式启动中国24史项目，开始系统整理历史资料" },
                { year: "2025", event: "网站上线", desc: "中国24史网站正式发布，提供基础的历史时间轴浏览功能" },
                { year: "2025", event: "功能完善", desc: "新增朝代详情页、皇帝在位时间、历史人物介绍等功能" },
                { year: "2026", event: "持续迭代", desc: "不断优化用户体验，丰富内容资源，打造优质历史文化平台" },
              ].map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 top-1 w-4 h-4 bg-white border-2 border-red-600 rounded-full" />
                  <div className="bg-gradient-to-br from-red-50/50 to-amber-50/50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">{item.year}年</span>
                      <span className="font-bold text-gray-800">{item.event}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 技术架构 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            技术架构
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Next.js", desc: "现代化的 React 框架，提供优秀的 SEO 和用户体验", color: "from-gray-800 to-gray-600" },
              { name: "TypeScript", desc: "类型安全的 JavaScript 超集，确保代码质量", color: "from-blue-600 to-blue-400" },
              { name: "Tailwind CSS", desc: "高效的原子化 CSS 框架，快速构建精美界面", color: "from-cyan-500 to-teal-400" },
              { name: "Vercel", desc: "专业的前端云平台，提供全球 CDN 加速服务", color: "from-gray-900 to-black" },
            ].map((tech, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {tech.name.split('').slice(0, 2).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 资料来源 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            资料来源
          </h2>
          <div className="bg-gradient-to-br from-red-50/50 to-amber-50/50 rounded-xl p-6 border border-red-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              本网站的历史资料主要来源于以下权威渠道：
            </p>
            <ul className="space-y-3">
              {[
                "二十四史（史记、汉书、后汉书、三国志、晋书、宋书、南齐书、梁书、陈书、魏书、北齐书、周书、隋书、南史、北史、旧唐书、新唐书、旧五代史、新五代史、宋史、辽史、金史、元史、新元史、明史）",
                "《中国通史》等权威史学著作",
                "各朝代专业史料和考古研究成果",
              ].map((source, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{source}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm mt-4 pt-4 border-t border-red-100">
              注：本网站所提供的内容仅供学习参考，如有疏漏或争议之处，欢迎批评指正。
            </p>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            联系我们
          </h2>
          <p className="text-red-100 mb-6 leading-relaxed">
            如果您有任何建议、意见或合作意向，欢迎通过以下方式联系我们。我们期待与您共同探讨中华历史文化的传承与发展。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-amber-300 text-sm mb-1">电子邮箱</div>
              <div className="font-medium">support@zorezoro.com</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-amber-300 text-sm mb-1">公司地址</div>
              <div className="font-medium">深圳市龙华区龙华大道130栋</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-amber-300 text-sm mb-1">工作时间</div>
              <div className="font-medium">周一至周五 9:00-18:00</div>
            </div>
          </div>
        </div>

        {/* 回到首页按钮 */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
}

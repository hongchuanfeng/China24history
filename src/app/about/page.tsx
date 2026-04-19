export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">关于我们</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-red-800 mb-4">传道AI之中国24史</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              我们是一个致力于传播中华优秀传��文化的在线平台。"中国24史"项目由传道AI团队开发和维护，旨在以现代、直观的方式向全球华人及对中国历史文化感兴趣的朋友们介绍中国悠久的历史。
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">我们的使命</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              中华文明是世界上延续时间最长的文明之一，五千年历史积淀了无数智慧与精神财富。然而，浩如烟海的历史文献对许多人来说门槛较高。我们的使命是用现代技术手段降低历史学习的门槛，让每个人都能轻松理解和欣赏中国历史的魅力。
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">网站特色</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>时间轴展示</strong>：按时间顺序清晰呈现24朝代的更替</li>
              <li><strong>详细信息</strong>：每个朝代包含重大事件、著名人物介绍</li>
              <li><strong>响应式设计</strong>：完美适配PC端和移动端设备</li>
              <li><strong>免费开放</strong>：所有内容免费向公众开放</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-3">技术支撑</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              本网站基于 Next.js 框架构建，采用 Tailwind CSS 进行样式设计，确保快速加载和优秀的用户体验。我们充分利用现代 Web 技术，为用户提供流畅的浏览体验。
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">联系我们</h3>
            <p className="text-gray-700 leading-relaxed">
              如果您有任何建议、意见或合作意向，欢迎通过以下方式联系我们：
            </p>
            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="mb-2"><strong>邮箱：</strong>support@zorezoro.com</p>
              <p><strong>地址：</strong>深圳市龙华区龙华大道130栋</p>
            </div>
          </div>
        </div>

        {/* 回到首页按钮 */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all shadow-md"
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

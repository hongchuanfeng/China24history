export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">联系我们</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            我们期待与您交流，共同探讨中华历史文化的传承与发展
          </p>
        </div>

        {/* 联系方式总览 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              ),
              title: "电子邮箱",
              value: "support@zorezoro.com",
              desc: "24小时内回复",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </>
              ),
              title: "联系电话",
              value: "",
              desc: "工作日 9:00-18:00",
              color: "from-green-500 to-green-600",
            },
            {
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              ),
              title: "公司地址",
              value: "深圳市龙华区龙华大道130栋",
              desc: "欢迎预约来访",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </>
              ),
              title: "工作时间",
              value: "周一至周五",
              desc: "9:00 - 18:00",
              color: "from-purple-500 to-purple-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-red-100 hover:shadow-xl transition-shadow group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-sm text-gray-500 mb-1">{item.title}</h3>
              <p className="font-bold text-gray-800 mb-1">{item.value}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 主体内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* 左侧：联系表单说明 */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-800">在线留言</h2>
                <p className="text-gray-500 text-sm">填写表单，我们会尽快与您联系</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* 联系表单 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-red-600">*</span> 您的姓名
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-red-600">*</span> 电子邮箱
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="请输入您的邮箱"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-red-600">*</span> 联系电话
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="请输入您的电话（选填）"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <span className="text-red-600">*</span> 咨询类型
                    </span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none">
                    <option value="">请选择咨询类型</option>
                    <option value="suggestion">网站建议</option>
                    <option value="cooperation">商务合作</option>
                    <option value="content">内容纠错</option>
                    <option value="technical">技术支持</option>
                    <option value="other">其他咨询</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-red-600">*</span> 留言内容
                  </span>
                </label>
                <textarea
                  rows={5}
                  placeholder="请详细描述您的问题或建议..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500" />
                <label htmlFor="privacy" className="text-gray-600 text-sm">
                  我已阅读并同意 <a href="/privacy" className="text-red-600 hover:underline">《隐私政策》</a> 和 <a href="/terms" className="text-red-600 hover:underline">《服务条款》</a>
                </label>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                提交留言
              </button>

              <p className="text-center text-gray-500 text-sm">
                我们承诺保护您的个人信息，详情请参阅 <a href="/privacy" className="text-red-600 hover:underline">隐私政策</a>
              </p>
            </div>
          </div>

          {/* 右侧：联系信息和快速链接 */}
          <div className="space-y-6">
            {/* 关于网站 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                网站信息
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">网站名称</span>
                  <span className="font-medium text-gray-800">中国24史</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">运营主体</span>
                  <span className="font-medium text-gray-800">传道AI</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">网站域名</span>
                  <a href="https://china.zorezoro.com" className="text-red-600 hover:underline text-sm">china.zorezoro.com</a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500">备案号</span>
                  <span className="font-medium text-gray-800 text-sm">粤ICP备18041392号-7</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500">上线时间</span>
                  <span className="font-medium text-gray-800">2025年</span>
                </div>
              </div>
            </div>

            {/* 咨询类型说明 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                咨询类型说明
              </h3>
              <div className="space-y-3">
                {[
                  { type: "网站建议", desc: "对网站功能、内容、体验等方面的改进建议", icon: "💡" },
                  { type: "商务合作", desc: "媒体采访、资源置换、商业合作等洽谈", icon: "🤝" },
                  { type: "内容纠错", desc: "历史内容错误或不准确的指正", icon: "✏️" },
                  { type: "技术支持", desc: "网站使用过程中遇到的技术问题", icon: "🔧" },
                  { type: "其他咨询", desc: "不在以上类别的问题或建议", icon: "📝" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <span className="font-medium text-gray-800 text-sm">{item.type}</span>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 快速链接 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                快速链接
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "关于我们", href: "/about", icon: "👥" },
                  { name: "隐私政策", href: "/privacy", icon: "🔒" },
                  { name: "服务条款", href: "/terms", icon: "📜" },
                  { name: "免责声明", href: "/disclaimer", icon: "⚠️" },
                  { name: "版权声明", href: "/copyright", icon: "©" },
                  { name: "返回首页", href: "/", icon: "🏠" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors text-sm"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100 mb-12">
          <h2 className="text-2xl font-bold text-red-800 mb-8 flex items-center gap-3">
            <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            常见问题
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "网站的资料来源是什么？",
                a: "本网站的历史资料主要来源于二十四史、《中国通史》等权威史学著作，以及各朝代专业史料和考古研究成果。",
                icon: "📚",
              },
              {
                q: "网站内容可以转载或引用吗？",
                a: "本网站部分内容受版权保护，如需转载请提前联系我们获得授权。标注来源后可作为学习参考使用。",
                icon: "📋",
              },
              {
                q: "发现内容有错误怎么办？",
                a: "如果您发现任何历史内容存在错误或不准确之处，欢迎通过邮件或留言功能反馈，我们会及时核实并修正。",
                icon: "✏️",
              },
              {
                q: "如何与传道AI进行商务合作？",
                a: "我们欢迎各类商务合作，包括但不限于内容授权、品牌合作、资源置换等。请通过邮件详细说明合作意向。",
                icon: "🤝",
              },
              {
                q: "网站会持续更新内容吗？",
                a: "会的，传道AI团队会持续完善网站内容，不断添加新的历史资料、人物介绍和历史事件，丰富您的学习体验。",
                icon: "🔄",
              },
              {
                q: "如何在其他平台关注我们？",
                a: "您可以通过网站底部的社交媒体链接关注我们，也可以订阅我们的 newsletter 获取最新更新通知。",
                icon: "📢",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50/30 to-amber-50/30 rounded-xl p-5 border border-red-100">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{faq.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 地图区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100 mb-12">
          <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </span>
            公司位置
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 地图占位 */}
            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl h-64 flex items-center justify-center border border-red-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl" />
              </div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">深圳市龙华区龙华大道130栋</p>
                <p className="text-gray-500 text-sm mt-2">可通过地图应用导航前往</p>
              </div>
            </div>

            {/* 交通指引 */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-800 text-lg mb-4">交通指引</h3>
              {[
                { type: "地铁", desc: "地铁4号线龙华站下车，步行约10分钟即可到达", icon: "🚇" },
                { type: "公交", desc: "乘坐M212、M263、M352等线路，在龙华大道附近站点下车", icon: "🚌" },
                { type: "自驾", desc: "导航搜索「龙华大道130栋」，附近有公共停车场", icon: "🚗" },
                { type: "飞机", desc: "深圳宝安机场乘坐地铁11号线转4号线，全程约60分钟", icon: "✈️" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="font-bold text-gray-800">{item.type}</span>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 响应承诺 */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">服务承诺</h2>
            <p className="text-red-100">我们重视每一位用户的反馈</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "快速响应", desc: "工作时间内，邮件和留言将在24小时内得到回复", icon: "⚡" },
              { title: "认真对待", desc: "每一条反馈都会被仔细阅读和评估，确保问题得到妥善处理", icon: "✅" },
              { title: "持续改进", desc: "根据用户反馈不断优化网站内容和功能，提升用户体验", icon: "📈" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-red-100 text-sm">{item.desc}</p>
              </div>
            ))}
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

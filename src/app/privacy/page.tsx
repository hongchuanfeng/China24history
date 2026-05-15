export default function PrivacyPage() {
  const lastUpdate = "2026年5月15日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">隐私政策</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-500">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 隐私承诺 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">我们的隐私承诺</h3>
              <p className="text-gray-700 leading-relaxed">
                传道AI之中国24史高度重视您的个人隐私保护。我们承诺：在未经您明确同意的情况下，绝不会收集、出售或共享您的个人信息。您的信任是我们最宝贵的财富。
              </p>
            </div>
          </div>
        </div>

        {/* 隐私概览卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "信息收集", value: "最小化原则", icon: "📊", color: "from-blue-500 to-blue-600" },
            { label: "数据安全", value: "多重保护", icon: "🔒", color: "from-green-500 to-green-600" },
            { label: "用户权利", value: "完全掌控", icon: "👤", color: "from-purple-500 to-purple-600" },
            { label: "第三方共享", value: "绝不出售", icon: "🚫", color: "from-red-500 to-red-600" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-red-100 text-center">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-2xl text-white">{item.icon}</span>
              </div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-bold text-gray-800 text-sm mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* 主体内容 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <div className="space-y-10">
            {/* 第一部分：引言 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-red-800">引言</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  传道AI之中国24史网站（以下简称"本网站"）非常重视用户的个人隐私和个人信息保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息，以及您享有的相关权利。
                </p>
                <p>
                  请您在使用本网站之前仔细阅读本隐私政策的全部内容。如果您对本隐私政策有任何疑问，请通过文末的联系方式与我们联系。
                </p>
                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-700">政策范围：</strong>本隐私政策适用于您对本网站的所有访问行为，包括浏览、查询等功能服务。
                  </p>
                </div>
              </div>
            </section>

            {/* 第二部分：信息收集 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-red-800">信息收集</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们遵循"最小化原则"收集信息，仅收集为提供服务所必需的信息。我们收集的信息可分为以下两类：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📊</span>
                      <h4 className="font-bold text-blue-800">非个人信息</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "浏览器类型和版本",
                        "操作系统信息",
                        "访问时间和页面浏览量",
                        "访问页面路径和停留时长",
                        "IP地址（脱敏处理后）",
                        "设备类型（移动端/PC端）",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-blue-600 mt-3 italic">用于网站统计和性能优化</p>
                  </div>
                  <div className="bg-green-50/50 rounded-xl p-5 border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📝</span>
                      <h4 className="font-bold text-green-800">主动提供信息</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "留言反馈内容（如果您提交）",
                        "联系方式（仅用于回复）",
                        "咨询问题内容",
                        "反馈建议内容",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-green-600 mt-3 italic">仅在您主动提交时收集</p>
                  </div>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-amber-700">我们不收集：</strong>姓名、身份证号、银行卡号、密码等敏感个人信息。本网站为公开浏览平台，大部分功能无需注册账户即可使用。
                  </p>
                </div>
              </div>
            </section>

            {/* 第三部分：信息使用 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-red-800">信息使用</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们收集的信息仅用于以下目的，绝不会用于与以下目的无关的用途：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "🔧", title: "服务优化", desc: "分析用户行为，提升网站性能和用户体验", color: "from-blue-500 to-blue-600" },
                    { icon: "📈", title: "数据分析", desc: "统计访问量，优化内容结构和展示方式", color: "from-green-500 to-green-600" },
                    { icon: "🔒", title: "安全保障", desc: "监测异常访问，防止网络攻击和数据泄露", color: "from-purple-500 to-purple-600" },
                    { icon: "📋", title: "合规要求", desc: "遵守法律法规，保存必要的日志记录", color: "from-orange-500 to-orange-600" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 第四部分：Cookie 使用 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-red-800">Cookie 使用</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Cookie 是网站存储在您设备上的小型文本文件，用于记录您的偏好设置和访问状态。
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">我们使用的 Cookie 类型</h4>
                  <div className="space-y-3">
                    {[
                      { type: "必要 Cookie", desc: "确保网站基本功能正常运行，如页面导航", required: true },
                      { type: "功能 Cookie", desc: "记住您的偏好设置，如界面语言、显示模式", required: false },
                      { type: "统计 Cookie", desc: "帮助我们了解用户如何访问和使用网站", required: false },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 ${item.required ? 'bg-red-500' : 'bg-blue-500'}`}>
                          {item.required ? '必' : '选'}
                        </span>
                        <div>
                          <span className="font-medium text-gray-800">{item.type}</span>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200">
                  <h4 className="font-bold text-gray-800 mb-2">Cookie 管理</h4>
                  <p className="text-sm text-gray-700">
                    您可以通过浏览器设置拒绝 Cookie 或在 Cookie 被创建时收到通知。但请注意，禁用 Cookie 可能影响某些功能的正常使用。
                  </p>
                </div>
              </div>
            </section>

            {/* 第五部分：第三方服务 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-red-800">第三方服务</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  为提供更好的服务，本网站可能使用以下第三方服务。请放心，我们仅使用符合隐私法规要求的可靠服务。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "📊", name: "网站分析", providers: ["Google Analytics", "百度统计"], purpose: "匿名统计访问数据" },
                    { icon: "☁️", name: "CDN 加速", providers: ["Vercel", "Cloudflare"], purpose: "提升页面加载速度" },
                    { icon: "🔒", name: "安全防护", providers: ["网站防火墙"], purpose: "防止恶意攻击和入侵" },
                    { icon: "📝", name: "字体服务", providers: ["Google Fonts"], purpose: "提供更好的阅读体验" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.purpose}</p>
                      <p className="text-xs text-gray-500">
                        <strong>服务商：</strong>{item.providers.join('、')}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50/50 rounded-xl p-4 border border-red-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-red-700">重要承诺：</strong>我们绝不会将您的任何个人信息出售、共享或提供给广告商或其他第三方机构。
                  </p>
                </div>
              </div>
            </section>

            {/* 第六部分：信息保护 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-red-800">信息保护</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们采用多种技术和管理措施来保护您的信息安全：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: "🛡️", title: "技术防护", items: ["HTTPS 加密传输", "防火墙保护", "入侵检测系统", "定期安全扫描"] },
                    { icon: "🔑", title: "访问控制", items: ["最小权限原则", "操作日志记录", "定期权限审查", "多因素认证"] },
                    { icon: "📋", title: "管理制度", items: ["员工保密协议", "安全培训", "应急预案", "定期审计"] },
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <ul className="space-y-1">
                        {item.items.map((i, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-amber-700">安全提示：</strong>虽然我们采取了严格的安全措施，但请注意互联网传输并非绝对安全。我们无法保证信息在传输过程中的绝对安全性，感谢您的理解。
                  </p>
                </div>
              </div>
            </section>

            {/* 第七部分：用户权利 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-red-800">您的权利</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  作为用户，您对您的个人信息享有以下权利：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "👁️", title: "知情权", desc: "了解我们收集哪些信息及如何使用的权利" },
                    { icon: "🔍", title: "查阅权", desc: "请求查阅我们持有的您的个人信息的权利" },
                    { icon: "✏️", title: "更正权", desc: "要求更正不准确个人信息的权利" },
                    { icon: "🗑️", title: "删除权", desc: "在特定情况下要求删除个人信息的权利" },
                    { icon: "🚫", title: "拒绝权", desc: "拒绝我们处理您个人信息的权利" },
                    { icon: "💬", title: "投诉权", desc: "就个人信息处理向监管机构投诉的权利" },
                  ].map((item, index) => (
                    <div key={index} className="bg-green-50/30 rounded-xl p-4 border border-green-100 flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic">
                  如需行使上述任何权利，请通过文末的联系方式与我们联系。我们将在法律规定的时限内回复您的请求。
                </p>
              </div>
            </section>

            {/* 第八部分：未成年人保护 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-red-800">未成年人保护</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站是一个历史文化教育平台，内容适合所有年龄段用户阅读和学习。
                </p>
                <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-3">我们的承诺</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "我们不会故意收集或存储未成年人的个人信息",
                      "未满14周岁的未成年人在监护人同意下使用本网站",
                      "我们鼓励家长和监护人关注孩子的网络使用情况",
                      "如发现未成年人信息被误收集，我们将立即删除",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  如果您是未成年人，请在使用本网站前告知您的家长或监护人，并在他们的陪同下阅读本隐私政策。
                </p>
              </div>
            </section>

            {/* 第九部分：信息存储 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  9
                </div>
                <h2 className="text-2xl font-bold text-red-800">信息存储与保留</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们仅在实现收集目的所必需的期限内保留您的信息：
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="space-y-4">
                    {[
                      { type: "访问日志", period: "保留30天", reason: "用于安全分析和故障排查" },
                      { type: "统计汇总", period: "保留2年", reason: "用于趋势分析和报告" },
                      { type: "用户留言", period: "保留至您要求删除", reason: "仅用于回复您的咨询" },
                      { type: "错误报告", period: "保留90天", reason: "用于问题诊断和修复" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <div>
                          <span className="font-medium text-gray-800">{item.type}</span>
                          <p className="text-gray-500 text-sm">{item.reason}</p>
                        </div>
                        <span className="text-red-600 font-bold text-sm whitespace-nowrap ml-4">{item.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 第十部分：政策更新 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  10
                </div>
                <h2 className="text-2xl font-bold text-red-800">政策更新</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们可能会不时更新本隐私政策，以反映法律法规的变化或网站服务的变更。
                </p>
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">更新通知方式</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 在本页面顶部显著位置标注最新更新日期</li>
                        <li>• 对于重大变更，将通过网站公告通知用户</li>
                        <li>• 继续使用网站即表示接受更新后的政策</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第十一部分：联系我们 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  11
                </div>
                <h2 className="text-2xl font-bold text-red-800">联系我们</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  如您对本隐私政策有任何疑问、意见或建议，或者希望行使您的数据主体权利，请通过以下方式联系我们：
                </p>
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-2">📧</div>
                      <p className="text-red-200 text-sm">电子邮箱</p>
                      <p className="font-medium mt-1">support@zorezoro.com</p>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-2">📍</div>
                      <p className="text-red-200 text-sm">公司地址</p>
                      <p className="font-medium mt-1">深圳市龙华区龙华大道130栋</p>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="text-3xl mb-2">⏰</div>
                      <p className="text-red-200 text-sm">响应时间</p>
                      <p className="font-medium mt-1">1-2个工作日内回复</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  我们珍视您的每一个反馈，会在法律规定的时限内认真处理您的请求。
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* 快速链接 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">相关法律文件</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "服务条款", href: "/terms", icon: "📜" },
              { name: "免责声明", href: "/disclaimer", icon: "⚠️" },
              { name: "版权声明", href: "/copyright", icon: "©" },
              { name: "关于我们", href: "/about", icon: "👥" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                <span>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* 回到首页按钮 */}
        <div className="mt-8 text-center">
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

export default function TermsPage() {
  const lastUpdate = "2026年5月15日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">服务条款</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-500">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 条款概述 */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">条款概述</h2>
          <p className="text-red-100 text-center mb-6">欢迎使用传道AI之中国24史网站，使用本网站即表示您同意遵守以下服务条款</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📖", title: "服务内容", desc: "历史知识学习平台" },
              { icon: "⚠️", title: "行为规范", desc: "文明上网 遵纪守法" },
              { icon: "🔒", title: "知识产权", desc: "保护原创 尊重版权" },
              { icon: "📝", title: "条款更新", desc: "持续优化 及时公告" },
            ].map((item, index) => (
              <div key={index} className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-red-200 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 条款接受说明 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">重要说明</h3>
              <p className="text-gray-700 leading-relaxed">
                请您在使用本网站之前仔细阅读本服务条款的全部内容。通过访问、浏览或使用本网站，即表示您已充分理解并同意接受本服务条款的所有内容。如您不同意本条款的任何规定，请立即停止使用本网站。
              </p>
            </div>
          </div>
        </div>

        {/* 主体内容 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <div className="space-y-10">
            {/* 第一部分：服务说明 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-red-800">服务说明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  传道AI之中国24史网站（以下简称"本网站"）是由传道AI团队运营的历史文化教育平台，致力于为用户提供权威、生动、系统的中国历史知识学习服务。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "🏠", title: "网站性质", desc: "非营利性历史文化教育平台" },
                    { icon: "🎯", title: "服务宗旨", desc: "传承中华优秀传统文化" },
                    { icon: "👥", title: "目标用户", desc: "历史爱好者、学生、教育工作者" },
                    { icon: "🌐", title: "访问方式", desc: "通过浏览器访问，无需下载安装" },
                  ].map((item, index) => (
                    <div key={index} className="bg-red-50/30 rounded-xl p-4 border border-red-100 flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 第二部分：服务内容 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-red-800">服务内容</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>本网站提供以下核心服务内容：</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "🏛️", title: "朝代介绍", desc: "从夏商周到明清的历代朝代概览", color: "from-blue-500 to-blue-600" },
                    { icon: "📜", title: "历史事件", desc: "重大历史事件的详细解读", color: "from-green-500 to-green-600" },
                    { icon: "👤", title: "历史人物", desc: "各朝代重要历史人物生平", color: "from-purple-500 to-purple-600" },
                    { icon: "📚", title: "历史知识", desc: "丰富的历史知识和史料文献", color: "from-orange-500 to-orange-600" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                        <span className="text-2xl text-white">{item.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-amber-700">服务变更：</strong>我们保留随时修改、暂停或终止本网站服务的权利。如有重大变更，我们将提前通过网站公告的方式通知用户。
                  </p>
                </div>
              </div>
            </section>

            {/* 第三部分：用户行为规范 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-red-800">用户行为规范</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>为维护良好的网络环境，用户在使用本网站时应当遵守以下规范：</p>
                <div className="bg-green-50/50 rounded-xl p-5 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">✓</span> 用户应当
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "遵守中华人民共和国法律法规及社会公德",
                      "文明上网，理性发言，尊重他人权益",
                      "妥善保管个人账户信息（如有）",
                      "发现网站内容错误或有侵权内容时及时告知我们",
                      "在学术研究和学习中正确引用本网站内容",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50/50 rounded-xl p-5 border border-red-200">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">✕</span> 用户不得
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "利用本网站从事任何违反法律法规的活动",
                      "干扰、攻击、入侵或破坏本网站的正常运行",
                      "使用自动化工具大量抓取、复制本网站内容",
                      "传播虚假信息、有害内容或侵犯他人权益的内容",
                      "冒用他人身份或进行其他欺诈行为",
                      "未经授权对本网站进行反向工程或破解",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-red-600 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 第四部分：知识产权 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-red-800">知识产权保护</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站的所有原创内容（包括但不限于文字、图片、图表、页面设计、代码等）的知识产权均归传道AI团队所有，受中华人民共和国著作权法及相关国际公约保护。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">受保护内容</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 网站界面设计和排版布局</li>
                      <li>• 原创文字描述和内容编辑</li>
                      <li>• 图片处理和视觉设计</li>
                      <li>• 网站程序代码</li>
                    </ul>
                  </div>
                  <div className="bg-green-50/50 rounded-xl p-4 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">公共领域内容</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 历史事实和历史事件</li>
                      <li>• 历史人物基本信息</li>
                      <li>• 朝代年代等客观数据</li>
                      <li>• 公共史料原文引用</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  注：公共领域历史内容的独特编排和表述方式仍受著作权法保护。如需转载或引用，请参阅版权声明页面了解详情。
                </p>
              </div>
            </section>

            {/* 第五部分：隐私保护 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-red-800">隐私保护</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们高度重视用户的个人隐私保护。当您访问本网站时，我们可能会收集一些必要的信息以提供更好的服务体验。
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">信息收集与使用</h4>
                  <div className="space-y-3">
                    {[
                      { icon: "📊", title: "访问数据", desc: "浏览量、访问时长、页面点击等匿名统计数据" },
                      { icon: "🍪", title: "Cookie", desc: "用于改善用户体验的少量本地存储信息" },
                      { icon: "📝", title: "留言信息", desc: "如果您提交留言，仅用于回复和沟通" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <span className="font-medium text-gray-800">{item.title}</span>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  我们承诺不会出售、共享或泄露您的个人信息给任何第三方。更多详情请参阅我们的《隐私政策》。
                </p>
              </div>
            </section>

            {/* 第六部分：免责声明 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-red-800">免责声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站提供的历史信息基于公开史料和学术研究成果整理，仅供参考学习之用。我们努力确保内容准确性，但不对信息的绝对正确性作出保证。
                </p>
                <ul className="space-y-3">
                  {[
                    "本网站内容仅供参考，不构成任何学术、专业或法律意见",
                    "用户因使用本网站内容而产生的任何直接或间接损失，我们不承担责任",
                    "历史研究存在多种学术观点，本网站仅代表一家之言",
                    "我们不对因网站维护、升级或不可抗力导致的服务中断负责",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-lg">
                      <span className="text-amber-600 mt-0.5">⚠️</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 第七部分：外部链接 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-red-800">外部链接</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站可能包含指向第三方网站的外部链接，这些链接仅为方便用户获取更多参考资料而提供。
                </p>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <ul className="space-y-2 text-sm">
                    {[
                      "我们对第三方网站的内容、准确性或可用性不承担任何责任",
                      "第三方网站的隐私政策和数据处理方式可能与本网站不同",
                      "访问外部链接的风险由用户自行承担",
                      "我们不对第三方网站的任何行为或内容负责",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 第八部分：账户与安全 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-red-800">账户与安全</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站为公开访问平台，用户无需注册账户即可浏览大部分内容。如未来提供注册功能，将遵循以下原则：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "🔐", title: "账户安全", desc: "用户应妥善保管账户信息，定期更换密码" },
                    { icon: "🚫", title: "账户责任", desc: "账户下所有活动由账户持有人负责" },
                    { icon: "❌", title: "违规处理", desc: "违规账户将被禁用或删除" },
                    { icon: "🔒", title: "数据保护", desc: "采取措施保护用户数据安全" },
                  ].map((item, index) => (
                    <div key={index} className="bg-red-50/30 rounded-xl p-4 border border-red-100 flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 第九部分：条款修改 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  9
                </div>
                <h2 className="text-2xl font-bold text-red-800">条款修改</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们保留随时修改本服务条款的权利。条款的修改可能基于以下原因：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: "📜", title: "法规变化", desc: "适用法律法规的更新" },
                    { icon: "⚙️", title: "服务调整", desc: "网站功能的增加或变更" },
                    { icon: "🔒", title: "安全需要", desc: "提升安全性或保护用户权益" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-bold text-gray-800 mt-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-700">修改通知：</strong>修改后的服务条款将在本页发布，并更新"最后更新时间"。继续使用本网站即表示您接受修改后的条款。
                  </p>
                </div>
              </div>
            </section>

            {/* 第十部分：适用法律 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  10
                </div>
                <h2 className="text-2xl font-bold text-red-800">适用法律与争议解决</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本服务条款的解释、执行和争议解决均适用中华人民共和国法律。
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">争议解决流程</h4>
                      <ol className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">1.</span>
                          <span>优先通过友好协商解决争议</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">2.</span>
                          <span>如协商不成，可向消费者协会投诉</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">3.</span>
                          <span>最终可向被告住所地人民法院提起诉讼</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">联系我们</h2>
            <p className="text-red-100">如对本服务条款有任何疑问或建议，欢迎随时联系我们</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📧", title: "电子邮箱", value: "support@zorezoro.com" },
              { icon: "📍", title: "公司地址", value: "深圳市龙华区龙华大道130栋" },
              { icon: "⏰", title: "响应时间", value: "1-2个工作日内回复" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-red-200 text-sm">{item.title}</p>
                <p className="font-medium mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 快速链接 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">相关法律文件</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "隐私政策", href: "/privacy", icon: "🔒" },
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

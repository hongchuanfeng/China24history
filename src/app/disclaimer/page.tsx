export default function DisclaimerPage() {
  const lastUpdate = "2026年5月15日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">免责声明</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-500">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 重要提示横幅 */}
        <div className="bg-gradient-to-r from-amber-100 to-red-100 border-2 border-amber-300 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">请您仔细阅读</h3>
              <p className="text-gray-700 leading-relaxed">
                在使用本网站之前，请您务必仔细阅读本免责声明的全部内容。使用本网站即表示您已充分理解并同意接受本免责声明的约束。如您不同意本声明的任何内容，请立即停止使用本网站。
              </p>
            </div>
          </div>
        </div>

        {/* 网站信息卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "网站名称", value: "中国24史", icon: "🌐" },
            { label: "运营主体", value: "传道AI", icon: "🏢" },
            { label: "网站域名", value: "china.zorezoro.com", icon: "🔗" },
            { label: "服务性质", value: "历史文化教育", icon: "📚" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 border border-red-100 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-bold text-gray-800 text-sm mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* 主体内容 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <div className="space-y-10">
            {/* 第一部分：内容准确性 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-red-800">内容准确性声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  传道AI之中国24史网站（以下简称"本网站"）提供的历史信息基于公开史料、学术研究成果和权威史料整理而成。我们努力确保内容的准确性和客观性，但历史研究本身存在多种学术观点和解释，不同时期、不同学者的研究成果可能存在差异。
                </p>
                <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">重要提示</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "本网站内容仅供参考和学习之用，不构成任何学术或专业意见",
                          "历史事件的解读可能因史料来源不同而存在差异",
                          "对于因使用本网站内容而产生的任何直接或间接后果，本网站不承担法律责任",
                          "我们建议用户在学术研究和正式场合参考更多权威史料",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-amber-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                  <strong>特别说明：</strong>本网站所引用的历史年代、事件时间、人物生卒年等数据均综合多个史料来源，如有疑问，建议查阅各朝代正史原文进行核实。
                </p>
              </div>
            </section>

            {/* 第二部分：观点中立 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-red-800">观点中立声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站致力于以客观、中立的态度呈现历史事实。我们在内容编排上尽量避免主观价值判断，仅对历史事件和人物进行事实性陈述。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "📖", title: "事实陈述", desc: "基于史料记载进行客观描述" },
                    { icon: "⚖️", title: "中立立场", desc: "避免带有政治色彩的评价" },
                    { icon: "📚", title: "学术参考", desc: "参考多方学术观点" },
                    { icon: "🤝", title: "开放交流", desc: "欢迎正当学术讨论" },
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
                <p className="text-sm text-gray-600 italic">
                  如有不同学术观点，欢迎通过正规学术渠道进行交流讨论，本网站不对学术争议作出裁判。
                </p>
              </div>
            </section>

            {/* 第三部分：第三方内容 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-red-800">第三方内容声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站可能包含指向第三方网站的外部链接，或引用第三方发布的内容、图片、数据等资源。我们对第三方内容进行合理审查，但无法对所有外部内容的准确性、合法性或完整性进行持续监控。
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">第三方内容类型</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "🔗", title: "外部链接", desc: "指向其他网站的参考资料链接" },
                      { icon: "📷", title: "图片素材", desc: "部分配图可能来源于第三方图库" },
                      { icon: "📊", title: "引用数据", desc: "引用的统计数据和学术资料" },
                      { icon: "📄", title: "参考文献", desc: "文末列出的参考来源" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span className="font-medium text-gray-800">{item.title}</span>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50/50 rounded-xl p-4 border border-red-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-red-700">风险提示：</strong>这些外部内容和链接仅为方便用户而提供，本网站对其内容的准确性、合法性或可用性不承担任何责任。访问第三方网站的风险由用户自行承担。
                  </p>
                </div>
              </div>
            </section>

            {/* 第四部分：网站可用性 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-red-800">网站可用性声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我们会尽力确保本网站的稳定运行、持续可用和安全性。但由于网络基础设施、服务器维护、程序升级、网络攻击等不可预见的因素，我们无法保证网站服务永不中断。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: "🌐", title: "网络因素", desc: "网络延迟、断线、运营商故障等" },
                    { icon: "🖥️", title: "服务器因素", desc: "硬件故障、机房维护、DDoS攻击等" },
                    { icon: "🔧", title: "系统维护", desc: "计划性维护、更新升级等" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                      <span className="text-3xl">{item.icon}</span>
                      <h4 className="font-bold text-gray-800 mt-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <strong>特别说明：</strong>由于上述不可抗力因素导致的网站访问中断、页面显示异常、数据更新延迟等问题，本网站不承担责任。我们会尽快恢复服务并更新内容。
                </p>
              </div>
            </section>

            {/* 第五部分：用户使用责任 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-red-800">用户使用责任</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  用户在使用本网站时，应当遵守中华人民共和国相关法律法规及本网站的各项使用规范。您的使用行为及由此产生的后果由您自行负责。
                </p>
                <div className="bg-red-50/50 rounded-xl p-5 border border-red-200">
                  <h4 className="font-bold text-gray-800 mb-3">用户应当</h4>
                  <ul className="space-y-2">
                    {[
                      "遵守当地法律法规，文明上网，理性发言",
                      "尊重他人知识产权，不得非法复制传播受版权保护的内容",
                      "妥善保管个人账户信息（如有），防止账户被盗用",
                      "在使用过程中发现任何安全漏洞及时通知我们",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">用户不得</h4>
                  <ul className="space-y-2">
                    {[
                      "利用本网站从事任何违法活动或传播违法信息",
                      "攻击、入侵、破坏本网站的正常运行",
                      "使用自动化工具大量抓取本网站内容",
                      "冒用他人身份或进行其他欺诈行为",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-red-600 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  对于用户因使用本网站内容而从事的任何违法行为，本网站不承担连带责任。违法者须依法承担相应法律责任。
                </p>
              </div>
            </section>

            {/* 第六部分：知识产权免责 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-red-800">知识产权免责</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站尊重知识产权，致力于保护原创内容及第三方合法权益。同时，本网站引用的历史内容属于公共领域知识。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">原创内容保护</h4>
                    <p className="text-sm text-gray-700">
                      本网站原创内容受著作权法保护，未经授权不得复制、转载或用于商业目的。
                    </p>
                  </div>
                  <div className="bg-green-50/50 rounded-xl p-4 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">公共领域历史</h4>
                    <p className="text-sm text-gray-700">
                      基于历史事实的内容属于公共领域，任何人可自由使用，但需注明来源。
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  如您认为本网站内容侵犯了您的知识产权，请参照我们的版权声明页面的侵权投诉流程处理。
                </p>
              </div>
            </section>

            {/* 第七部分：信息更新 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-red-800">信息更新声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  历史研究是一个不断发展的领域，新的考古发现和学术研究成果可能导致我们对某些历史内容的修订。我们将尽最大努力及时更新网站内容，确保信息的时效性和准确性。
                </p>
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">内容更新范围</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 修正历史年代、人物生卒年等 factual 信息</li>
                        <li>• 根据新考古发现补充或修正历史叙述</li>
                        <li>• 参考最新学术研究成果优化内容表述</li>
                        <li>• 完善网站功能和改进用户体验</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第八部分：管辖法律 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-red-800">管辖法律与争议解决</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站及本免责声明的订立、执行和解释均适用中华人民共和国法律。如您与本网站的运营方发生任何争议，双方应首先通过友好协商解决；协商不成的，任何一方均可向被告住所地有管辖权的人民法院提起诉讼。
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">法律适用</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 适用法律：中华人民共和国法律</li>
                        <li>• 管辖法院：被告住所地有管辖权的人民法院</li>
                        <li>• 争议解决：优先友好协商，协商不成依法诉讼</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 免责声明总结 */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">我们的承诺</h2>
            <p className="text-red-100">尽管有免责声明，我们仍将尽最大努力为您提供优质服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🎯", title: "内容准确", desc: "基于权威史料，力求内容准确可靠" },
              { icon: "🔄", title: "持续更新", desc: "根据学术研究进展不断完善内容" },
              { icon: "🛡️", title: "保护权益", desc: "尊重知识产权，保护用户合法权益" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-red-100 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-red-800 mb-2">联系我们</h2>
            <p className="text-gray-600">如对本免责声明有任何疑问，或发现网站内容存在错误，欢迎联系我们</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📧", title: "电子邮箱", value: "support@zorezoro.com" },
              { icon: "📍", title: "公司地址", value: "深圳市龙华区龙华大道130栋" },
              { icon: "⏰", title: "工作时间", value: "周一至周五 9:00-18:00" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-red-50/50 rounded-xl border border-red-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="font-medium text-gray-800 mt-1">{item.value}</p>
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
              { name: "服务条款", href: "/terms", icon: "📜" },
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

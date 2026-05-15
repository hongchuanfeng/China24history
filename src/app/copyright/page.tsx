export default function CopyrightPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">版权声明</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-4" />
          <p className="text-gray-500">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 重要提示 */}
        <div className="bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">温馨提示</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                我们高度重视知识产权保护。本网站内容仅供学习参考，如需转载或引用，请遵守相关法律法规并提前获得授权。感谢您的理解与支持。
              </p>
            </div>
          </div>
        </div>

        {/* 网站信息卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "网站名称", value: "中国24史", icon: "🌐" },
            { label: "运营主体", value: "传道AI", icon: "🏢" },
            { label: "上线时间", value: "2025年", icon: "📅" },
            { label: "ICP备案", value: "粤ICP备18041392号-7", icon: "📋" },
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
            {/* 第一部分：网站内容版权 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-red-800">网站内容版权</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  传道AI之中国24史网站（以下简称"本网站"）的所有原创内容，包括但不限于文字描述、图片素材、图表设计、排版布局、页面结构、交互功能、程序代码等，其知识产权均归传道AI团队所有，受中华人民共和国著作权法及相关国际公约保护。
                </p>
                <div className="bg-red-50/50 rounded-xl p-5 border border-red-100">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    未经授权，禁止以下行为
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "复制、转载、传播本网站的任何原创内容",
                      "修改、改编或以任何方式使用本网站内容用于商业目的",
                      "删除、遮盖或修改网页中的版权声明和链接",
                      "以任何形式盗用、剽窃本网站的设计理念和创意",
                      "未经许可将本网站内容用于任何商业或盈利活动",
                      "对本网站内容进行反向工程、反编译或破解",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 第二部分：历史内容说明 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-red-800">历史内容说明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站涉及的中国历史内容（如朝代介绍、历史人物生平、历史事件概述等）属于公共领域知识。这些基于历史事实的基础信息不受著作权法保护，任何人都可以自由使用。
                </p>
                <div className="bg-green-50/50 rounded-xl p-5 border border-green-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    在以下情况下，您可以合理使用
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { title: "个人学习", desc: "用于个人学习、研究、欣赏等非商业性目的" },
                      { title: "合理引用", desc: "在注明来源的前提下进行合理引用" },
                      { title: "教育用途", desc: "用于课堂教学、学术研究等教育目的" },
                      { title: "评论分析", desc: "用于新闻报道、评论、分析等正当用途" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium text-gray-800">{item.title}</span>
                          <span className="text-gray-600 text-sm"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-200">
                  <h4 className="font-bold text-gray-800 mb-2">引用来源标注</h4>
                  <p className="text-sm text-gray-600">
                    如需引用本网站内容，请注明来源：
                    <br />
                    <code className="bg-gray-100 px-2 py-1 rounded text-red-600 mt-2 inline-block">
                      来源：传道AI之中国24史（china.zorezoro.com）
                    </code>
                  </p>
                </div>
                <p className="text-sm text-gray-500 italic">
                  注意：本网站对历史内容的独特整理方式、文字表述、数据编排、图片处理等具有独创性的创作部分，受著作权法保护。
                </p>
              </div>
            </section>

            {/* 第三部分：第三方内容 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-red-800">第三方内容</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站可能包含指向第三方网站的链接或引用第三方创作的内容（如参考书籍、学术资料、公开史料等）。这些第三方内容的版权归其原始权利人所有。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "📚", title: "参考资料", desc: "《二十四史》、《资治通鉴》等历史典籍" },
                    { icon: "🔗", title: "外部链接", desc: "指向其他网站的参考资料链接" },
                    { icon: "🖼️", title: "图片素材", desc: "部分配图可能来源于免费图库或授权素材" },
                    { icon: "📄", title: "引用文献", desc: "学术论文、研究报告等参考资料" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <strong className="text-blue-700">知识产权声明：</strong>我们尊重第三方知识产权，如认为本网站的内容侵犯了您的合法权益，请及时联系我们，我们将依法及时处理。
                </p>
              </div>
            </section>

            {/* 第四部分：商标声明 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-red-800">商标声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站使用的"传道AI"、"中国24史"及相关图形标识为传道AI团队注册商标或受保护的商号。未经授权，任何人不得使用、复制或仿冒。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { mark: "®", name: "传道AI", usage: "公司名称" },
                    { mark: "®", name: "中国24史", usage: "网站名称" },
                    { mark: "™", name: "china.zorezoro.com", usage: "网站域名" },
                  ].map((item, index) => (
                    <div key={index} className="bg-red-50/50 rounded-xl p-4 border border-red-100 text-center">
                      <span className="text-xs text-red-600 font-bold">{item.mark}</span>
                      <p className="font-bold text-gray-800 mt-1">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 第五部分：软件与技术支持 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-red-800">软件与技术支持</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本网站由传道AI团队独立开发构建，采用以下技术框架：
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "Next.js", type: "开发框架" },
                    { name: "TypeScript", type: "编程语言" },
                    { name: "Tailwind CSS", type: "样式框架" },
                    { name: "Vercel", type: "托管平台" },
                  ].map((tech, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                      <p className="font-medium text-gray-800 text-sm">{tech.name}</p>
                      <p className="text-gray-500 text-xs">{tech.type}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  本网站的技术实现方案、代码架构、数据库设计等均受知识产权保护。严禁对本网站进行反向工程、破解或未经授权的技术分析。
                </p>
              </div>
            </section>

            {/* 第六部分：侵权投诉 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-red-800">侵权投诉</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  如果您认为本网站的任何内容侵犯了您的著作权、商标权或其他合法权益，请向我们提供以下信息，我们将依法及时处理：
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">需要提供的信息</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { num: "01", title: "身份证明", desc: "权利人的身份证明文件（身份证、营业执照等）" },
                      { num: "02", title: "联系方式", desc: "有效的联系电话和电子邮件地址" },
                      { num: "03", title: "侵权证据", desc: "被侵权内容的详细信息及其在本网站的位置" },
                      { num: "04", title: "权属证明", desc: "证明您拥有该内容著作权的相关文件" },
                      { num: "05", title: "具体链接", desc: "侵权内容在本网站的具体URL地址" },
                      { num: "06", title: "签名盖章", desc: "权利人或代理人的签字/电子签章" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.num}
                        </span>
                        <div>
                          <span className="font-medium text-gray-800">{item.title}</span>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-4">版权代理人联系方式</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>support@zorezoro.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>深圳市龙华区龙华大道130栋</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第七部分：免责条款 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-red-800">免责声明</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <ul className="space-y-3">
                  {[
                    "本网站部分历史内容参考自公开史料，我们力求内容准确但不对所有细节的完全准确性作出保证",
                    "对于因使用本网站内容而产生的任何直接或间接损失，我们不承担任何责任",
                    "本网站可能包含外部链接，但不对第三方网站的内容和可用性负责",
                    "历史人物和事件的解读可能存在学术争议，本网站仅代表一家之言",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                      <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        !
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 第八部分：更新与修订 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-red-800">更新与修订</h2>
              </div>
              <div className="pl-13 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本版权声明可能根据法律法规的变化或业务发展的需要不时更新。更新后的版本将在本页发布，并在显著位置标注最新更新日期。
                </p>
                <div className="bg-gradient-to-br from-red-50/50 to-amber-50/50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">当前版本</span>
                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">v2026.05</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    继续使用本网站即表示您接受当前版本的版权声明。我们建议您定期查阅以了解最新内容。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">联系我们</h2>
            <p className="text-red-100">如有版权相关问题，欢迎随时联系我们</p>
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
              { name: "服务条款", href: "/terms", icon: "📜" },
              { name: "免责声明", href: "/disclaimer", icon: "⚠️" },
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

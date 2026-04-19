export default function DisclaimerPage() {
  const lastUpdate = "2025年1月1日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">免责声明</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
          <p className="text-gray-500 mt-4">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">1. 内容准确性</h2>
              <p>
                传道AI之中国24史网站（以下简称"本网站"）提供的历史信息基于公开史料和学术研究成果整理而成。我们努力确保内容的准确性和客观性，但历史研究本身存在多种学术观点和解释。
              </p>
              <p className="mt-2">
                <strong>重要提示：</strong>本网站内容仅供参考和学习之用，不构成任何学术或专业意见。对于因使用本网站内容而产生的任何直接或间接后果，本网站不承担法律责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">2. 观点中立</h2>
              <p>
                本网站致力于以客观、中立的态度呈现历史事实。我们在内容编排上尽量避免价值判断，仅对历史事件和人物进行事实性陈述。如有不同学术观点，欢迎通过正规学术渠道进行交流讨论。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">3. 第三方内容</h2>
              <p>
                本网站可能包含指向第三方网站的链接，或引用第三方发布的内容。这些外部内容和链接仅为方便用户而提供，本网站对其内容的准确性、合法性或可用性不承担任何责任。访问第三方网站的风险由用户自行承担。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">4. 网站可用性</h2>
              <p>
                我们会尽力确保本网站的稳定运行，但无法保证服务永不中断。由于网络、硬件、软件等不可抗力因素导致的网站访问中断、数据丢失等问题，本网站不承担责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">5. 用户使用责任</h2>
              <p>
                用户在使用本网站时，应遵守当地法律法规，文明上网。对于用户因使用本网站内容而从事的任何违法行为，本网站不承担连带责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">6. 联系我们</h2>
              <p>
                如对本免责声明有任何疑问，或发现网站内容存在错误，请通过以下方式联系我们：
              </p>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p><strong>邮箱：</strong>support@zorezoro.com</p>
                <p><strong>地址：</strong>深圳市龙华区龙华大道130栋</p>
              </div>
            </section>
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

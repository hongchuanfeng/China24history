export default function PrivacyPage() {
  const lastUpdate = "2025年1月1日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">隐私政策</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
          <p className="text-gray-500 mt-4">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">1. 信息收集</h2>
              <p>
                传道AI之中国24史（以下简称"本网站"）尊重并保护所有用户的个人隐私权。本隐私政策将帮助您了解我们如何收集、使用和保护您的信息。
              </p>
              <p className="mt-2">
                我们承诺：不会在未经您同意的情况下收集任何个人信息。本网站仅自动收集非个人可识别的访问统计数据，用于改善网站服务质量。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">2. 信息使用</h2>
              <p>我们可能使用收集的信息用于以下目的：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>改善网站内容和用户体验</li>
                <li>分析网站流量和使用模式</li>
                <li>确保网站技术安全和正常运行</li>
                <li>遵守法律法规要求</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">3. Cookie 使用</h2>
              <p>
                本网站可能使用 Cookie 来提升您的浏览体验。Cookie 是存储在您设备上的小型文本文件，用于记录您的偏好设置。您可以通过浏览器设置拒绝或删除 Cookie，但这可能会影响某些网站功能的正常使用。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">4. 第三方服务</h2>
              <p>
                本网站可能使用第三方服务（如 Google Analytics）来分析网站访问情况。这些第三方服务有各自的隐私政策，我们建议您仔细阅读。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">5. 信息保护</h2>
              <p>
                我们采取适当的安全措施来保护您的个人信息，防止未经授权的访问、使用或泄露。然而，请注意互联网传输并非绝对安全，我们无法保证信息的绝对安全。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">6. 未成年人保护</h2>
              <p>
                本网站内容适合所有年龄段用户。我们不会故意收集未成年人的个人信息。如果您是未成年人，请在监护人的陪同下使用本网站。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">7. 隐私政策更新</h2>
              <p>
                我们可能不时更新本隐私政策。更新后的政策将在网站上发布，并在显著位置标注更新时间。继续使用本网站即表示您接受更新后的隐私政策。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">8. 联系我们</h2>
              <p>
                如对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
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

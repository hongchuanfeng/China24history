export default function CopyrightPage() {
  const lastUpdate = "2025年1月1日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">版权声明</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
          <p className="text-gray-500 mt-4">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">1. 网站内容版权</h2>
              <p>
                传道AI之中国24史网站（以下简称"本网站"）的所有原创内容，包括但不限于文字、图片、图表、排版设计、页面结构等，其知识产权均归传道AI所有。
              </p>
              <p className="mt-2">
                <strong>未经许可，任何人不得：</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>复制、转载、传播本网站的任何内容</li>
                <li>修改、改编或以任何方式使用本网站内容用于商业目的</li>
                <li>删除或修改内容的版权声明</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">2. 历史内容说明</h2>
              <p>
                本网站涉及的中国历史内容（如朝代介绍、历史人物、历史事件等）属于公共领域知识，这些基础事实信息不受著作权法保护。然而，本网站对这些内容的整理、编排、表述和呈现方式凝聚了我们的创造性劳动，受著作权法保护。
              </p>
              <p className="mt-2">
                <strong>允许的行为：</strong>个人学习、研究、欣赏目的的非商业性引用，需注明"来源：传道AI之中国24史（china.zorezoro.com）"。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">3. 第三方内容</h2>
              <p>
                本网站可能包含指向第三方网站或内容的链接。这些第三方内容的版权归其原始权利人所有。我们尊重第三方知识产权，如认为本网站链接的内容侵犯了您的合法权益，请及时联系我们，我们将依法处理。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">4. 侵权投诉</h2>
              <p>
                如果您认为本网站的任何内容侵犯了您的著作权或其他合法权益，请向我们的版权代理人提供以下信息：
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>权利人的身份证明及联系方式</li>
                <li>被侵权内容的详细信息及原始位置</li>
                <li>侵权内容的当前位置</li>
                <li>权利证明文件</li>
                <li>权利人的签字或���章</li>
              </ul>
              <p className="mt-2">
                版权代理人联系方式：
              </p>
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p><strong>邮箱：</strong>support@zorezoro.com</p>
                <p><strong>地址：</strong>深圳市龙华区龙华大道130栋</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">5. 版权更新</h2>
              <p>
                本版权声明可能不时更新。更新后的版本将在网站上发布，并在显著位置标注更新时间。继续使用本网站即表示您接受更新后的版权声明。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">6. 联系我们</h2>
              <p>
                如对本版权声明有任何疑问，请通过以下方式联系我们：
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

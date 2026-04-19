export default function TermsPage() {
  const lastUpdate = "2025年1月1日";

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">服务条款</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
          <p className="text-gray-500 mt-4">最后更新时间：{lastUpdate}</p>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">1. 服务说明</h2>
              <p>
                欢迎使用传道AI之中国24史网站（以下简称"本网站"）。通过访问和使用本网站，即表示您同意遵守本服务条款的所有规定。如果您不同意这些条款，请勿使用本网站。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">2. 服务内容</h2>
              <p>本网站提供以下服务：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>中国历代朝代的历史介绍</li>
                <li>重大历史事件的展示</li>
                <li>历史人物生平的简要介绍</li>
                <li>历史知识的学习与传播</li>
              </ul>
              <p className="mt-3">
                我们保留随时修改或中断服务而不需通知用户的权利。我们不对服务的修改或中断承担任何责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">3. 用户行为规范</h2>
              <p>使用本网站时，您同意：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>不利用本网站从事任何违法活动</li>
                <li>不干扰或破坏本网站的正常运行</li>
                <li>不尝试获取未授权的访问权限</li>
                <li>尊重其他用户的使用权利</li>
                <li>不传播虚假、有害或令人不适的内容</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">4. 知识产权</h2>
              <p>
                本网站的内容（包括但不限于文字、图片、布局设计等）的知识产权归传道AI所有或已获得合法授权。未经许可，不得复制、修改、传播或用于商业目的。
              </p>
              <p className="mt-2">
                历史上的人物、事件等属于公共领域内容，但其特定的编排和表达方式受著作权法保护。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">5. 免责声明</h2>
              <p>
                本网站提供的历史信息仅供参考和学习之用。虽然我们努力确保内容的准确性，但历史研究存在多种观点和解读，我们无法保证所有内容的绝对准确性和完整性。
              </p>
              <p className="mt-2">
                用户因使用本网站内容而导致的任何直接或间接损失，本网站不承担责任。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">6. 外部链接</h2>
              <p>
                本网站可能包含指向第三方网站的链接。这些链接仅为方便用户而提供，我们对第三方网站的内容、隐私政策或 practices 不承担任何责任。访问第三方网站的风险由用户自行承担。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">7. 条款修改</h2>
              <p>
                我们保留随时修改本服务条款的权利。修改后的条款将在网站上公布，并在显著位置标注更新时间。继续使用本网站即表示您接受修改后的条款。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">8. 适用法律与争议解决</h2>
              <p>
                本服务条款的解释、效力及争议的解决均适用中华人民共和国法律。如发生争议，双方应友好协商解决；协商不成的，任何一方均可向本网站运营方所在地人民法院提起诉讼。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-800 mb-4">9. 联系我们</h2>
              <p>如对本服务条款有任何疑问，请联系我们：</p>
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

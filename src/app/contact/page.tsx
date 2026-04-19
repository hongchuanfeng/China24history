export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">联系我们</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto" />
        </div>

        {/* 联系信息卡片 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-red-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：联系信息 */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">电子邮箱</h3>
                    <p className="text-gray-600">support@zorezoro.com</p>
                    <p className="text-sm text-gray-500 mt-1">我们会在1-2个工作日内回复</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">公司地址</h3>
                    <p className="text-gray-600">深圳市龙华区龙华大道130栋</p>
                    <p className="text-sm text-gray-500 mt-1">欢迎预约来访</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">工作时间</h3>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                    <p className="text-sm text-gray-500 mt-1">周末及节假日休息</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：网站信息 */}
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-6">关于网站</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-gray-800">网站名称：</strong>中国24史
                </p>
                <p>
                  <strong className="text-gray-800">运营主体：</strong>传道AI
                </p>
                <p>
                  <strong className="text-gray-800">网站域名：</strong>
                  <a href="https://china.zorezoro.com" className="text-red-600 hover:underline ml-1">
                    china.zorezoro.com
                  </a>
                </p>
                <p>
                  <strong className="text-gray-800">备案号：</strong>粤ICP备18041392号-7
                </p>
                <div className="pt-4 border-t border-red-100">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    本网站旨在传播中华历史文化，所有内容仅供学习参考。��们欢迎社会各界人士提出宝贵意见，共同促进中华文化的传承与发展。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 留言提示 */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">如需合作或业务咨询，请发送邮件至上方邮箱</p>
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
